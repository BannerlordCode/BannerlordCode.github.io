<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordNetwork`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerlordNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordNetwork`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordNetwork.cs`

## Overview

`BannerlordNetwork` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LobbyMissionType` | `public static LobbyMissionType LobbyMissionType { get; }` |

## Key Methods

### CreateServerPeer
`public static void CreateServerPeer()`

**Purpose:** Creates a new `server peer` instance or object.

### StartMultiplayerLobbyMission
`public static void StartMultiplayerLobbyMission(LobbyMissionType lobbyMissionType)`

**Purpose:** Handles logic related to `start multiplayer lobby mission`.

### EndMultiplayerLobbyMission
`public static void EndMultiplayerLobbyMission()`

**Purpose:** Handles logic related to `end multiplayer lobby mission`.

## Usage Example

```csharp
BannerlordNetwork.CreateServerPeer();
```

## See Also

- [Complete Class Catalog](../catalog)