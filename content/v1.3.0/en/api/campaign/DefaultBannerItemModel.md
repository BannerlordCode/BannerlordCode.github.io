---
title: "DefaultBannerItemModel"
description: "Auto-generated class reference for DefaultBannerItemModel."
---
# DefaultBannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs`

## Overview

`DefaultBannerItemModel` decides which banner items exist as battle rewards and which a given hero may receive. `GetPossibleRewardBannerItems` is the master list: every item in the object manager flagged `IsBannerItem`, minus one item excluded by string id, `campaign_banner_small` (`TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs:16`). `GetBannerItemLevelForHero` then grades a hero into exactly one of three levels — 1 for a clanless hero or one that does not lead its clan, 3 for the ruler of a kingdom's ruling clan, and 2 for everyone else (`:40`, `:44`, `:46`) — and `GetPossibleRewardBannerItemsForHero` filters the master list down to items whose `Culture` is null or matches the hero's and whose `BannerLevel` equals that grade (`:27`). `CanBannerBeUpdated` is unconditionally `true` (`:52`).

## Mental Model

Model this as a two-stage funnel: a global candidate list, then a per-hero grade that narrows it. That ordering is what makes the level system work — `GetPossibleRewardBannerItemsForHero` calls the global list itself (`:22`) rather than reading a cached copy, so overriding the global list automatically affects every hero. `BannerCampaignBehavior.cs:92` iterates the global list to build the reward dialog, and `BannerCampaignBehavior.cs:62` grabs the model for the update check, so the two are independent consumers of the same source. Three practical consequences. The three-level grading is hard-coded rather than derived from clan tier, so a second-level kingdom ruler and an ordinary clan leader both get level 2 (`:44`, `:46`). A hero with no clan is graded 1 and never receives a level-3 banner even if they rule a settlement (`:38`). And `CanBannerBeUpdated` returning `true` is what allows banner templates to be re-rolled at all — the story model on the sibling page flips it off specifically to protect one item, which is the clearest demonstration that this method is the mutation gate rather than a validation check.

## Key Methods

### GetPossibleRewardBannerItems
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**Purpose:** Reads and returns the possible reward banner items value held by this instance.

```csharp
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetPossibleRewardBannerItems();
```

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**Purpose:** Reads and returns the possible reward banner items for hero value held by this instance.

```csharp
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetPossibleRewardBannerItemsForHero(hero);
```

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**Purpose:** Reads and returns the banner item level for hero value held by this instance.

```csharp
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetBannerItemLevelForHero(hero);
```

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**Purpose:** Checks whether this instance meets the preconditions for banner be updated.

```csharp
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.CanBannerBeUpdated(item);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BannerItemModel>(new DefaultBannerItemModel());
}
```

`BannerItemModel` is declared as `MBGameModel<BannerItemModel>` (`BannerItemModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:337`.

## See Also

- [Area Index](../)