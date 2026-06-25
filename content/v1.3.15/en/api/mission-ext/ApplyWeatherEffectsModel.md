---
title: "ApplyWeatherEffectsModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplyWeatherEffectsModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ApplyWeatherEffectsModel : MBGameModel<ApplyWeatherEffectsModel>`
**Base:** `MBGameModel<ApplyWeatherEffectsModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ApplyWeatherEffectsModel.cs`

## Overview

`ApplyWeatherEffectsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ApplyWeatherEffectsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ApplyWeatherEffects
`public abstract void ApplyWeatherEffects()`

**Purpose:** Applies `weather effects` to the current object.

## Usage Example

```csharp
var implementation = new CustomApplyWeatherEffectsModel();
```

## See Also

- [Complete Class Catalog](../catalog)