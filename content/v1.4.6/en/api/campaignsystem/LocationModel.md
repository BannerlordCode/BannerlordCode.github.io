---
title: "LocationModel"
description: "LocationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<LocationModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs."
---
# LocationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class LocationModel : MBGameModel<LocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs`

## Overview

LocationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<LocationModel>; the inheritance chain is LocationModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain LocationModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSettlementUpgradeLevel` | `public abstract int GetSettlementUpgradeLevel(LocationEncounter locationEncounter);` | method |
| `GetCivilianSceneLevel` | `public abstract string GetCivilianSceneLevel(Settlement settlement);` | method |
| `GetCivilianUpgradeLevelTag` | `public abstract string GetCivilianUpgradeLevelTag(int upgradeLevel);` | method |
| `GetUpgradeLevelTag` | `public abstract string GetUpgradeLevelTag(int upgradeLevel);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
