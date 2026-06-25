---
title: "MissionShipParametersModel"
description: "MissionShipParametersModel 的自动生成类参考。"
---
# MissionShipParametersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**Base:** `MBGameModel<MissionShipParametersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs`

## 概述

`MissionShipParametersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MissionShipParametersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMainDeckCrewSize
`public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent captain)`

**用途 / Purpose:** **用途 / Purpose:** 计算main deck crew size的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionShipParametersModel 实例
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateMainDeckCrewSize(shipOrigin, captain);
```

### CalculateWindBonus
`public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude)`

**用途 / Purpose:** **用途 / Purpose:** 计算wind bonus的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionShipParametersModel 实例
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateWindBonus(shipOrigin, captain, 0);
```

### CalculateOarForceMultiplier
`public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce)`

**用途 / Purpose:** **用途 / Purpose:** 计算oar force multiplier的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionShipParametersModel 实例
MissionShipParametersModel missionShipParametersModel = ...;
var result = missionShipParametersModel.CalculateOarForceMultiplier(pilotAgent, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionShipParametersModel instance = ...;
```

## 参见

- [本区域目录](../)