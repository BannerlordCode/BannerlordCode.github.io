<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeBannerItemModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeBannerItemModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeBannerItemModel.cs`

## 概述

`StoryModeBannerItemModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeBannerItemModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPossibleRewardBannerItems
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()`

**用途 / Purpose:** 获取 `possible reward banner items` 的当前值。

### CanBannerBeUpdated
`public override bool CanBannerBeUpdated(ItemObject item)`

**用途 / Purpose:** 判断当前对象是否可以执行 `banner be updated`。

### GetPossibleRewardBannerItemsForHero
`public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)`

**用途 / Purpose:** 获取 `possible reward banner items for hero` 的当前值。

### GetBannerItemLevelForHero
`public override int GetBannerItemLevelForHero(Hero hero)`

**用途 / Purpose:** 获取 `banner item level for hero` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeBannerItemModel>(new MyStoryModeBannerItemModel());
```

## 参见

- [完整类目录](../catalog)