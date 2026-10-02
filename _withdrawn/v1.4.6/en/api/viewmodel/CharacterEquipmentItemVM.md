---
title: "CharacterEquipmentItemVM"
description: "CharacterEquipmentItemVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterEquipmentItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class CharacterEquipmentItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

CharacterEquipmentItemVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterEquipmentItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterEquipmentItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection`, inheritance chain CharacterEquipmentItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CharacterEquipmentItemVM` | `public CharacterEquipmentItemVM(ItemObject item)` | constructor |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | method |
| `Type` | `public string Type` | property |
| `HasItem` | `public bool HasItem` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BattleResultVM](../BattleResultVM/)
- [same namespace CharacterViewModel](../CharacterViewModel/)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel/)
- [same namespace ControlCharacterCreationStage](../ControlCharacterCreationStage/)
