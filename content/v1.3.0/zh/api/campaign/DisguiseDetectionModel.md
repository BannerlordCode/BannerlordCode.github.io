---
title: "DisguiseDetectionModel"
description: "DisguiseDetectionModel 的自动生成类参考。"
---
# DisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DisguiseDetectionModel : MBGameModel<DisguiseDetectionModel>`
**Base:** `MBGameModel<DisguiseDetectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DisguiseDetectionModel.cs`

## 概述

`DisguiseDetectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DisguiseDetectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDisguiseDetectionProbability
`public abstract float CalculateDisguiseDetectionProbability(Settlement settlement)`

**用途 / Purpose:** 计算disguise detection probability的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DisguiseDetectionModel 实例
DisguiseDetectionModel disguiseDetectionModel = ...;
var result = disguiseDetectionModel.CalculateDisguiseDetectionProbability(settlement);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DisguiseDetectionModel instance = ...;
```

## 参见

- [本区域目录](../)