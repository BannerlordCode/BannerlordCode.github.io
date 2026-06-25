---
title: "CGameID"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CGameID`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CGameID

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct CGameID : IEquatable<CGameID>, IComparable<CGameID>`
**Base:** `IEquatable<CGameID>`
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/CGameID.cs`

## 概述

`CGameID` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsSteamApp
`public bool IsSteamApp()`

**用途 / Purpose:** 处理 `is steam app` 相关逻辑。

### IsMod
`public bool IsMod()`

**用途 / Purpose:** 处理 `is mod` 相关逻辑。

### IsShortcut
`public bool IsShortcut()`

**用途 / Purpose:** 处理 `is shortcut` 相关逻辑。

### IsP2PFile
`public bool IsP2PFile()`

**用途 / Purpose:** 处理 `is p2 p file` 相关逻辑。

### AppID
`public AppId_t AppID()`

**用途 / Purpose:** 处理 `app i d` 相关逻辑。

### Type
`public EGameIDType Type()`

**用途 / Purpose:** 处理 `type` 相关逻辑。

### ModID
`public uint ModID()`

**用途 / Purpose:** 处理 `mod i d` 相关逻辑。

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Set
`public void Set(ulong GameID)`

**用途 / Purpose:** 设置 `set` 的值或状态。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### CGameID
`public static explicit operator CGameID(ulong value)`

**用途 / Purpose:** 处理 `c game i d` 相关逻辑。

### ulong
`public static explicit operator ulong(CGameID that)`

**用途 / Purpose:** 处理 `ulong` 相关逻辑。

### Equals
`public bool Equals(CGameID other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### CompareTo
`public int CompareTo(CGameID other)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

## 使用示例

```csharp
var value = new CGameID();
value.IsSteamApp();
```

## 参见

- [完整类目录](../catalog)