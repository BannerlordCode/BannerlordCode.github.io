<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VassalRewardsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VassalRewardsModel : MBGameModel<VassalRewardsModel>`
**Base:** `MBGameModel<VassalRewardsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs`

## Overview

`VassalRewardsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<VassalRewardsModel>(new MyVassalRewardsModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `InfluenceReward` | `public abstract float InfluenceReward { get; }` |
| `RelationRewardWithLeader` | `public abstract int RelationRewardWithLeader { get; }` |

## Key Methods

### GetTroopRewardsForJoiningKingdom
```csharp
public abstract TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)
```

### GetEquipmentRewardsForJoiningKingdom
```csharp
public abstract ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)
```

## Usage Example

```csharp
// Typical usage of VassalRewardsModel (Model)
Game.Current.ReplaceModel<VassalRewardsModel>(new MyVassalRewardsModel());
```

## See Also

- [Complete Class Catalog](../catalog)