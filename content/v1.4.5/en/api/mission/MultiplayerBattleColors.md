---
title: "MultiplayerBattleColors"
description: "Auto-generated class reference for MultiplayerBattleColors."
---
# MultiplayerBattleColors

**Namespace:** TaleWorlds.MountAndBlade.Missions.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `struct MultiplayerBattleColors`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Multiplayer/MultiplayerBattleColors.cs`

## Overview

`MultiplayerBattleColors` lives in `TaleWorlds.MountAndBlade.Missions.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MultiplayerCultureColorInfo
`public readonly struct MultiplayerCultureColorInfo(BasicCultureObject culture, bool swapColors)`

**Purpose:** **Purpose:** Executes the MultiplayerCultureColorInfo logic.

```csharp
// Obtain an instance of MultiplayerBattleColors from the subsystem API first
MultiplayerBattleColors multiplayerBattleColors = ...;
var result = multiplayerBattleColors.MultiplayerCultureColorInfo(culture, false);
```

### CreateWith
`public static MultiplayerBattleColors CreateWith(BasicCultureObject attackerCulture, BasicCultureObject defenderCulture)`

**Purpose:** **Purpose:** Constructs a new with entity and returns it to the caller.

```csharp
// Static call; no instance required
MultiplayerBattleColors.CreateWith(attackerCulture, defenderCulture);
```

### GetPeerColors
`public MultiplayerCultureColorInfo GetPeerColors(MissionPeer peer)`

**Purpose:** **Purpose:** Reads and returns the peer colors value held by the this instance.

```csharp
// Obtain an instance of MultiplayerBattleColors from the subsystem API first
MultiplayerBattleColors multiplayerBattleColors = ...;
var result = multiplayerBattleColors.GetPeerColors(peer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerBattleColors multiplayerBattleColors = ...;
multiplayerBattleColors.MultiplayerCultureColorInfo(culture, false);
```

## See Also

- [Area Index](../)