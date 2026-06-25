---
title: "NetworkMain"
description: "Auto-generated class reference for NetworkMain."
---
# NetworkMain

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class NetworkMain`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/NetworkMain.cs`

## Overview

`NetworkMain` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameClient` | `public static LobbyClient GameClient { get; }` |
| `CommunityClient` | `public static CommunityClient CommunityClient { get; }` |
| `CustomBattleServer` | `public static CustomBattleServer CustomBattleServer { get; }` |

## Key Methods

### SetPeers
`public static void SetPeers(LobbyClient gameClient, CommunityClient communityClient, CustomBattleServer customBattleServer)`

**Purpose:** **Purpose:** Assigns a new value to peers and updates the object's internal state.

```csharp
// Static call; no instance required
NetworkMain.SetPeers(gameClient, communityClient, customBattleServer);
```

## Usage Example

```csharp
NetworkMain.SetPeers(gameClient, communityClient, customBattleServer);
```

## See Also

- [Area Index](../)