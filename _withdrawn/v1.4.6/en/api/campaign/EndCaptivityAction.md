---
title: "EndCaptivityAction"
description: "EndCaptivityAction: a public class in TaleWorlds.CampaignSystem.Actions; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EndCaptivityAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class EndCaptivityAction`
**File:** `TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

EndCaptivityAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs. It is a public class; the inheritance chain is EndCaptivityAction. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EndCaptivityAction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Actions`, inheritance chain EndCaptivityAction. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ApplyByReleasedAfterBattle` | `public static void ApplyByReleasedAfterBattle(Hero character)` | method |
| `ApplyByRansom` | `public static void ApplyByRansom(Hero character, Hero facilitator)` | method |
| `ApplyByPeace` | `public static void ApplyByPeace(Hero character, Hero facilitator = null)` | method |
| `ApplyByEscape` | `public static void ApplyByEscape(Hero character, Hero facilitator = null, bool showNotification = true)` | method |
| `ApplyByDeath` | `public static void ApplyByDeath(Hero character)` | method |
| `ApplyByReleasedByChoice` | `public static void ApplyByReleasedByChoice(FlattenedTroopRoster troopRoster)` | method |
| `ApplyByReleasedByChoice` | `public static void ApplyByReleasedByChoice(Hero character, Hero facilitator = null)` | method |
| `ApplyByReleasedByCompensation` | `public static void ApplyByReleasedByCompensation(Hero character)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AddCompanionAction](../AddCompanionAction/)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction/)
- [same namespace AdoptHeroAction](../AdoptHeroAction/)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
