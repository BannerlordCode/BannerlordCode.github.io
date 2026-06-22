<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RansomValueCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RansomValueCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RansomValueCalculationModel : MBGameModel<RansomValueCalculationModel>`
**Base:** `MBGameModel<RansomValueCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RansomValueCalculationModel.cs`

## Overview

`RansomValueCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<RansomValueCalculationModel>(new MyRansomValueCalculationModel())` to change how it computes.

## Key Methods

### PrisonerRansomValue
```csharp
public abstract int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)
```

## Usage Example

```csharp
// Typical usage of RansomValueCalculationModel (Model)
Game.Current.ReplaceModel<RansomValueCalculationModel>(new MyRansomValueCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)