---
title: "DefaultCampaignShipParametersModel"
description: "DefaultCampaignShipParametersModel: a public class in TaleWorlds.CampaignSystem, inheriting CampaignShipParametersModel; 16 exposed members (16 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs."
---
# DefaultCampaignShipParametersModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCampaignShipParametersModel : CampaignShipParametersModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs`

## Overview

DefaultCampaignShipParametersModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs. It is a public class, implementing/inheriting CampaignShipParametersModel; the inheritance chain is DefaultCampaignShipParametersModel → CampaignShipParametersModel → MBGameModel. It exposes 16 public/protected members: 16 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCampaignShipParametersModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultCampaignShipParametersModel → CampaignShipParametersModel → MBGameModel. The surface is method-led (methods 16/16, properties 0/16), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipParametersModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetShipSizeWeatherFactor` | `public override float GetShipSizeWeatherFactor(ShipHull shipHull)` | method |
| `GetDefaultCombatFactor` | `public override float GetDefaultCombatFactor(ShipHull shipHull)` | method |
| `GetCampaignSpeedBonusFactor` | `public override float GetCampaignSpeedBonusFactor(Ship ship)` | method |
| `GetCrewCapacityBonusFactor` | `public override float GetCrewCapacityBonusFactor(Ship ship)` | method |
| `GetShipWeightFactor` | `public override float GetShipWeightFactor(Ship ship)` | method |
| `GetForwardDragFactor` | `public override float GetForwardDragFactor(Ship ship)` | method |
| `GetCrewShieldHitPointsFactor` | `public override float GetCrewShieldHitPointsFactor(Ship ship)` | method |
| `GetAdditionalAmmoBonus` | `public override int GetAdditionalAmmoBonus(Ship ship)` | method |
| `GetMaxOarPowerFactor` | `public override float GetMaxOarPowerFactor(Ship ship)` | method |
| `GetMaxOarForceFactor` | `public override float GetMaxOarForceFactor(Ship ship)` | method |
| `GetSailForceFactor` | `public override float GetSailForceFactor(Ship ship)` | method |
| `GetCrewMeleeDamageFactor` | `public override float GetCrewMeleeDamageFactor(Ship ship)` | method |
| `GetAdditionalArcherQuivers` | `public override int GetAdditionalArcherQuivers(Ship ship)` | method |
| `GetAdditionalThrowingWeaponStack` | `public override int GetAdditionalThrowingWeaponStack(Ship ship)` | method |
| `GetSailRotationSpeedFactor` | `public override float GetSailRotationSpeedFactor(Ship ship)` | method |
| `GetFurlUnfurlSpeedFactor` | `public override float GetFurlUnfurlSpeedFactor(Ship ship)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CampaignShipParametersModel](../CampaignShipParametersModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
