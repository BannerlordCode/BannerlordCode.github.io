---
title: "CharacterEquipmentItemVM"
description: "CharacterEquipmentItemVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs."
---
# CharacterEquipmentItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class CharacterEquipmentItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs`

## Overview

CharacterEquipmentItemVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterEquipmentItemVM → ViewModel. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterEquipmentItemVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace matching the module directory; inheritance chain CharacterEquipmentItemVM → ViewModel. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterEquipmentItemVM` | `public CharacterEquipmentItemVM(ItemObject item)` | constructor |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | method |
| `Type` | `public string Type` | property |
| `HasItem` | `public bool HasItem` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleResultVM](../BattleResultVM)
- [same namespace CharacterViewModel](../CharacterViewModel)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel)
- [same namespace ControlCharacterCreationStage](../ControlCharacterCreationStage)
