---
title: "GroupedOptionCategoryVM"
description: "GroupedOptionCategoryVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting ViewModel; 13 exposed members (5 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GroupedOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GroupedOptionCategoryVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

GroupedOptionCategoryVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GroupedOptionCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 5 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GroupedOptionCategoryVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain GroupedOptionCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/13, methods 5/13), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM/)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace ExposureOptionVM](../ExposureOptionVM/)
