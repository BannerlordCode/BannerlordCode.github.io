<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleCaptainModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleCaptainModel : MBGameModel<BattleCaptainModel>`
**Base:** `MBGameModel<BattleCaptainModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleCaptainModel.cs`

## Overview

`BattleCaptainModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleCaptainModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCaptainRatingForTroopUsages
`public abstract float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)`

**Purpose:** Gets the current value of `captain rating for troop usages`.

## Usage Example

```csharp
var implementation = new CustomBattleCaptainModel();
```

## See Also

- [Complete Class Catalog](../catalog)