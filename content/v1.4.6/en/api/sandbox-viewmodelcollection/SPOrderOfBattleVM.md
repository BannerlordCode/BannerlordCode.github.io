---
title: "SPOrderOfBattleVM"
description: "SPOrderOfBattleVM: a public class in SandBox.ViewModelCollection, inheriting OrderOfBattleVM; 4 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/SPOrderOfBattleVM.cs."
---
# SPOrderOfBattleVM

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SPOrderOfBattleVM : OrderOfBattleVM`
**File:** `SandBox.ViewModelCollection/SPOrderOfBattleVM.cs`

## Overview

SPOrderOfBattleVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SPOrderOfBattleVM.cs. It is a public class, implementing/inheriting OrderOfBattleVM; the inheritance chain is SPOrderOfBattleVM → OrderOfBattleVM. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPOrderOfBattleVM is a top-level type in SandBox.ViewModelCollection, namespace matching the module directory; inheritance chain SPOrderOfBattleVM → OrderOfBattleVM. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. OrderOfBattleVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SPOrderOfBattleVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPOrderOfBattleVM` | `public SPOrderOfBattleVM()` | constructor |
| `LoadConfiguration` | `protected override void LoadConfiguration()` | method |
| `SaveConfiguration` | `protected override void SaveConfiguration()` | method |
| `List` | `protected override List<TooltipProperty>GetAgentTooltip(Agent agent)` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PerkObjectComparer](../PerkObjectComparer)
- [same namespace SandBoxUIHelper](../SandBoxUIHelper)
- [same namespace SPScoreboardVM](../SPScoreboardVM)
- [same namespace TournamentRewardVM](../TournamentRewardVM)
