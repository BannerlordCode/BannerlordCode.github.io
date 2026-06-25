---
title: "PlatformServices"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlatformServices`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlatformServices

**命名空间:** TaleWorlds.PlatformService
**模块:** TaleWorlds.PlatformService
**类型:** `public class PlatformServices`
**领域:** campaign-ext

## 概述

`PlatformServices` 位于 `TaleWorlds.PlatformService`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 设置 `up` 的值或状态。

### Initialize
`public static bool Initialize(IFriendListService additionalFriendListServices)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Terminate
`public static void Terminate()`

**用途 / Purpose:** 处理 `terminate` 相关逻辑。

### ConnectionStateChanged
`public static void ConnectionStateChanged(bool isAuthenticated)`

**用途 / Purpose:** 处理 `connection state changed` 相关逻辑。

### MultiplayerGameStateChanged
`public static void MultiplayerGameStateChanged(bool isPlaying)`

**用途 / Purpose:** 处理 `multiplayer game state changed` 相关逻辑。

### LobbyClientStateChanged
`public static void LobbyClientStateChanged(bool atLobby, bool isPartyLeaderOrSolo)`

**用途 / Purpose:** 处理 `lobby client state changed` 相关逻辑。

### FireOnSessionInvitationAccepted
`public static void FireOnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)`

**用途 / Purpose:** 处理 `fire on session invitation accepted` 相关逻辑。

### FireOnPlatformRequestedMultiplayer
`public static void FireOnPlatformRequestedMultiplayer()`

**用途 / Purpose:** 处理 `fire on platform requested multiplayer` 相关逻辑。

### OnSessionInvitationHandled
`public static void OnSessionInvitationHandled()`

**用途 / Purpose:** 当 `session invitation handled` 事件触发时调用此方法。

### OnPlatformMultiplayerRequestHandled
`public static void OnPlatformMultiplayerRequestHandled()`

**用途 / Purpose:** 当 `platform multiplayer request handled` 事件触发时调用此方法。

### SetIsPlatformRequestedContinueGame
`public static void SetIsPlatformRequestedContinueGame(bool isRequested)`

**用途 / Purpose:** 设置 `is platform requested continue game` 的值或状态。

### FilterString
`public static Task<string> FilterString(string content, string defaultContent)`

**用途 / Purpose:** 处理 `filter string` 相关逻辑。

### TriggerInvitation
`public static string TriggerInvitation(List<string> strings)`

**用途 / Purpose:** 处理 `trigger invitation` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
PlatformServices.Setup(platformServices);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
