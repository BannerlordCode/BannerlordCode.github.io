---
title: "ChangeOwnerOfSettlementAction"
description: "ChangeOwnerOfSettlementAction: a public class in TaleWorlds.CampaignSystem.Actions; 10 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChangeOwnerOfSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeOwnerOfSettlementAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ChangeOwnerOfSettlementAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs. It is a public class; the inheritance chain is ChangeOwnerOfSettlementAction. It exposes 10 public/protected members: 8 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeOwnerOfSettlementAction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Actions`, inheritance chain ChangeOwnerOfSettlementAction. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ApplyByDefault` | `public static void ApplyByDefault(Hero hero, Settlement settlement)` | method |
| `ApplyByKingDecision` | `public static void ApplyByKingDecision(Hero hero, Settlement settlement)` | method |
| `ApplyBySiege` | `public static void ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement settlement)` | method |
| `ApplyByLeaveFaction` | `public static void ApplyByLeaveFaction(Hero hero, Settlement settlement)` | method |
| `ApplyByBarter` | `public static void ApplyByBarter(Hero hero, Settlement settlement)` | method |
| `ApplyByRebellion` | `public static void ApplyByRebellion(Hero hero, Settlement settlement)` | method |
| `ApplyByDestroyClan` | `public static void ApplyByDestroyClan(Settlement settlement, Hero newOwner)` | method |
| `ApplyByGift` | `public static void ApplyByGift(Settlement settlement, Hero newOwner)` | method |
| `ChangeOwnerOfSettlementDetail` | `public enum ChangeOwnerOfSettlementDetail` | property |
| `ChangeOwnerOfSettlementDetail` | `public enum ChangeOwnerOfSettlementDetail` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AddCompanionAction](../AddCompanionAction/)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction/)
- [same namespace AdoptHeroAction](../AdoptHeroAction/)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
