---
title: "NumericOptionDataVM"
description: "NumericOptionDataVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting GenericOptionDataVM; 14 exposed members (6 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/NumericOptionDataVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NumericOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class NumericOptionDataVM : GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/NumericOptionDataVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

NumericOptionDataVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/NumericOptionDataVM.cs. It is a public class, implementing/inheriting GenericOptionDataVM; the inheritance chain is NumericOptionDataVM → GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 6 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NumericOptionDataVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain NumericOptionDataVM → GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/14, methods 6/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/NumericOptionDataVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NumericOptionDataVM` | `public NumericOptionDataVM(OptionsVM optionsVM, INumericOptionData option, TextObject name, TextObject description) : base(optionsVM, option, name, description, OptionsVM.OptionsDataType.NumericOption)` | constructor |
| `DiscreteIncrementInterval` | `public int DiscreteIncrementInterval` | property |
| `Min` | `public float Min` | property |
| `Max` | `public float Max` | property |
| `OptionValue` | `public float OptionValue` | property |
| `IsDiscrete` | `public bool IsDiscrete` | property |
| `UpdateContinuously` | `public bool UpdateContinuously` | property |
| `OptionValueAsString` | `public string OptionValueAsString` | property |
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
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace ExposureOptionVM](../ExposureOptionVM/)
