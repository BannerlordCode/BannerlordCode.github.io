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

`SandboxApplyWeatherEffectsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxApplyWeatherEffectsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ApplyWeatherEffects
`public override void ApplyWeatherEffects()`

**Purpose:** **Purpose:** Applies the effect of weather effects to the this instance.

```csharp
// Obtain an instance of SandboxApplyWeatherEffectsModel from the subsystem API first
SandboxApplyWeatherEffectsModel sandboxApplyWeatherEffectsModel = ...;
sandboxApplyWeatherEffectsModel.ApplyWeatherEffects();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxApplyWeatherEffectsModel>(new MySandboxApplyWeatherEffectsModel());
```

## See Also

- [Area Index](../)