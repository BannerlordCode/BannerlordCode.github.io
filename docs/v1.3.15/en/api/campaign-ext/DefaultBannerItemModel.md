<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBannerItemModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs`

## Overview

`DefaultBannerItemModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBannerItemModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPossibleRewardBannerItems
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**Purpose:** Gets the current value of `possible reward banner items`.

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**Purpose:** Gets the current value of `possible reward banner items for hero`.

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**Purpose:** Gets the current value of `banner item level for hero`.

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**Purpose:** Checks whether the current object can `banner be updated`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBannerItemModel>(new MyDefaultBannerItemModel());
```

## See Also

- [Complete Class Catalog](../catalog)