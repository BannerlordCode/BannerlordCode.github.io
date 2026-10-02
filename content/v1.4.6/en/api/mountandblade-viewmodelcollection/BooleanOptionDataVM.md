---
title: "BooleanOptionDataVM"
description: "BooleanOptionDataVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting GenericOptionDataVM; 8 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs."
---
# BooleanOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BooleanOptionDataVM : GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs`

## Overview

BooleanOptionDataVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs. It is a public class, implementing/inheriting GenericOptionDataVM; the inheritance chain is BooleanOptionDataVM → GenericOptionDataVM → ViewModel. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BooleanOptionDataVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions) the module directory; inheritance chain BooleanOptionDataVM → GenericOptionDataVM → ViewModel. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GenericOptionDataVM](../GenericOptionDataVM)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM)
- [same namespace ExposureOptionVM](../ExposureOptionVM)
- [same namespace GenericOptionDataVM](../GenericOptionDataVM)
