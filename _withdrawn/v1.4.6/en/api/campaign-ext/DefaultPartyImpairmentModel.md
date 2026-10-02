---
title: "DefaultPartyImpairmentModel"
description: "DefaultPartyImpairmentModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartyImpairmentModel; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartyImpairmentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartyImpairmentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs. It is a public class, implementing/inheriting PartyImpairmentModel; the inheritance chain is DefaultPartyImpairmentModel → PartyImpairmentModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyImpairmentModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartyImpairmentModel → PartyImpairmentModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSiegeExpectedVulnerabilityTime` | `public override float GetSiegeExpectedVulnerabilityTime()` | method |
| `GetDisorganizedStateDuration` | `public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)` | method |
| `CanGetDisorganized` | `public override bool CanGetDisorganized(PartyBase party)` | method |
| `GetVulnerabilityStateDuration` | `public override float GetVulnerabilityStateDuration(PartyBase party)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyImpairmentModel](../PartyImpairmentModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
