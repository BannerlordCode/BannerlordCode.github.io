---
title: "DefaultItemDiscardModel"
description: "Auto-generated class reference for DefaultItemDiscardModel."
---
# DefaultItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultItemDiscardModel : ItemDiscardModel`
**Base:** `ItemDiscardModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultItemDiscardModel.cs`

## Overview

`DefaultItemDiscardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultItemDiscardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### PlayerCanDonateItem
`public override bool PlayerCanDonateItem(ItemObject item)`

**Purpose:** Executes the PlayerCanDonateItem logic.

```csharp
// Obtain an instance of DefaultItemDiscardModel from the subsystem API first
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.PlayerCanDonateItem(item);
```

### GetXpBonusForDiscardingItem
`public override int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)`

**Purpose:** Reads and returns the xp bonus for discarding item value held by the this instance.

```csharp
// Obtain an instance of DefaultItemDiscardModel from the subsystem API first
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.GetXpBonusForDiscardingItem(item, 0);
```

### GetXpBonusForDiscardingItems
`public override int GetXpBonusForDiscardingItems(ItemRoster itemRoster)`

**Purpose:** Reads and returns the xp bonus for discarding items value held by the this instance.

```csharp
// Obtain an instance of DefaultItemDiscardModel from the subsystem API first
DefaultItemDiscardModel defaultItemDiscardModel = ...;
var result = defaultItemDiscardModel.GetXpBonusForDiscardingItems(itemRoster);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultItemDiscardModel>(new MyDefaultItemDiscardModel());
```

## See Also

- [Area Index](../)