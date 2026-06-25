---
title: "DefaultRidingModel"
description: "DefaultRidingModel 的自动生成类参考。"
---
# DefaultRidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultRidingModel : RidingModel`
**Base:** `RidingModel`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/DefaultRidingModel.cs`

## 概述

`DefaultRidingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultRidingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateAcceleration
`public override float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)`

**用途 / Purpose:** 计算acceleration的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultRidingModel 实例
DefaultRidingModel defaultRidingModel = ...;
var result = defaultRidingModel.CalculateAcceleration(mountElement, harnessElement, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultRidingModel>(new MyDefaultRidingModel());
```

## 参见

- [本区域目录](../)