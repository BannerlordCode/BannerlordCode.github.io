---
title: "MissionGamepadEffectsView"
description: "Auto-generated class reference for MissionGamepadEffectsView."
---
# MissionGamepadEffectsView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGamepadEffectsView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionGamepadEffectsView.cs`

## Overview

`MissionGamepadEffectsView` is a `MissionView` that drives gamepad **haptics and adaptive triggers** for the main agent — bow draw tension, impact feedback, weapon-specific rumble. It contains no UI at all: there is no layer, no data source and no movie. Its entire output goes to the gamepad hardware through the engine's trigger and vibration APIs.

It has **no references anywhere in the tree** — not a `[DefaultView]` attribute, not a `ViewCreator` factory, nothing. So in 1.3.0 it is never instantiated, and its behaviour is dormant. The design is nonetheless complete and worth reading, because it is the clearest example in this area of the activate/deactivate contract that any hardware-facing view must honour.

The lifecycle is the whole story. `OnMissionStateActivated` resets both output channels, snapshots two native options into fields, and then **replaces two static delegates** by combining into them: `NativeOptions.OnNativeOptionChanged` (`MissionGamepadEffectsView.cs:22`) and `Input.OnGamepadActiveStateChanged` (`MissionGamepadEffectsView.cs:23`). `OnMissionStateDeactivated` resets the channels again and removes both handlers with `Delegate.Remove` (`MissionGamepadEffectsView.cs:42`, `MissionGamepadEffectsView.cs:43`). That pairing is exact, and it is the only thing standing between this class and a leak: both delegates are static, so an unbalanced activation leaves a live view receiving option changes after its mission is gone.

## Mental Model

`_isAdaptiveTriggerEnabled` and `_usingAlternativeAiming` are **snapshots of native config taken at activation**, refreshed only by the option-change handler (`MissionGamepadEffectsView.cs:20`, `MissionGamepadEffectsView.cs:21`, `MissionGamepadEffectsView.cs:218`). The gate on the whole per-tick trigger work is that first flag plus a long conjunction: main agent present, state `Active`, `CombatActionsEnabled`, not cheering, order menu closed, and the mission mode applicable (`MissionGamepadEffectsView.cs:51` through `MissionGamepadEffectsView.cs:53`). Six conditions, and the model checks `IsMissionModeApplicableForAdaptiveTrigger` against a `switch` that lists only five modes — `StartUp`, `Battle`, `Duel`, `Stealth`, `Tournament` (`MissionGamepadEffectsView.cs:233` through `MissionGamepadEffectsView.cs:237`) and returns `false` for everything else, including `Deployment` (`MissionGamepadEffectsView.cs:240`). So triggers are silently off in deployment and in cutscenes, by whitelist rather than by exclusion.

The option-change handler only reacts to `EnableVibration` (`MissionGamepadEffectsView.cs:215`), and it refreshes **both** fields even though only one is relevant (`MissionGamepadEffectsView.cs:218`, `MissionGamepadEffectsView.cs:219`). Its only side effect is on the *disable* edge: `if (isAdaptiveTriggerEnabled && !this._isAdaptiveTriggerEnabled)` then reset both channels (`MissionGamepadEffectsView.cs:220` through `MissionGamepadEffectsView.cs:223`). Enabling mid-mission does not immediately start feedback — it waits for the next qualifying tick.

`OnAgentHit` is where the feedback is chosen, and it has **two disjoint branches**. When the main agent is the victim (`MissionGamepadEffectsView.cs:119`) it inspects `CollisionResult` against three *exclusion* results — `Blocked`, `ChamberBlocked`, `Parried` (`MissionGamepadEffectsView.cs:122`, `MissionGamepadEffectsView.cs:125`, `MissionGamepadEffectsView.cs:128`) — and separately handles an empty offhand weapon (`MissionGamepadEffectsView.cs:149`) and a shield block (`MissionGamepadEffectsView.cs:152`). When the main agent is the attacker (`MissionGamepadEffectsView.cs:159`) it instead **excludes** two results — `StrikeAgent` (`MissionGamepadEffectsView.cs:162`) and `Blocked` (`MissionGamepadEffectsView.cs:165`), so the surviving cases are glancing and clean hits — then checks `MissionWeapon.IsEmpty` and `IsShield()` (`MissionGamepadEffectsView.cs:171`, `MissionGamepadEffectsView.cs:174`). The two branches therefore run opposite tests over the same enum — victim excludes blocked-ish outcomes, attacker excludes *successful* ones — and that asymmetry is the detail to preserve when you copy the structure.

