---
title: "MissionSiegeEngineCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeEngineCalculationModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEngineCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionSiegeEngineCalculationModel : MBGameModel<MissionSiegeEngineCalculationModel>`
**Base:** `MBGameModel<MissionSiegeEngineCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionSiegeEngineCalculationModel.cs`

## 概述

`MissionSiegeEngineCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MissionSiegeEngineCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateReloadSpeed
`public abstract float CalculateReloadSpeed(Agent userAgent, float baseSpeed)`

**用途 / Purpose:** 处理 `calculate reload speed` 相关逻辑。

### CalculateShipSiegeWeaponAmmoCount
`public abstract int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)`

**用途 / Purpose:** 处理 `calculate ship siege weapon ammo count` 相关逻辑。

### CalculateDamage
`public abstract int CalculateDamage(Agent attackerAgent, float baseDamage)`

**用途 / Purpose:** 处理 `calculate damage` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMissionSiegeEngineCalculationModel();
```

## 参见

- [完整类目录](../catalog)