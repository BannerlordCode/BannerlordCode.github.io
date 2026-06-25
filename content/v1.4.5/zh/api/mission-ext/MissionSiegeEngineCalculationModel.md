---
title: "MissionSiegeEngineCalculationModel"
description: "MissionSiegeEngineCalculationModel 的自动生成类参考。"
---
# MissionSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionSiegeEngineCalculationModel : MBGameModel<MissionSiegeEngineCalculationModel>`
**Base:** `MBGameModel<MissionSiegeEngineCalculationModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/MissionSiegeEngineCalculationModel.cs`

## 概述

`MissionSiegeEngineCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MissionSiegeEngineCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateReloadSpeed
`public abstract float CalculateReloadSpeed(Agent userAgent, float baseSpeed)`

**用途 / Purpose:** **用途 / Purpose:** 计算reload speed的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEngineCalculationModel 实例
MissionSiegeEngineCalculationModel missionSiegeEngineCalculationModel = ...;
var result = missionSiegeEngineCalculationModel.CalculateReloadSpeed(userAgent, 0);
```

### CalculateShipSiegeWeaponAmmoCount
`public abstract int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)`

**用途 / Purpose:** **用途 / Purpose:** 计算ship siege weapon ammo count的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEngineCalculationModel 实例
MissionSiegeEngineCalculationModel missionSiegeEngineCalculationModel = ...;
var result = missionSiegeEngineCalculationModel.CalculateShipSiegeWeaponAmmoCount(shipOrigin, captain, weapon);
```

### CalculateDamage
`public abstract int CalculateDamage(Agent attackerAgent, float baseDamage)`

**用途 / Purpose:** **用途 / Purpose:** 计算damage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEngineCalculationModel 实例
MissionSiegeEngineCalculationModel missionSiegeEngineCalculationModel = ...;
var result = missionSiegeEngineCalculationModel.CalculateDamage(attackerAgent, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionSiegeEngineCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)