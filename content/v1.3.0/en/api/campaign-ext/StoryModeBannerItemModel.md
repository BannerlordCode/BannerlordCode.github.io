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

`StoryModeBannerItemModel` filters one thing out of the banner system: the dragon banner, which the story reserves. `IsItemDragonBanner` is the private predicate every override routes through, and `GetPossibleRewardBannerItems` uses it to strip dragon banners from the reward pool (StoryMode/GameComponents/StoryModeBannerItemModel.cs:20), while `CanBannerBeUpdated` refuses them outright so a dragon banner cannot be re-templated (`:26`) and the per-hero variant `GetPossibleRewardBannerItemsForHero` filters them again for that hero's own list (`:38`). The model also refuses to offer any banner at all until the tutorial phase is complete (`:16`).

## Mental Model

Understand this as a visibility filter the campaign behaviour iterates over, not as a source of banner data. `BannerCampaignBehavior.cs:92` enumerates `GetPossibleRewardBannerItems` when building the reward list, so the model returns fewer items rather than returning "none" in the normal case — the tutorial case is the only one that returns an empty collection outright (`:18`). That distinction decides how a mod hooks in: to add a custom banner item the correct move is to filter less, never to fabricate a pool here, because the behaviour assumes every returned `ItemObject` is a valid banner template and `BannerCampaignBehavior.cs:62` grabs the same model for the update check. The per-hero list is computed independently of the global one, so a dragon banner filtered from the general pool is still removed per hero — an override of only one of the two methods leaves a leak, and the leak shows up in the hero's reward dialog rather than in the global list.

## Key Methods

### GetPossibleRewardBannerItems
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**Purpose:** Reads and returns the possible reward banner items value held by this instance.

```csharp
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetPossibleRewardBannerItems();
```

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**Purpose:** Checks whether this instance meets the preconditions for banner be updated.

```csharp
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.CanBannerBeUpdated(item);
```

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**Purpose:** Reads and returns the possible reward banner items for hero value held by this instance.

```csharp
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetPossibleRewardBannerItemsForHero(hero);
```

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**Purpose:** Reads and returns the banner item level for hero value held by this instance.

```csharp
StoryModeBannerItemModel storyModeBannerItemModel = ...;
var result = storyModeBannerItemModel.GetBannerItemLevelForHero(hero);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BannerItemModel>(new StoryModeBannerItemModel());
}
```

`BannerItemModel` is declared as `MBGameModel<BannerItemModel>` (`BannerItemModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:102`.

## See Also

- [Area Index](../)