<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlatformServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlatformServices

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PlatformServices` is a class in the `TaleWorlds.PlatformService` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)