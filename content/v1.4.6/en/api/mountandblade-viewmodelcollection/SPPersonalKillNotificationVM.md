---
title: "SPPersonalKillNotificationVM"
description: "SPPersonalKillNotificationVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs."
---
# SPPersonalKillNotificationVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPPersonalKillNotificationVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs`

## Overview

SPPersonalKillNotificationVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPPersonalKillNotificationVM → ViewModel. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPPersonalKillNotificationVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal) the module directory; inheritance chain SPPersonalKillNotificationVM → ViewModel. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPPersonalKillNotificationVM` | `public SPPersonalKillNotificationVM()` | constructor |
| `OnPersonalKill` | `public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)` | method |
| `OnPersonalHit` | `public void OnPersonalHit(int damageAmount, bool isMountDamage, bool isFriendlyFire, string killedAgentName)` | method |
| `OnPersonalMessage` | `public void OnPersonalMessage(string message)` | method |
| `MBBindingList` | `public MBBindingList<SPPersonalKillNotificationItemVM>NotificationList` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SPPersonalKillNotificationItemVM](../SPPersonalKillNotificationItemVM)
