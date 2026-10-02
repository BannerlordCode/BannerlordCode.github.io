---
title: "DefaultCampaignShipParametersModel"
description: "DefaultCampaignShipParametersModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 CampaignShipParametersModel；公开成员 16 个（方法 16、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCampaignShipParametersModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCampaignShipParametersModel : CampaignShipParametersModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultCampaignShipParametersModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs。它是一个 public 类，实现/继承 CampaignShipParametersModel，继承链为 DefaultCampaignShipParametersModel → CampaignShipParametersModel → MBGameModel → GameModel。public/protected 成员共 16 个：16 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultCampaignShipParametersModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultCampaignShipParametersModel → CampaignShipParametersModel → MBGameModel → GameModel。成员构成以方法为主（方法 16/16，属性 0/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetShipSizeWeatherFactor` | `public override float GetShipSizeWeatherFactor(ShipHull shipHull)` | 方法 |
| `GetDefaultCombatFactor` | `public override float GetDefaultCombatFactor(ShipHull shipHull)` | 方法 |
| `GetCampaignSpeedBonusFactor` | `public override float GetCampaignSpeedBonusFactor(Ship ship)` | 方法 |
| `GetCrewCapacityBonusFactor` | `public override float GetCrewCapacityBonusFactor(Ship ship)` | 方法 |
| `GetShipWeightFactor` | `public override float GetShipWeightFactor(Ship ship)` | 方法 |
| `GetForwardDragFactor` | `public override float GetForwardDragFactor(Ship ship)` | 方法 |
| `GetCrewShieldHitPointsFactor` | `public override float GetCrewShieldHitPointsFactor(Ship ship)` | 方法 |
| `GetAdditionalAmmoBonus` | `public override int GetAdditionalAmmoBonus(Ship ship)` | 方法 |
| `GetMaxOarPowerFactor` | `public override float GetMaxOarPowerFactor(Ship ship)` | 方法 |
| `GetMaxOarForceFactor` | `public override float GetMaxOarForceFactor(Ship ship)` | 方法 |
| `GetSailForceFactor` | `public override float GetSailForceFactor(Ship ship)` | 方法 |
| `GetCrewMeleeDamageFactor` | `public override float GetCrewMeleeDamageFactor(Ship ship)` | 方法 |
| `GetAdditionalArcherQuivers` | `public override int GetAdditionalArcherQuivers(Ship ship)` | 方法 |
| `GetAdditionalThrowingWeaponStack` | `public override int GetAdditionalThrowingWeaponStack(Ship ship)` | 方法 |
| `GetSailRotationSpeedFactor` | `public override float GetSailRotationSpeedFactor(Ship ship)` | 方法 |
| `GetFurlUnfurlSpeedFactor` | `public override float GetFurlUnfurlSpeedFactor(Ship ship)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignShipParametersModel](../CampaignShipParametersModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
