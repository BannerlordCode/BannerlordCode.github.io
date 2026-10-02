---
title: "BuildingScoreCalculationModel"
description: "BuildingScoreCalculationModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<BuildingScoreCalculationModel>; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingScoreCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BuildingScoreCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BuildingScoreCalculationModel : MBGameModel<BuildingScoreCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingScoreCalculationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

BuildingScoreCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingScoreCalculationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BuildingScoreCalculationModel>; the inheritance chain is BuildingScoreCalculationModel → MBGameModel → GameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BuildingScoreCalculationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain BuildingScoreCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingScoreCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetNextBuilding` | `public abstract Building GetNextBuilding(Town town);` | method |
| `GetNextDailyBuilding` | `public abstract Building GetNextDailyBuilding(Town town);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
