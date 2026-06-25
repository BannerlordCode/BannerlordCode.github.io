---
title: "DefaultBannerItemModel"
description: "Auto-generated class reference for DefaultBannerItemModel."
---
# DefaultBannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBannerItemModel.cs`

## Overview

`DefaultBannerItemModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBannerItemModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPossibleRewardBannerItems
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**Purpose:** Reads and returns the `possible reward banner items` value held by the current object.

```csharp
// Obtain an instance of DefaultBannerItemModel from the subsystem API first
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetPossibleRewardBannerItems();
```

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**Purpose:** Reads and returns the `possible reward banner items for hero` value held by the current object.

```csharp
// Obtain an instance of DefaultBannerItemModel from the subsystem API first
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetPossibleRewardBannerItemsForHero(hero);
```

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**Purpose:** Reads and returns the `banner item level for hero` value held by the current object.

```csharp
// Obtain an instance of DefaultBannerItemModel from the subsystem API first
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.GetBannerItemLevelForHero(hero);
```

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**Purpose:** Checks whether the current object meets the preconditions for `banner be updated`.

```csharp
// Obtain an instance of DefaultBannerItemModel from the subsystem API first
DefaultBannerItemModel defaultBannerItemModel = ...;
var result = defaultBannerItemModel.CanBannerBeUpdated(item);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBannerItemModel>(new MyDefaultBannerItemModel());
```

## See Also

- [Area Index](../)