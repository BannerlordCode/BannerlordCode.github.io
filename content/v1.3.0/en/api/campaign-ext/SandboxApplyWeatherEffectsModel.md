---
title: "SandboxApplyWeatherEffectsModel"
description: "Auto-generated class reference for SandboxApplyWeatherEffectsModel."
---
# SandboxApplyWeatherEffectsModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxApplyWeatherEffectsModel : ApplyWeatherEffectsModel`
**Base:** `ApplyWeatherEffectsModel`
**File:** `SandBox/GameComponents/SandboxApplyWeatherEffectsModel.cs`

## Overview

`SandboxApplyWeatherEffectsModel` translates scene weather into the three multipliers the missile system reads, and it is the whole implementation — one override, no branching on campaign state. `ApplyWeatherEffects` (`SandBox/GameComponents/SandboxApplyWeatherEffectsModel.cs:12`) reads `GetRainDensity()` and `GetSnowDensity()` off the mission's scene, and if either is above zero sets bow and crossbow missile speed to `0.9f` and otherwise to `1f` (`:21`); independently, fog above zero sets the missile range modifier to `0.8f` (`:23`). The method also returns without touching anything when there is no scene, which is how it stays safe to call outside a mission.

## Mental Model

See it as a one-shot scene-to-simulation sync rather than a live query: the numbers it writes sit on `Mission` until the mission ends, and nothing re-reads the weather afterwards. `Mission.cs:3447` calls `ApplyWeatherEffects` once per mission start, guarded by a null check at `Mission.cs:3445`. That makes the override a natural place for a mod to add snow or night penalties on top of the stock rain rule, and it makes a mistake expensive in a specific way — because the modifiers are absolute assignments rather than multiplications, a second model in the chain silently *overwrites* the first one's numbers instead of compounding them. Return your value before calling anything else that touches `Mission.Current`.

## Key Methods

### ApplyWeatherEffects
`public override void ApplyWeatherEffects()`

**Purpose:** Applies the effect of weather effects to this instance.

```csharp
SandboxApplyWeatherEffectsModel sandboxApplyWeatherEffectsModel = ...;
sandboxApplyWeatherEffectsModel.ApplyWeatherEffects();
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<ApplyWeatherEffectsModel>(new SandboxApplyWeatherEffectsModel());
}
```

`ApplyWeatherEffectsModel` is declared as `MBGameModel<ApplyWeatherEffectsModel>` (`ApplyWeatherEffectsModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:36`.

## See Also

- [Area Index](../)