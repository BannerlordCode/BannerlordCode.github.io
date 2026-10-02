---
title: "ItemCollectionElementViewModel"
description: "ItemCollectionElementViewModel: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 8 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs."
---
# ItemCollectionElementViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class ItemCollectionElementViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs`

## Overview

ItemCollectionElementViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ItemCollectionElementViewModel → ViewModel. It exposes 8 public/protected members: 2 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemCollectionElementViewModel is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace matching the module directory; inheritance chain ItemCollectionElementViewModel → ViewModel. The surface is property-led (properties 6/8, methods 2/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public string StringId` | property |
| `Ammo` | `public int Ammo` | property |
| `AverageUnitCost` | `public int AverageUnitCost` | property |
| `ItemModifierId` | `public string ItemModifierId` | property |
| `BannerCode` | `public string BannerCode` | property |
| `InitialPanRotation` | `public float InitialPanRotation` | property |
| `FillFrom` | `public void FillFrom(EquipmentElement item, Banner banner = null)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleResultVM](../BattleResultVM)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM)
- [same namespace CharacterViewModel](../CharacterViewModel)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel)
