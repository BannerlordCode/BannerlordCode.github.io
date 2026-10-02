---
title: "InputKeyItemVM"
description: "InputKeyItemVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 13 exposed members (8 methods, 5 properties, 0 fields). Source: SandBox.ViewModelCollection/Input/InputKeyItemVM.cs."
---
# InputKeyItemVM

**Namespace:** `SandBox.ViewModelCollection.Input`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class InputKeyItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Input/InputKeyItemVM.cs`

## Overview

InputKeyItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Input/InputKeyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is InputKeyItemVM → ViewModel. It exposes 13 public/protected members: 8 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InputKeyItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Input) the module directory; inheritance chain InputKeyItemVM → ViewModel. The surface is method-led (methods 8/13, properties 5/13), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Input/InputKeyItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameKey` | `public GameKey GameKey` | property |
| `HotKey` | `public HotKey HotKey` | property |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetForcedVisibility` | `public void SetForcedVisibility(bool? isVisible)` | method |
| `CreateFromGameKey` | `public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)` | method |
| `CreateFromHotKey` | `public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)` | method |
| `CreateFromHotKeyWithForcedName` | `public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)` | method |
| `CreateFromGameKeyWithForcedName` | `public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)` | method |
| `CreateFromForcedID` | `public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)` | method |
| `KeyID` | `public string KeyID` | property |
| `KeyName` | `public string KeyName` | property |
| `IsVisible` | `public bool IsVisible` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
