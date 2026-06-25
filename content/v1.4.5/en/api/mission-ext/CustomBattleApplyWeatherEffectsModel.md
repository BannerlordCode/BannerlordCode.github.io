---
title: "CustomBattleApplyWeatherEffectsModel"
description: "Auto-generated class reference for CustomBattleApplyWeatherEffectsModel."
---
# CustomBattleApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleApplyWeatherEffectsModel : ApplyWeatherEffectsModel`
**Base:** `ApplyWeatherEffectsModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleApplyWeatherEffectsModel.cs`

## Overview

`CustomBattleApplyWeatherEffectsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleApplyWeatherEffectsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ApplyWeatherEffects
`public override void ApplyWeatherEffects()`

**Purpose:** **Purpose:** Applies the effect of weather effects to the this instance.

```csharp
// Obtain an instance of CustomBattleApplyWeatherEffectsModel from the subsystem API first
CustomBattleApplyWeatherEffectsModel customBattleApplyWeatherEffectsModel = ...;
customBattleApplyWeatherEffectsModel.ApplyWeatherEffects();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleApplyWeatherEffectsModel>(new MyCustomBattleApplyWeatherEffectsModel());
```

## See Also

- [Area Index](../)