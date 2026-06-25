---
title: "MissionCombatantsLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCombatantsLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `banner for side`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### GetAllCombatants
`public IEnumerable<IBattleCombatant> GetAllCombatants()`

**Purpose:** Gets the current value of `all combatants`.

### SupportsAllyTeamOnPlayerSide
`public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant> playerSideBattleCombatants, IBattleCombatant playerBattleCombatant, bool isPlayerSergeant, out IBattleCombatant allyCombatant)`

**Purpose:** Handles logic related to `supports ally team on player side`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionCombatantsLogic());
```

## See Also

- [Complete Class Catalog](../catalog)