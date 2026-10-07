---
title: "MissionReinforcementsHelper"
description: "Auto-generated class reference for MissionReinforcementsHelper."
---
# MissionReinforcementsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionReinforcementsHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

`MissionReinforcementsHelper` is a `public static class` (`MissionReinforcementsHelper.cs:10`) that answers one question: *given this batch of reinforcement troops for one side, which formation should each one walk into?* It holds no per-instance state — everything lives in three static fields, the main one being a two-dimensional `ReinforcementFormationData[,]` indexed by team and formation index (`MissionReinforcementsHelper.cs:147`).

Its lifetime is bracketed by two static calls that the game makes for you. `OnMissionStart` allocates a `[teams, 8]` array and fills every slot with a fresh `ReinforcementFormationData`, then resets the init counter (`MissionReinforcementsHelper.cs:16`, `MissionReinforcementsHelper.cs:21`, `MissionReinforcementsHelper.cs:24`); `OnMissionEnd` nulls the array (`MissionReinforcementsHelper.cs:78`). Both are invoked from the battle spawn model — `CustomBattleSpawnModel.OnMissionStart` at `CustomBattleSpawnModel.cs:15` and the campaign's `SandboxBattleSpawnModel.OnMissionStart` at `SandboxBattleSpawnModel.cs:18`, with matching end calls at `CustomBattleSpawnModel.cs:21` and `SandboxBattleSpawnModel.cs:24`. The single entry point in between is `GetReinforcementAssignments(BattleSideEnum, List<IAgentOriginBase>)`, called from `CustomBattleSpawnModel.GetReinforcementAssignments` (`CustomBattleSpawnModel.cs:49`) and its campaign twin (`SandboxBattleSpawnModel.cs:80`).

## Mental Model

The priority enum is **inverted on purpose**. `ReinforcementFormationPriority` runs `Dominant = 6` down to `Default = 0` (`MissionReinforcementsHelper.cs:150` through `MissionReinforcementsHelper.cs:166`), and `ReinforcementFormationPreferenceComparer` returns `1` when the *right* side is smaller (`MissionReinforcementsHelper.cs:174`) — i.e. it sorts **ascending**, so the queue's head is the *lowest* priority value. The head is what `Peek()` returns and what the code compares against, so "the best formation" in the engine's sense is the one the queue pushes last. Reading the enum top-down as "best to worst" gives you exactly the wrong answer; read it bottom-up.

The **empty-formation case is special-cased out of the scoring entirely**. When a formation has no troops yet, `GetPriority` returns `EmptyRepresentativeMatch` (4) or `EmptyNoMatch` (3) instead of a class match (`MissionReinforcementsHelper.cs:235`, `MissionReinforcementsHelper.cs:237`). `FindBestFormationAmong` then handles priorities 3 and 4 by a completely different rule — lowest `FormationIndex` wins, no scoring at all (`MissionReinforcementsHelper.cs:97`, `MissionReinforcementsHelper.cs:99`). So an empty formation is never chosen for quality; it is chosen for being first in the enum order. That is what makes reinforcements populate unused formations instead of piling into the strongest one.

The scoring for non-empty formations is a weighted blend: `0.6f * (1 - unitShare)` plus `0.4f * positionalScore` (`MissionReinforcementsHelper.cs:134`). The unit-share term wants the *weakest* formation (`MissionReinforcementsHelper.cs:122`, `MissionReinforcementsHelper.cs:123`). The positional term only exists at all if the formation has been positioned and a reinforcement plan exists (`MissionReinforcementsHelper.cs:127`); otherwise it stays `0f` and the choice degenerates to the 0.6-weighted unit share alone. The distance normalisation divides by `62500f` — that is 250 squared, i.e. the distance is compared in **centimetres** (`MissionReinforcementsHelper.cs:131`).

Formations ordered to `Retreat` are excluded before priority is even computed (`MissionReinforcementsHelper.cs:48`), and the fallback when the queue finds nothing is `agentTeam.GetFormation(agentTroopClass)` (`MissionReinforcementsHelper.cs:65`) — the trivial "same class" placement, not an error path.

The `_localInitTime` counter is a lazy-invalidation stamp. `IsInitialized(initTime)` compares an equality of a `uint` (`MissionReinforcementsHelper.cs:225`), and every call to `GetReinforcementAssignments` increments it first (`MissionReinforcementsHelper.cs:36`), so all formation data is re-initialised from the live formation at the start of each batch. Two private constants document the classification thresholds and are hard-coded inline rather than referenced: `DominantClassThreshold = 0.5f` and `CommonClassThreshold = 0.25f` are declared at `MissionReinforcementsHelper.cs:138` and `MissionReinforcementsHelper.cs:141`, but `Classify` compares against the literals `0.25f` and `0.5f` (`MissionReinforcementsHelper.cs:280`, `MissionReinforcementsHelper.cs:281`). **Editing the constants changes nothing** — the live thresholds are the literals.

