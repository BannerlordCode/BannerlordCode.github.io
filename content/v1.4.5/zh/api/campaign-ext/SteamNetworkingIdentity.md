---
title: "SteamNetworkingIdentity"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamNetworkingIdentity`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingIdentity

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamNetworkingIdentity : IEquatable<SteamNetworkingIdentity>`
**Base:** `IEquatable<SteamNetworkingIdentity>`
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingIdentity.cs`

## 概述

`SteamNetworkingIdentity` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### IsInvalid
`public bool IsInvalid()`

**用途 / Purpose:** 处理 `is invalid` 相关逻辑。

### SetSteamID
`public void SetSteamID(CSteamID steamID)`

**用途 / Purpose:** 设置 `steam i d` 的值或状态。

### GetSteamID
`public CSteamID GetSteamID()`

**用途 / Purpose:** 获取 `steam i d` 的当前值。

### SetSteamID64
`public void SetSteamID64(ulong steamID)`

**用途 / Purpose:** 设置 `steam i d64` 的值或状态。

### GetSteamID64
`public ulong GetSteamID64()`

**用途 / Purpose:** 获取 `steam i d64` 的当前值。

### SetIPAddr
`public void SetIPAddr(SteamNetworkingIPAddr addr)`

**用途 / Purpose:** 设置 `i p addr` 的值或状态。

### GetIPAddr
`public SteamNetworkingIPAddr GetIPAddr()`

**用途 / Purpose:** 获取 `i p addr` 的当前值。

### SetIPv4Addr
`public void SetIPv4Addr(uint nIPv4, ushort nPort)`

**用途 / Purpose:** 设置 `i pv4 addr` 的值或状态。

### GetIPv4
`public uint GetIPv4()`

**用途 / Purpose:** 获取 `i pv4` 的当前值。

### GetFakeIPType
`public ESteamNetworkingFakeIPType GetFakeIPType()`

**用途 / Purpose:** 获取 `fake i p type` 的当前值。

### IsFakeIP
`public bool IsFakeIP()`

**用途 / Purpose:** 处理 `is fake i p` 相关逻辑。

### SetLocalHost
`public void SetLocalHost()`

**用途 / Purpose:** 设置 `local host` 的值或状态。

### IsLocalHost
`public bool IsLocalHost()`

**用途 / Purpose:** 处理 `is local host` 相关逻辑。

### SetGenericString
`public bool SetGenericString(string pszString)`

**用途 / Purpose:** 设置 `generic string` 的值或状态。

### GetGenericString
`public string GetGenericString()`

**用途 / Purpose:** 获取 `generic string` 的当前值。

### SetGenericBytes
`public bool SetGenericBytes(byte data, uint cbLen)`

**用途 / Purpose:** 设置 `generic bytes` 的值或状态。

### GetGenericBytes
`public byte GetGenericBytes(out int cbLen)`

**用途 / Purpose:** 获取 `generic bytes` 的当前值。

### Equals
`public bool Equals(SteamNetworkingIdentity x)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### ToString
`public void ToString(out string buf)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ParseString
`public bool ParseString(string pszStr)`

**用途 / Purpose:** 处理 `parse string` 相关逻辑。

## 使用示例

```csharp
var value = new SteamNetworkingIdentity();
value.Clear();
```

## 参见

- [完整类目录](../catalog)