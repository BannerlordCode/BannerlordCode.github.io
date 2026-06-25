---
title: "CampaignShipParametersModel"
description: "CampaignShipParametersModel 的自动生成类参考。"
---
# CampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipParametersModel : MBGameModel<CampaignShipParametersModel>`
**Base:** `MBGameModel<CampaignShipParametersModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CampaignShipParametersModel.cs`

## 概述

`CampaignShipParametersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CampaignShipParametersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipSizeWeatherFactor
`public abstract float GetShipSizeWeatherFactor(ShipHull shipHull)`

**用途 / Purpose:** 读取并返回当前对象中 ship size weather factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetShipSizeWeatherFactor(shipHull);
```

### GetDefaultCombatFactor
`public abstract float GetDefaultCombatFactor(ShipHull shipHull)`

**用途 / Purpose:** 读取并返回当前对象中 default combat factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetDefaultCombatFactor(shipHull);
```

### GetCampaignSpeedBonusFactor
`public abstract float GetCampaignSpeedBonusFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 campaign speed bonus factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetCampaignSpeedBonusFactor(ship);
```

### GetCrewCapacityBonusFactor
`public abstract float GetCrewCapacityBonusFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 crew capacity bonus factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetCrewCapacityBonusFactor(ship);
```

### GetShipWeightFactor
`public abstract float GetShipWeightFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 ship weight factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetShipWeightFactor(ship);
```

### GetForwardDragFactor
`public abstract float GetForwardDragFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 forward drag factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetForwardDragFactor(ship);
```

### GetCrewShieldHitPointsFactor
`public abstract float GetCrewShieldHitPointsFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 crew shield hit points factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetCrewShieldHitPointsFactor(ship);
```

### GetAdditionalAmmoBonus
`public abstract int GetAdditionalAmmoBonus(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 additional ammo bonus 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetAdditionalAmmoBonus(ship);
```

### GetMaxOarPowerFactor
`public abstract float GetMaxOarPowerFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 max oar power factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetMaxOarPowerFactor(ship);
```

### GetMaxOarForceFactor
`public abstract float GetMaxOarForceFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 max oar force factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetMaxOarForceFactor(ship);
```

### GetSailForceFactor
`public abstract float GetSailForceFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 sail force factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetSailForceFactor(ship);
```

### GetCrewMeleeDamageFactor
`public abstract float GetCrewMeleeDamageFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 crew melee damage factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetCrewMeleeDamageFactor(ship);
```

### GetAdditionalArcherQuivers
`public abstract int GetAdditionalArcherQuivers(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 additional archer quivers 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetAdditionalArcherQuivers(ship);
```

### GetAdditionalThrowingWeaponStack
`public abstract int GetAdditionalThrowingWeaponStack(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 additional throwing weapon stack 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetAdditionalThrowingWeaponStack(ship);
```

### GetSailRotationSpeedFactor
`public abstract float GetSailRotationSpeedFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 sail rotation speed factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetSailRotationSpeedFactor(ship);
```

### GetFurlUnfurlSpeedFactor
`public abstract float GetFurlUnfurlSpeedFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 furl unfurl speed factor 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignShipParametersModel 实例
CampaignShipParametersModel campaignShipParametersModel = ...;
var result = campaignShipParametersModel.GetFurlUnfurlSpeedFactor(ship);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CampaignShipParametersModel instance = ...;
```

## 参见

- [本区域目录](../)