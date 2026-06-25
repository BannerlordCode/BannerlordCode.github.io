---
title: "SteamGameServerHTTP"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamGameServerHTTP`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServerHTTP

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServerHTTP`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServerHTTP.cs`

## Overview

`SteamGameServerHTTP` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateHTTPRequest
`public static HTTPRequestHandle CreateHTTPRequest(EHTTPMethod eHTTPRequestMethod, string pchAbsoluteURL)`

**Purpose:** Creates a new `h t t p request` instance or object.

### SetHTTPRequestContextValue
`public static bool SetHTTPRequestContextValue(HTTPRequestHandle hRequest, ulong ulContextValue)`

**Purpose:** Sets the value or state of `h t t p request context value`.

### SetHTTPRequestNetworkActivityTimeout
`public static bool SetHTTPRequestNetworkActivityTimeout(HTTPRequestHandle hRequest, uint unTimeoutSeconds)`

**Purpose:** Sets the value or state of `h t t p request network activity timeout`.

### SetHTTPRequestHeaderValue
`public static bool SetHTTPRequestHeaderValue(HTTPRequestHandle hRequest, string pchHeaderName, string pchHeaderValue)`

**Purpose:** Sets the value or state of `h t t p request header value`.

### SetHTTPRequestGetOrPostParameter
`public static bool SetHTTPRequestGetOrPostParameter(HTTPRequestHandle hRequest, string pchParamName, string pchParamValue)`

**Purpose:** Sets the value or state of `h t t p request get or post parameter`.

### SendHTTPRequest
`public static bool SendHTTPRequest(HTTPRequestHandle hRequest, out SteamAPICall_t pCallHandle)`

**Purpose:** Handles logic related to `send h t t p request`.

### SendHTTPRequestAndStreamResponse
`public static bool SendHTTPRequestAndStreamResponse(HTTPRequestHandle hRequest, out SteamAPICall_t pCallHandle)`

**Purpose:** Handles logic related to `send h t t p request and stream response`.

### DeferHTTPRequest
`public static bool DeferHTTPRequest(HTTPRequestHandle hRequest)`

**Purpose:** Handles logic related to `defer h t t p request`.

### PrioritizeHTTPRequest
`public static bool PrioritizeHTTPRequest(HTTPRequestHandle hRequest)`

**Purpose:** Handles logic related to `prioritize h t t p request`.

### GetHTTPResponseHeaderSize
`public static bool GetHTTPResponseHeaderSize(HTTPRequestHandle hRequest, string pchHeaderName, out uint unResponseHeaderSize)`

**Purpose:** Gets the current value of `h t t p response header size`.

### GetHTTPResponseHeaderValue
`public static bool GetHTTPResponseHeaderValue(HTTPRequestHandle hRequest, string pchHeaderName, byte pHeaderValueBuffer, uint unBufferSize)`

**Purpose:** Gets the current value of `h t t p response header value`.

### GetHTTPResponseBodySize
`public static bool GetHTTPResponseBodySize(HTTPRequestHandle hRequest, out uint unBodySize)`

**Purpose:** Gets the current value of `h t t p response body size`.

### GetHTTPResponseBodyData
`public static bool GetHTTPResponseBodyData(HTTPRequestHandle hRequest, byte pBodyDataBuffer, uint unBufferSize)`

**Purpose:** Gets the current value of `h t t p response body data`.

### GetHTTPStreamingResponseBodyData
`public static bool GetHTTPStreamingResponseBodyData(HTTPRequestHandle hRequest, uint cOffset, byte pBodyDataBuffer, uint unBufferSize)`

**Purpose:** Gets the current value of `h t t p streaming response body data`.

### ReleaseHTTPRequest
`public static bool ReleaseHTTPRequest(HTTPRequestHandle hRequest)`

**Purpose:** Handles logic related to `release h t t p request`.

### GetHTTPDownloadProgressPct
`public static bool GetHTTPDownloadProgressPct(HTTPRequestHandle hRequest, out float pflPercentOut)`

**Purpose:** Gets the current value of `h t t p download progress pct`.

### SetHTTPRequestRawPostBody
`public static bool SetHTTPRequestRawPostBody(HTTPRequestHandle hRequest, string pchContentType, byte pubBody, uint unBodyLen)`

**Purpose:** Sets the value or state of `h t t p request raw post body`.

### CreateCookieContainer
`public static HTTPCookieContainerHandle CreateCookieContainer(bool bAllowResponsesToModify)`

**Purpose:** Creates a new `cookie container` instance or object.

### ReleaseCookieContainer
`public static bool ReleaseCookieContainer(HTTPCookieContainerHandle hCookieContainer)`

**Purpose:** Handles logic related to `release cookie container`.

### SetCookie
`public static bool SetCookie(HTTPCookieContainerHandle hCookieContainer, string pchHost, string pchUrl, string pchCookie)`

**Purpose:** Sets the value or state of `cookie`.

### SetHTTPRequestCookieContainer
`public static bool SetHTTPRequestCookieContainer(HTTPRequestHandle hRequest, HTTPCookieContainerHandle hCookieContainer)`

**Purpose:** Sets the value or state of `h t t p request cookie container`.

### SetHTTPRequestUserAgentInfo
`public static bool SetHTTPRequestUserAgentInfo(HTTPRequestHandle hRequest, string pchUserAgentInfo)`

**Purpose:** Sets the value or state of `h t t p request user agent info`.

### SetHTTPRequestRequiresVerifiedCertificate
`public static bool SetHTTPRequestRequiresVerifiedCertificate(HTTPRequestHandle hRequest, bool bRequireVerifiedCertificate)`

**Purpose:** Sets the value or state of `h t t p request requires verified certificate`.

### SetHTTPRequestAbsoluteTimeoutMS
`public static bool SetHTTPRequestAbsoluteTimeoutMS(HTTPRequestHandle hRequest, uint unMilliseconds)`

**Purpose:** Sets the value or state of `h t t p request absolute timeout m s`.

### GetHTTPRequestWasTimedOut
`public static bool GetHTTPRequestWasTimedOut(HTTPRequestHandle hRequest, out bool pbWasTimedOut)`

**Purpose:** Gets the current value of `h t t p request was timed out`.

## Usage Example

```csharp
SteamGameServerHTTP.CreateHTTPRequest(eHTTPRequestMethod, "example");
```

## See Also

- [Complete Class Catalog](../catalog)