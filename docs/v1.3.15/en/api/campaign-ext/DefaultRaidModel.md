<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultRaidModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRaidModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRaidModel : RaidModel`
**Base:** `RaidModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRaidModel.cs`

## Overview

`DefaultRaidModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultRaidModel>(new MyDefaultRaidModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public override int GoldRewardForEachLostHearth { get; }` |

## Key Methods

### CalculateHitDamage
```csharp
public override ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)
```

### GetCommonLootItemScores
```csharp
public override MBReadOnlyList<ValueTuple<ItemObject, float>> GetCommonLootItemScores()
```

## Usage Example

```csharp
// Typical usage of DefaultRaidModel (Model)
Game.Current.ReplaceModel<DefaultRaidModel>(new MyDefaultRaidModel());
```

## See Also

- [Complete Class Catalog](../catalog)