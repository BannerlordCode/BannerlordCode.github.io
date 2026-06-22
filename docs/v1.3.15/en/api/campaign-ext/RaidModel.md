<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RaidModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RaidModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`
**Base:** `MBGameModel<RaidModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs`

## Overview

`RaidModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<RaidModel>(new MyRaidModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public abstract int GoldRewardForEachLostHearth { get; }` |

## Key Methods

### GetCommonLootItemScores
```csharp
public abstract MBReadOnlyList<ValueTuple<ItemObject, float>> GetCommonLootItemScores()
```

### CalculateHitDamage
```csharp
public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)
```

## Usage Example

```csharp
// Typical usage of RaidModel (Model)
Game.Current.ReplaceModel<RaidModel>(new MyRaidModel());
```

## See Also

- [Complete Class Catalog](../catalog)