---
title: "VillageMarketData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageMarketData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/VillageMarketData.cs`

## 概述

`VillageMarketData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `VillageMarketData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**用途 / Purpose:** 获取 `price` 的当前值。

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**用途 / Purpose:** 获取 `price` 的当前值。

## 使用示例

```csharp
var value = new VillageMarketData();
```

## 参见

- [完整类目录](../catalog)