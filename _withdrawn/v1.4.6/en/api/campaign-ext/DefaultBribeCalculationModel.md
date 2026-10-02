---
title: "DefaultBribeCalculationModel"
description: "DefaultBribeCalculationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting BribeCalculationModel; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultBribeCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultBribeCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs. It is a public class, implementing/inheriting BribeCalculationModel; the inheritance chain is DefaultBribeCalculationModel → BribeCalculationModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBribeCalculationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultBribeCalculationModel → BribeCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsBribeNotNeededToEnterKeep` | `public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)` | method |
| `IsBribeNotNeededToEnterDungeon` | `public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)` | method |
| `GetBribeToEnterLordsHall` | `public override int GetBribeToEnterLordsHall(Settlement settlement)` | method |
| `GetBribeToEnterDungeon` | `public override int GetBribeToEnterDungeon(Settlement settlement)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BribeCalculationModel](../BribeCalculationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
