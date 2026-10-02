---
title: "SPGeneralKillNotificationItemVM"
description: "SPGeneralKillNotificationItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 12 exposed members (1 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs."
---
# SPGeneralKillNotificationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPGeneralKillNotificationItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs`

## Overview

SPGeneralKillNotificationItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPGeneralKillNotificationItemVM → ViewModel. It exposes 12 public/protected members: 1 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPGeneralKillNotificationItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General) the module directory; inheritance chain SPGeneralKillNotificationItemVM → ViewModel. The surface is property-led (properties 10/12, methods 1/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SPGeneralKillNotificationVM](../SPGeneralKillNotificationVM)
