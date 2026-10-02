---
title: "SPKillFeedVM"
description: "SPKillFeedVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 7 exposed members (4 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs."
---
# SPKillFeedVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPKillFeedVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs`

## Overview

SPKillFeedVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPKillFeedVM → ViewModel. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPKillFeedVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed) the module directory; inheritance chain SPKillFeedVM → ViewModel. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPKillFeedVM` | `public SPKillFeedVM()` | constructor |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)` | method |
| `OnPersonalKill` | `public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)` | method |
| `OnPersonalDamage` | `public void OnPersonalDamage(int totalDamage, bool isVictimAgentMount, bool isFriendlyFire, string victimAgentName)` | method |
| `OnPersonalMessage` | `public void OnPersonalMessage(string message)` | method |
| `GeneralCasualty` | `public SPGeneralKillNotificationVM GeneralCasualty` | property |
| `PersonalFeed` | `public SPPersonalKillNotificationVM PersonalFeed` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
