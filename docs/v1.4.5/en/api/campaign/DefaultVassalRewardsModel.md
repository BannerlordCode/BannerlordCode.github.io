<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVassalRewardsModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultVassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVassalRewardsModel : VassalRewardsModel`
**Base:** `VassalRewardsModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVassalRewardsModel.cs`

## Overview

`DefaultVassalRewardsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultVassalRewardsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentRewardsForJoiningKingdom
`public override ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)`

**Purpose:** Gets the current value of `equipment rewards for joining kingdom`.

### GetTroopRewardsForJoiningKingdom
`public override TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)`

**Purpose:** Gets the current value of `troop rewards for joining kingdom`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVassalRewardsModel>(new MyDefaultVassalRewardsModel());
```

## See Also

- [Complete Class Catalog](../catalog)