---
title: "ClanPoliticsModel"
description: "ClanPoliticsModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<ClanPoliticsModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs."
---
# ClanPoliticsModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanPoliticsModel : MBGameModel<ClanPoliticsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs`

## Overview

ClanPoliticsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ClanPoliticsModel>; the inheritance chain is ClanPoliticsModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPoliticsModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain ClanPoliticsModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateInfluenceChange` | `public abstract ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false);` | method |
| `CalculateSupportForPolicyInClan` | `public abstract float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy);` | method |
| `CalculateRelationshipChangeWithSponsor` | `public abstract float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan);` | method |
| `GetInfluenceRequiredToOverrideKingdomDecision` | `public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision);` | method |
| `CanHeroBeGovernor` | `public abstract bool CanHeroBeGovernor(Hero hero);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
