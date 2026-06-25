---
title: "ApplyWeatherEffectsModel"
description: "Auto-generated class reference for ApplyWeatherEffectsModel."
---
# ApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ApplyWeatherEffectsModel : MBGameModel<ApplyWeatherEffectsModel>`
**Base:** `MBGameModel<ApplyWeatherEffectsModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/ApplyWeatherEffectsModel.cs`

## Overview

`ApplyWeatherEffectsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ApplyWeatherEffectsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ApplyWeatherEffects
`public abstract void ApplyWeatherEffects()`

**Purpose:** **Purpose:** Applies the effect of weather effects to the this instance.

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