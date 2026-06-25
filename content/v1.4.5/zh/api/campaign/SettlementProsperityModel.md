---
title: "SettlementProsperityModel"
description: "SettlementProsperityModel 的自动生成类参考。"
---
# SettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`
**Base:** `MBGameModel<SettlementProsperityModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementProsperityModel.cs`

## 概述

`SettlementProsperityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementProsperityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateProsperityChange
`public abstract ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`

**用途 / Purpose:** 计算prosperity change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementProsperityModel 实例
SettlementProsperityModel settlementProsperityModel = ...;
var result = settlementProsperityModel.CalculateProsperityChange(fortification, false);
```

### CalculateHearthChange
`public abstract ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)`

**用途 / Purpose:** 计算hearth change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementProsperityModel 实例
SettlementProsperityModel settlementProsperityModel = ...;
var result = settlementProsperityModel.CalculateHearthChange(village, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementProsperityModel instance = ...;
```

## 参见

- [本区域目录](../)