---
title: "HeroCreator"
description: "HeroCreator: a public class in TaleWorlds.CampaignSystem; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/HeroCreator.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HeroCreator

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class HeroCreator`
**File:** `TaleWorlds.CampaignSystem/HeroCreator.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

HeroCreator lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/HeroCreator.cs. It is a public class; the inheritance chain is HeroCreator. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroCreator lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain HeroCreator. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/HeroCreator.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateNotable` | `public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)` | method |
| `CreateSpecialHero` | `public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)` | method |
| `CreateChild` | `public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)` | method |
| `CreateRelativeNotableHero` | `public static Hero CreateRelativeNotableHero(Hero relative)` | method |
| `CreateBasicHero` | `public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)` | method |
| `DeliverOffSpring` | `public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
