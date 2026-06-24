<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlatformServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlatformServices

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public class PlatformServices`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService/TaleWorlds.PlatformService/PlatformServices.cs`

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

**Purpose:** Sets the value or state of `up`.

### Initialize
`public static bool Initialize(IFriendListService additionalFriendListServices)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Terminate
`public static void Terminate()`

**Purpose:** Handles logic related to `terminate`.

### ConnectionStateChanged
`public static void ConnectionStateChanged(bool isAuthenticated)`

**Purpose:** Handles logic related to `connection state changed`.

### MultiplayerGameStateChanged
`public static void MultiplayerGameStateChanged(bool isPlaying)`

**Purpose:** Handles logic related to `multiplayer game state changed`.

### LobbyClientStateChanged
`public static void LobbyClientStateChanged(bool atLobby, bool isPartyLeaderOrSolo)`

**Purpose:** Handles logic related to `lobby client state changed`.

### FireOnSessionInvitationAccepted
`public static void FireOnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)`

**Purpose:** Handles logic related to `fire on session invitation accepted`.

### FireOnPlatformRequestedMultiplayer
`public static void FireOnPlatformRequestedMultiplayer()`

**Purpose:** Handles logic related to `fire on platform requested multiplayer`.

### OnSessionInvitationHandled
`public static void OnSessionInvitationHandled()`

**Purpose:** Called when the `session invitation handled` event is raised.

### OnPlatformMultiplayerRequestHandled
`public static void OnPlatformMultiplayerRequestHandled()`

**Purpose:** Called when the `platform multiplayer request handled` event is raised.

### SetIsPlatformRequestedContinueGame
`public static void SetIsPlatformRequestedContinueGame(bool isRequested)`

**Purpose:** Sets the value or state of `is platform requested continue game`.

### FilterString
`public static async Task<string> FilterString(string content, string defaultContent)`

**Purpose:** Handles logic related to `filter string`.

### TriggerInvitation
`public static string TriggerInvitation(List<string> strings)`

**Purpose:** Handles logic related to `trigger invitation`.

## Usage Example

```csharp
PlatformServices.Setup(platformServices);
```

## See Also

- [Complete Class Catalog](../catalog)