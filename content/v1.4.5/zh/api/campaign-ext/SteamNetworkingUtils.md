---
title: "SteamNetworkingUtils"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamNetworkingUtils`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingUtils

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamNetworkingUtils`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingUtils.cs`

## 概述

`SteamNetworkingUtils` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AllocateMessage
`public static IntPtr AllocateMessage(int cbAllocateBuffer)`

**用途 / Purpose:** 处理 `allocate message` 相关逻辑。

### InitRelayNetworkAccess
`public static void InitRelayNetworkAccess()`

**用途 / Purpose:** 初始化 `relay network access` 的状态、资源或绑定。

### GetRelayNetworkStatus
`public static ESteamNetworkingAvailability GetRelayNetworkStatus(out SteamRelayNetworkStatus_t pDetails)`

**用途 / Purpose:** 获取 `relay network status` 的当前值。

### GetLocalPingLocation
`public static float GetLocalPingLocation(out SteamNetworkPingLocation_t result)`

**用途 / Purpose:** 获取 `local ping location` 的当前值。

### EstimatePingTimeBetweenTwoLocations
`public static int EstimatePingTimeBetweenTwoLocations(ref SteamNetworkPingLocation_t location1, ref SteamNetworkPingLocation_t location2)`

**用途 / Purpose:** 处理 `estimate ping time between two locations` 相关逻辑。

### EstimatePingTimeFromLocalHost
`public static int EstimatePingTimeFromLocalHost(ref SteamNetworkPingLocation_t remoteLocation)`

**用途 / Purpose:** 处理 `estimate ping time from local host` 相关逻辑。

### ConvertPingLocationToString
`public static void ConvertPingLocationToString(ref SteamNetworkPingLocation_t location, out string pszBuf, int cchBufSize)`

**用途 / Purpose:** 处理 `convert ping location to string` 相关逻辑。

### ParsePingLocationString
`public static bool ParsePingLocationString(string pszString, out SteamNetworkPingLocation_t result)`

**用途 / Purpose:** 处理 `parse ping location string` 相关逻辑。

### CheckPingDataUpToDate
`public static bool CheckPingDataUpToDate(float flMaxAgeSeconds)`

**用途 / Purpose:** 处理 `check ping data up to date` 相关逻辑。

### GetPingToDataCenter
`public static int GetPingToDataCenter(SteamNetworkingPOPID popID, out SteamNetworkingPOPID pViaRelayPoP)`

**用途 / Purpose:** 获取 `ping to data center` 的当前值。

### GetDirectPingToPOP
`public static int GetDirectPingToPOP(SteamNetworkingPOPID popID)`

**用途 / Purpose:** 获取 `direct ping to p o p` 的当前值。

### GetPOPCount
`public static int GetPOPCount()`

**用途 / Purpose:** 获取 `p o p count` 的当前值。

### GetPOPList
`public static int GetPOPList(out SteamNetworkingPOPID list, int nListSz)`

**用途 / Purpose:** 获取 `p o p list` 的当前值。

### GetLocalTimestamp
`public static SteamNetworkingMicroseconds GetLocalTimestamp()`

**用途 / Purpose:** 获取 `local timestamp` 的当前值。

### SetDebugOutputFunction
`public static void SetDebugOutputFunction(ESteamNetworkingSocketsDebugOutputType eDetailLevel, FSteamNetworkingSocketsDebugOutput pfnFunc)`

**用途 / Purpose:** 设置 `debug output function` 的值或状态。

### IsFakeIPv4
`public static bool IsFakeIPv4(uint nIPv4)`

**用途 / Purpose:** 处理 `is fake i pv4` 相关逻辑。

### GetIPv4FakeIPType
`public static ESteamNetworkingFakeIPType GetIPv4FakeIPType(uint nIPv4)`

**用途 / Purpose:** 获取 `i pv4 fake i p type` 的当前值。

### GetRealIdentityForFakeIP
`public static EResult GetRealIdentityForFakeIP(ref SteamNetworkingIPAddr fakeIP, out SteamNetworkingIdentity pOutRealIdentity)`

**用途 / Purpose:** 获取 `real identity for fake i p` 的当前值。

### SetConfigValue
`public static bool SetConfigValue(ESteamNetworkingConfigValue eValue, ESteamNetworkingConfigScope eScopeType, IntPtr scopeObj, ESteamNetworkingConfigDataType eDataType, IntPtr pArg)`

**用途 / Purpose:** 设置 `config value` 的值或状态。

### GetConfigValue
`public static ESteamNetworkingGetConfigValueResult GetConfigValue(ESteamNetworkingConfigValue eValue, ESteamNetworkingConfigScope eScopeType, IntPtr scopeObj, out ESteamNetworkingConfigDataType pOutDataType, IntPtr pResult, ref ulong cbResult)`

**用途 / Purpose:** 获取 `config value` 的当前值。

### GetConfigValueInfo
`public static string GetConfigValueInfo(ESteamNetworkingConfigValue eValue, out ESteamNetworkingConfigDataType pOutDataType, out ESteamNetworkingConfigScope pOutScope)`

**用途 / Purpose:** 获取 `config value info` 的当前值。

### IterateGenericEditableConfigValues
`public static ESteamNetworkingConfigValue IterateGenericEditableConfigValues(ESteamNetworkingConfigValue eCurrent, bool bEnumerateDevVars)`

**用途 / Purpose:** 处理 `iterate generic editable config values` 相关逻辑。

### SteamNetworkingIPAddr_ToString
`public static void SteamNetworkingIPAddr_ToString(ref SteamNetworkingIPAddr addr, out string buf, uint cbBuf, bool bWithPort)`

**用途 / Purpose:** 处理 `steam networking i p addr_ to string` 相关逻辑。

### SteamNetworkingIPAddr_ParseString
`public static bool SteamNetworkingIPAddr_ParseString(out SteamNetworkingIPAddr pAddr, string pszStr)`

**用途 / Purpose:** 处理 `steam networking i p addr_ parse string` 相关逻辑。

### SteamNetworkingIPAddr_GetFakeIPType
`public static ESteamNetworkingFakeIPType SteamNetworkingIPAddr_GetFakeIPType(ref SteamNetworkingIPAddr addr)`

**用途 / Purpose:** 处理 `steam networking i p addr_ get fake i p type` 相关逻辑。

### SteamNetworkingIdentity_ToString
`public static void SteamNetworkingIdentity_ToString(ref SteamNetworkingIdentity identity, out string buf, uint cbBuf)`

**用途 / Purpose:** 处理 `steam networking identity_ to string` 相关逻辑。

### SteamNetworkingIdentity_ParseString
`public static bool SteamNetworkingIdentity_ParseString(out SteamNetworkingIdentity pIdentity, string pszStr)`

**用途 / Purpose:** 处理 `steam networking identity_ parse string` 相关逻辑。

## 使用示例

```csharp
SteamNetworkingUtils.AllocateMessage(0);
```

## 参见

- [完整类目录](../catalog)