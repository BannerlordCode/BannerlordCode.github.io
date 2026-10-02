---
title: "GameKeyOptionVM"
description: "GameKeyOptionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting KeyOptionVM; 8 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs."
---
# GameKeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameKeyOptionVM : KeyOptionVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs`

## Overview

GameKeyOptionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs. It is a public class, implementing/inheriting KeyOptionVM; the inheritance chain is GameKeyOptionVM → KeyOptionVM → ViewModel. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameKeyOptionVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys) the module directory; inheritance chain GameKeyOptionVM → KeyOptionVM → ViewModel. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentGameKey` | `public GameKey CurrentGameKey` | property |
| `GameKeyOptionVM` | `public GameKeyOptionVM(GameKey gameKey, Action<KeyOptionVM>onKeybindRequest, Action<GameKeyOptionVM, InputKey>onKeySet, Func<GameKeyOptionVM, string>getExtraInformation) : base(gameKey.GroupId, ((GameKeyDefinition)gameKey.Id).ToString(), onKeybindRequest)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Set` | `public override void Set(InputKey newKey)` | method |
| `Update` | `public override void Update()` | method |
| `OnDone` | `public override void OnDone()` | method |
| `ExecuteRevert` | `public override void ExecuteRevert()` | method |
| `Apply` | `public void Apply()` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KeyOptionVM](../KeyOptionVM)
- [same namespace GameKeyGroupVM](../GameKeyGroupVM)
- [same namespace GameKeyOptionCategoryVM](../GameKeyOptionCategoryVM)
