---
title: "ItemCollectionElementViewModel"
description: "ItemCollectionElementViewModel: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 8 exposed members (2 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemCollectionElementViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class ItemCollectionElementViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

ItemCollectionElementViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ItemCollectionElementViewModel → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 2 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemCollectionElementViewModel lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection`, inheritance chain ItemCollectionElementViewModel → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/8, methods 2/8), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/ItemCollectionElementViewModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BattleResultVM](../BattleResultVM/)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM/)
- [same namespace CharacterViewModel](../CharacterViewModel/)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel/)
