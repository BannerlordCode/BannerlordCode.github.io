---
title: "StoryModeBannerItemModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeBannerItemModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeBannerItemModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `StoryMode/GameComponents/StoryModeBannerItemModel.cs`

## Overview

`StoryModeBannerItemModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeBannerItemModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPossibleRewardBannerItems
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**Purpose:** Gets the current value of `possible reward banner items`.

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**Purpose:** Checks whether the current object can `banner be updated`.

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**Purpose:** Gets the current value of `possible reward banner items for hero`.

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**Purpose:** Gets the current value of `banner item level for hero`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeBannerItemModel>(new MyStoryModeBannerItemModel());
```

## See Also

- [Complete Class Catalog](../catalog)