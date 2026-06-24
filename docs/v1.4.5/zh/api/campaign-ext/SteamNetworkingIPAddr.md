<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamNetworkingIPAddr`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingIPAddr

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamNetworkingIPAddr : IEquatable<SteamNetworkingIPAddr>`
**Base:** `IEquatable<SteamNetworkingIPAddr>`
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingIPAddr.cs`

## 概述

`SteamNetworkingIPAddr` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### IsIPv6AllZeros
`public bool IsIPv6AllZeros()`

**用途 / Purpose:** 处理 `is i pv6 all zeros` 相关逻辑。

### SetIPv6
`public void SetIPv6(byte ipv6, ushort nPort)`

**用途 / Purpose:** 设置 `i pv6` 的值或状态。

### SetIPv4
`public void SetIPv4(uint nIP, ushort nPort)`

**用途 / Purpose:** 设置 `i pv4` 的值或状态。

### IsIPv4
`public bool IsIPv4()`

**用途 / Purpose:** 处理 `is i pv4` 相关逻辑。

### GetIPv4
`public uint GetIPv4()`

**用途 / Purpose:** 获取 `i pv4` 的当前值。

### SetIPv6LocalHost
`public void SetIPv6LocalHost(ushort nPort = 0)`

**用途 / Purpose:** 设置 `i pv6 local host` 的值或状态。

### IsLocalHost
`public bool IsLocalHost()`

**用途 / Purpose:** 处理 `is local host` 相关逻辑。

### ToString
`public void ToString(out string buf, bool bWithPort)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ParseString
`public bool ParseString(string pszStr)`

**用途 / Purpose:** 处理 `parse string` 相关逻辑。

### Equals
`public bool Equals(SteamNetworkingIPAddr x)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetFakeIPType
`public ESteamNetworkingFakeIPType GetFakeIPType()`

**用途 / Purpose:** 获取 `fake i p type` 的当前值。

### IsFakeIP
`public bool IsFakeIP()`

**用途 / Purpose:** 处理 `is fake i p` 相关逻辑。

## 使用示例

```csharp
var value = new SteamNetworkingIPAddr();
value.Clear();
```

## 参见

- [完整类目录](../catalog)