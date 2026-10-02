---
title: "FaceGenPropertyVM"
description: "FaceGenPropertyVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator, inheriting ViewModel; 14 exposed members (4 methods, 8 properties, 1 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FaceGenPropertyVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FaceGenPropertyVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

FaceGenPropertyVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is FaceGenPropertyVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 4 methods, 8 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FaceGenPropertyVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`, inheritance chain FaceGenPropertyVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/14, methods 4/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KeyTimePoint` | `public int KeyTimePoint` | property |
| `FaceGenPropertyVM` | `public FaceGenPropertyVM(int keyNo, double min, double max, TextObject name, int keyTimePoint, int tabId, double value, float initialValue, Action<int, float, bool, bool>updateFace, Action addCommand, Action resetSliderPrevValuesCommand, bool isEnabled = true, bool isDiscrete = false, bool addCommandOnValueChange = true)` | constructor |
| `Reset` | `public void Reset()` | method |
| `Randomize` | `public void Randomize()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `AddCommand` | `public void AddCommand()` | method |
| `Min` | `public float Min` | property |
| `TabID` | `public int TabID` | property |
| `Max` | `public float Max` | property |
| `Value` | `public float Value` | property |
| `Name` | `public string Name` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsDiscrete` | `public bool IsDiscrete` | property |
| `PrevValue` | `public double PrevValue` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FacegenListItemVM](../FacegenListItemVM/)
- [same namespace FaceGenVM](../FaceGenVM/)
