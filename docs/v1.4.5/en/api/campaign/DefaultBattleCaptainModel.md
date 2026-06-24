<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBattleCaptainModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleCaptainModel : BattleCaptainModel`
**Base:** `BattleCaptainModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBattleCaptainModel.cs`

## Overview

`DefaultBattleCaptainModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBattleCaptainModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCaptainRatingForTroopUsages
`public override float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)`

**Purpose:** Gets the current value of `captain rating for troop usages`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBattleCaptainModel>(new MyDefaultBattleCaptainModel());
```

## See Also

- [Complete Class Catalog](../catalog)