---
title: "DefaultDisguiseDetectionModel"
description: "DefaultDisguiseDetectionModel 的自动生成类参考。"
---
# DefaultDisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDisguiseDetectionModel : DisguiseDetectionModel`
**Base:** `DisguiseDetectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDisguiseDetectionModel.cs`

## 概述

`DefaultDisguiseDetectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDisguiseDetectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDisguiseDetectionProbability
`public override float CalculateDisguiseDetectionProbability(Settlement settlement)`

**用途 / Purpose:** 计算disguise detection probability的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultDisguiseDetectionModel 实例
DefaultDisguiseDetectionModel defaultDisguiseDetectionModel = ...;
var result = defaultDisguiseDetectionModel.CalculateDisguiseDetectionProbability(settlement);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDisguiseDetectionModel>(new MyDefaultDisguiseDetectionModel());
```

## 参见

- [本区域目录](../)