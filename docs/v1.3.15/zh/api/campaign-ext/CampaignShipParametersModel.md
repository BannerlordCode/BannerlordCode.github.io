<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignShipParametersModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignShipParametersModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignShipParametersModel : MBGameModel<CampaignShipParametersModel>`
**Base:** `MBGameModel<CampaignShipParametersModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs`

## 概述

`CampaignShipParametersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CampaignShipParametersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetShipSizeWeatherFactor
`public abstract float GetShipSizeWeatherFactor(ShipHull shipHull)`

**用途 / Purpose:** 获取 `ship size weather factor` 的当前值。

### GetDefaultCombatFactor
`public abstract float GetDefaultCombatFactor(ShipHull shipHull)`

**用途 / Purpose:** 获取 `default combat factor` 的当前值。

### GetCampaignSpeedBonusFactor
`public abstract float GetCampaignSpeedBonusFactor(Ship ship)`

**用途 / Purpose:** 获取 `campaign speed bonus factor` 的当前值。

### GetCrewCapacityBonusFactor
`public abstract float GetCrewCapacityBonusFactor(Ship ship)`

**用途 / Purpose:** 获取 `crew capacity bonus factor` 的当前值。

### GetShipWeightFactor
`public abstract float GetShipWeightFactor(Ship ship)`

**用途 / Purpose:** 获取 `ship weight factor` 的当前值。

### GetForwardDragFactor
`public abstract float GetForwardDragFactor(Ship ship)`

**用途 / Purpose:** 获取 `forward drag factor` 的当前值。

### GetCrewShieldHitPointsFactor
`public abstract float GetCrewShieldHitPointsFactor(Ship ship)`

**用途 / Purpose:** 获取 `crew shield hit points factor` 的当前值。

### GetAdditionalAmmoBonus
`public abstract int GetAdditionalAmmoBonus(Ship ship)`

**用途 / Purpose:** 获取 `additional ammo bonus` 的当前值。

### GetMaxOarPowerFactor
`public abstract float GetMaxOarPowerFactor(Ship ship)`

**用途 / Purpose:** 获取 `max oar power factor` 的当前值。

### GetMaxOarForceFactor
`public abstract float GetMaxOarForceFactor(Ship ship)`

**用途 / Purpose:** 获取 `max oar force factor` 的当前值。

### GetSailForceFactor
`public abstract float GetSailForceFactor(Ship ship)`

**用途 / Purpose:** 获取 `sail force factor` 的当前值。

### GetCrewMeleeDamageFactor
`public abstract float GetCrewMeleeDamageFactor(Ship ship)`

**用途 / Purpose:** 获取 `crew melee damage factor` 的当前值。

### GetAdditionalArcherQuivers
`public abstract int GetAdditionalArcherQuivers(Ship ship)`

**用途 / Purpose:** 获取 `additional archer quivers` 的当前值。

### GetAdditionalThrowingWeaponStack
`public abstract int GetAdditionalThrowingWeaponStack(Ship ship)`

**用途 / Purpose:** 获取 `additional throwing weapon stack` 的当前值。

### GetSailRotationSpeedFactor
`public abstract float GetSailRotationSpeedFactor(Ship ship)`

**用途 / Purpose:** 获取 `sail rotation speed factor` 的当前值。

### GetFurlUnfurlSpeedFactor
`public abstract float GetFurlUnfurlSpeedFactor(Ship ship)`

**用途 / Purpose:** 获取 `furl unfurl speed factor` 的当前值。

## 使用示例

```csharp
var implementation = new CustomCampaignShipParametersModel();
```

## 参见

- [完整类目录](../catalog)