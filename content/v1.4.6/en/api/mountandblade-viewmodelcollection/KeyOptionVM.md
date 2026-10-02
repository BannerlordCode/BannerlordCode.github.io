---
title: "KeyOptionVM"
description: "KeyOptionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 13 exposed members (4 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs."
---
# KeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class KeyOptionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs`

## Overview

KeyOptionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is KeyOptionVM → ViewModel. It exposes 13 public/protected members: 4 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KeyOptionVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions) the module directory; inheritance chain KeyOptionVM → ViewModel. The surface is property-led (properties 8/13, methods 4/13), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/KeyOptionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentKey` | `public Key CurrentKey` | property |
| `Key` | `public Key Key` | property |
| `KeyOptionVM` | `public KeyOptionVM(string groupId, string id, Action<KeyOptionVM>onKeybindRequest)` | constructor |
| `Set` | `public abstract void Set(InputKey newKey);` | method |
| `Update` | `public abstract void Update();` | method |
| `OnDone` | `public abstract void OnDone();` | method |
| `ExecuteRevert` | `public abstract void ExecuteRevert();` | method |
| `OptionValueText` | `public string OptionValueText` | property |
| `Name` | `public string Name` | property |
| `Description` | `public string Description` | property |
| `IsChanged` | `public bool IsChanged` | property |
| `RevertHint` | `public HintViewModel RevertHint` | property |
| `ExtraInformationText` | `public string ExtraInformationText` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionOptionDataVM](../ActionOptionDataVM)
- [same namespace BooleanOptionDataVM](../BooleanOptionDataVM)
- [same namespace BrightnessOptionVM](../BrightnessOptionVM)
- [same namespace ExposureOptionVM](../ExposureOptionVM)
