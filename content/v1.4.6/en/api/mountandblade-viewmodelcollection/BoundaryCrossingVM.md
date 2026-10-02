---
title: "BoundaryCrossingVM"
description: "BoundaryCrossingVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs."
---
# BoundaryCrossingVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BoundaryCrossingVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs`

## Overview

BoundaryCrossingVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoundaryCrossingVM → ViewModel. It exposes 6 public/protected members: 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoundaryCrossingVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace matching the module directory; inheritance chain BoundaryCrossingVM → ViewModel. The surface is property-led (properties 5/6, methods 0/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoundaryCrossingVM` | `public BoundaryCrossingVM(Mission mission, Action<bool>onEscapeMenuToggled)` | constructor |
| `Show` | `public bool Show` | property |
| `WarningText` | `public string WarningText` | property |
| `WarningProgress` | `public double WarningProgress` | property |
| `WarningIntProgress` | `public int WarningIntProgress` | property |
| `Countdown` | `public int Countdown` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FullScreenNoticeVM](../FullScreenNoticeVM)
- [same namespace GameVersionVM](../GameVersionVM)
- [same namespace IMissionScreen](../IMissionScreen)
- [same namespace MissionAgentStatusVM](../MissionAgentStatusVM)
