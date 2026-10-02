---
title: "GameOverVM"
description: "GameOverVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 13 exposed members (4 methods, 8 properties, 0 fields). Source: SandBox.ViewModelCollection/GameOver/GameOverVM.cs."
---
# GameOverVM

**Namespace:** `SandBox.ViewModelCollection.GameOver`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class GameOverVM : ViewModel`
**File:** `SandBox.ViewModelCollection/GameOver/GameOverVM.cs`

## Overview

GameOverVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/GameOver/GameOverVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameOverVM → ViewModel. It exposes 13 public/protected members: 4 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameOverVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.GameOver) the module directory; inheritance chain GameOverVM → ViewModel. The surface is property-led (properties 8/13, methods 4/13), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/GameOver/GameOverVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameOverVM` | `public GameOverVM(GameOverState.GameOverReason reason, Action onClose)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `SetCloseInputKey` | `public void SetCloseInputKey(HotKey hotKey)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `CloseText` | `public string CloseText` | property |
| `StatisticsTitle` | `public string StatisticsTitle` | property |
| `ReasonAsString` | `public string ReasonAsString` | property |
| `TitleText` | `public string TitleText` | property |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | property |
| `IsPositiveGameOver` | `public bool IsPositiveGameOver` | property |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey` | property |
| `MBBindingList` | `public MBBindingList<GameOverStatCategoryVM>Categories` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameOverStatCategoryVM](../GameOverStatCategoryVM)
- [same namespace GameOverStatItemVM](../GameOverStatItemVM)
- [same namespace GameOverStatsProvider](../GameOverStatsProvider)
- [same namespace StatCategory](../StatCategory)
