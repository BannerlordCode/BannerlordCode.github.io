<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MinorFactionsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MinorFactionsModel : MBGameModel<MinorFactionsModel>`
**Base:** `MBGameModel<MinorFactionsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs`

## Overview

`MinorFactionsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MinorFactionsModel>(new MyMinorFactionsModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DailyMinorFactionHeroSpawnChance` | `public abstract float DailyMinorFactionHeroSpawnChance { get; }` |
| `MinorFactionHeroLimit` | `public abstract int MinorFactionHeroLimit { get; }` |

## Key Methods

### GetMercenaryAwardFactorToJoinKingdom
```csharp
public abstract int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)
```

## Usage Example

```csharp
// Typical usage of MinorFactionsModel (Model)
Game.Current.ReplaceModel<MinorFactionsModel>(new MyMinorFactionsModel());
```

## See Also

- [Complete Class Catalog](../catalog)