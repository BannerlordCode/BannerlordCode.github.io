<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamItemDef_t`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamItemDef_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamItemDef_t`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamItemDef_t.cs`

## 概述

`SteamItemDef_t` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SteamItemDef_t
`public struct SteamItemDef_t(int value)`

**用途 / Purpose:** 处理 `steam item def_t` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### SteamItemDef_t
`public static explicit operator SteamItemDef_t(int value)`

**用途 / Purpose:** 处理 `steam item def_t` 相关逻辑。

### int
`public static explicit operator int(SteamItemDef_t that)`

**用途 / Purpose:** 处理 `int` 相关逻辑。

### Equals
`public bool Equals(SteamItemDef_t other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### CompareTo
`public int CompareTo(SteamItemDef_t other)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

## 使用示例

```csharp
var value = new SteamItemDef_t();
value.SteamItemDef_t(0);
```

## 参见

- [完整类目录](../catalog)