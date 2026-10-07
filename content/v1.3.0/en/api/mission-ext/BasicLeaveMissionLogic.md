---
title: "BasicLeaveMissionLogic"
description: "Auto-generated class reference for BasicLeaveMissionLogic."
---
# BasicLeaveMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicLeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs`

## Overview

`BasicLeaveMissionLogic` is the small piece of bookkeeping that decides when the player may press "leave" in a skirmish or battle and when the mission simply ends underneath them. It is a `MissionLogic` (`BasicLeaveMissionLogic.cs:8`), added to a mission's `Logic` list before the mission starts — `SandBoxMissions` adds `new BasicLeaveMissionLogic()` to roughly a dozen battle and siege definitions (`SandBoxMissions.cs:95`).

It owns two readonly fields, `_askBeforeLeave` and `_minRetreatDistance` (`BasicLeaveMissionLogic.cs:50`), and no state that changes afterwards. What makes it interesting is not what it stores but the split between its two overrides. `MissionEnded` does not consult either field at all: it returns true purely when the main agent exists and is no longer active (`BasicLeaveMissionLogic.cs:28`). All the configuration affects only `OnEndMissionRequest`, which either refuses the request outright or returns an `InquiryData` confirmation dialog.

The three-constructor ladder is what a modder actually touches. `BasicLeaveMissionLogic()` chains to `(false)` (`BasicLeaveMissionLogic.cs:11`), which chains to `(askBeforeLeave, 5)` (`BasicLeaveMissionLogic.cs:16`) — so the default minimum retreat distance is **5**, not 0.

## Mental Model

This is a state machine with two entry points and one hard gate, and the gate is the part to understand.

`MissionEnded` is the escape hatch. It asks only `Mission.MainAgent != null && !Mission.MainAgent.IsActive()` (`BasicLeaveMissionLogic.cs:30`). A main agent that dies, is killed, or otherwise becomes inactive ends the mission outright — no confirmation, no distance check, no consultation of `_askBeforeLeave`.

`OnEndMissionRequest` is the polite path, and it consults two settings in a strict order. If the main agent is alive, `_minRetreatDistance > 0`, and `Mission.IsPlayerCloseToAnEnemy` reports true within that distance, it sets `canPlayerLeave = false` and shows the `str_can_not_retreat` message (`BasicLeaveMissionLogic.cs:37`). Note it does **not** return an `InquiryData` in that case — it returns `null`, and the `canPlayerLeave` out-parameter is what does the blocking. Only when the gate is *not* tripped and `_askBeforeLeave` is set does it build and return the `str_give_up_fight` confirmation `InquiryData` (`BasicLeaveMissionLogic.cs:42`).

The boundaries that surprise people: setting `_minRetreatDistance` to 0 disables the proximity gate entirely, because the test is `(float)this._minRetreatDistance > 0f` (`BasicLeaveMissionLogic.cs:37`) — a zero is not "no minimum", it is "no check", which is the opposite of what the name implies to some readers. And overriding either method without calling `base` changes the whole contract, because the two are independent: returning `false` from `MissionEnded` does not stop `OnEndMissionRequest` from firing, and vice versa.

## How to use

**Getting one.** Construct it yourself and add it to the mission's logic list in the mission's `onInitialization` hook, mirroring how the shipped battles do it (`SandBoxMissions.cs:176`):

```csharp
using TaleWorlds.MountAndBlade;

public class MyModBattleMissionLogic : MissionLogic
{
    public override void onInitialization()
    {
        base.onInitialization();

        // askBeforeLeave: true = confirm with a dialog before leaving.
        // minRetreatDistance: metres; 0 disables the proximity check entirely.
        Mission.Current.AddMissionBehavior(new BasicLeaveMissionLogic(true, minRetreatDistance: 25));
    }
}
```

Reading and extending the behaviour:

```csharp
using TaleWorlds.MountAndBlade;

// Build it and ask whether the mission has ended, same test the engine uses.
BasicLeaveMissionLogic logic = new BasicLeaveMissionLogic(askBeforeLeave: true, minRetreatDistance: 5);

bool ended = logic.MissionEnded(ref missionResult);

// Ask whether the player may leave right now. `canPlayerLeave` is set even when
// the returned InquiryData is null.
bool canPlayerLeave;
InquiryData confirmDialog = logic.OnEndMissionRequest(out canPlayerLeave);

if (confirmDialog != null)
{
    // A confirmation was requested; non-null means the player is far enough away.
    ShowConfirmation(confirmDialog);
}
else if (!canPlayerLeave)
{
    // Blocked: too close to an enemy, or the main agent is already gone.
    Debug.Print("Retreat refused.");
}
```

**The most common mistake** is passing `minRetreatDistance: 0` and then acting as though zero means "the player may never leave while enemies are nearby". It is the opposite: the whole proximity test is guarded by `(float)this._minRetreatDistance > 0f` (`BasicLeaveMissionLogic.cs:37`), so zero skips the check and the player can retreat from the middle of the enemy line with no message and no dialog — even with `askBeforeLeave: true`, because the `else if` that builds the confirmation is only reached when the gate did not trip (`BasicLeaveMissionLogic.cs:42`). Pass a positive distance if you want the guard.

## Key Methods

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of BasicLeaveMissionLogic from the subsystem API first
BasicLeaveMissionLogic basicLeaveMissionLogic = ...;
var result = basicLeaveMissionLogic.MissionEnded(missionResult);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of BasicLeaveMissionLogic from the subsystem API first
BasicLeaveMissionLogic basicLeaveMissionLogic = ...;
var result = basicLeaveMissionLogic.OnEndMissionRequest(canPlayerLeave);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BasicLeaveMissionLogic>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic) — the base type every mission behaviour derives from
- [MissionResult](../../core-extra/MissionResult) — the out-parameter type `MissionEnded` writes
- [Mission](../../mission/Mission) — owner of the logic list and the `MainAgent` being tested
- [MBInformationManager](../../core-extra/MBInformationManager) — shows the `str_can_not_retreat` refusal message