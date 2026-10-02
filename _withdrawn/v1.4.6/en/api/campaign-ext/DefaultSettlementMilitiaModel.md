---
title: "DefaultSettlementMilitiaModel"
description: "DefaultSettlementMilitiaModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SettlementMilitiaModel; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSettlementMilitiaModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs. It is a public class, implementing/inheriting SettlementMilitiaModel; the inheritance chain is DefaultSettlementMilitiaModel → SettlementMilitiaModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementMilitiaModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSettlementMilitiaModel → SettlementMilitiaModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MilitiaToSpawnAfterSiege` | `public override int MilitiaToSpawnAfterSiege(Town town)` | method |
| `CalculateMilitiaChange` | `public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)` | method |
| `CalculateVeteranMilitiaSpawnChance` | `public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)` | method |
| `CalculateMilitiaSpawnRate` | `public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementMilitiaModel](../SettlementMilitiaModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
