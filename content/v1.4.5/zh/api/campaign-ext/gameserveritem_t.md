---
title: "gameserveritem_t"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `gameserveritem_t`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# gameserveritem_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class gameserveritem_t`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/gameserveritem_t.cs`

## 概述

`gameserveritem_t` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGameDir
`public string GetGameDir()`

**用途 / Purpose:** 获取 `game dir` 的当前值。

### SetGameDir
`public void SetGameDir(string dir)`

**用途 / Purpose:** 设置 `game dir` 的值或状态。

### GetMap
`public string GetMap()`

**用途 / Purpose:** 获取 `map` 的当前值。

### SetMap
`public void SetMap(string map)`

**用途 / Purpose:** 设置 `map` 的值或状态。

### GetGameDescription
`public string GetGameDescription()`

**用途 / Purpose:** 获取 `game description` 的当前值。

### SetGameDescription
`public void SetGameDescription(string desc)`

**用途 / Purpose:** 设置 `game description` 的值或状态。

### GetServerName
`public string GetServerName()`

**用途 / Purpose:** 获取 `server name` 的当前值。

### SetServerName
`public void SetServerName(string name)`

**用途 / Purpose:** 设置 `server name` 的值或状态。

### GetGameTags
`public string GetGameTags()`

**用途 / Purpose:** 获取 `game tags` 的当前值。

### SetGameTags
`public void SetGameTags(string tags)`

**用途 / Purpose:** 设置 `game tags` 的值或状态。

## 使用示例

```csharp
var value = new gameserveritem_t();
value.GetGameDir();
```

## 参见

- [完整类目录](../catalog)