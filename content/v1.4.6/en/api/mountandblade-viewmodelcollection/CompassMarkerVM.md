---
title: "CompassMarkerVM"
description: "CompassMarkerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 8 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs."
---
# CompassMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CompassMarkerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs`

## Overview

CompassMarkerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CompassMarkerVM → ViewModel. It exposes 8 public/protected members: 1 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CompassMarkerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass) the module directory; inheritance chain CompassMarkerVM → ViewModel. The surface is property-led (properties 6/8, methods 1/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Angle` | `public float Angle` | property |
| `CompassMarkerVM` | `public CompassMarkerVM(bool isPrimary, float angle, string text)` | constructor |
| `Refresh` | `public void Refresh(float circleX, float x, float distance)` | method |
| `IsPrimary` | `public bool IsPrimary` | property |
| `Text` | `public string Text` | property |
| `Distance` | `public int Distance` | property |
| `Position` | `public float Position` | property |
| `FullPosition` | `public float FullPosition` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CompassTargetVM](../CompassTargetVM)
