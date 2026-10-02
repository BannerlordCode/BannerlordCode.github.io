---
title: "GamepadOptionKeyItemVM"
description: "GamepadOptionKeyItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 10 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs."
---
# GamepadOptionKeyItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GamepadOptionKeyItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs`

## Overview

GamepadOptionKeyItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GamepadOptionKeyItemVM → ViewModel. It exposes 10 public/protected members: 1 methods, 6 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GamepadOptionKeyItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions) the module directory; inheritance chain GamepadOptionKeyItemVM → ViewModel. The surface is property-led (properties 6/10, methods 1/10), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GamepadKey` | `public GameKey GamepadKey` | property |
| `GamepadHotKey` | `public HotKey GamepadHotKey` | property |
| `Key` | `public InputKey? Key` | property |
| `GamepadOptionKeyItemVM` | `public GamepadOptionKeyItemVM(GameKey gamepadGameKey)` | constructor |
| `GamepadOptionKeyItemVM` | `public GamepadOptionKeyItemVM(HotKey gamepadHotKey)` | constructor |
| `GamepadOptionKeyItemVM` | `public GamepadOptionKeyItemVM(InputKey key, TextObject name)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Action` | `public string Action` | property |
| `KeyId` | `public int KeyId` | property |
| `KeyIdAsString` | `public string KeyIdAsString` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GamepadOptionCategoryVM](../GamepadOptionCategoryVM)
