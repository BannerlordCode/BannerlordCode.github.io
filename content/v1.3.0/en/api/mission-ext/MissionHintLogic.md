---
title: "MissionHintLogic"
description: "Auto-generated class reference for MissionHintLogic."
---
# MissionHintLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHintLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`

## Overview

`MissionHintLogic` is a `MissionLogic` that exists to be a one-slot mailbox for "which hint is showing right now". It has a single auto-property, `public MissionHint ActiveHint { get; private set; }` (`MissionHintLogic.cs:12`), a setter method `SetActiveHint(MissionHint hint)` (`MissionHintLogic.cs:15`) and a `Clear()` that nulls it (`MissionHintLogic.cs:21`). No tick, no events, no filtering.

The thing that makes this type notable is that **nothing in 1.3.0 ever constructs it**. A tree-wide search for the type name returns three hits: its own declaration (`MissionHintLogic.cs:7`) and the two references inside `MissionGauntletHintView`, which does `base.Mission.GetMissionBehavior<MissionHintLogic>()` (`MissionGauntletHintView.cs:18`) and holds the result in a private field (`MissionGauntletHintView.cs:42`). There is no `new MissionHintLogic()` anywhere, so that lookup returns null on every mission that ships.

So this is a reserved slot with a consumer already wired up and no producer. The view is written to tolerate the null; the logic is ready for someone to add it.

## Mental Model

`ActiveHint` is a plain field, so nothing enforces that it is set before something reads it, and nothing clears it for you. Two behaviours follow from the design as shipped.

`SetActiveHint` does not replace-and-notify; it assigns and returns. There is no event, no `OnPropertyChanged`, no invalidation. A view that wants to know the hint changed has to poll it — which is exactly what `MissionGauntletHintView` does, by reading the slot on its screen tick. If you set a hint from an event rather than from a tick, a view that only polls at frame rate will show the previous hint until the next frame, and one that only polls once during initialisation will never show it at all.

The slot holds a `MissionHint` from `TaleWorlds.MountAndBlade.Missions.Hints`, which is a different namespace from the type itself — the class is declared in `TaleWorlds.MountAndBlade.Missions.MissionLogics` but imports `TaleWorlds.MountAndBlade.Missions.Hints` (`MissionHintLogic.cs:2`). If you are looking for `MissionHint` and cannot find it, that namespace split is why.

Since it derives from `MissionLogic`, an instance you add also joins the end-of-mission and extra-equipment policies described on `MissionLogic`. Returning `null` from `GetExtraEquipmentElementsForCharacter` is inherited and is what keeps your hint logic out of the character preload path — the mission `AddRange`s every non-null return (`Mission.cs:4456`).

## How to use

**Getting it.** Construct it yourself and add it to the mission; the game will not do it for you. Read it through the same lookup the shipped view uses, and null-check, because on a stock mission it is null.

```csharp
using TaleWorlds.MountAndBlade.Missions.Hints;
using TaleWorlds.MountAndBlade.Missions.MissionLogics;

public class HintDriver : MissionLogic
{
    private MissionHintLogic _hints;

    public override void OnBehaviorInitialize()
    {
        _hints = Mission.GetMissionBehavior<MissionHintLogic>();
        if (_hints == null)
        {
            // Stock game: nobody added one. Add it so the Gauntlet hint view can find it.
            _hints = new MissionHintLogic();
            Mission.AddMissionBehavior(_hints);
        }
    }

    public override void OnMissionTick(float dt)
    {
        // The slot is polled, not pushed: set it and the view picks it up next frame.
        if (Timer > 10f)
        {
            // MissionHint has two constructors: (TextObject, HotKey) and (TextObject, GameKey)
            // (MissionHint.cs:11, MissionHint.cs:18).
            _hints.SetActiveHint(new MissionHint(TextObject.FromString("Press F to rally"), GameKey.F));
        }
        else
        {
            _hints.Clear();
        }
    }
}
```

**The mistake that adds a hint nothing ever shows.** Setting `ActiveHint` from an event that fires before the view's first poll and never touching it again. `SetActiveHint` is a bare assignment with no notification (`MissionHintLogic.cs:17`) and `MissionGauntletHintView` only reads the slot on its screen tick (`MissionGauntletHintView.cs:18`); a hint set once during `OnBehaviorInitialize` is therefore read as null by any view that latched its state before that point, and nothing corrects it until the next `SetActiveHint` call.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveHint` | `public MissionHint ActiveHint { get; }` |

## Key Methods

### SetActiveHint
`public void SetActiveHint(MissionHint hint)`

**Purpose:** Assigns a new value to active hint and updates the object's internal state.

```csharp
// Obtain an instance of MissionHintLogic from the subsystem API first
MissionHintLogic missionHintLogic = ...;
missionHintLogic.SetActiveHint(hint);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MissionHintLogic from the subsystem API first
MissionHintLogic missionHintLogic = ...;
missionHintLogic.Clear();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionHintLogic>();
```

## See Also

- [MissionObjectiveView — the view that projects objective state, the sibling hint surface](../MissionObjectiveView)
- [MissionLogic — the base class whose defaults this type inherits](../MissionLogic)
- [MissionFacialAnimationHandler — another campaign logic nothing ever drives](../MissionFacialAnimationHandler)
- [Mission — behaviour list and the extra-equipment merge](../../mission/Mission)
- [Area Index](../)