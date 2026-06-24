<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipRefresherCollection`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipRefresherCollection

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection
**模块:** TaleWorlds.CampaignSystem
**类型:** `public static class TooltipRefresherCollection`
**领域:** campaign-ext

## 概述

`TooltipRefresherCollection` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RefreshExplainedNumberTooltip
`public static void RefreshExplainedNumberTooltip(RundownTooltipVM explainedNumberTooltip, object args)`

**用途 / Purpose:** 刷新 `explained number tooltip` 的显示或缓存。

### RefreshTrackTooltip
`public static void RefreshTrackTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `track tooltip` 的显示或缓存。

### RefreshHeroTooltip
`public static void RefreshHeroTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `hero tooltip` 的显示或缓存。

### RefreshInventoryTooltip
`public static void RefreshInventoryTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `inventory tooltip` 的显示或缓存。

### RefreshCraftingPartTooltip
`public static void RefreshCraftingPartTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `crafting part tooltip` 的显示或缓存。

### RefreshCharacterTooltip
`public static void RefreshCharacterTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `character tooltip` 的显示或缓存。

### RefreshItemTooltip
`public static void RefreshItemTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `item tooltip` 的显示或缓存。

### RefreshBuildingTooltip
`public static void RefreshBuildingTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `building tooltip` 的显示或缓存。

### RefreshAnchorTooltip
`public static void RefreshAnchorTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `anchor tooltip` 的显示或缓存。

### RefreshWorkshopTooltip
`public static void RefreshWorkshopTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `workshop tooltip` 的显示或缓存。

### RefreshEncounterTooltip
`public static void RefreshEncounterTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `encounter tooltip` 的显示或缓存。

### RefreshSiegeEventTooltip
`public static void RefreshSiegeEventTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `siege event tooltip` 的显示或缓存。

### RefreshMapEventTooltip
`public static void RefreshMapEventTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `map event tooltip` 的显示或缓存。

### RefreshSettlementTooltip
`public static void RefreshSettlementTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `settlement tooltip` 的显示或缓存。

### RefreshMobilePartyTooltip
`public static void RefreshMobilePartyTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `mobile party tooltip` 的显示或缓存。

### RefreshArmyTooltip
`public static void RefreshArmyTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `army tooltip` 的显示或缓存。

### RefreshClanTooltip
`public static void RefreshClanTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `clan tooltip` 的显示或缓存。

### RefreshKingdomTooltip
`public static void RefreshKingdomTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `kingdom tooltip` 的显示或缓存。

### RefreshMapMarkerTooltip
`public static void RefreshMapMarkerTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**用途 / Purpose:** 刷新 `map marker tooltip` 的显示或缓存。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TooltipRefresherCollection.RefreshExplainedNumberTooltip(explainedNumberTooltip, args);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
