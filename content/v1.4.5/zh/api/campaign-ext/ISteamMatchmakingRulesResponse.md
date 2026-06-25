---
title: "ISteamMatchmakingRulesResponse"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ISteamMatchmakingRulesResponse`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamMatchmakingRulesResponse

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class ISteamMatchmakingRulesResponse`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamMatchmakingRulesResponse.cs`

## 概述

`ISteamMatchmakingRulesResponse` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RulesResponded
`public delegate void RulesResponded(string pchRule, string pchValue)`

**用途 / Purpose:** 处理 `rules responded` 相关逻辑。

### RulesFailedToRespond
`public delegate void RulesFailedToRespond()`

**用途 / Purpose:** 处理 `rules failed to respond` 相关逻辑。

### RulesRefreshComplete
`public delegate void RulesRefreshComplete()`

**用途 / Purpose:** 处理 `rules refresh complete` 相关逻辑。

### InternalRulesResponded
`public delegate void InternalRulesResponded(IntPtr thisptr, IntPtr pchRule, IntPtr pchValue)`

**用途 / Purpose:** 处理 `internal rules responded` 相关逻辑。

### InternalRulesFailedToRespond
`public delegate void InternalRulesFailedToRespond(IntPtr thisptr)`

**用途 / Purpose:** 处理 `internal rules failed to respond` 相关逻辑。

### InternalRulesRefreshComplete
`public delegate void InternalRulesRefreshComplete(IntPtr thisptr)`

**用途 / Purpose:** 处理 `internal rules refresh complete` 相关逻辑。

### IntPtr
`public static explicit operator IntPtr(ISteamMatchmakingRulesResponse that)`

**用途 / Purpose:** 处理 `int ptr` 相关逻辑。

## 使用示例

```csharp
var value = new ISteamMatchmakingRulesResponse();
value.RulesResponded("example", "example");
```

## 参见

- [完整类目录](../catalog)