---
title: "ItemDiscardModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemDiscardModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemDiscardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemDiscardModel : MBGameModel<ItemDiscardModel>`
**Base:** `MBGameModel<ItemDiscardModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ItemDiscardModel.cs`

## 概述

`ItemDiscardModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ItemDiscardModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetXpBonusForDiscardingItems
`public abstract int GetXpBonusForDiscardingItems(ItemRoster itemRoster)`

**用途 / Purpose:** 获取 `xp bonus for discarding items` 的当前值。

### GetXpBonusForDiscardingItem
`public abstract int GetXpBonusForDiscardingItem(ItemObject item, int amount = 1)`

**用途 / Purpose:** 获取 `xp bonus for discarding item` 的当前值。

### PlayerCanDonateItem
`public abstract bool PlayerCanDonateItem(ItemObject item)`

**用途 / Purpose:** 处理 `player can donate item` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomItemDiscardModel();
```

## 参见

- [完整类目录](../catalog)