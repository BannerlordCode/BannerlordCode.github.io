---
title: "DestroyPartyAction"
description: "DestroyPartyAction: a public class in TaleWorlds.CampaignSystem.Actions; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Actions/DestroyPartyAction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DestroyPartyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class DestroyPartyAction`
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyPartyAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

DestroyPartyAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/DestroyPartyAction.cs. It is a public class; the inheritance chain is DestroyPartyAction. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DestroyPartyAction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Actions`, inheritance chain DestroyPartyAction. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/DestroyPartyAction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Apply` | `public static void Apply(PartyBase destroyerParty, MobileParty destroyedParty)` | method |
| `ApplyForDisbanding` | `public static void ApplyForDisbanding(MobileParty disbandedParty, Settlement relatedSettlement)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AddCompanionAction](../AddCompanionAction/)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction/)
- [same namespace AdoptHeroAction](../AdoptHeroAction/)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
