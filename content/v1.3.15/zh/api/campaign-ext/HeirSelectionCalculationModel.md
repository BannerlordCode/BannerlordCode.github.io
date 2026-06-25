---
title: "HeirSelectionCalculationModel"
description: "HeirSelectionCalculationModel 的自动生成类参考。"
---
# HeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeirSelectionCalculationModel : MBGameModel<HeirSelectionCalculationModel>`
**Base:** `MBGameModel<HeirSelectionCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs`

## 概述

`HeirSelectionCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `HeirSelectionCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public abstract int HighestSkillPoint { get; }` |

## 主要方法

### CalculateHeirSelectionPoint
`public abstract int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)`

**用途 / Purpose:** 计算heir selection point的当前值或结果。

```csharp
// 先通过子系统 API 拿到 HeirSelectionCalculationModel 实例
HeirSelectionCalculationModel heirSelectionCalculationModel = ...;
var result = heirSelectionCalculationModel.CalculateHeirSelectionPoint(candidateHeir, deadHero, maxSkillHero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
HeirSelectionCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)