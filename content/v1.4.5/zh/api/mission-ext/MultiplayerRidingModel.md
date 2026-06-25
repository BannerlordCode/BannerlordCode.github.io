---
title: "MultiplayerRidingModel"
description: "MultiplayerRidingModel 的自动生成类参考。"
---
# MultiplayerRidingModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRidingModel : RidingModel`
**Base:** `RidingModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerRidingModel.cs`

## 概述

`MultiplayerRidingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MultiplayerRidingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateAcceleration
`public override float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)`

**用途 / Purpose:** 计算「acceleration」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerRidingModel 实例
MultiplayerRidingModel multiplayerRidingModel = ...;
var result = multiplayerRidingModel.CalculateAcceleration(mountElement, harnessElement, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<MultiplayerRidingModel>(new MyMultiplayerRidingModel());
```

## 参见

- [本区域目录](../)