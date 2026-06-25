---
title: "GalaxyInstance"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GalaxyInstance`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GalaxyInstance

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public static class GalaxyInstance`
**Base:** 无
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/GalaxyInstance.cs`

## 概述

`GalaxyInstance` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CustomExceptionDelegate
`public delegate void CustomExceptionDelegate(IError.Type type, string message)`

**用途 / Purpose:** 处理 `custom exception delegate` 相关逻辑。

### CustomExceptionRegisterCallback
`public static extern void CustomExceptionRegisterCallback(CustomExceptionDelegate customCallback)`

**用途 / Purpose:** 处理 `custom exception register callback` 相关逻辑。

### GetError
`public static IError GetError()`

**用途 / Purpose:** 获取 `error` 的当前值。

### ListenerRegistrar
`public static IListenerRegistrar ListenerRegistrar()`

**用途 / Purpose:** 处理 `listener registrar` 相关逻辑。

### GameServerListenerRegistrar
`public static IListenerRegistrar GameServerListenerRegistrar()`

**用途 / Purpose:** 处理 `game server listener registrar` 相关逻辑。

### Init
`public static void Init(InitParams initpParams)`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### InitGameServer
`public static void InitGameServer(InitParams initpParams)`

**用途 / Purpose:** 初始化 `game server` 的状态、资源或绑定。

### Shutdown
`public static void Shutdown(bool unloadModule)`

**用途 / Purpose:** 处理 `shutdown` 相关逻辑。

### User
`public static IUser User()`

**用途 / Purpose:** 处理 `user` 相关逻辑。

### Friends
`public static IFriends Friends()`

**用途 / Purpose:** 处理 `friends` 相关逻辑。

### Chat
`public static IChat Chat()`

**用途 / Purpose:** 处理 `chat` 相关逻辑。

### Matchmaking
`public static IMatchmaking Matchmaking()`

**用途 / Purpose:** 处理 `matchmaking` 相关逻辑。

### Networking
`public static INetworking Networking()`

**用途 / Purpose:** 处理 `networking` 相关逻辑。

### Stats
`public static IStats Stats()`

**用途 / Purpose:** 处理 `stats` 相关逻辑。

### Utils
`public static IUtils Utils()`

**用途 / Purpose:** 处理 `utils` 相关逻辑。

### Apps
`public static IApps Apps()`

**用途 / Purpose:** 处理 `apps` 相关逻辑。

### Storage
`public static IStorage Storage()`

**用途 / Purpose:** 处理 `storage` 相关逻辑。

### CustomNetworking
`public static ICustomNetworking CustomNetworking()`

**用途 / Purpose:** 处理 `custom networking` 相关逻辑。

### Logger
`public static ILogger Logger()`

**用途 / Purpose:** 处理 `logger` 相关逻辑。

### Telemetry
`public static ITelemetry Telemetry()`

**用途 / Purpose:** 处理 `telemetry` 相关逻辑。

### ProcessData
`public static void ProcessData()`

**用途 / Purpose:** 处理 `process data` 相关逻辑。

### ShutdownGameServer
`public static void ShutdownGameServer()`

**用途 / Purpose:** 处理 `shutdown game server` 相关逻辑。

### GameServerUser
`public static IUser GameServerUser()`

**用途 / Purpose:** 处理 `game server user` 相关逻辑。

### GameServerMatchmaking
`public static IMatchmaking GameServerMatchmaking()`

**用途 / Purpose:** 处理 `game server matchmaking` 相关逻辑。

### GameServerNetworking
`public static INetworking GameServerNetworking()`

**用途 / Purpose:** 处理 `game server networking` 相关逻辑。

### GameServerUtils
`public static IUtils GameServerUtils()`

**用途 / Purpose:** 处理 `game server utils` 相关逻辑。

### GameServerTelemetry
`public static ITelemetry GameServerTelemetry()`

**用途 / Purpose:** 处理 `game server telemetry` 相关逻辑。

### GameServerLogger
`public static ILogger GameServerLogger()`

**用途 / Purpose:** 处理 `game server logger` 相关逻辑。

### ProcessGameServerData
`public static void ProcessGameServerData()`

**用途 / Purpose:** 处理 `process game server data` 相关逻辑。

## 使用示例

```csharp
var value = new GalaxyInstance();
value.CustomExceptionDelegate(type, "example");
```

## 参见

- [完整类目录](../catalog)