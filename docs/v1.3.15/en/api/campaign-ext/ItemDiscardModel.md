<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemDiscardModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemDiscardModel : MBGameModel<ItemDiscardModel>`
**Base:** `MBGameModel<ItemDiscardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ItemDiscardModel.cs`

## Overview

`ItemDiscardModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ItemDiscardModel>(new MyItemDiscardModel())` to change how it computes.

## Key Methods

### GetXpBonusForDiscardingItems
```csharp
public abstract int GetXpBonusForDiscardingItems(ItemRoster itemRoster)
```

### GetXpBonusForDiscardingItem
```csharp
public abstract int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)
```

### PlayerCanDonateItem
```csharp
public abstract bool PlayerCanDonateItem(ItemObject item)
```

## Usage Example

```csharp
// Typical usage of ItemDiscardModel (Model)
Game.Current.ReplaceModel<ItemDiscardModel>(new MyItemDiscardModel());
```

## See Also

- [Complete Class Catalog](../catalog)