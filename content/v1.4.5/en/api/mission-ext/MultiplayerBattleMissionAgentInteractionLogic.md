---
title: "MultiplayerBattleMissionAgentInteractionLogic"
description: "Auto-generated class reference for MultiplayerBattleMissionAgentInteractionLogic."
---
# MultiplayerBattleMissionAgentInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleMissionAgentInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Missions/MultiplayerBattleMissionAgentInteractionLogic.cs`

## Overview

`MultiplayerBattleMissionAgentInteractionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MultiplayerBattleMissionAgentInteractionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of MultiplayerBattleMissionAgentInteractionLogic from the subsystem API first
MultiplayerBattleMissionAgentInteractionLogic multiplayerBattleMissionAgentInteractionLogic = ...;
var result = multiplayerBattleMissionAgentInteractionLogic.IsThereAgentAction(userAgent, otherAgent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MultiplayerBattleMissionAgentInteractionLogic>();
```

## See Also

- [Area Index](../)