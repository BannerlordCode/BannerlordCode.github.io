---
title: "BoundaryCrossingVM"
description: "BoundaryCrossingVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (0 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoundaryCrossingVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BoundaryCrossingVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

BoundaryCrossingVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoundaryCrossingVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoundaryCrossingVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection`, inheritance chain BoundaryCrossingVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/6, methods 0/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BoundaryCrossingVM` | `public BoundaryCrossingVM(Mission mission, Action<bool>onEscapeMenuToggled)` | constructor |
| `Show` | `public bool Show` | property |
| `WarningText` | `public string WarningText` | property |
| `WarningProgress` | `public double WarningProgress` | property |
| `WarningIntProgress` | `public int WarningIntProgress` | property |
| `Countdown` | `public int Countdown` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FullScreenNoticeVM](../FullScreenNoticeVM/)
- [same namespace GameVersionVM](../GameVersionVM/)
- [same namespace IMissionScreen](../IMissionScreen/)
- [same namespace MissionAgentStatusVM](../MissionAgentStatusVM/)
