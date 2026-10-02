---
title: "ExposureOptionVM"
description: "ExposureOptionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting ViewModel; 15 exposed members (5 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ExposureOptionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ExposureOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ExposureOptionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ExposureOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

ExposureOptionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ExposureOptionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ExposureOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 15 public/protected members: 5 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ExposureOptionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain ExposureOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/15, methods 5/15), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ExposureOptionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ExposureOptionVM` | `public ExposureOptionVM(Action<bool>onClose = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteConfirm` | `public void ExecuteConfirm()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `TitleText` | `public string TitleText` | property |
| `ExplanationText` | `public string ExplanationText` | property |
| `CancelText` | `public string CancelText` | property |
| `AcceptText` | `public string AcceptText` | property |
| `Value` | `public float Value` | property |
| `InitialValue` | `public float InitialValue` | property |
| `Visible` | `public bool Visible` | property |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetConfirmInputKey` | `public void SetConfirmInputKey(HotKey hotkey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM/)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace GenericOptionDataVM](../GenericOptionDataVM/)
