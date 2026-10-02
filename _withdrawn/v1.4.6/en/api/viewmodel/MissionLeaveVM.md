---
title: "MissionLeaveVM"
description: "MissionLeaveVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionLeaveVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionLeaveVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionLeaveVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionLeaveVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionLeaveVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection`, inheritance chain MissionLeaveVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/MissionLeaveVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionLeaveVM` | `public MissionLeaveVM(Func<float>getMissionEndTimer, Func<float>getMissionEndTimeInSeconds)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `LeaveText` | `public string LeaveText` | property |
| `MaxTime` | `public float MaxTime` | property |
| `CurrentTime` | `public float CurrentTime` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BoundaryCrossingVM](../BoundaryCrossingVM/)
- [same namespace FullScreenNoticeVM](../FullScreenNoticeVM/)
- [same namespace GameVersionVM](../GameVersionVM/)
- [same namespace IMissionScreen](../IMissionScreen/)
