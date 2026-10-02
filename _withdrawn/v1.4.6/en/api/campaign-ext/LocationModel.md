---
title: "LocationModel"
description: "LocationModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<LocationModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LocationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class LocationModel : MBGameModel<LocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

LocationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<LocationModel>; the inheritance chain is LocationModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain LocationModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/LocationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSettlementUpgradeLevel` | `public abstract int GetSettlementUpgradeLevel(LocationEncounter locationEncounter);` | method |
| `GetCivilianSceneLevel` | `public abstract string GetCivilianSceneLevel(Settlement settlement);` | method |
| `GetCivilianUpgradeLevelTag` | `public abstract string GetCivilianUpgradeLevelTag(int upgradeLevel);` | method |
| `GetUpgradeLevelTag` | `public abstract string GetUpgradeLevelTag(int upgradeLevel);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
