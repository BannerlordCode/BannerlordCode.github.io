---
title: "DefaultPartySpeedCalculatingModel"
description: "DefaultPartySpeedCalculatingModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartySpeedModel; 4 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartySpeedCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartySpeedCalculatingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs. It is a public class, implementing/inheriting PartySpeedModel; the inheritance chain is DefaultPartySpeedCalculatingModel → PartySpeedModel → MBGameModel → GameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartySpeedCalculatingModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartySpeedCalculatingModel → PartySpeedModel → MBGameModel → GameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BaseSpeed` | `public override float BaseSpeed` | property |
| `MinimumSpeed` | `public override float MinimumSpeed` | property |
| `CalculateBaseSpeed` | `public override ExplainedNumber CalculateBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)` | method |
| `CalculateFinalSpeed` | `public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartySpeedModel](../PartySpeedModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
