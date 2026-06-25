---
title: "StoryModeBannerItemModel"
description: "Auto-generated class reference for StoryModeBannerItemModel."
---
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

**Purpose:** Reads and returns the possible reward banner items value held by the this instance.

```csharp
// Obtain an instance of StoryModeBannerItemModel from the subsystem API first
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetPossibleRewardBannerItems();
```

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**Purpose:** Checks whether the this instance meets the preconditions for banner be updated.

```csharp
// Obtain an instance of StoryModeBannerItemModel from the subsystem API first
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.CanBannerBeUpdated(item);
```

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**Purpose:** Reads and returns the possible reward banner items for hero value held by the this instance.

```csharp
// Obtain an instance of StoryModeBannerItemModel from the subsystem API first
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetPossibleRewardBannerItemsForHero(hero);
```

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**Purpose:** Reads and returns the banner item level for hero value held by the this instance.

```csharp
// Obtain an instance of StoryModeBannerItemModel from the subsystem API first
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetBannerItemLevelForHero(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeBannerItemModel>(new MyStoryModeBannerItemModel());
```

## See Also

- [Area Index](../)