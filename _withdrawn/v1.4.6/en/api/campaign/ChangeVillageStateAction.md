---
title: "ChangeVillageStateAction"
description: "ChangeVillageStateAction: a public class in TaleWorlds.CampaignSystem.Actions; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Actions/ChangeVillageStateAction.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChangeVillageStateAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeVillageStateAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeVillageStateAction.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ChangeVillageStateAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/ChangeVillageStateAction.cs. It is a public class; the inheritance chain is ChangeVillageStateAction. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeVillageStateAction lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Actions`, inheritance chain ChangeVillageStateAction. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/ChangeVillageStateAction.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ApplyBySettingToNormal` | `public static void ApplyBySettingToNormal(Settlement settlement)` | method |
| `ApplyBySettingToBeingRaided` | `public static void ApplyBySettingToBeingRaided(Settlement settlement, MobileParty raider)` | method |
| `ApplyBySettingToBeingForcedForSupplies` | `public static void ApplyBySettingToBeingForcedForSupplies(Settlement settlement, MobileParty raider)` | method |
| `ApplyBySettingToBeingForcedForVolunteers` | `public static void ApplyBySettingToBeingForcedForVolunteers(Settlement settlement, MobileParty raider)` | method |
| `ApplyBySettingToLooted` | `public static void ApplyBySettingToLooted(Settlement settlement, MobileParty raider)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AddCompanionAction](../AddCompanionAction/)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction/)
- [same namespace AdoptHeroAction](../AdoptHeroAction/)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction/)
