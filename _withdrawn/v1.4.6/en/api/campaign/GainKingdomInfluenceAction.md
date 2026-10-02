---
title: "GainKingdomInfluenceAction"
description: "GainKingdomInfluenceAction: a public class in TaleWorlds.CampaignSystem.Actions; 11 exposed members (11 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Actions/GainKingdomInfluenceAction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GainKingdomInfluenceAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class GainKingdomInfluenceAction`
**File:** `TaleWorlds.CampaignSystem/Actions/GainKingdomInfluenceAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

GainKingdomInfluenceAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/GainKingdomInfluenceAction.cs. It is a public class; the inheritance chain is GainKingdomInfluenceAction. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GainKingdomInfluenceAction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Actions`, inheritance chain GainKingdomInfluenceAction. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/GainKingdomInfluenceAction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ApplyForBattle` | `public static void ApplyForBattle(Hero hero, float value)` | method |
| `ApplyForGivingFood` | `public static void ApplyForGivingFood(Hero hero1, Hero hero2, float value)` | method |
| `ApplyForDefault` | `public static void ApplyForDefault(Hero hero, float value)` | method |
| `ApplyForJoiningFaction` | `public static void ApplyForJoiningFaction(Hero hero, float value)` | method |
| `ApplyForDonatePrisoners` | `public static void ApplyForDonatePrisoners(MobileParty donatingParty, float value)` | method |
| `ApplyForRaidingEnemyVillage` | `public static void ApplyForRaidingEnemyVillage(MobileParty side1Party, float value)` | method |
| `ApplyForBesiegingEnemySettlement` | `public static void ApplyForBesiegingEnemySettlement(MobileParty side1Party, float value)` | method |
| `ApplyForSiegeSafePassageBarter` | `public static void ApplyForSiegeSafePassageBarter(MobileParty side1Party, float value)` | method |
| `ApplyForCapturingEnemySettlement` | `public static void ApplyForCapturingEnemySettlement(MobileParty side1Party, float value)` | method |
| `ApplyForLeavingTroopToGarrison` | `public static void ApplyForLeavingTroopToGarrison(Hero hero, float value)` | method |
| `ApplyForBoardGameWon` | `public static void ApplyForBoardGameWon(Hero hero, float value)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AddCompanionAction](../AddCompanionAction/)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction/)
- [same namespace AdoptHeroAction](../AdoptHeroAction/)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
