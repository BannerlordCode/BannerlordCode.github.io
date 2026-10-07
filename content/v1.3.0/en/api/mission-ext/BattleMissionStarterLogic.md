---
title: "BattleMissionStarterLogic"
description: "Auto-generated class reference for BattleMissionStarterLogic."
---
# BattleMissionStarterLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionStarterLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs`

## Overview

`BattleMissionStarterLogic` exists for one line of work: it puts the mission into battle mode. The class is a `MissionLogic` (`BattleMissionStarterLogic.cs:7`) and its entire behaviour is `AfterStart` calling `Mission.SetMissionMode(MissionMode.Battle, true)` (`BattleMissionStarterLogic.cs:22`).

What makes it worth documenting is its second constructor. `BattleMissionStarterLogic(IMissionTroopSupplier defenderTroopSupplier = null, IMissionTroopSupplier attackerTroopSupplier = null)` (`BattleMissionStarterLogic.cs:15`) declares two troop suppliers and its body is empty. Both parameters are discarded — nothing in the type reads them, stores them, or forwards them. Passing them changes no behaviour at all.

The type also declares a second, parameterless constructor (`BattleMissionStarterLogic.cs:10`) that does not chain to the other one; both leave the object in exactly the same state, because that state is empty.

## Mental Model

Read this as a named flag-setting behaviour, not as a configurable component. There is no instance state to speak of, no way to influence the outcome, and exactly one observable effect: at `AfterStart`, the mission's mode becomes `MissionMode.Battle`.

Two boundaries follow. First, the second constructor is a trap shaped like an extension point. `IMissionTroopSupplier` is the interface that decides which troops appear on a side, so the signature strongly suggests you can inject a custom roster here. You cannot — the parameters are inert. A modder who supplies a custom supplier and observes no change in the deployed troops has found the actual behaviour of the code, not a bug in their supplier.

Second, timing. `SetMissionMode` runs in `AfterStart`, which the mission calls after every behavior and handler has had its `onInitialization`. Anything you do to mission state from another behavior's `onInitialization` runs *before* this call and will be operating on the pre-battle mode; anything you read back afterwards sees `MissionMode.Battle`. And because this logic has no opt-out, adding it twice sets the mode twice — harmless, but it tells you the class has no idempotence guard and is designed to be added exactly once.

## How to use

**Getting one.** Construct it with the parameterless constructor and add it to the mission's behavior list, the way the shipped battles do — `SandBoxMissions` places `new BattleMissionStarterLogic()` in the behavior array of each battle mission definition.

```csharp
using TaleWorlds.MountAndBlade;

public class MyModMissionLogic : MissionLogic
{
    public override void onInitialization()
    {
        base.onInitialization();

        // Puts the mission into MissionMode.Battle at AfterStart.
        // Do NOT pass troop suppliers here — the two-argument overload ignores them.
        Mission.Current.AddMissionBehavior(new BattleMissionStarterLogic());
    }

    public override void AfterStart()
    {
        base.AfterStart();

        bool inBattle = Mission.Current.Mode == MissionMode.Battle;
        Debug.Print($"mission mode is battle: {inBattle}");
    }
}
```

If you genuinely need to control troop composition, do it through the mission's troop supplier wiring at mission-creation time instead of through this class, because this class will not carry your supplier anywhere.

**The most common mistake** is passing troop suppliers and believing they took effect. `BattleMissionStarterLogic(IMissionTroopSupplier, IMissionTroopSupplier)` has an empty body (`BattleMissionStarterLogic.cs:15`) — the arguments are never read. Nothing throws, no assertion fires, and the mission deploys the default troops exactly as if you had used the parameterless constructor. If your custom troops silently do not appear in a battle and you find this constructor on your suspect list, that is the reason: the overload exists in the API surface but is dead code, so remove the arguments and wire the supplier where the mission actually reads it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleMissionStarterLogic from the subsystem API first
BattleMissionStarterLogic battleMissionStarterLogic = ...;
battleMissionStarterLogic.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleMissionStarterLogic>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic) — the base type it derives from
- [IMissionTroopSupplier](../../core-extra/IMissionTroopSupplier) — the interface its second constructor accepts and discards
- [Mission](../../mission/Mission) — the object whose mode `AfterStart` changes