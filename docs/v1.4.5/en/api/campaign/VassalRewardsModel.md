<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VassalRewardsModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VassalRewardsModel : MBGameModel<VassalRewardsModel>`
**Base:** `MBGameModel<VassalRewardsModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VassalRewardsModel.cs`

## Overview

`VassalRewardsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `VassalRewardsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `InfluenceReward` | `public abstract float InfluenceReward { get; }` |
| `RelationRewardWithLeader` | `public abstract int RelationRewardWithLeader { get; }` |

## Key Methods

### GetTroopRewardsForJoiningKingdom
`public abstract TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)`

**Purpose:** Gets the current value of `troop rewards for joining kingdom`.

### GetEquipmentRewardsForJoiningKingdom
`public abstract ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)`

**Purpose:** Gets the current value of `equipment rewards for joining kingdom`.

## Usage Example

```csharp
var implementation = new CustomVassalRewardsModel();
```

## See Also

- [Complete Class Catalog](../catalog)