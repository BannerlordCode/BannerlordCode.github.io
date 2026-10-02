---
title: "DefaultPartyMoraleModel"
description: "DefaultPartyMoraleModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartyMoraleModel; 7 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartyMoraleModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartyMoraleModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs. It is a public class, implementing/inheriting PartyMoraleModel; the inheritance chain is DefaultPartyMoraleModel → PartyMoraleModel → MBGameModel → GameModel. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyMoraleModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartyMoraleModel → PartyMoraleModel → MBGameModel → GameModel. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HighMoraleValue` | `public override float HighMoraleValue` | property |
| `GetDailyStarvationMoralePenalty` | `public override int GetDailyStarvationMoralePenalty(PartyBase party)` | method |
| `GetDailyNoWageMoralePenalty` | `public override int GetDailyNoWageMoralePenalty(MobileParty party)` | method |
| `GetStandardBaseMorale` | `public override float GetStandardBaseMorale(PartyBase party)` | method |
| `GetVictoryMoraleChange` | `public override float GetVictoryMoraleChange(PartyBase party)` | method |
| `GetDefeatMoraleChange` | `public override float GetDefeatMoraleChange(PartyBase party)` | method |
| `GetEffectivePartyMorale` | `public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyMoraleModel](../PartyMoraleModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
