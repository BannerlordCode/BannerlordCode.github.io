---
title: "CraftingItemViewModel"
description: "CraftingItemViewModel: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs."
---
# CraftingItemViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class CraftingItemViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs`

## Overview

CraftingItemViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingItemViewModel → ViewModel. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingItemViewModel is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace matching the module directory; inheritance chain CraftingItemViewModel → ViewModel. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UsedPieces` | `public string UsedPieces` | property |
| `WeaponClass` | `public int WeaponClass` | property |
| `GetWeaponClass` | `public WeaponClass GetWeaponClass()` | method |
| `SetCraftingData` | `public void SetCraftingData(WeaponClass weaponClass, WeaponDesignElement[]craftingPieces)` | method |
| `CraftingItemViewModel` | `public CraftingItemViewModel()` | constructor |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleResultVM](../BattleResultVM)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM)
- [same namespace CharacterViewModel](../CharacterViewModel)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel)
