---
title: "CampaignShipParametersModel"
description: "CampaignShipParametersModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<CampaignShipParametersModel>; 16 exposed members (16 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs."
---
# CampaignShipParametersModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignShipParametersModel : MBGameModel<CampaignShipParametersModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs`

## Overview

CampaignShipParametersModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CampaignShipParametersModel>; the inheritance chain is CampaignShipParametersModel → MBGameModel. It exposes 16 public/protected members: 16 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignShipParametersModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain CampaignShipParametersModel → MBGameModel. The surface is method-led (methods 16/16, properties 0/16), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignShipParametersModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetShipSizeWeatherFactor` | `public abstract float GetShipSizeWeatherFactor(ShipHull shipHull);` | method |
| `GetDefaultCombatFactor` | `public abstract float GetDefaultCombatFactor(ShipHull shipHull);` | method |
| `GetCampaignSpeedBonusFactor` | `public abstract float GetCampaignSpeedBonusFactor(Ship ship);` | method |
| `GetCrewCapacityBonusFactor` | `public abstract float GetCrewCapacityBonusFactor(Ship ship);` | method |
| `GetShipWeightFactor` | `public abstract float GetShipWeightFactor(Ship ship);` | method |
| `GetForwardDragFactor` | `public abstract float GetForwardDragFactor(Ship ship);` | method |
| `GetCrewShieldHitPointsFactor` | `public abstract float GetCrewShieldHitPointsFactor(Ship ship);` | method |
| `GetAdditionalAmmoBonus` | `public abstract int GetAdditionalAmmoBonus(Ship ship);` | method |
| `GetMaxOarPowerFactor` | `public abstract float GetMaxOarPowerFactor(Ship ship);` | method |
| `GetMaxOarForceFactor` | `public abstract float GetMaxOarForceFactor(Ship ship);` | method |
| `GetSailForceFactor` | `public abstract float GetSailForceFactor(Ship ship);` | method |
| `GetCrewMeleeDamageFactor` | `public abstract float GetCrewMeleeDamageFactor(Ship ship);` | method |
| `GetAdditionalArcherQuivers` | `public abstract int GetAdditionalArcherQuivers(Ship ship);` | method |
| `GetAdditionalThrowingWeaponStack` | `public abstract int GetAdditionalThrowingWeaponStack(Ship ship);` | method |
| `GetSailRotationSpeedFactor` | `public abstract float GetSailRotationSpeedFactor(Ship ship);` | method |
| `GetFurlUnfurlSpeedFactor` | `public abstract float GetFurlUnfurlSpeedFactor(Ship ship);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
