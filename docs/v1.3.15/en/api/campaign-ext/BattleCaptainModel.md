<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleCaptainModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleCaptainModel : MBGameModel<BattleCaptainModel>`
**Base:** `MBGameModel<BattleCaptainModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleCaptainModel.cs`

## Overview

`BattleCaptainModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BattleCaptainModel>(new MyBattleCaptainModel())` to change how it computes.

## Key Methods

### GetCaptainRatingForTroopUsages
```csharp
public abstract float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)
```

## Usage Example

```csharp
// Typical usage of BattleCaptainModel (Model)
Game.Current.ReplaceModel<BattleCaptainModel>(new MyBattleCaptainModel());
```

## See Also

- [Complete Class Catalog](../catalog)