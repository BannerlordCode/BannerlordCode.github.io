<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMinorFactionsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMinorFactionsModel : MinorFactionsModel`
**Base:** `MinorFactionsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs`

## Overview

`DefaultMinorFactionsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultMinorFactionsModel>(new MyDefaultMinorFactionsModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DailyMinorFactionHeroSpawnChance` | `public override float DailyMinorFactionHeroSpawnChance { get; }` |
| `MinorFactionHeroLimit` | `public override int MinorFactionHeroLimit { get; }` |

## Key Methods

### GetMercenaryAwardFactorToJoinKingdom
```csharp
public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)
```

## Usage Example

```csharp
// Typical usage of DefaultMinorFactionsModel (Model)
Game.Current.ReplaceModel<DefaultMinorFactionsModel>(new MyDefaultMinorFactionsModel());
```

## See Also

- [Complete Class Catalog](../catalog)