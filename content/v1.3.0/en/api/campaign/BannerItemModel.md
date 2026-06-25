---
title: "BannerItemModel"
description: "Auto-generated class reference for BannerItemModel."
---
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

**Purpose:** Reads and returns the possible reward banner items value held by the this instance.

```csharp
// Obtain an instance of BannerItemModel from the subsystem API first
BannerItemModel bannerItemModel = ...;
var result = bannerItemModel.GetPossibleRewardBannerItems();
```

### GetPossibleRewardBannerItemsForHero
`public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**Purpose:** Reads and returns the possible reward banner items for hero value held by the this instance.

```csharp
// Obtain an instance of BannerItemModel from the subsystem API first
BannerItemModel bannerItemModel = ...;
var result = bannerItemModel.GetPossibleRewardBannerItemsForHero(hero);
```

### GetBannerItemLevelForHero
`public abstract int GetBannerItemLevelForHero(Hero hero)`

**Purpose:** Reads and returns the banner item level for hero value held by the this instance.

```csharp
// Obtain an instance of BannerItemModel from the subsystem API first
BannerItemModel bannerItemModel = ...;
var result = bannerItemModel.GetBannerItemLevelForHero(hero);
```

### CanBannerBeUpdated
`public abstract bool CanBannerBeUpdated(ItemObject item)`

**Purpose:** Checks whether the this instance meets the preconditions for banner be updated.

```csharp
// Obtain an instance of BannerItemModel from the subsystem API first
BannerItemModel bannerItemModel = ...;
var result = bannerItemModel.CanBannerBeUpdated(item);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BannerItemModel instance = ...;
```

## See Also

- [Area Index](../)