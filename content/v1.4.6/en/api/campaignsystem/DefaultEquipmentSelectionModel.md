---
title: "DefaultEquipmentSelectionModel"
description: "DefaultEquipmentSelectionModel: a public class in TaleWorlds.CampaignSystem, inheriting EquipmentSelectionModel; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultEquipmentSelectionModel.cs."
---
# DefaultEquipmentSelectionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEquipmentSelectionModel : EquipmentSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEquipmentSelectionModel.cs`

## Overview

DefaultEquipmentSelectionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultEquipmentSelectionModel.cs. It is a public class, implementing/inheriting EquipmentSelectionModel; the inheritance chain is DefaultEquipmentSelectionModel → EquipmentSelectionModel → MBGameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEquipmentSelectionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultEquipmentSelectionModel → EquipmentSelectionModel → MBGameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultEquipmentSelectionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEquipmentForHeroComeOfAge` | `public override Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType)` | method |
| `GetEquipmentForHeroReachesTeenAge` | `public override Equipment GetEquipmentForHeroReachesTeenAge(Hero hero)` | method |
| `GetEquipmentForDeliveredOffspring` | `public override Equipment GetEquipmentForDeliveredOffspring(Hero hero)` | method |
| `GetEquipmentForCompanionWhenTurningToLord` | `public override Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType)` | method |
| `GetEquipmentForInitialChildrenGeneration` | `public override Equipment GetEquipmentForInitialChildrenGeneration(Hero hero)` | method |
| `Equipment>GetEquipmentsForChangingRuler` | `public override ValueTuple<Equipment, Equipment>GetEquipmentsForChangingRuler(Hero newRuler, Hero oldRuler, Equipment.EquipmentType equipmentType)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EquipmentSelectionModel](../EquipmentSelectionModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
