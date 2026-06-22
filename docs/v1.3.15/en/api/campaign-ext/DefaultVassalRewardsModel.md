<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVassalRewardsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVassalRewardsModel : VassalRewardsModel`
**Base:** `VassalRewardsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs`

## Overview

`DefaultVassalRewardsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultVassalRewardsModel>(new MyDefaultVassalRewardsModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `RelationRewardWithLeader` | `public override int RelationRewardWithLeader { get; }` |
| `InfluenceReward` | `public override float InfluenceReward { get; }` |

## Key Methods

### GetEquipmentRewardsForJoiningKingdom
```csharp
public override ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)
```

### GetTroopRewardsForJoiningKingdom
```csharp
public override TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)
```

## Usage Example

```csharp
// Typical usage of DefaultVassalRewardsModel (Model)
Game.Current.ReplaceModel<DefaultVassalRewardsModel>(new MyDefaultVassalRewardsModel());
```

## See Also

- [Complete Class Catalog](../catalog)