---
title: "SPKillFeedVM"
description: "SPKillFeedVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed, inheriting ViewModel; 7 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPKillFeedVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPKillFeedVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPKillFeedVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPKillFeedVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPKillFeedVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed`, inheritance chain SPKillFeedVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SPKillFeedVM` | `public SPKillFeedVM()` | constructor |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)` | method |
| `OnPersonalKill` | `public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)` | method |
| `OnPersonalDamage` | `public void OnPersonalDamage(int totalDamage, bool isVictimAgentMount, bool isFriendlyFire, string victimAgentName)` | method |
| `OnPersonalMessage` | `public void OnPersonalMessage(string message)` | method |
| `GeneralCasualty` | `public SPGeneralKillNotificationVM GeneralCasualty` | property |
| `PersonalFeed` | `public SPPersonalKillNotificationVM PersonalFeed` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
