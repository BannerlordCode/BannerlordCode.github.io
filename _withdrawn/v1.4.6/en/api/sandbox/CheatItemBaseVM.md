---
title: "CheatItemBaseVM"
description: "CheatItemBaseVM: a public class in SandBox.ViewModelCollection.Map.Cheat, inheriting ViewModel; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Map/Cheat/CheatItemBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CheatItemBaseVM

**Namespace:** `SandBox.ViewModelCollection.Map.Cheat`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class CheatItemBaseVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Cheat/CheatItemBaseVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CheatItemBaseVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Cheat/CheatItemBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is CheatItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheatItemBaseVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Map.Cheat`, inheritance chain CheatItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Cheat/CheatItemBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CheatItemBaseVM` | `public CheatItemBaseVM()` | constructor |
| `ExecuteAction` | `public abstract void ExecuteAction();` | method |
| `Name` | `public string Name` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheatActionItemVM](../CheatActionItemVM/)
- [same namespace CheatGroupItemVM](../CheatGroupItemVM/)
- [same namespace GameplayCheatsVM](../GameplayCheatsVM/)
