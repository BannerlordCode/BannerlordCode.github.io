---
title: "GamepadOptionCategoryVM"
description: "GamepadOptionCategoryVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting GroupedOptionCategoryVM; 12 exposed members (2 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs."
---
# GamepadOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GamepadOptionCategoryVM : GroupedOptionCategoryVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs`

## Overview

GamepadOptionCategoryVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs. It is a public class, implementing/inheriting GroupedOptionCategoryVM; the inheritance chain is GamepadOptionCategoryVM → GroupedOptionCategoryVM → ViewModel. It exposes 12 public/protected members: 2 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GamepadOptionCategoryVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions) the module directory; inheritance chain GamepadOptionCategoryVM → GroupedOptionCategoryVM → ViewModel. The surface is property-led (properties 9/12, methods 2/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionCategoryVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GamepadOptionCategoryVM` | `public GamepadOptionCategoryVM(OptionsVM options, TextObject name, OptionCategory category, bool isEnabled, bool isResetSupported = false) : base(options, name, category, isEnabled, isResetSupported)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `CurrentGamepadType` | `public int CurrentGamepadType` | property |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>OtherKeys` | property |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>DpadKeys` | property |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>LeftTriggerAndBumperKeys` | property |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>RightTriggerAndBumperKeys` | property |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>RightAnalogKeys` | property |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>LeftAnalogKeys` | property |
| `MBBindingList` | `public MBBindingList<GamepadOptionKeyItemVM>FaceKeys` | property |
| `MBBindingList` | `public MBBindingList<SelectorVM<SelectorItemVM>>Actions` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GroupedOptionCategoryVM](../GroupedOptionCategoryVM)
- [same namespace GamepadOptionKeyItemVM](../GamepadOptionKeyItemVM)
