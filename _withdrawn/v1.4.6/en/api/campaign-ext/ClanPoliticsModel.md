---
title: "ClanPoliticsModel"
description: "ClanPoliticsModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<ClanPoliticsModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanPoliticsModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanPoliticsModel : MBGameModel<ClanPoliticsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

ClanPoliticsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ClanPoliticsModel>; the inheritance chain is ClanPoliticsModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPoliticsModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain ClanPoliticsModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateInfluenceChange` | `public abstract ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false);` | method |
| `CalculateSupportForPolicyInClan` | `public abstract float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy);` | method |
| `CalculateRelationshipChangeWithSponsor` | `public abstract float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan);` | method |
| `GetInfluenceRequiredToOverrideKingdomDecision` | `public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision);` | method |
| `CanHeroBeGovernor` | `public abstract bool CanHeroBeGovernor(Hero hero);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
