---
title: "CraftingItemViewModel"
description: "CraftingItemViewModel: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingItemViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class CraftingItemViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

CraftingItemViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingItemViewModel → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingItemViewModel lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection`, inheritance chain CraftingItemViewModel → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/CraftingItemViewModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UsedPieces` | `public string UsedPieces` | property |
| `WeaponClass` | `public int WeaponClass` | property |
| `GetWeaponClass` | `public WeaponClass GetWeaponClass()` | method |
| `SetCraftingData` | `public void SetCraftingData(WeaponClass weaponClass, WeaponDesignElement[]craftingPieces)` | method |
| `CraftingItemViewModel` | `public CraftingItemViewModel()` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BattleResultVM](../BattleResultVM/)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM/)
- [same namespace CharacterViewModel](../CharacterViewModel/)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel/)
