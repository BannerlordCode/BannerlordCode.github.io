---
title: "DefaultBuildingEffectModel"
description: "DefaultBuildingEffectModel 的自动生成类参考。"
---
# DefaultBuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingEffectModel : BuildingEffectModel`
**Base:** `BuildingEffectModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingEffectModel.cs`

## 概述

`DefaultBuildingEffectModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBuildingEffectModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBuildingEffect
`public override ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 building effect 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBuildingEffectModel 实例
DefaultBuildingEffectModel defaultBuildingEffectModel = ...;
var result = defaultBuildingEffectModel.GetBuildingEffect(building, effect);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBuildingEffectModel>(new MyDefaultBuildingEffectModel());
```

## 参见

- [本区域目录](../)