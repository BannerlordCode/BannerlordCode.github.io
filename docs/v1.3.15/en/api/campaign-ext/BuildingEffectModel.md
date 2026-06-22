<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BuildingEffectModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingEffectModel : MBGameModel<BuildingEffectModel>`
**Base:** `MBGameModel<BuildingEffectModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingEffectModel.cs`

## Overview

`BuildingEffectModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BuildingEffectModel>(new MyBuildingEffectModel())` to change how it computes.

## Key Methods

### GetBuildingEffect
```csharp
public abstract ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)
```

## Usage Example

```csharp
// Typical usage of BuildingEffectModel (Model)
Game.Current.ReplaceModel<BuildingEffectModel>(new MyBuildingEffectModel());
```

## See Also

- [Complete Class Catalog](../catalog)