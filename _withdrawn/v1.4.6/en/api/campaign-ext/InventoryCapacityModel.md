---
title: "InventoryCapacityModel"
description: "InventoryCapacityModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<InventoryCapacityModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryCapacityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

InventoryCapacityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<InventoryCapacityModel>; the inheritance chain is InventoryCapacityModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryCapacityModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain InventoryCapacityModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateInventoryCapacity` | `public abstract ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false);` | method |
| `GetItemAverageWeight` | `public abstract int GetItemAverageWeight();` | method |
| `GetItemEffectiveWeight` | `public abstract float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description);` | method |
| `CalculateTotalWeightCarried` | `public abstract ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
