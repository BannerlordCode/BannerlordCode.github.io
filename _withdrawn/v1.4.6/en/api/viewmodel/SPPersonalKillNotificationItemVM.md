---
title: "SPPersonalKillNotificationItemVM"
description: "SPPersonalKillNotificationItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal, inheriting ViewModel; 9 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPPersonalKillNotificationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPPersonalKillNotificationItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPPersonalKillNotificationItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPPersonalKillNotificationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 1 methods, 5 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPPersonalKillNotificationItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`, inheritance chain SPPersonalKillNotificationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/9, methods 1/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SPPersonalKillNotificationVM](../SPPersonalKillNotificationVM/)
