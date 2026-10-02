---
title: "SPOrderOfBattleVM"
description: "SPOrderOfBattleVM: a public class in SandBox.ViewModelCollection, inheriting OrderOfBattleVM; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/SPOrderOfBattleVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPOrderOfBattleVM

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SPOrderOfBattleVM : OrderOfBattleVM`
**File:** `SandBox.ViewModelCollection/SPOrderOfBattleVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SPOrderOfBattleVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SPOrderOfBattleVM.cs. It is a public class, implementing/inheriting OrderOfBattleVM; the inheritance chain is SPOrderOfBattleVM → OrderOfBattleVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPOrderOfBattleVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection`, inheritance chain SPOrderOfBattleVM → OrderOfBattleVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SPOrderOfBattleVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SPOrderOfBattleVM` | `public SPOrderOfBattleVM()` | constructor |
| `LoadConfiguration` | `protected override void LoadConfiguration()` | method |
| `SaveConfiguration` | `protected override void SaveConfiguration()` | method |
| `List` | `protected override List<TooltipProperty>GetAgentTooltip(Agent agent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface OrderOfBattleVM](../../viewmodel/OrderOfBattleVM/)
- [same namespace PerkObjectComparer](../PerkObjectComparer/)
- [same namespace SandBoxUIHelper](../SandBoxUIHelper/)
- [same namespace SPScoreboardVM](../SPScoreboardVM/)
- [same namespace TournamentRewardVM](../TournamentRewardVM/)
