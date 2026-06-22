<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultRansomValueCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRansomValueCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRansomValueCalculationModel : RansomValueCalculationModel`
**Base:** `RansomValueCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRansomValueCalculationModel.cs`

## Overview

`DefaultRansomValueCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultRansomValueCalculationModel>(new MyDefaultRansomValueCalculationModel())` to change how it computes.

## Key Methods

### PrisonerRansomValue
```csharp
public override int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)
```

## Usage Example

```csharp
// Typical usage of DefaultRansomValueCalculationModel (Model)
Game.Current.ReplaceModel<DefaultRansomValueCalculationModel>(new MyDefaultRansomValueCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)