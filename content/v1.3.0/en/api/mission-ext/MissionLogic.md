---
title: "MissionLogic"
description: "Auto-generated class reference for MissionLogic."
---
# MissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLogic : MissionBehavior`
**Base:** `MissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionLogic.cs`

## Overview

`MissionLogic` is the abstract base for everything in a mission that decides *when the mission is over* and *what it means*. It derives from `MissionBehavior` (`MissionLogic.cs:9`) and adds nothing but nine `virtual` methods plus a `BehaviorType` override that returns `MissionBehaviorType.Logic` (`MissionLogic.cs:13`). It has no fields and no state of its own — its whole purpose is to give `Mission` a second dispatch channel, separate from the behaviour tick.

There are 125 types in the tree that derive from it directly, and `Mission` holds them in one list, `MissionLogics`, which is iterated by several different policies. Two of those policies **merge** and two **first-wins**, and getting that difference wrong is the classic bug in this area.

It is instantiated by whoever assembles the mission, never by a resolver: `BannerlordMissions` and `SandBoxMissions` build the arrays and add `new MissionLogic` subclasses by hand (`BannerlordMissions.cs:238`, `BannerlordMissions.cs:242`).

## Mental Model

`OnEndMissionRequest(out bool canLeave)` is first-wins and *aborting*. `Mission.OnEndMissionRequest` loops the list and returns the instant it sees `canLeave == false`, clearing `_leaveMissionTimer` on the way (`Mission.cs:3459`, `Mission.cs:3461`); it also returns the moment any logic returns a non-null `InquiryData`, after showing it (`Mission.cs:3464`, `Mission.cs:3467`). So returning `canLeave = false` from a logic placed late in the array means every earlier logic already had its chance to speak, and yours wins only because nothing before it objected. Returning a non-null `InquiryData` does **not** set `canLeave` — the two are independent levers, and a logic returning both a `false` and an inquiry is judged on the `false` first.

`MissionEnded(ref MissionResult)` is first-wins too, and it is the one that ends the battle: the loop takes the **first** logic that returns true, assigns `this.MissionResult = missionResult`, sets `MissionEnded = true`, fires `MissionResultReady` and returns (`Mission.cs:4468` through `Mission.cs:4474`). The `ref` parameter is how a logic supplies the result — the caller passes a local `missionResult` that starts null, so a logic that returns `true` without assigning it ends the mission with a null result. Note the asymmetry with the *next* call: `OnMissionResultReady(missionResult)` then notifies **every** logic (`Mission.cs:4483`, `Mission.cs:4485`), so the veto is first-wins but the notification is broadcast.

`GetExtraEquipmentElementsForCharacter` is the odd one out: it **merges**. `Mission` accumulates every non-null return into one list with `AddRange` (`Mission.cs:4456`) and hands the union back. Returning `null` — which is what the base implementation does (`MissionLogic.cs:62`) — means "I contribute nothing", not "there is nothing".

`BehaviorType` returning `MissionBehaviorType.Logic` is not decoration. `MissionBehaviorType` is how the mission sorts behaviours into buckets, and declaring yourself a `Logic` puts you in the list that the end-of-mission and extra-equipment policies iterate, rather than the general tick.

## How to use

**Getting it.** Add your instance to the mission's behaviour array at assembly time, or from another behaviour's initialisation if the mission is already live:

```csharp
public class MyEndCondition : MissionLogic
{
    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (Timer > 300f)
        {
            // MUST assign through the ref: the caller starts it null (Mission.cs:4467)
            // and will hand this value to every OnMissionResultReady implementation.
            missionResult = new MissionResult(BattleSideEnum.Defender);
            return true;
        }
        return false;
    }

    public override void OnEndMissionRequest(out bool canLeave)
    {
        canLeave = true;         // false vetoes the leave outright (Mission.cs:3459)
        canLeave = Timer > 30f;  // no confirmation dialog before 30s
    }

    public override List<EquipmentElement> GetExtraEquipmentElementsForCharacter(
        BasicCharacterObject character, bool getAllEquipments = false)
    {
        // Returned lists are AddRange'd together (Mission.cs:4456); null means "nothing".
        return null;
    }
}

// in your mission assembly
Mission.Current.AddMissionBehavior(new MyEndCondition());
```

**The mistake that ends the battle with a null result.** Returning `true` from `MissionEnded` without assigning the `ref` parameter, expecting the base or the caller to fill it in. `Mission` declares a local that starts as null and only ever writes what your logic wrote (`Mission.cs:4467`, `Mission.cs:4471`); the base implementation returns `false` unconditionally (`MissionLogic.cs:30`), so nothing supplies a default. The mission then ends, `MissionResultReady` is broadcast with null, and every downstream consumer — results screen, statistics, campaign state — reads null.

## Key Properties

| Name | Signature |
|------|-----------|
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## Key Methods

### OnEndMissionRequest
`public virtual InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
var result = missionLogic.OnEndMissionRequest(canLeave);
```

### MissionEnded
`public virtual bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
var result = missionLogic.MissionEnded(missionResult);
```

### OnBattleEnded
`public virtual void OnBattleEnded()`

**Purpose:** Invoked when the battle ended event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnBattleEnded();
```

### ShowBattleResults
`public virtual void ShowBattleResults()`

**Purpose:** Displays the UI or element associated with battle results.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.ShowBattleResults();
```

### OnRetreatMission
`public virtual void OnRetreatMission()`

**Purpose:** Invoked when the retreat mission event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnRetreatMission();
```

### OnSurrenderMission
`public virtual void OnSurrenderMission()`

**Purpose:** Invoked when the surrender mission event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnSurrenderMission();
```

### OnAutoDeployTeam
`public virtual void OnAutoDeployTeam(Team team)`

**Purpose:** Invoked when the auto deploy team event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnAutoDeployTeam(team);
```

### GetExtraEquipmentElementsForCharacter
`public virtual List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**Purpose:** Reads and returns the extra equipment elements for character value held by the this instance.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
var result = missionLogic.GetExtraEquipmentElementsForCharacter(character, false);
```

### OnMissionResultReady
`public virtual void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** Invoked when the mission result ready event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnMissionResultReady(missionResult);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionLogic instance = ...;
```

## See Also

- [MissionSiegeEnginesLogic — a concrete logic with a two-list constructor](../MissionSiegeEnginesLogic)
- [MissionHintLogic — a logic in this tree that nothing ever constructs](../MissionHintLogic)
- [MissionFacialAnimationHandler — a logic whose only real method is dead code](../MissionFacialAnimationHandler)
- [MissionBehavior — the base type carrying the tick channel this one complements](../../mission/MissionBehavior)
- [Area Index](../)