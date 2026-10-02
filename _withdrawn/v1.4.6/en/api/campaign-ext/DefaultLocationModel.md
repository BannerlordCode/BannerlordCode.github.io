---
title: "DefaultLocationModel"
description: "DefaultLocationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting LocationModel; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultLocationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultLocationModel : LocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultLocationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs. It is a public class, implementing/inheriting LocationModel; the inheritance chain is DefaultLocationModel → LocationModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultLocationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultLocationModel → LocationModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSettlementUpgradeLevel` | `public override int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)` | method |
| `GetCivilianSceneLevel` | `public override string GetCivilianSceneLevel(Settlement settlement)` | method |
| `GetCivilianUpgradeLevelTag` | `public override string GetCivilianUpgradeLevelTag(int upgradeLevel)` | method |
| `GetUpgradeLevelTag` | `public override string GetUpgradeLevelTag(int upgradeLevel)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface LocationModel](../LocationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
