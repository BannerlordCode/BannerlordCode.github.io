---
title: "DefaultClanPoliticsModel"
description: "DefaultClanPoliticsModel: a public class in TaleWorlds.CampaignSystem, inheriting ClanPoliticsModel; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs."
---
# DefaultClanPoliticsModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs`

## Overview

DefaultClanPoliticsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs. It is a public class, implementing/inheriting ClanPoliticsModel; the inheritance chain is DefaultClanPoliticsModel → ClanPoliticsModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultClanPoliticsModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultClanPoliticsModel → ClanPoliticsModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateInfluenceChange` | `public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)` | method |
| `CalculateSupportForPolicyInClan` | `public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)` | method |
| `CalculateRelationshipChangeWithSponsor` | `public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)` | method |
| `GetInfluenceRequiredToOverrideKingdomDecision` | `public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)` | method |
| `CanHeroBeGovernor` | `public override bool CanHeroBeGovernor(Hero hero)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ClanPoliticsModel](../ClanPoliticsModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
