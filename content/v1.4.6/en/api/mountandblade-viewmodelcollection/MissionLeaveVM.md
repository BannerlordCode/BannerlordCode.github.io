---
title: "MissionLeaveVM"
description: "MissionLeaveVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs."
---
# MissionLeaveVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionLeaveVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs`

## Overview

MissionLeaveVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionLeaveVM → ViewModel. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionLeaveVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace matching the module directory; inheritance chain MissionLeaveVM → ViewModel. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionLeaveVM` | `public MissionLeaveVM(Func<float>getMissionEndTimer, Func<float>getMissionEndTimeInSeconds)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `LeaveText` | `public string LeaveText` | property |
| `MaxTime` | `public float MaxTime` | property |
| `CurrentTime` | `public float CurrentTime` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoundaryCrossingVM](../BoundaryCrossingVM)
- [same namespace FullScreenNoticeVM](../FullScreenNoticeVM)
- [same namespace GameVersionVM](../GameVersionVM)
- [same namespace IMissionScreen](../IMissionScreen)
