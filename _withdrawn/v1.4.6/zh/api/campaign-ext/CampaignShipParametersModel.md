---
title: "CampaignShipParametersModel"
description: "CampaignShipParametersModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<CampaignShipParametersModel>；公开成员 16 个（方法 16、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignShipParametersModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignShipParametersModel : MBGameModel<CampaignShipParametersModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

CampaignShipParametersModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<CampaignShipParametersModel>，继承链为 CampaignShipParametersModel → MBGameModel → GameModel。public/protected 成员共 16 个：16 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignShipParametersModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 CampaignShipParametersModel → MBGameModel → GameModel。成员构成以方法为主（方法 16/16，属性 0/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetShipSizeWeatherFactor` | `public abstract float GetShipSizeWeatherFactor(ShipHull shipHull);` | 方法 |
| `GetDefaultCombatFactor` | `public abstract float GetDefaultCombatFactor(ShipHull shipHull);` | 方法 |
| `GetCampaignSpeedBonusFactor` | `public abstract float GetCampaignSpeedBonusFactor(Ship ship);` | 方法 |
| `GetCrewCapacityBonusFactor` | `public abstract float GetCrewCapacityBonusFactor(Ship ship);` | 方法 |
| `GetShipWeightFactor` | `public abstract float GetShipWeightFactor(Ship ship);` | 方法 |
| `GetForwardDragFactor` | `public abstract float GetForwardDragFactor(Ship ship);` | 方法 |
| `GetCrewShieldHitPointsFactor` | `public abstract float GetCrewShieldHitPointsFactor(Ship ship);` | 方法 |
| `GetAdditionalAmmoBonus` | `public abstract int GetAdditionalAmmoBonus(Ship ship);` | 方法 |
| `GetMaxOarPowerFactor` | `public abstract float GetMaxOarPowerFactor(Ship ship);` | 方法 |
| `GetMaxOarForceFactor` | `public abstract float GetMaxOarForceFactor(Ship ship);` | 方法 |
| `GetSailForceFactor` | `public abstract float GetSailForceFactor(Ship ship);` | 方法 |
| `GetCrewMeleeDamageFactor` | `public abstract float GetCrewMeleeDamageFactor(Ship ship);` | 方法 |
| `GetAdditionalArcherQuivers` | `public abstract int GetAdditionalArcherQuivers(Ship ship);` | 方法 |
| `GetAdditionalThrowingWeaponStack` | `public abstract int GetAdditionalThrowingWeaponStack(Ship ship);` | 方法 |
| `GetSailRotationSpeedFactor` | `public abstract float GetSailRotationSpeedFactor(Ship ship);` | 方法 |
| `GetFurlUnfurlSpeedFactor` | `public abstract float GetFurlUnfurlSpeedFactor(Ship ship);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
