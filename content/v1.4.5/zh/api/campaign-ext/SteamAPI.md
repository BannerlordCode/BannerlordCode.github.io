---
title: "SteamAPI"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamAPI`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamAPI

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamAPI`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamAPI.cs`

## 概述

`SteamAPI` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Init
`public static bool Init()`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### Shutdown
`public static void Shutdown()`

**用途 / Purpose:** 处理 `shutdown` 相关逻辑。

### RestartAppIfNecessary
`public static bool RestartAppIfNecessary(AppId_t unOwnAppID)`

**用途 / Purpose:** 处理 `restart app if necessary` 相关逻辑。

### ReleaseCurrentThreadMemory
`public static void ReleaseCurrentThreadMemory()`

**用途 / Purpose:** 处理 `release current thread memory` 相关逻辑。

### RunCallbacks
`public static void RunCallbacks()`

**用途 / Purpose:** 处理 `run callbacks` 相关逻辑。

### IsSteamRunning
`public static bool IsSteamRunning()`

**用途 / Purpose:** 处理 `is steam running` 相关逻辑。

### GetHSteamPipe
`public static HSteamPipe GetHSteamPipe()`

**用途 / Purpose:** 获取 `h steam pipe` 的当前值。

### GetHSteamUser
`public static HSteamUser GetHSteamUser()`

**用途 / Purpose:** 获取 `h steam user` 的当前值。

## 使用示例

```csharp
SteamAPI.Init();
```

## 参见

- [完整类目录](../catalog)