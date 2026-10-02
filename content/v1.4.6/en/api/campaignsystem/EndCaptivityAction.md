---
title: "EndCaptivityAction"
description: "EndCaptivityAction: a public class in TaleWorlds.CampaignSystem; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs."
---
# EndCaptivityAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class EndCaptivityAction`
**File:** `TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs`

## Overview

EndCaptivityAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs. It is a public class; the inheritance chain is EndCaptivityAction. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EndCaptivityAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain EndCaptivityAction. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
