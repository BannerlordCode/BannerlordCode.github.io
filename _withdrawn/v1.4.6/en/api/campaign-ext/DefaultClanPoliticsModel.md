---
title: "DefaultClanPoliticsModel"
description: "DefaultClanPoliticsModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting ClanPoliticsModel; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultClanPoliticsModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultClanPoliticsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs. It is a public class, implementing/inheriting ClanPoliticsModel; the inheritance chain is DefaultClanPoliticsModel → ClanPoliticsModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultClanPoliticsModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultClanPoliticsModel → ClanPoliticsModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateInfluenceChange` | `public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)` | method |
| `CalculateSupportForPolicyInClan` | `public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)` | method |
| `CalculateRelationshipChangeWithSponsor` | `public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)` | method |
| `GetInfluenceRequiredToOverrideKingdomDecision` | `public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)` | method |
| `CanHeroBeGovernor` | `public override bool CanHeroBeGovernor(Hero hero)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClanPoliticsModel](../ClanPoliticsModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
