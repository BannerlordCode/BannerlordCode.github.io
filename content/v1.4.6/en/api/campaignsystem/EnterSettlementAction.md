---
title: "EnterSettlementAction"
description: "EnterSettlementAction: a public class in TaleWorlds.CampaignSystem; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Actions/EnterSettlementAction.cs."
---
# EnterSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class EnterSettlementAction`
**File:** `TaleWorlds.CampaignSystem/Actions/EnterSettlementAction.cs`

## Overview

EnterSettlementAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/EnterSettlementAction.cs. It is a public class; the inheritance chain is EnterSettlementAction. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EnterSettlementAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain EnterSettlementAction. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/EnterSettlementAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyForParty` | `public static void ApplyForParty(MobileParty mobileParty, Settlement settlement)` | method |
| `ApplyForPartyEntersAlley` | `public static void ApplyForPartyEntersAlley(MobileParty party, Settlement settlement, Alley alley, bool isPlayerInvolved = false)` | method |
| `ApplyForCharacterOnly` | `public static void ApplyForCharacterOnly(Hero hero, Settlement settlement)` | method |
| `ApplyForPrisoner` | `public static void ApplyForPrisoner(Hero hero, Settlement settlement)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
