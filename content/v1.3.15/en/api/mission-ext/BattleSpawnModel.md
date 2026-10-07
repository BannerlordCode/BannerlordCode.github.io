---
title: "BattleSpawnModel"
description: "Auto-generated class reference for BattleSpawnModel."
---
# BattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs`

## Overview

`BattleSpawnModel` is the abstract `MBGameModel` that decides which formation each troop origin belongs to
at the start of a battle and again for every reinforcement wave. It has four members in total: two lifecycle
hooks that are empty by default (`BattleSpawnModel.cs:12`, `BattleSpawnModel.cs:17`) and two abstract
assignment methods (`BattleSpawnModel.cs:23`, `BattleSpawnModel.cs:27`).

Both assignment methods return `List<ValueTuple<IAgentOriginBase, int>>` — a list of
`(troop origin, formation index)` pairs — and both carry `[TupleElementNames]` so the tuple fields are
named `origin` and `formationIndex` at the call site. The *formation index* is the raw integer the mission
then indexes into its per-formation counters; the stock implementation produces it from
`Mission.Current.GetAgentTroopClass` (`CustomBattleSpawnModel.cs:31`).

Lifecycle: `OnMissionStart` and `OnMissionEnd` are called by `MissionAgentSpawnLogic`
(`MissionAgentSpawnLogic.cs:225`, `MissionAgentSpawnLogic.cs:344`). Stock registration is
`CustomBattleSpawnModel` (`EditorGame.cs:53`), which uses the two hooks to drive
`MissionReinforcementsHelper` (`CustomBattleSpawnModel.cs:15`).

## Mental Model

Read it as the bridge between campaign troop lists and mission formations, and note that it works on
*origins*, never on agents. The boundaries:

- **The two hooks are not symmetric in practice.** `CustomBattleSpawnModel.OnMissionStart` and
  `OnMissionEnd` both delegate to `MissionReinforcementsHelper` (`CustomBattleSpawnModel.cs:15`), so in the
  stock game the "model" lifecycle exists purely to open and close a static helper's state. If you override
  one and forget the other you leave that helper latched.
- **`GetInitialSpawnAssignments` and `GetReinforcementAssignments` are different problems with different
  data.** The initial call gets the side's whole troop list and is consumed inside the spawn loop
  (`MissionAgentSpawnLogic.cs:1451`); the reinforcement call gets `this._reservedTroops` — the quota not yet
  deployed — and the mission immediately aggregates the returned formation indexes into
  `_reinforcementSpawnedUnitCountPerFormation` (`MissionAgentSpawnLogic.cs:1567`). Returning an index your
  side does not have a formation for corrupts that array.
- **The formation index is a plain `int`, not a `FormationIndex` enum**, and it is your job to keep it in
  range for the side being spawned. Nothing in the base class validates it.
- **The stock initial assignment has no allocation-free path** — it builds a new list per call
  (`CustomBattleSpawnModel.cs:28`), once per spawn batch.

## How to use

**Getting one.** Register a subclass where `EditorGame` registers the stock one; read it per mission through
`MissionGameModels.Current.BattleSpawnModel` (`MissionGameModels.cs:107`). The mission calls it, you never
do, except in your own spawn logic.

```csharp
// Once, at game start - replaces CustomBattleSpawnModel (EditorGame.cs:53).
basicGameStarter.AddModel<BattleSpawnModel>(new MyBattleSpawnModel());

public class MyBattleSpawnModel : BattleSpawnModel
{
    public override void OnMissionStart() { /* stock drives MissionReinforcementsHelper here */ }

    public override void OnMissionEnd()   { /* must mirror OnMissionStart or state leaks */ }

    public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(
        BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        var result = new List<ValueTuple<IAgentOriginBase, int>>(troopOrigins.Count);

        foreach (IAgentOriginBase origin in troopOrigins)
        {
            // The stock derives the formation index from the mission's own mapping
            // (CustomBattleSpawnModel.cs:31); anything you return here is trusted verbatim.
            int formationIndex = (int)Mission.Current.GetAgentTroopClass(battleSide, origin.Troop);
            result.Add(new ValueTuple<IAgentOriginBase, int>(origin, formationIndex));
        }
        return result;
    }

    public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(
        BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        // stock: MissionReinforcementsHelper.GetReinforcementAssignments (CustomBattleSpawnModel.cs:41)
        return MissionReinforcementsHelper.GetReinforcementAssignments(battleSide, troopOrigins);
    }
}
```

**The mistake that bites.** Overriding `GetInitialSpawnAssignments` and leaving `GetReinforcementAssignments`
alone — or overriding only one of the two lifecycle hooks. Initial and reinforcement waves then place
troops by two different rules, so the first wave looks correct and every later reinforcement lands in the
wrong formation; and because the reinforcement result is folded straight into the per-formation counters
(`MissionAgentSpawnLogic.cs:1567`), a bad index is not merely misplaced, it corrupts the counts the mission
uses to decide how many of each formation still has to spawn.



## Key Methods

### OnMissionStart
`public virtual void OnMissionStart()`

**Purpose:** Invoked when the mission start event is raised.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
battleSpawnModel.OnMissionStart();
```

### OnMissionEnd
`public virtual void OnMissionEnd()`

**Purpose:** Invoked when the mission end event is raised.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
battleSpawnModel.OnMissionEnd();
```

### GetInitialSpawnAssignments
`public abstract List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the initial spawn assignments value held by the this instance.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
var result = battleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public abstract List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the reinforcement assignments value held by the this instance.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
var result = battleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleSpawnModel instance = ...;
```

## See Also

- [Area Index](../)
- [BattleBannerBearersModel](../BattleBannerBearersModel)
- [BattleEndLogic](../BattleEndLogic)
- [CasualtyHandler](../CasualtyHandler)
- [中文页面](../../../../zh/api/mission-ext/BattleSpawnModel)