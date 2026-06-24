<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingEffectModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingEffectModel : MBGameModel<BuildingEffectModel>`
**Base:** `MBGameModel<BuildingEffectModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingEffectModel.cs`

## Overview

`BuildingEffectModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BuildingEffectModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBuildingEffect
`public abstract ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)`

**Purpose:** Gets the current value of `building effect`.

## Usage Example

```csharp
var implementation = new CustomBuildingEffectModel();
```

## See Also

- [Complete Class Catalog](../catalog)