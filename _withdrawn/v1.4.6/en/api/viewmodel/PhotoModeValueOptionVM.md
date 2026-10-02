---
title: "PhotoModeValueOptionVM"
description: "PhotoModeValueOptionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 7 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PhotoModeValueOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class PhotoModeValueOptionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

PhotoModeValueOptionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PhotoModeValueOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PhotoModeValueOptionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection`, inheritance chain PhotoModeValueOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeValueOptionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PhotoModeValueOptionVM` | `public PhotoModeValueOptionVM(TextObject valueNameTextObj, float min, float max, float currentValue, Action<float>onChange)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `MinValue` | `public float MinValue` | property |
| `MaxValue` | `public float MaxValue` | property |
| `CurrentValue` | `public float CurrentValue` | property |
| `CurrentValueText` | `public string CurrentValueText` | property |
| `ValueName` | `public string ValueName` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BoundaryCrossingVM](../BoundaryCrossingVM/)
- [same namespace FullScreenNoticeVM](../FullScreenNoticeVM/)
- [same namespace GameVersionVM](../GameVersionVM/)
- [same namespace IMissionScreen](../IMissionScreen/)
