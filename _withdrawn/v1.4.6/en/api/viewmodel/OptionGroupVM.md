---
title: "OptionGroupVM"
description: "OptionGroupVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions, inheriting ViewModel; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionGroupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OptionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OptionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionGroupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OptionGroupVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OptionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionGroupVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`, inheritance chain OptionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/OptionGroupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OptionGroupVM` | `public OptionGroupVM(TextObject groupName, OptionsVM optionsBase, IEnumerable<IOptionData>optionsList)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Name` | `public string Name` | property |
| `MBBindingList` | `public MBBindingList<GenericOptionDataVM>Options` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM/)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM/)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM/)
- [same namespace ExposureOptionVM](../ExposureOptionVM/)
