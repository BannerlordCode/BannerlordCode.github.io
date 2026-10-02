---
title: "DeclareWarAction"
description: "DeclareWarAction: a public class in TaleWorlds.CampaignSystem.Actions; 10 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DeclareWarAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class DeclareWarAction`
**File:** `TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

DeclareWarAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs. It is a public class; the inheritance chain is DeclareWarAction. It exposes 10 public/protected members: 8 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeclareWarAction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Actions`, inheritance chain DeclareWarAction. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ApplyByKingdomDecision` | `public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2)` | method |
| `ApplyByDefault` | `public static void ApplyByDefault(IFaction faction1, IFaction faction2)` | method |
| `ApplyByPlayerHostility` | `public static void ApplyByPlayerHostility(IFaction faction1, IFaction faction2)` | method |
| `ApplyByRebellion` | `public static void ApplyByRebellion(IFaction faction1, IFaction faction2)` | method |
| `ApplyByCrimeRatingChange` | `public static void ApplyByCrimeRatingChange(IFaction faction1, IFaction faction2)` | method |
| `ApplyByKingdomCreation` | `public static void ApplyByKingdomCreation(IFaction faction1, IFaction faction2)` | method |
| `ApplyByClaimOnThrone` | `public static void ApplyByClaimOnThrone(IFaction faction1, IFaction faction2)` | method |
| `ApplyByCallToWarAgreement` | `public static void ApplyByCallToWarAgreement(IFaction faction1, IFaction faction2)` | method |
| `DeclareWarDetail` | `public enum DeclareWarDetail` | property |
| `DeclareWarDetail` | `public enum DeclareWarDetail` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AddCompanionAction](../AddCompanionAction/)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction/)
- [same namespace AdoptHeroAction](../AdoptHeroAction/)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
