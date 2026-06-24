<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxApplyWeatherEffectsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Applies `weather effects` to the current object.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxApplyWeatherEffectsModel>(new MySandboxApplyWeatherEffectsModel());
```

## See Also

- [Complete Class Catalog](../catalog)