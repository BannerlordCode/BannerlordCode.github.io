---
title: "DefaultPartySpeedCalculatingModel"
description: "DefaultPartySpeedCalculatingModel 的自动生成类参考。"
---
# DefaultPartySpeedCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**Base:** `PartySpeedModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartySpeedCalculatingModel.cs`

## 概述

`DefaultPartySpeedCalculatingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartySpeedCalculatingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateBaseSpeed
`public override ExplainedNumber CalculateBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)`

**用途 / Purpose:** 计算「base speed」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartySpeedCalculatingModel 实例
DefaultPartySpeedCalculatingModel defaultPartySpeedCalculatingModel = ...;
var result = defaultPartySpeedCalculatingModel.CalculateBaseSpeed(mobileParty, false, 0, 0);
```

### CalculateFinalSpeed
`public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)`

**用途 / Purpose:** 计算「final speed」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartySpeedCalculatingModel 实例
DefaultPartySpeedCalculatingModel defaultPartySpeedCalculatingModel = ...;
var result = defaultPartySpeedCalculatingModel.CalculateFinalSpeed(mobileParty, finalSpeed);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartySpeedCalculatingModel>(new MyDefaultPartySpeedCalculatingModel());
```

## 参见

- [本区域目录](../)