---
title: "ChangeOwnerOfWorkshopAction"
description: "ChangeOwnerOfWorkshopAction: a public class in TaleWorlds.CampaignSystem; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs."
---
# ChangeOwnerOfWorkshopAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeOwnerOfWorkshopAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs`

## Overview

ChangeOwnerOfWorkshopAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs. It is a public class; the inheritance chain is ChangeOwnerOfWorkshopAction. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeOwnerOfWorkshopAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain ChangeOwnerOfWorkshopAction. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByBankruptcy` | `public static void ApplyByBankruptcy(Workshop workshop, Hero newOwner, WorkshopType workshopType, int cost)` | method |
| `ApplyByPlayerBuying` | `public static void ApplyByPlayerBuying(Workshop workshop)` | method |
| `ApplyByPlayerSelling` | `public static void ApplyByPlayerSelling(Workshop workshop, Hero newOwner, WorkshopType workshopType)` | method |
| `ApplyByDeath` | `public static void ApplyByDeath(Workshop workshop, Hero newOwner)` | method |
| `ApplyByWar` | `public static void ApplyByWar(Workshop workshop, Hero newOwner, WorkshopType workshopType)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
