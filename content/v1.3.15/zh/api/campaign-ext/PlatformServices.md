---
title: "PlatformServices"
description: "PlatformServices 的自动生成类参考。"
---
# PlatformServices

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public class PlatformServices`
**Base:** 无
**File:** `TaleWorlds.PlatformService/PlatformServices.cs`

## 概述

`PlatformServices` 位于 `TaleWorlds.PlatformService`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static IPlatformServices Instance { get; }` |
| `InvitationServices` | `public static IPlatformInvitationServices InvitationServices { get; }` |
| `OnSessionInvitationAccepted` | `public static Action<SessionInvitationType> OnSessionInvitationAccepted { get; set; }` |
| `OnPlatformRequestedMultiplayer` | `public static Action OnPlatformRequestedMultiplayer { get; }` |
| `IsPlatformRequestedMultiplayer` | `public static bool IsPlatformRequestedMultiplayer { get; }` |
| `SessionInvitationType` | `public static SessionInvitationType SessionInvitationType { get; }` |
| `IsPlatformRequestedContinueGame` | `public static bool IsPlatformRequestedContinueGame { get; }` |
| `ProviderName` | `public static string ProviderName { get; }` |
| `UserId` | `public static string UserId { get; }` |

## 主要方法

### Setup
`public static void Setup(IPlatformServices platformServices)`

**用途 / Purpose:** **用途 / Purpose:** 为 up 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
PlatformServices.Setup(platformServices);
```

### Initialize
`public static bool Initialize(IFriendListService additionalFriendListServices)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
PlatformServices.Initialize(additionalFriendListServices);
```

### Terminate
`public static void Terminate()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Terminate 对应的操作。

```csharp
// 静态调用，不需要实例
PlatformServices.Terminate();
```

### ConnectionStateChanged
`public static void ConnectionStateChanged(bool isAuthenticated)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ConnectionStateChanged 对应的操作。

```csharp
// 静态调用，不需要实例
PlatformServices.ConnectionStateChanged(false);
```

### MultiplayerGameStateChanged
`public static void MultiplayerGameStateChanged(bool isPlaying)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MultiplayerGameStateChanged 对应的操作。

```csharp
// 静态调用，不需要实例
PlatformServices.MultiplayerGameStateChanged(false);
```

### LobbyClientStateChanged
`public static void LobbyClientStateChanged(bool atLobby, bool isPartyLeaderOrSolo)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LobbyClientStateChanged 对应的操作。

```csharp
// 静态调用，不需要实例
PlatformServices.LobbyClientStateChanged(false, false);
```

### FireOnSessionInvitationAccepted
`public static void FireOnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FireOnSessionInvitationAccepted 对应的操作。

```csharp
// 静态调用，不需要实例
PlatformServices.FireOnSessionInvitationAccepted(sessionInvitationType);
```

### FireOnPlatformRequestedMultiplayer
`public static void FireOnPlatformRequestedMultiplayer()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FireOnPlatformRequestedMultiplayer 对应的操作。

```csharp
// 静态调用，不需要实例
PlatformServices.FireOnPlatformRequestedMultiplayer();
```

### OnSessionInvitationHandled
`public static void OnSessionInvitationHandled()`

**用途 / Purpose:** **用途 / Purpose:** 在 session invitation handled 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
PlatformServices.OnSessionInvitationHandled();
```

### OnPlatformMultiplayerRequestHandled
`public static void OnPlatformMultiplayerRequestHandled()`

**用途 / Purpose:** **用途 / Purpose:** 在 platform multiplayer request handled 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
PlatformServices.OnPlatformMultiplayerRequestHandled();
```

### SetIsPlatformRequestedContinueGame
`public static void SetIsPlatformRequestedContinueGame(bool isRequested)`

**用途 / Purpose:** **用途 / Purpose:** 为 is platform requested continue game 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
PlatformServices.SetIsPlatformRequestedContinueGame(false);
```

### FilterString
`public static Task<string> FilterString(string content, string defaultContent)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FilterString 对应的操作。

```csharp
// 静态调用，不需要实例
PlatformServices.FilterString("example", "example");
```

### TriggerInvitation
`public static string TriggerInvitation(List<string> strings)`

**用途 / Purpose:** **用途 / Purpose:** 触发invitation对应的逻辑或事件。

```csharp
// 静态调用，不需要实例
PlatformServices.TriggerInvitation(strings);
```

## 使用示例

```csharp
PlatformServices.Setup(platformServices);
```

## 参见

- [本区域目录](../)