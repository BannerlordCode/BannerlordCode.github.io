---
title: "ApplyWeatherEffectsModel"
description: "Auto-generated class reference for ApplyWeatherEffectsModel."
---
# ApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ApplyWeatherEffectsModel : MBGameModel<ApplyWeatherEffectsModel>`
**Base:** `MBGameModel<ApplyWeatherEffectsModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ApplyWeatherEffectsModel.cs`

## Overview

A 13-line abstract game model with exactly one member: `ApplyWeatherEffects()` (`ApplyWeatherEffectsModel.cs:10`). It takes no parameters and returns nothing. It exists to mark the one point in mission startup at which weather is committed, so a mod can decide what the sky looks like for a battle.

## Mental Model

Think of it as a one-shot notification rather than a system you drive. `MissionGameModels` binds the slot with `base.GetGameModel<ApplyWeatherEffectsModel>()` (`MissionGameModels.cs:100`) and exposes it as `MissionGameModels.Current.ApplyWeatherEffectsModel` (`MissionGameModels.cs:24`). The single call site sits in mission startup: after every `MissionObject.AfterMissionStart()` has run (`Mission.cs:3441`-`Mission.cs:3443`) and immediately before the mission enters `Mission.State.Continuing` (`Mission.cs:3449`). Two concrete implementations ship — the sandbox one (`SandboxApplyWeatherEffectsModel.cs:12`) and the custom-battle one (`CustomBattleApplyWeatherEffectsModel.cs:11`) — so the behaviour differs between campaign battles and custom battles out of the box.

## How to use

**Getting one.** Subclass it, register the subclass as a `GameModel`, and the mission calls it once at startup. You never construct it yourself and nothing hands it the mission it is running in.

**Typical use.**

```csharp
public sealed class MyModWeatherModel : ApplyWeatherEffectsModel
{
    // The only member (ApplyWeatherEffectsModel.cs:10): no mission, no agent, no arguments.
    public override void ApplyWeatherEffects()
    {
        // Nothing is passed in, so the active mission has to be fetched - Mission.cs:3447
        // calls this with no arguments at all.
        Mission mission = Mission.Current;
        float rain = mission.Scene.GetRainDensity();
        ApplyMyModWeather(rain);
    }
}
```

**Watch out.** `ApplyWeatherEffects` takes **no arguments at all** — not even the `Mission` it is affecting — so an override has to reach the active mission through `Mission.Current` rather than being handed it. And it is called exactly once, from `Mission.cs:3447`, during startup; there is no second call and no tick. Anything a mod sets here is baked in for the whole battle, and a weather state that is supposed to change mid-mission has no hook in this model to change it. The call site is also null-guarded (`Mission.cs:3445`), so registering no implementation at all produces a silent no-op rather than a missing-method error.

## Key Methods

### ApplyWeatherEffects
`public abstract void ApplyWeatherEffects()`

**Purpose:** Applies the effect of weather effects to the this instance.

```csharp
// Obtain an instance of ApplyWeatherEffectsModel from the subsystem API first
ApplyWeatherEffectsModel applyWeatherEffectsModel = ...;
applyWeatherEffectsModel.ApplyWeatherEffects();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ApplyWeatherEffectsModel instance = ...;
```

## See Also

- [Area Index](../)
- [MBGameModel](../../core-extra/MBGameModel)
- [Mission](../../mission/Mission)