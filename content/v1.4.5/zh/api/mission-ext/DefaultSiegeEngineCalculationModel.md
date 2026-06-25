---
title: "DefaultSiegeEngineCalculationModel"
description: "DefaultSiegeEngineCalculationModel 的自动生成类参考。"
---
# DefaultSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultSiegeEngineCalculationModel : MissionSiegeEngineCalculationModel`
**Base:** `MissionSiegeEngineCalculationModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs`

## 概述

`DefaultSiegeEngineCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSiegeEngineCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateReloadSpeed
`public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)`

**用途 / Purpose:** 计算「reload speed」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEngineCalculationModel 实例
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateReloadSpeed(userAgent, 0);
```

### CalculateShipSiegeWeaponAmmoCount
`public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)`

**用途 / Purpose:** 计算「ship siege weapon ammo count」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEngineCalculationModel 实例
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateShipSiegeWeaponAmmoCount(shipOrigin, captain, weapon);
```

### CalculateDamage
`public override int CalculateDamage(Agent attackerAgent, float baseDamage)`

**用途 / Purpose:** 计算「damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSiegeEngineCalculationModel 实例
DefaultSiegeEngineCalculationModel defaultSiegeEngineCalculationModel = ...;
var result = defaultSiegeEngineCalculationModel.CalculateDamage(attackerAgent, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSiegeEngineCalculationModel>(new MyDefaultSiegeEngineCalculationModel());
```

## 参见

- [本区域目录](../)