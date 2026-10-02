---
title: "EquipmentSelectionModel"
description: "EquipmentSelectionModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<EquipmentSelectionModel>; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EquipmentSelectionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

EquipmentSelectionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<EquipmentSelectionModel>; the inheritance chain is EquipmentSelectionModel → MBGameModel → GameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EquipmentSelectionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain EquipmentSelectionModel → MBGameModel → GameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetEquipmentForHeroComeOfAge` | `public abstract Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType);` | method |
| `GetEquipmentForHeroReachesTeenAge` | `public abstract Equipment GetEquipmentForHeroReachesTeenAge(Hero hero);` | method |
| `GetEquipmentForInitialChildrenGeneration` | `public abstract Equipment GetEquipmentForInitialChildrenGeneration(Hero hero);` | method |
| `GetEquipmentForDeliveredOffspring` | `public abstract Equipment GetEquipmentForDeliveredOffspring(Hero hero);` | method |
| `Equipment>GetEquipmentsForChangingRuler` | `public abstract ValueTuple<Equipment, Equipment>GetEquipmentsForChangingRuler(Hero newRuler, Hero oldRuler, Equipment.EquipmentType equipmentType);` | method |
| `GetEquipmentForCompanionWhenTurningToLord` | `public abstract Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
