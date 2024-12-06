import { notify } from "@/services/UserService";
import { SecureStore } from "@/imports/Storage";
import * as FileSystem from "expo-file-system";

export const server = "https://arcfit.xyz";

type APISpec<T = {}> = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: { [key: string]: string };
  needsAuth: boolean;
} & ({
  contentType: "application/json";
} | {
  contentType: "multipart/form-data";
  fieldName: string;
});
export namespace API {
  export const api = `${server}/api`;
  export namespace Account {
    export const login: APISpec<{ username: string; password: string }> = {
      url: `${api}/accounts/login`,
      method: "POST",
      contentType: "application/json",
      needsAuth: false,
    };

    export const register: APISpec<{
      username: string,
      password: string,
      first_name?: string,
      last_name?: string,
      email?: string,
      age?: number,
      gender?: 0 | 1 | 2,
      phone_number?: string,
    }> = {
      url: `${api}/accounts/register`,
      method: "POST",
      contentType: "application/json",
      needsAuth: false,
    };

    export const logout: APISpec = {
      url: `${api}/accounts/logout`,
      method: "POST",
      contentType: "application/json",
      needsAuth: true,
    };


    export const update: APISpec<{
      username?: string,
      password?: string,
      first_name?: string,
      last_name?: string,
      email?: string,
      age?: number,
      gender?: 0 | 1 | 2,
      phone_number?: string,
    }> = {
      url: `${api}/accounts/update`,
      method: "POST",
      contentType: "application/json",
      needsAuth: true,
    };

    export const uploadAvatar: APISpec<string> = {
      url: `${api}/accounts/upload_avatar`,
      method: "POST",
      contentType: "multipart/form-data",
      needsAuth: true,
      fieldName: "image",
    };
  }

  interface RequestResult {
    status: number;
    response: any;
  };

  async function makeJsonRequest(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    headers: { [key: string]: string },
    data: object
  ): Promise<RequestResult> {
    headers["Content-Type"] = "application/json";
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(data),
    });
    return {
      status: response.status,
      response: await response.json(),
    };
  }

  async function makeFormDataRequest(
    url: string,
    method: "POST" | "PUT",
    headers: { [key: string]: string },
    localUri: string,
    fieldName?: string
  ): Promise<RequestResult> {
    const response = await FileSystem.uploadAsync(url, localUri, {
      ...(fieldName ? { fieldName } : {}),
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      httpMethod: method,
      headers,
    });
    return {
      status: response.status,
      response: JSON.parse(response.body),
    };
  }

  type deduceArgs<T extends APISpec> = T extends APISpec<infer U> ? U : never;

  export async function call<T extends APISpec>(api: T, args: deduceArgs<T>) {
    const headers = {
      ...api.headers,
    };

    if (api.needsAuth) {
      const token = await SecureStore.getItemAsync("accessToken");
      if (token) {
        headers["Authorization"] = `Token ${token}`;
      } else {
        throw new Error("Not logged in");
      }
    }

    console.log(`Calling ${api.url}: method=${api.method}, headers=${JSON.stringify(headers)}, args=${JSON.stringify(args)}`);

    const dispatchRequest = async () => {
      if (api.contentType === "application/json") {
        return await makeJsonRequest(api.url, api.method, headers, args as object);
      } else if (api.contentType === "multipart/form-data") {
        if (api.method !== "POST" && api.method !== "PUT") {
          throw new Error(`${api.method} method not supported for multipart/form-data`);
        }
        return await makeFormDataRequest(api.url, api.method, headers, args as string, api.fieldName);
      }
      throw new Error(`Unsupported content type`);
    };

    try {
      const result = await dispatchRequest();
      if (200 <= result.status && result.status < 300) {
        console.log(`API call successful: ${JSON.stringify(result.response)}`);
        return result.response;
      } else if (result.status === 401) {
        notify("userLoginExpired");
        throw new Error("Login expired");
      } else {
        throw new Error(result.response);
      }
    } catch (error) {
      console.error(`API call failed: ${JSON.stringify(error)}`);
      if (error instanceof TypeError) {
        // Indicates a network error
        throw new Error("Network error");
      }
      throw error;
    }
  }
}