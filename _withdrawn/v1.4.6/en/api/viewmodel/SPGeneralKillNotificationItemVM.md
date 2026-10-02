---
title: "SPGeneralKillNotificationItemVM"
description: "SPGeneralKillNotificationItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General, inheriting ViewModel; 12 exposed members (1 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPGeneralKillNotificationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPGeneralKillNotificationItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPGeneralKillNotificationItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPGeneralKillNotificationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 1 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPGeneralKillNotificationItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General`, inheritance chain SPGeneralKillNotificationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/12, methods 1/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SPGeneralKillNotificationItemVM` | `public SPGeneralKillNotificationItemVM(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning, Action<SPGeneralKillNotificationItemVM>onRemove)` | constructor |
| `ExecuteRemove` | `public void ExecuteRemove()` | method |
| `MurdererName` | `public string MurdererName` | property |
| `MurdererType` | `public string MurdererType` | property |
| `VictimName` | `public string VictimName` | property |
| `VictimType` | `public string VictimType` | property |
| `IsUnconscious` | `public bool IsUnconscious` | property |
| `IsHeadshot` | `public bool IsHeadshot` | property |
| `IsSuicide` | `public bool IsSuicide` | property |
| `IsDrowning` | `public bool IsDrowning` | property |
| `BackgroundColor` | `public Color BackgroundColor` | property |
| `IsPaused` | `public bool IsPaused` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SPGeneralKillNotificationVM](../SPGeneralKillNotificationVM/)
