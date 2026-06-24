<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerItemModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>`
**Base:** `MBGameModel<BannerItemModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs`

## Overview

`BannerItemModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BannerItemModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPossibleRewardBannerItems
`public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**Purpose:** Gets the current value of `possible reward banner items`.

### GetPossibleRewardBannerItemsForHero
`public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**Purpose:** Gets the current value of `possible reward banner items for hero`.

### GetBannerItemLevelForHero
`public abstract int GetBannerItemLevelForHero(Hero hero)`

**Purpose:** Gets the current value of `banner item level for hero`.

### CanBannerBeUpdated
`public abstract bool CanBannerBeUpdated(ItemObject item)`

**Purpose:** Checks whether the current object can `banner be updated`.

## Usage Example

```csharp
var implementation = new CustomBannerItemModel();
```

## See Also

- [Complete Class Catalog](../catalog)