---
title: "MakePeaceAction"
description: "MakePeaceAction: a public class in TaleWorlds.CampaignSystem.Actions; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MakePeaceAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class MakePeaceAction`
**File:** `TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

MakePeaceAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs. It is a public class; the inheritance chain is MakePeaceAction. It exposes 4 public/protected members: 2 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MakePeaceAction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Actions`, inheritance chain MakePeaceAction. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Apply` | `public static void Apply(IFaction faction1, IFaction faction2)` | method |
| `ApplyByKingdomDecision` | `public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2, int dailyTributeDuration)` | method |
| `MakePeaceDetail` | `public enum MakePeaceDetail` | property |
| `MakePeaceDetail` | `public enum MakePeaceDetail` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AddCompanionAction](../AddCompanionAction/)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction/)
- [same namespace AdoptHeroAction](../AdoptHeroAction/)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
