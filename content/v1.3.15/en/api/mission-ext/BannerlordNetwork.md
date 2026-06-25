---
title: "BannerlordNetwork"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordNetwork`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordNetwork`
**Area:** mission-ext

## Overview

`BannerlordNetwork` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
BannerlordNetwork.CreateServerPeer();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
