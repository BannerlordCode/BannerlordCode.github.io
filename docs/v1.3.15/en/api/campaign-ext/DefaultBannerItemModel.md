<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBannerItemModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBannerItemModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBannerItemModel.cs`

## Overview

`DefaultBannerItemModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBannerItemModel>(new MyDefaultBannerItemModel())` to change how it computes.

## Key Methods

### GetPossibleRewardBannerItems
```csharp
public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()
```

### GetPossibleRewardBannerItemsForHero
```csharp
public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)
```

### GetBannerItemLevelForHero
```csharp
public override int GetBannerItemLevelForHero(Hero hero)
```

### CanBannerBeUpdated
```csharp
public override bool CanBannerBeUpdated(ItemObject item)
```

## Usage Example

```csharp
// Typical usage of DefaultBannerItemModel (Model)
Game.Current.ReplaceModel<DefaultBannerItemModel>(new MyDefaultBannerItemModel());
```

## See Also

- [Complete Class Catalog](../catalog)