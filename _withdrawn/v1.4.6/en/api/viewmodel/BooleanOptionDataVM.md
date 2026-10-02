---
title: "BooleanOptionDataVM"
description: "BooleanOptionDataVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting GenericOptionDataVM; 8 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BooleanOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BooleanOptionDataVM : GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

BooleanOptionDataVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs. It is a public class, implementing/inheriting GenericOptionDataVM; the inheritance chain is BooleanOptionDataVM → GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BooleanOptionDataVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain BooleanOptionDataVM → GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BooleanOptionDataVM` | `public BooleanOptionDataVM(OptionsVM optionsVM, IBooleanOptionData option, TextObject name, TextObject description) : base(optionsVM, option, name, description, OptionsVM.OptionsDataType.BooleanOption)` | constructor |
| `OptionValueAsBoolean` | `public bool OptionValueAsBoolean` | property |
| `UpdateValue` | `public override void UpdateValue()` | method |
| `Cancel` | `public override void Cancel()` | method |
| `SetValue` | `public override void SetValue(float value)` | method |
| `ResetData` | `public override void ResetData()` | method |
| `IsChanged` | `public override bool IsChanged()` | method |
| `ApplyValue` | `public override void ApplyValue()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GenericOptionDataVM](../GenericOptionDataVM/)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace ExposureOptionVM](../ExposureOptionVM/)
- [same namespace GenericOptionDataVM](../GenericOptionDataVM/)
