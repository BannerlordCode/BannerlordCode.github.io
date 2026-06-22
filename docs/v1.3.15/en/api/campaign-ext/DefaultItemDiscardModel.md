<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultItemDiscardModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultItemDiscardModel : ItemDiscardModel`
**Base:** `ItemDiscardModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultItemDiscardModel.cs`

## Overview

`DefaultItemDiscardModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultItemDiscardModel>(new MyDefaultItemDiscardModel())` to change how it computes.

## Key Methods

### PlayerCanDonateItem
```csharp
public override bool PlayerCanDonateItem(ItemObject item)
```

### GetXpBonusForDiscardingItem
```csharp
public override int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)
```

### GetXpBonusForDiscardingItems
```csharp
public override int GetXpBonusForDiscardingItems(ItemRoster itemRoster)
```

## Usage Example

```csharp
// Typical usage of DefaultItemDiscardModel (Model)
Game.Current.ReplaceModel<DefaultItemDiscardModel>(new MyDefaultItemDiscardModel());
```

## See Also

- [Complete Class Catalog](../catalog)