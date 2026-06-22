<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlatformServices`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlatformServices

**命名空间:** TaleWorlds.PlatformService
**模块:** TaleWorlds.PlatformService
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PlatformServices` 是 `TaleWorlds.PlatformService` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public static void Setup(IPlatformServices platformServices)
```

### Initialize

```csharp
public static bool Initialize(IFriendListService additionalFriendListServices)
```

### Terminate

```csharp
public static void Terminate()
```

### ConnectionStateChanged

```csharp
public static void ConnectionStateChanged(bool isAuthenticated)
```

### MultiplayerGameStateChanged

```csharp
public static void MultiplayerGameStateChanged(bool isPlaying)
```

### LobbyClientStateChanged

```csharp
public static void LobbyClientStateChanged(bool atLobby, bool isPartyLeaderOrSolo)
```

### FireOnSessionInvitationAccepted

```csharp
public static void FireOnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)
```

### FireOnPlatformRequestedMultiplayer

```csharp
public static void FireOnPlatformRequestedMultiplayer()
```

### OnSessionInvitationHandled

```csharp
public static void OnSessionInvitationHandled()
```

### OnPlatformMultiplayerRequestHandled

```csharp
public static void OnPlatformMultiplayerRequestHandled()
```

### SetIsPlatformRequestedContinueGame

```csharp
public static void SetIsPlatformRequestedContinueGame(bool isRequested)
```

### FilterString

```csharp
public static Task<string> FilterString(string content, string defaultContent)
```

### TriggerInvitation

```csharp
public static string TriggerInvitation(List<string> strings)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)