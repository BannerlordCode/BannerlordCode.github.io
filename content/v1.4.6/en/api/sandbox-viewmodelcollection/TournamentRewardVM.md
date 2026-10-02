---
title: "TournamentRewardVM"
description: "TournamentRewardVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 5 exposed members (0 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/TournamentRewardVM.cs."
---
# TournamentRewardVM

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentRewardVM : ViewModel`
**File:** `SandBox.ViewModelCollection/TournamentRewardVM.cs`

## Overview

TournamentRewardVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/TournamentRewardVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentRewardVM → ViewModel. It exposes 5 public/protected members: 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentRewardVM is a top-level type in SandBox.ViewModelCollection, namespace matching the module directory; inheritance chain TournamentRewardVM → ViewModel. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/TournamentRewardVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentRewardVM` | `public TournamentRewardVM(string text)` | constructor |
| `TournamentRewardVM` | `public TournamentRewardVM(string text, ItemImageIdentifierVM imageIdentifierVM)` | constructor |
| `Text` | `public string Text` | property |
| `GotImageIdentifier` | `public bool GotImageIdentifier` | property |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PerkObjectComparer](../PerkObjectComparer)
- [same namespace SandBoxUIHelper](../SandBoxUIHelper)
- [same namespace SPOrderOfBattleVM](../SPOrderOfBattleVM)
- [same namespace SPScoreboardVM](../SPScoreboardVM)
