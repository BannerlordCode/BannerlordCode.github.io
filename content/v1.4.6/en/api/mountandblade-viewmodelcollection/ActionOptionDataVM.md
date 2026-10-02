---
title: "ActionOptionDataVM"
description: "ActionOptionDataVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting GenericOptionDataVM; 9 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs."
---
# ActionOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ActionOptionDataVM : GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs`

## Overview

ActionOptionDataVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs. It is a public class, implementing/inheriting GenericOptionDataVM; the inheritance chain is ActionOptionDataVM → GenericOptionDataVM → ViewModel. It exposes 9 public/protected members: 7 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActionOptionDataVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions) the module directory; inheritance chain ActionOptionDataVM → GenericOptionDataVM → ViewModel. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActionOptionDataVM` | `public ActionOptionDataVM(Action onAction, OptionsVM optionsVM, IOptionData option, TextObject name, TextObject optionActionName, TextObject description) : base(optionsVM, option, name, description, OptionsVM.OptionsDataType.ActionOption)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Cancel` | `public override void Cancel()` | method |
| `IsChanged` | `public override bool IsChanged()` | method |
| `ResetData` | `public override void ResetData()` | method |
| `SetValue` | `public override void SetValue(float value)` | method |
| `UpdateValue` | `public override void UpdateValue()` | method |
| `ApplyValue` | `public override void ApplyValue()` | method |
| `ActionName` | `public string ActionName` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GenericOptionDataVM](../GenericOptionDataVM)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM)
- [same namespace ExposureOptionVM](../ExposureOptionVM)
- [same namespace GenericOptionDataVM](../GenericOptionDataVM)
