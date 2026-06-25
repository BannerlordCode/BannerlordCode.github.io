---
title: "ISteamMatchmakingPingResponse"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ISteamMatchmakingPingResponse`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamMatchmakingPingResponse

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class ISteamMatchmakingPingResponse`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamMatchmakingPingResponse.cs`

## 概述

`ISteamMatchmakingPingResponse` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ServerResponded
`public delegate void ServerResponded(gameserveritem_t server)`

**用途 / Purpose:** 处理 `server responded` 相关逻辑。

### ServerFailedToRespond
`public delegate void ServerFailedToRespond()`

**用途 / Purpose:** 处理 `server failed to respond` 相关逻辑。

### IntPtr
`public static explicit operator IntPtr(ISteamMatchmakingPingResponse that)`

**用途 / Purpose:** 处理 `int ptr` 相关逻辑。

## 使用示例

```csharp
var value = new ISteamMatchmakingPingResponse();
value.ServerResponded(server);
```

## 参见

- [完整类目录](../catalog)