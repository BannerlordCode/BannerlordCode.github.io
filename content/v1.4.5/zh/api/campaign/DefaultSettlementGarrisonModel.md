---
title: "DefaultSettlementGarrisonModel"
description: "DefaultSettlementGarrisonModel 的自动生成类参考。"
---
# DefaultSettlementGarrisonModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**Base:** `SettlementGarrisonModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementGarrisonModel.cs`

## 概述

`DefaultSettlementGarrisonModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementGarrisonModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMaximumDailyAutoRecruitmentCount
`public override int GetMaximumDailyAutoRecruitmentCount(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 maximum daily auto recruitment count 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementGarrisonModel 实例
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.GetMaximumDailyAutoRecruitmentCount(town);
```

### CalculateBaseGarrisonChange
`public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 计算base garrison change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementGarrisonModel 实例
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.CalculateBaseGarrisonChange(settlement, false);
```

### FindNumberOfTroopsToTakeFromGarrison
`public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的number of troops to take from garrison。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementGarrisonModel 实例
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.FindNumberOfTroopsToTakeFromGarrison(mobileParty, settlement, 0);
```

### FindNumberOfTroopsToLeaveToGarrison
`public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的number of troops to leave to garrison。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementGarrisonModel 实例
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.FindNumberOfTroopsToLeaveToGarrison(mobileParty, settlement);
```

### GetMaximumDailyRepairAmount
`public override float GetMaximumDailyRepairAmount(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 maximum daily repair amount 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementGarrisonModel 实例
DefaultSettlementGarrisonModel defaultSettlementGarrisonModel = ...;
var result = defaultSettlementGarrisonModel.GetMaximumDailyRepairAmount(settlement);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementGarrisonModel>(new MyDefaultSettlementGarrisonModel());
```

## 参见

- [本区域目录](../)