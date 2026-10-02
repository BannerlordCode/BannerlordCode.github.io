---
title: "GameKeyOptionVM"
description: "GameKeyOptionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys, inheriting KeyOptionVM; 8 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameKeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameKeyOptionVM : KeyOptionVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

GameKeyOptionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs. It is a public class, implementing/inheriting KeyOptionVM; the inheritance chain is GameKeyOptionVM → KeyOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameKeyOptionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`, inheritance chain GameKeyOptionVM → KeyOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KeyOptionVM](../KeyOptionVM/)
- [same namespace GameKeyGroupVM](../GameKeyGroupVM/)
- [same namespace GameKeyOptionCategoryVM](../GameKeyOptionCategoryVM/)
