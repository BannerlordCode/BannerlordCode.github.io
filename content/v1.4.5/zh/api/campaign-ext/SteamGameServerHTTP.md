---
title: "SteamGameServerHTTP"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamGameServerHTTP`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServerHTTP

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServerHTTP`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServerHTTP.cs`

## 概述

`SteamGameServerHTTP` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateHTTPRequest
`public static HTTPRequestHandle CreateHTTPRequest(EHTTPMethod eHTTPRequestMethod, string pchAbsoluteURL)`

**用途 / Purpose:** 创建一个 `h t t p request` 实例或对象。

### SetHTTPRequestContextValue
`public static bool SetHTTPRequestContextValue(HTTPRequestHandle hRequest, ulong ulContextValue)`

**用途 / Purpose:** 设置 `h t t p request context value` 的值或状态。

### SetHTTPRequestNetworkActivityTimeout
`public static bool SetHTTPRequestNetworkActivityTimeout(HTTPRequestHandle hRequest, uint unTimeoutSeconds)`

**用途 / Purpose:** 设置 `h t t p request network activity timeout` 的值或状态。

### SetHTTPRequestHeaderValue
`public static bool SetHTTPRequestHeaderValue(HTTPRequestHandle hRequest, string pchHeaderName, string pchHeaderValue)`

**用途 / Purpose:** 设置 `h t t p request header value` 的值或状态。

### SetHTTPRequestGetOrPostParameter
`public static bool SetHTTPRequestGetOrPostParameter(HTTPRequestHandle hRequest, string pchParamName, string pchParamValue)`

**用途 / Purpose:** 设置 `h t t p request get or post parameter` 的值或状态。

### SendHTTPRequest
`public static bool SendHTTPRequest(HTTPRequestHandle hRequest, out SteamAPICall_t pCallHandle)`

**用途 / Purpose:** 处理 `send h t t p request` 相关逻辑。

### SendHTTPRequestAndStreamResponse
`public static bool SendHTTPRequestAndStreamResponse(HTTPRequestHandle hRequest, out SteamAPICall_t pCallHandle)`

**用途 / Purpose:** 处理 `send h t t p request and stream response` 相关逻辑。

### DeferHTTPRequest
`public static bool DeferHTTPRequest(HTTPRequestHandle hRequest)`

**用途 / Purpose:** 处理 `defer h t t p request` 相关逻辑。

### PrioritizeHTTPRequest
`public static bool PrioritizeHTTPRequest(HTTPRequestHandle hRequest)`

**用途 / Purpose:** 处理 `prioritize h t t p request` 相关逻辑。

### GetHTTPResponseHeaderSize
`public static bool GetHTTPResponseHeaderSize(HTTPRequestHandle hRequest, string pchHeaderName, out uint unResponseHeaderSize)`

**用途 / Purpose:** 获取 `h t t p response header size` 的当前值。

### GetHTTPResponseHeaderValue
`public static bool GetHTTPResponseHeaderValue(HTTPRequestHandle hRequest, string pchHeaderName, byte pHeaderValueBuffer, uint unBufferSize)`

**用途 / Purpose:** 获取 `h t t p response header value` 的当前值。

### GetHTTPResponseBodySize
`public static bool GetHTTPResponseBodySize(HTTPRequestHandle hRequest, out uint unBodySize)`

**用途 / Purpose:** 获取 `h t t p response body size` 的当前值。

### GetHTTPResponseBodyData
`public static bool GetHTTPResponseBodyData(HTTPRequestHandle hRequest, byte pBodyDataBuffer, uint unBufferSize)`

**用途 / Purpose:** 获取 `h t t p response body data` 的当前值。

### GetHTTPStreamingResponseBodyData
`public static bool GetHTTPStreamingResponseBodyData(HTTPRequestHandle hRequest, uint cOffset, byte pBodyDataBuffer, uint unBufferSize)`

**用途 / Purpose:** 获取 `h t t p streaming response body data` 的当前值。

### ReleaseHTTPRequest
`public static bool ReleaseHTTPRequest(HTTPRequestHandle hRequest)`

**用途 / Purpose:** 处理 `release h t t p request` 相关逻辑。

### GetHTTPDownloadProgressPct
`public static bool GetHTTPDownloadProgressPct(HTTPRequestHandle hRequest, out float pflPercentOut)`

**用途 / Purpose:** 获取 `h t t p download progress pct` 的当前值。

### SetHTTPRequestRawPostBody
`public static bool SetHTTPRequestRawPostBody(HTTPRequestHandle hRequest, string pchContentType, byte pubBody, uint unBodyLen)`

**用途 / Purpose:** 设置 `h t t p request raw post body` 的值或状态。

### CreateCookieContainer
`public static HTTPCookieContainerHandle CreateCookieContainer(bool bAllowResponsesToModify)`

**用途 / Purpose:** 创建一个 `cookie container` 实例或对象。

### ReleaseCookieContainer
`public static bool ReleaseCookieContainer(HTTPCookieContainerHandle hCookieContainer)`

**用途 / Purpose:** 处理 `release cookie container` 相关逻辑。

### SetCookie
`public static bool SetCookie(HTTPCookieContainerHandle hCookieContainer, string pchHost, string pchUrl, string pchCookie)`

**用途 / Purpose:** 设置 `cookie` 的值或状态。

### SetHTTPRequestCookieContainer
`public static bool SetHTTPRequestCookieContainer(HTTPRequestHandle hRequest, HTTPCookieContainerHandle hCookieContainer)`

**用途 / Purpose:** 设置 `h t t p request cookie container` 的值或状态。

### SetHTTPRequestUserAgentInfo
`public static bool SetHTTPRequestUserAgentInfo(HTTPRequestHandle hRequest, string pchUserAgentInfo)`

**用途 / Purpose:** 设置 `h t t p request user agent info` 的值或状态。

### SetHTTPRequestRequiresVerifiedCertificate
`public static bool SetHTTPRequestRequiresVerifiedCertificate(HTTPRequestHandle hRequest, bool bRequireVerifiedCertificate)`

**用途 / Purpose:** 设置 `h t t p request requires verified certificate` 的值或状态。

### SetHTTPRequestAbsoluteTimeoutMS
`public static bool SetHTTPRequestAbsoluteTimeoutMS(HTTPRequestHandle hRequest, uint unMilliseconds)`

**用途 / Purpose:** 设置 `h t t p request absolute timeout m s` 的值或状态。

### GetHTTPRequestWasTimedOut
`public static bool GetHTTPRequestWasTimedOut(HTTPRequestHandle hRequest, out bool pbWasTimedOut)`

**用途 / Purpose:** 获取 `h t t p request was timed out` 的当前值。

## 使用示例

```csharp
SteamGameServerHTTP.CreateHTTPRequest(eHTTPRequestMethod, "example");
```

## 参见

- [完整类目录](../catalog)