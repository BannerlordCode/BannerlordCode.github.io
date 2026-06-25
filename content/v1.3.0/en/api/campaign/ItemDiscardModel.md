---
title: "ItemDiscardModel"
description: "Auto-generated class reference for ItemDiscardModel."
---
# ItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemDiscardModel : MBGameModel<ItemDiscardModel>`
**Base:** `MBGameModel<ItemDiscardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ItemDiscardModel.cs`

## Overview

`ItemDiscardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ItemDiscardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpBonusForDiscardingItems
`public abstract int GetXpBonusForDiscardingItems(ItemRoster itemRoster)`

**Purpose:** **Purpose:** Reads and returns the xp bonus for discarding items value held by the this instance.

```csharp
// Obtain an instance of ItemDiscardModel from the subsystem API first
ItemDiscardModel itemDiscardModel = ...;
var result = itemDiscardModel.GetXpBonusForDiscardingItems(itemRoster);
```

### GetXpBonusForDiscardingItem
`public abstract int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)`

**Purpose:** **Purpose:** Reads and returns the xp bonus for discarding item value held by the this instance.

```csharp
// Obtain an instance of ItemDiscardModel from the subsystem API first
ItemDiscardModel itemDiscardModel = ...;
var result = itemDiscardModel.GetXpBonusForDiscardingItem(item, 0);
```

### PlayerCanDonateItem
`public abstract bool PlayerCanDonateItem(ItemObject item)`

**Purpose:** **Purpose:** Executes the PlayerCanDonateItem logic.

```csharp
// Obtain an instance of ItemDiscardModel from the subsystem API first
ItemDiscardModel itemDiscardModel = ...;
var result = itemDiscardModel.PlayerCanDonateItem(item);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ItemDiscardModel instance = ...;
```

## See Also

- [Area Index](../)