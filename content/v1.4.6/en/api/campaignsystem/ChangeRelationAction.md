---
title: "ChangeRelationAction"
description: "ChangeRelationAction: a public class in TaleWorlds.CampaignSystem; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Actions/ChangeRelationAction.cs."
---
# ChangeRelationAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeRelationAction`
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeRelationAction.cs`

## Overview

ChangeRelationAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/ChangeRelationAction.cs. It is a public class; the inheritance chain is ChangeRelationAction. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeRelationAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain ChangeRelationAction. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/ChangeRelationAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyPlayerRelation` | `public static void ApplyPlayerRelation(Hero gainedRelationWith, int relation, bool affectRelatives = true, bool showQuickNotification = true)` | method |
| `ApplyRelationChangeBetweenHeroes` | `public static void ApplyRelationChangeBetweenHeroes(Hero hero, Hero gainedRelationWith, int relationChange, bool showQuickNotification = true)` | method |
| `ApplyEmissaryRelation` | `public static void ApplyEmissaryRelation(Hero emissary, Hero gainedRelationWith, int relationChange, bool showQuickNotification = true)` | method |
| `ChangeRelationDetail` | `public enum ChangeRelationDetail` | property |
| `ChangeRelationDetail` | `public enum ChangeRelationDetail` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
