---
title: "TroopSupplierProbabilityModel"
description: "TroopSupplierProbabilityModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<TroopSupplierProbabilityModel>; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSupplierProbabilityModel.cs."
---
# TroopSupplierProbabilityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TroopSupplierProbabilityModel : MBGameModel<TroopSupplierProbabilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSupplierProbabilityModel.cs`

## Overview

TroopSupplierProbabilityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSupplierProbabilityModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<TroopSupplierProbabilityModel>; the inheritance chain is TroopSupplierProbabilityModel → MBGameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopSupplierProbabilityModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain TroopSupplierProbabilityModel → MBGameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSupplierProbabilityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization` | `public abstract void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>>priorityList);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
