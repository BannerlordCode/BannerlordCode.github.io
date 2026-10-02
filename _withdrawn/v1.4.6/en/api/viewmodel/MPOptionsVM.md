---
title: "MPOptionsVM"
description: "MPOptionsVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting OptionsVM; 10 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPOptionsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MPOptionsVM : OptionsVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MPOptionsVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs. It is a public class, implementing/inheriting OptionsVM; the inheritance chain is MPOptionsVM → OptionsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 4 methods, 4 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPOptionsVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain MPOptionsVM → OptionsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/10, properties 4/10), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/MPOptionsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MPOptionsVM` | `public MPOptionsVM(bool autoHandleClose, Action onChangeBrightnessRequest, Action onChangeExposureRequest, Action<KeyOptionVM>onKeybindRequest) : base(autoHandleClose, OptionsVM.OptionsMode.Multiplayer, onKeybindRequest, onChangeBrightnessRequest, onChangeExposureRequest)` | constructor |
| `MPOptionsVM` | `public MPOptionsVM(Action onClose, Action<KeyOptionVM>onKeybindRequest) : base(OptionsVM.OptionsMode.Multiplayer, onClose, onKeybindRequest, null, null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteCancel` | `public new void ExecuteCancel()` | method |
| `ExecuteApply` | `public void ExecuteApply()` | method |
| `ForceCancel` | `public void ForceCancel()` | method |
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `ApplyText` | `public string ApplyText` | property |
| `RevertText` | `public string RevertText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface OptionsVM](../OptionsVM/)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM/)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace ExposureOptionVM](../ExposureOptionVM/)
