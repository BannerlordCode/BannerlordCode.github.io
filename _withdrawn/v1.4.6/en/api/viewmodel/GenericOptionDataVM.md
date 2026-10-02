---
title: "GenericOptionDataVM"
description: "GenericOptionDataVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting ViewModel; 21 exposed members (12 methods, 8 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GenericOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class GenericOptionDataVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

GenericOptionDataVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 21 public/protected members: 12 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericOptionDataVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain GenericOptionDataVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 12/21, properties 8/21), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsNative` | `public bool IsNative` | property |
| `IsAction` | `public bool IsAction` | property |
| `GenericOptionDataVM` | `protected GenericOptionDataVM(OptionsVM optionsVM, IOptionData option, TextObject name, TextObject description, OptionsVM.OptionsDataType typeID)` | constructor |
| `UpdateData` | `public virtual void UpdateData(bool initUpdate)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `GetOptionType` | `public object GetOptionType()` | method |
| `GetOptionData` | `public IOptionData GetOptionData()` | method |
| `ResetToDefault` | `public void ResetToDefault()` | method |
| `UpdateEnableState` | `public void UpdateEnableState()` | method |
| `Description` | `public string Description` | property |
| `Name` | `public string Name` | property |
| `string[]ImageIDs` | `public string[]ImageIDs` | property |
| `OptionTypeID` | `public int OptionTypeID` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Hint` | `public HintViewModel Hint` | property |
| `UpdateValue` | `public abstract void UpdateValue();` | method |
| `Cancel` | `public abstract void Cancel();` | method |
| `IsChanged` | `public abstract bool IsChanged();` | method |
| `SetValue` | `public abstract void SetValue(float value);` | method |
| `ResetData` | `public abstract void ResetData();` | method |
| `ApplyValue` | `public abstract void ApplyValue();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM/)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace ExposureOptionVM](../ExposureOptionVM/)
