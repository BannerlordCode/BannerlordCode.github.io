---
title: "ActionOptionDataVM"
description: "ActionOptionDataVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting GenericOptionDataVM; 9 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ActionOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ActionOptionDataVM : GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

ActionOptionDataVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs. It is a public class, implementing/inheriting GenericOptionDataVM; the inheritance chain is ActionOptionDataVM → GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 7 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActionOptionDataVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain ActionOptionDataVM → GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GenericOptionDataVM](../GenericOptionDataVM/)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace ExposureOptionVM](../ExposureOptionVM/)
- [same namespace GenericOptionDataVM](../GenericOptionDataVM/)
