---
title: "GameOverStatItemVM"
description: "GameOverStatItemVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/GameOver/GameOverStatItemVM.cs."
---
# GameOverStatItemVM

**Namespace:** `SandBox.ViewModelCollection.GameOver`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class GameOverStatItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/GameOver/GameOverStatItemVM.cs`

## Overview

GameOverStatItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/GameOver/GameOverStatItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameOverStatItemVM → ViewModel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameOverStatItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.GameOver) the module directory; inheritance chain GameOverStatItemVM → ViewModel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/GameOver/GameOverStatItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameOverStatItemVM` | `public GameOverStatItemVM(StatItem item)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `DefinitionText` | `public string DefinitionText` | property |
| `ValueText` | `public string ValueText` | property |
| `StatTypeAsString` | `public string StatTypeAsString` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameOverStatCategoryVM](../GameOverStatCategoryVM)
- [same namespace GameOverStatsProvider](../GameOverStatsProvider)
- [same namespace GameOverVM](../GameOverVM)
- [same namespace StatCategory](../StatCategory)
