---
title: "DefaultCampaignShipParametersModel"
description: "DefaultCampaignShipParametersModel 的自动生成类参考。"
---
# DefaultCampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipParametersModel : CampaignShipParametersModel`
**Base:** `CampaignShipParametersModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCampaignShipParametersModel.cs`

## 概述

`DefaultCampaignShipParametersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCampaignShipParametersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipSizeWeatherFactor
`public override float GetShipSizeWeatherFactor(ShipHull shipHull)`

**用途 / Purpose:** 读取并返回当前对象中 ship size weather factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetShipSizeWeatherFactor(shipHull);
```

### GetDefaultCombatFactor
`public override float GetDefaultCombatFactor(ShipHull shipHull)`

**用途 / Purpose:** 读取并返回当前对象中 default combat factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetDefaultCombatFactor(shipHull);
```

### GetCampaignSpeedBonusFactor
`public override float GetCampaignSpeedBonusFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 campaign speed bonus factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCampaignSpeedBonusFactor(ship);
```

### GetCrewCapacityBonusFactor
`public override float GetCrewCapacityBonusFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 crew capacity bonus factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewCapacityBonusFactor(ship);
```

### GetShipWeightFactor
`public override float GetShipWeightFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 ship weight factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetShipWeightFactor(ship);
```

### GetForwardDragFactor
`public override float GetForwardDragFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 forward drag factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetForwardDragFactor(ship);
```

### GetCrewShieldHitPointsFactor
`public override float GetCrewShieldHitPointsFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 crew shield hit points factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewShieldHitPointsFactor(ship);
```

### GetAdditionalAmmoBonus
`public override int GetAdditionalAmmoBonus(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 additional ammo bonus 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalAmmoBonus(ship);
```

### GetMaxOarPowerFactor
`public override float GetMaxOarPowerFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 max oar power factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetMaxOarPowerFactor(ship);
```

### GetMaxOarForceFactor
`public override float GetMaxOarForceFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 max oar force factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetMaxOarForceFactor(ship);
```

### GetSailForceFactor
`public override float GetSailForceFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 sail force factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetSailForceFactor(ship);
```

### GetCrewMeleeDamageFactor
`public override float GetCrewMeleeDamageFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 crew melee damage factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetCrewMeleeDamageFactor(ship);
```

### GetAdditionalArcherQuivers
`public override int GetAdditionalArcherQuivers(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 additional archer quivers 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalArcherQuivers(ship);
```

### GetAdditionalThrowingWeaponStack
`public override int GetAdditionalThrowingWeaponStack(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 additional throwing weapon stack 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetAdditionalThrowingWeaponStack(ship);
```

### GetSailRotationSpeedFactor
`public override float GetSailRotationSpeedFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 sail rotation speed factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetSailRotationSpeedFactor(ship);
```

### GetFurlUnfurlSpeedFactor
`public override float GetFurlUnfurlSpeedFactor(Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 furl unfurl speed factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCampaignShipParametersModel 实例
DefaultCampaignShipParametersModel defaultCampaignShipParametersModel = ...;
var result = defaultCampaignShipParametersModel.GetFurlUnfurlSpeedFactor(ship);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCampaignShipParametersModel>(new MyDefaultCampaignShipParametersModel());
```

## 参见

- [本区域目录](../)