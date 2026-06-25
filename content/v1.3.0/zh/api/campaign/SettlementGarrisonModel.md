---
title: "SettlementGarrisonModel"
description: "SettlementGarrisonModel 的自动生成类参考。"
---
# SettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`
**Base:** `MBGameModel<SettlementGarrisonModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`

## 概述

`SettlementGarrisonModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementGarrisonModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMaximumDailyAutoRecruitmentCount
`public abstract int GetMaximumDailyAutoRecruitmentCount(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 maximum daily auto recruitment count 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementGarrisonModel 实例
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.GetMaximumDailyAutoRecruitmentCount(town);
```

### CalculateBaseGarrisonChange
`public abstract ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 计算base garrison change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementGarrisonModel 实例
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.CalculateBaseGarrisonChange(settlement, false);
```

### FindNumberOfTroopsToTakeFromGarrison
`public abstract int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的number of troops to take from garrison。

```csharp
// 先通过子系统 API 拿到 SettlementGarrisonModel 实例
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.FindNumberOfTroopsToTakeFromGarrison(mobileParty, settlement, 0);
```

### FindNumberOfTroopsToLeaveToGarrison
`public abstract int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的number of troops to leave to garrison。

```csharp
// 先通过子系统 API 拿到 SettlementGarrisonModel 实例
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.FindNumberOfTroopsToLeaveToGarrison(mobileParty, settlement);
```

### GetMaximumDailyRepairAmount
`public abstract float GetMaximumDailyRepairAmount(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 maximum daily repair amount 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementGarrisonModel 实例
SettlementGarrisonModel settlementGarrisonModel = ...;
var result = settlementGarrisonModel.GetMaximumDailyRepairAmount(settlement);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementGarrisonModel instance = ...;
```

## 参见

- [本区域目录](../)