---
title: "VillageMarketData"
description: "VillageMarketData 的自动生成类参考。"
---
# VillageMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/VillageMarketData.cs`

## 概述

`VillageMarketData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `VillageMarketData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**用途 / Purpose:** 读取并返回当前对象中 price 的结果。

```csharp
// 先通过子系统 API 拿到 VillageMarketData 实例
VillageMarketData villageMarketData = ...;
var result = villageMarketData.GetPrice(item, tradingParty, false, merchantParty);
```

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**用途 / Purpose:** 读取并返回当前对象中 price 的结果。

```csharp
// 先通过子系统 API 拿到 VillageMarketData 实例
VillageMarketData villageMarketData = ...;
var result = villageMarketData.GetPrice(itemRosterElement, tradingParty, false, merchantParty);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
VillageMarketData entry = ...;
```

## 参见

- [本区域目录](../)