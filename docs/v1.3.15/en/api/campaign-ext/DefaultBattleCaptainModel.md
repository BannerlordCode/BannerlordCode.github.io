<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBattleCaptainModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleCaptainModel : BattleCaptainModel`
**Base:** `BattleCaptainModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBattleCaptainModel.cs`

## Overview

`DefaultBattleCaptainModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBattleCaptainModel>(new MyDefaultBattleCaptainModel())` to change how it computes.

## Key Methods

### GetCaptainRatingForTroopUsages
```csharp
public override float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)
```

## Usage Example

```csharp
// Typical usage of DefaultBattleCaptainModel (Model)
Game.Current.ReplaceModel<DefaultBattleCaptainModel>(new MyDefaultBattleCaptainModel());
```

## See Also

- [Complete Class Catalog](../catalog)