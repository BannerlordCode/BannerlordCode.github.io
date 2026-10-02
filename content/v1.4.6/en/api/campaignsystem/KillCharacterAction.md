---
title: "KillCharacterAction"
description: "KillCharacterAction: a public class in TaleWorlds.CampaignSystem; 13 exposed members (11 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs."
---
# KillCharacterAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class KillCharacterAction`
**File:** `TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs`

## Overview

KillCharacterAction lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs. It is a public class; the inheritance chain is KillCharacterAction. It exposes 13 public/protected members: 11 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KillCharacterAction is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Actions) the module directory; inheritance chain KillCharacterAction. The surface is method-led (methods 11/13, properties 1/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Actions/KillCharacterAction.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplyByOldAge` | `public static void ApplyByOldAge(Hero victim, bool showNotification = true)` | method |
| `ApplyByWounds` | `public static void ApplyByWounds(Hero victim, bool showNotification = true)` | method |
| `ApplyByBattle` | `public static void ApplyByBattle(Hero victim, Hero killer, bool showNotification = true)` | method |
| `ApplyByMurder` | `public static void ApplyByMurder(Hero victim, Hero killer = null, bool showNotification = true)` | method |
| `ApplyInLabor` | `public static void ApplyInLabor(Hero lostMother, bool showNotification = true)` | method |
| `ApplyByExecution` | `public static void ApplyByExecution(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)` | method |
| `ApplyByExecutionAfterMapEvent` | `public static void ApplyByExecutionAfterMapEvent(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)` | method |
| `ApplyByRemove` | `public static void ApplyByRemove(Hero victim, bool showNotification = false, bool isForced = true)` | method |
| `ApplyByDeathMark` | `public static void ApplyByDeathMark(Hero victim, bool showNotification = false)` | method |
| `ApplyByDeathMarkForced` | `public static void ApplyByDeathMarkForced(Hero victim, bool showNotification = false)` | method |
| `ApplyByPlayerIllness` | `public static void ApplyByPlayerIllness()` | method |
| `KillCharacterActionDetail` | `public enum KillCharacterActionDetail` | property |
| `KillCharacterActionDetail` | `public enum KillCharacterActionDetail` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AddCompanionAction](../AddCompanionAction)
- [same namespace AddHeroToPartyAction](../AddHeroToPartyAction)
- [same namespace AdoptHeroAction](../AdoptHeroAction)
- [same namespace ApplyHeirSelectionAction](../ApplyHeirSelectionAction)
