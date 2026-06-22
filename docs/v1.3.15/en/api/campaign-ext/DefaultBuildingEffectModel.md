<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBuildingEffectModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingEffectModel : BuildingEffectModel`
**Base:** `BuildingEffectModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingEffectModel.cs`

## Overview

`DefaultBuildingEffectModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBuildingEffectModel>(new MyDefaultBuildingEffectModel())` to change how it computes.

## Key Methods

### GetBuildingEffect
```csharp
public override ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)
```

## Usage Example

```csharp
// Typical usage of DefaultBuildingEffectModel (Model)
Game.Current.ReplaceModel<DefaultBuildingEffectModel>(new MyDefaultBuildingEffectModel());
```

## See Also

- [Complete Class Catalog](../catalog)