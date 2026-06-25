---
title: "ItemDiscardModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemDiscardModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemDiscardModel : MBGameModel<ItemDiscardModel>`
**Base:** `MBGameModel<ItemDiscardModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ItemDiscardModel.cs`

## Overview

`ItemDiscardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ItemDiscardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpBonusForDiscardingItems
`public abstract int GetXpBonusForDiscardingItems(ItemRoster itemRoster)`

**Purpose:** Gets the current value of `xp bonus for discarding items`.

### GetXpBonusForDiscardingItem
`public abstract int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)`

**Purpose:** Gets the current value of `xp bonus for discarding item`.

### PlayerCanDonateItem
`public abstract bool PlayerCanDonateItem(ItemObject item)`

**Purpose:** Handles logic related to `player can donate item`.

## Usage Example

```csharp
var implementation = new CustomItemDiscardModel();
```

## See Also

- [Complete Class Catalog](../catalog)