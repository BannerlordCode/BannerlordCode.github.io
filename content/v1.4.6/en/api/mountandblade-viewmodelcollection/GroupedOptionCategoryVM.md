---
title: "GroupedOptionCategoryVM"
description: "GroupedOptionCategoryVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 13 exposed members (5 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs."
---
# GroupedOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GroupedOptionCategoryVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs`

## Overview

GroupedOptionCategoryVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GroupedOptionCategoryVM → ViewModel. It exposes 13 public/protected members: 5 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GroupedOptionCategoryVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions) the module directory; inheritance chain GroupedOptionCategoryVM → ViewModel. The surface is property-led (properties 7/13, methods 5/13), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<GenericOptionDataVM>AllOptions` | property |
| `GroupedOptionCategoryVM` | `public GroupedOptionCategoryVM(OptionsVM options, TextObject name, OptionCategory category, bool isEnabled, bool isResetSupported = false)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ResetData` | `public void ResetData()` | method |
| `ExecuteResetToDefault` | `public void ExecuteResetToDefault()` | method |
| `GetOption` | `public GenericOptionDataVM GetOption(ManagedOptions.ManagedOptionsType optionType)` | method |
| `GetOption` | `public GenericOptionDataVM GetOption(NativeOptions.NativeOptionsType optionType)` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsResetSupported` | `public bool IsResetSupported` | property |
| `Name` | `public string Name` | property |
| `ResetText` | `public string ResetText` | property |
| `MBBindingList` | `public MBBindingList<OptionGroupVM>Groups` | property |
| `MBBindingList` | `public MBBindingList<GenericOptionDataVM>BaseOptions` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM)
- [same namespace ExposureOptionVM](../ExposureOptionVM)