`HandleBowAdaptiveTriggers` is gated by action stage: `None`, `ReloadMidPhase` and `ReloadLastPhase` all bail (`MissionGamepadEffectsView.cs:248`), and the draw is only driven at `AttackReady` (`MissionGamepadEffectsView.cs:253`). Bow tension is therefore tied to the exact ready frame, not to "holding draw".

`OnGamepadActiveStateChanged` resets both channels whenever the pad goes inactive (`MissionGamepadEffectsView.cs:29` through `MissionGamepadEffectsView.cs:32`) — so unplugging the controller mid-battle stops the rumble instead of leaving the motors running.

## How to use

**Getting it.** Nothing constructs it, so register your own instance if you want haptics in your mission — and mirror the activate/deactivate pairing or you will leak a static delegate:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews;

public class MyHaptics : MissionGamepadEffectsView
{
    // The base does the whole job in its overrides; subclass only to add feedback
    // and keep the base calls so the static delegates stay balanced.
    public override void OnAgentHit(Agent affected, Agent affector, in MissionWeapon w,
                                    in Blow blow, in AttackCollisionData data)
    {
        base.OnAgentHit(affected, affector, w, blow, data);
        if (affected == Agent.Main && data.CollisionResult == CombatCollisionResult.StrikeAgent)
        {
            // Your own rumble call here.
        }
    }
}

Mission.Current.AddMissionBehavior(new MyHaptics());
```

Read the two config snapshots the same way if you need them:

```csharp
// These are private; read the native config directly instead of relying on the view.
bool vibrationOn = NativeOptions.GetConfig(NativeOptions.NativeOptionsType.EnableVibration) != 0f;
bool altAiming = NativeOptions.GetConfig(NativeOptions.NativeOptionsType.EnableAlternateAiming) != 0f;
```

**The mistake that leaves the triggers buzzing after the battle ends.** Hooking `NativeOptions.OnNativeOptionChanged` yourself — or subclassing and adding a handler — without a matching removal on mission-state deactivation. The stock code removes its own with `Delegate.Remove` (`MissionGamepadEffectsView.cs:42`), but your addition is not known to it. The delegate is static, so your view survives the mission; a later options-menu change then drives a dead view's output channel, and the symptom is rumble or trigger force that appears out of nowhere in the *next* battle or on the campaign map — with nothing in the log, because no exception is involved.

## Key Methods

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**Purpose:** Invoked when the mission state activated event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnMissionStateActivated();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Invoked when the mission state deactivated event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnMissionStateDeactivated();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnPreMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the agent hit event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGamepadEffectsView from the subsystem API first
MissionGamepadEffectsView missionGamepadEffectsView = ...;
missionGamepadEffectsView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## Usage Example

```csharp
The `MissionGamepadEffectsView view = ...;` placeholder previously on this page was not a runnable line. Nothing in 1.3.0 instantiates this view, so the only way to get one is to construct it yourself:

```csharp
Mission.Current.AddMissionBehavior(new MissionGamepadEffectsView());
```
```

## See Also

- [GamepadCursorViewModel — the other gamepad-hardware-facing type in this bucket](../GamepadCursorViewModel)
- [MissionCameraFadeView — the other `[DefaultView]` behaviour that draws over the mission screen](../MissionCameraFadeView)
- [GauntletGamepadNavigationManager is reached by GauntletDefaultLoadingWindowManager on disable](../GauntletDefaultLoadingWindowManager)
- [Area Index](../)