## How to use

**Getting it.** It is static; there is nothing to obtain. Just make sure the bracket has been entered — calling `GetReinforcementAssignments` before `OnMissionStart` dereferences a null array, and after `OnMissionEnd` the same.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// Called from your BattleSpawnModel override, exactly as CustomBattleSpawnModel does.
public override void OnMissionStart()
{
    base.OnMissionStart();
    MissionReinforcementsHelper.OnMissionStart();
}

public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(
    BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
{
    // Returns (origin, formationIndex) per troop. Lower FormationIndex is preferred
    // for empty formations; weighted scoring decides the rest.
    return MissionReinforcementsHelper.GetReinforcementAssignments(battleSide, troopOrigins);
}

public override void OnMissionEnd()
{
    base.OnMissionEnd();
    MissionReinforcementsHelper.OnMissionEnd();
}
```

Read the resulting assignment to check what the AI will do:

```csharp
foreach (var assignment in assignments)
{
    Formation f = Mission.Current.GetFormation(battleSide)
                        .GetFormation(FormationClass.FromIndex(assignment.Item2));
    Debug.Print("troop -> formation " + assignment.Item2 + " units=" + f.CountOfUnits, false);
}
```

If you want your own placement policy, do not subclass — there is nothing to subclass. Override `GetReinforcementAssignments` on your `BattleSpawnModel` and either use the helper as-is or compute assignments yourself; just keep the `OnMissionStart` / `OnMissionEnd` pair so the static array is not left null.

**The mistake that tunes nothing.** Changing `DominantClassThreshold` or `CommonClassThreshold` to shift reinforcement behaviour. Both are declared but never referenced; `Classify` tests the inline literals `0.25f` and `0.5f` (`MissionReinforcementsHelper.cs:280`, `MissionReinforcementsHelper.cs:281`). Your edit compiles, the constants change value, and the classification is bit-for-bit identical — the reinforcement split you were trying to tune keeps coming out the same, with no diagnostic anywhere.

## Key Methods

### OnMissionStart
`public static void OnMissionStart()`

**Purpose:** Invoked when the mission start event is raised.

```csharp
// Static call; no instance required
MissionReinforcementsHelper.OnMissionStart();
```

### GetReinforcementAssignments
`public unsafe static List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the reinforcement assignments value held by the this instance.

```csharp
// Static call; no instance required
MissionReinforcementsHelper.GetReinforcementAssignments(battleSide, troopOrigins);
```

### OnMissionEnd
`public static void OnMissionEnd()`

**Purpose:** Invoked when the mission end event is raised.

```csharp
// Static call; no instance required
MissionReinforcementsHelper.OnMissionEnd();
```

### Compare
`public int Compare(MissionReinforcementsHelper.ReinforcementFormationPriority left, MissionReinforcementsHelper.ReinforcementFormationPriority right)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.Compare(left, right);
```

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
missionReinforcementsHelper.Initialize(formation, 0);
```

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**Purpose:** Adds prospective troop to the current collection or state.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
missionReinforcementsHelper.AddProspectiveTroop(troopClass);
```

### IsInitialized
`public bool IsInitialized(uint initTime)`

**Purpose:** Determines whether the this instance is in the initialized state or condition.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.IsInitialized(0);
```

### GetPriority
`public MissionReinforcementsHelper.ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**Purpose:** Reads and returns the priority value held by the this instance.

```csharp
// Obtain an instance of MissionReinforcementsHelper from the subsystem API first
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.GetPriority(troopClass);
```

## Usage Example

```csharp
The `MissionReinforcementsHelper.Initialize()` line previously on this page named a method that does not exist. The type is static; the entry points are the lifecycle pair and the query:

```csharp
MissionReinforcementsHelper.OnMissionStart();
// ...
var assignments = MissionReinforcementsHelper.GetReinforcementAssignments(side, origins);
```
```

## See Also

- [MissionSiegeEnginesLogic — the other siege-deployment logic in this area](../MissionSiegeEnginesLogic)
- [HideoutPhasedMissionController — the hideout logic that phases reinforcement spawn points](../HideoutPhasedMissionController)
- [DeploymentView — the unreferenced deployment view that would project this](../DeploymentView)
- [Mission — where reinforcement waves are spawned](../../mission/Mission)
- [Area Index](../)