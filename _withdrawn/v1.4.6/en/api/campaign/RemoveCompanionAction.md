---
title: "RemoveCompanionAction"
description: "RemoveCompanionAction: a public class in TaleWorlds.CampaignSystem.Actions; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RemoveCompanionAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class RemoveCompanionAction`
**File:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

RemoveCompanionAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs. It is a public class; the inheritance chain is RemoveCompanionAction. It exposes 6 public/protected members: 4 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RemoveCompanionAction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Actions`, inheritance chain RemoveCompanionAction. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ApplyByFire` | `public static void ApplyByFire(Clan clan, Hero companion)` | method |
| `ApplyAfterQuest` | `public static void ApplyAfterQuest(Clan clan, Hero companion)` | method |
| `ApplyByDeath` | `public static void ApplyByDeath(Clan clan, Hero companion)` | method |
| `ApplyByByTurningToLord` | `public static void ApplyByByTurningToLord(Clan clan, Hero companion)` | method |
| `RemoveCompanionDetail` | `public enum RemoveCompanionDetail` | property |
| `RemoveCompanionDetail` | `public enum RemoveCompanionDetail` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AddCompanionAction](../AddCompanionAction/)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction/)
- [same namespace AdoptHeroAction](../AdoptHeroAction/)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
