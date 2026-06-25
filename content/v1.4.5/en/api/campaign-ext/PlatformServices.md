---
title: "PlatformServices"
description: "Auto-generated class reference for PlatformServices."
---
# PlatformServices

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public class PlatformServices`
**Base:** none
**File:** `bin/TaleWorlds.PlatformService/TaleWorlds.PlatformService/PlatformServices.cs`

## Overview

`PlatformServices` lives in `TaleWorlds.PlatformService` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnSessionInvitationAccepted` | `public static Action<SessionInvitationType> OnSessionInvitationAccepted { get; set; }` |
| `OnPlatformRequestedMultiplayer` | `public static Action OnPlatformRequestedMultiplayer { get; }` |
| `IsPlatformRequestedMultiplayer` | `public static bool IsPlatformRequestedMultiplayer { get; }` |
| `SessionInvitationType` | `public static SessionInvitationType SessionInvitationType { get; }` |
| `IsPlatformRequestedContinueGame` | `public static bool IsPlatformRequestedContinueGame { get; }` |

## Key Methods

### Setup
`public static void Setup(IPlatformServices platformServices)`

**Purpose:** Assigns a new value to up and updates the object's internal state.

```csharp
// Static call; no instance required
PlatformServices.Setup(platformServices);
```

### Initialize
`public static bool Initialize(IFriendListService additionalFriendListServices)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
PlatformServices.Initialize(additionalFriendListServices);
```

### Terminate
`public static void Terminate()`

**Purpose:** Executes the Terminate logic.

```csharp
// Static call; no instance required
PlatformServices.Terminate();
```

### ConnectionStateChanged
`public static void ConnectionStateChanged(bool isAuthenticated)`

**Purpose:** Executes the ConnectionStateChanged logic.

```csharp
// Static call; no instance required
PlatformServices.ConnectionStateChanged(false);
```

### MultiplayerGameStateChanged
`public static void MultiplayerGameStateChanged(bool isPlaying)`

**Purpose:** Executes the MultiplayerGameStateChanged logic.

```csharp
// Static call; no instance required
PlatformServices.MultiplayerGameStateChanged(false);
```

### LobbyClientStateChanged
`public static void LobbyClientStateChanged(bool atLobby, bool isPartyLeaderOrSolo)`

**Purpose:** Executes the LobbyClientStateChanged logic.

```csharp
// Static call; no instance required
PlatformServices.LobbyClientStateChanged(false, false);
```

### FireOnSessionInvitationAccepted
`public static void FireOnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)`

**Purpose:** Executes the FireOnSessionInvitationAccepted logic.

```csharp
// Static call; no instance required
PlatformServices.FireOnSessionInvitationAccepted(sessionInvitationType);
```

### FireOnPlatformRequestedMultiplayer
`public static void FireOnPlatformRequestedMultiplayer()`

**Purpose:** Executes the FireOnPlatformRequestedMultiplayer logic.

```csharp
// Static call; no instance required
PlatformServices.FireOnPlatformRequestedMultiplayer();
```

### OnSessionInvitationHandled
`public static void OnSessionInvitationHandled()`

**Purpose:** Invoked when the session invitation handled event is raised.

```csharp
// Static call; no instance required
PlatformServices.OnSessionInvitationHandled();
```

### OnPlatformMultiplayerRequestHandled
`public static void OnPlatformMultiplayerRequestHandled()`

**Purpose:** Invoked when the platform multiplayer request handled event is raised.

```csharp
// Static call; no instance required
PlatformServices.OnPlatformMultiplayerRequestHandled();
```

### SetIsPlatformRequestedContinueGame
`public static void SetIsPlatformRequestedContinueGame(bool isRequested)`

**Purpose:** Assigns a new value to is platform requested continue game and updates the object's internal state.

```csharp
// Static call; no instance required
PlatformServices.SetIsPlatformRequestedContinueGame(false);
```

### FilterString
`public static async Task<string> FilterString(string content, string defaultContent)`

**Purpose:** Executes the FilterString logic.

```csharp
// Static call; no instance required
PlatformServices.FilterString("example", "example");
```

### TriggerInvitation
`public static string TriggerInvitation(List<string> strings)`

**Purpose:** Triggers the logic or event associated with invitation.

```csharp
// Static call; no instance required
PlatformServices.TriggerInvitation(strings);
```

## Usage Example

```csharp
PlatformServices.Setup(platformServices);
```

## See Also

- [Area Index](../)