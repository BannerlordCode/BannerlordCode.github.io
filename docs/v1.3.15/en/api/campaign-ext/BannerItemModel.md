<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerItemModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>`
**Base:** `MBGameModel<BannerItemModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BannerItemModel.cs`

## Overview

`BannerItemModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BannerItemModel>(new MyBannerItemModel())` to change how it computes.

## Key Methods

### GetPossibleRewardBannerItems
```csharp
public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItems()
```

### GetPossibleRewardBannerItemsForHero
```csharp
public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)
```

### GetBannerItemLevelForHero
```csharp
public abstract int GetBannerItemLevelForHero(Hero hero)
```

### CanBannerBeUpdated
```csharp
public abstract bool CanBannerBeUpdated(ItemObject item)
```

## Usage Example

```csharp
// Typical usage of BannerItemModel (Model)
Game.Current.ReplaceModel<BannerItemModel>(new MyBannerItemModel());
```

## See Also

- [Complete Class Catalog](../catalog)