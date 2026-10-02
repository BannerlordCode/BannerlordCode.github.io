---
title: "FaceGenPropertyVM"
description: "FaceGenPropertyVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 14 exposed members (4 methods, 8 properties, 1 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs."
---
# FaceGenPropertyVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FaceGenPropertyVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs`

## Overview

FaceGenPropertyVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is FaceGenPropertyVM → ViewModel. It exposes 14 public/protected members: 4 methods, 8 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FaceGenPropertyVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator) the module directory; inheritance chain FaceGenPropertyVM → ViewModel. The surface is property-led (properties 8/14, methods 4/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenPropertyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FacegenListItemVM](../FacegenListItemVM)
- [same namespace FaceGenVM](../FaceGenVM)
