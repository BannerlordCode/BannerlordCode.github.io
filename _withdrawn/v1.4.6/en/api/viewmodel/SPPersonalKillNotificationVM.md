---
title: "SPPersonalKillNotificationVM"
description: "SPPersonalKillNotificationVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal, inheriting ViewModel; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPPersonalKillNotificationVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPPersonalKillNotificationVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPPersonalKillNotificationVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPPersonalKillNotificationVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPPersonalKillNotificationVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`, inheritance chain SPPersonalKillNotificationVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SPPersonalKillNotificationVM` | `public SPPersonalKillNotificationVM()` | constructor |
| `OnPersonalKill` | `public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)` | method |
| `OnPersonalHit` | `public void OnPersonalHit(int damageAmount, bool isMountDamage, bool isFriendlyFire, string killedAgentName)` | method |
| `OnPersonalMessage` | `public void OnPersonalMessage(string message)` | method |
| `MBBindingList` | `public MBBindingList<SPPersonalKillNotificationItemVM>NotificationList` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SPPersonalKillNotificationItemVM](../SPPersonalKillNotificationItemVM/)
