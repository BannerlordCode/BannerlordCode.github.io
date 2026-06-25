---
title: "MissionCombatantsLogic"
description: "Auto-generated class reference for MissionCombatantsLogic."
---
# MissionCombatantsLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCombatantsLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs`

## Overview

`MissionCombatantsLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionCombatantsLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |

## Key Methods

### GetBannerForSide
`public Banner GetBannerForSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the banner for side value held by the this instance.

```csharp
// Obtain an instance of MissionCombatantsLogic from the subsystem API first
MissionCombatantsLogic missionCombatantsLogic = ...;
var result = missionCombatantsLogic.GetBannerForSide(side);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionCombatantsLogic from the subsystem API first
MissionCombatantsLogic missionCombatantsLogic = ...;
missionCombatantsLogic.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionCombatantsLogic from the subsystem API first
MissionCombatantsLogic missionCombatantsLogic = ...;
missionCombatantsLogic.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionCombatantsLogic from the subsystem API first
MissionCombatantsLogic missionCombatantsLogic = ...;
missionCombatantsLogic.AfterStart();
```

### GetAllCombatants
`public IEnumerable<IBattleCombatant> GetAllCombatants()`

**Purpose:** **Purpose:** Reads and returns the all combatants value held by the this instance.

```csharp
// Obtain an instance of MissionCombatantsLogic from the subsystem API first
MissionCombatantsLogic missionCombatantsLogic = ...;
var result = missionCombatantsLogic.GetAllCombatants();
```

### SupportsAllyTeamOnPlayerSide
`public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant> playerSideBattleCombatants, IBattleCombatant playerBattleCombatant, bool isPlayerSergeant, out IBattleCombatant allyCombatant)`

**Purpose:** **Purpose:** Executes the SupportsAllyTeamOnPlayerSide logic.

```csharp
// Static call; no instance required
MissionCombatantsLogic.SupportsAllyTeamOnPlayerSide(playerSideBattleCombatants, playerBattleCombatant, false, allyCombatant);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionCombatantsLogic>();
```

## See Also

- [Area Index](../)