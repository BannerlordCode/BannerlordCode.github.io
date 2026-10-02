---
title: "SPPersonalKillNotificationItemVM"
description: "SPPersonalKillNotificationItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 9 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs."
---
# SPPersonalKillNotificationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPPersonalKillNotificationItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs`

## Overview

SPPersonalKillNotificationItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPPersonalKillNotificationItemVM → ViewModel. It exposes 9 public/protected members: 1 methods, 5 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPPersonalKillNotificationItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal) the module directory; inheritance chain SPPersonalKillNotificationItemVM → ViewModel. The surface is property-led (properties 5/9, methods 1/9), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPPersonalKillNotificationItemVM` | `public SPPersonalKillNotificationItemVM(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious, Action<SPPersonalKillNotificationItemVM>onRemoveItem)` | constructor |
| `SPPersonalKillNotificationItemVM` | `public SPPersonalKillNotificationItemVM(int amount, bool isMountDamage, bool isFriendlyFire, string killedAgentName, Action<SPPersonalKillNotificationItemVM>onRemoveItem)` | constructor |
| `SPPersonalKillNotificationItemVM` | `public SPPersonalKillNotificationItemVM(string victimAgentName, Action<SPPersonalKillNotificationItemVM>onRemoveItem)` | constructor |
| `ExecuteRemove` | `public void ExecuteRemove()` | method |
| `VictimType` | `public string VictimType` | property |
| `Message` | `public string Message` | property |
| `ItemType` | `public int ItemType` | property |
| `Amount` | `public int Amount` | property |
| `IsPaused` | `public bool IsPaused` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SPPersonalKillNotificationVM](../SPPersonalKillNotificationVM)
