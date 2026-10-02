---
title: "DefaultSettlementProsperityModel"
description: "DefaultSettlementProsperityModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SettlementProsperityModel; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementProsperityModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementProsperityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementProsperityModel : SettlementProsperityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementProsperityModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSettlementProsperityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementProsperityModel.cs. It is a public class, implementing/inheriting SettlementProsperityModel; the inheritance chain is DefaultSettlementProsperityModel → SettlementProsperityModel → MBGameModel → GameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementProsperityModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSettlementProsperityModel → SettlementProsperityModel → MBGameModel → GameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementProsperityModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateProsperityChange` | `public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)` | method |
| `CalculateHearthChange` | `public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementProsperityModel](../SettlementProsperityModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
