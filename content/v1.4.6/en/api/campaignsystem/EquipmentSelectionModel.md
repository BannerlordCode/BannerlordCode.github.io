---
title: "EquipmentSelectionModel"
description: "EquipmentSelectionModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<EquipmentSelectionModel>; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs."
---
# EquipmentSelectionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs`

## Overview

EquipmentSelectionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<EquipmentSelectionModel>; the inheritance chain is EquipmentSelectionModel → MBGameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EquipmentSelectionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain EquipmentSelectionModel → MBGameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEquipmentForHeroComeOfAge` | `public abstract Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType);` | method |
| `GetEquipmentForHeroReachesTeenAge` | `public abstract Equipment GetEquipmentForHeroReachesTeenAge(Hero hero);` | method |
| `GetEquipmentForInitialChildrenGeneration` | `public abstract Equipment GetEquipmentForInitialChildrenGeneration(Hero hero);` | method |
| `GetEquipmentForDeliveredOffspring` | `public abstract Equipment GetEquipmentForDeliveredOffspring(Hero hero);` | method |
| `Equipment>GetEquipmentsForChangingRuler` | `public abstract ValueTuple<Equipment, Equipment>GetEquipmentsForChangingRuler(Hero newRuler, Hero oldRuler, Equipment.EquipmentType equipmentType);` | method |
| `GetEquipmentForCompanionWhenTurningToLord` | `public abstract Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
