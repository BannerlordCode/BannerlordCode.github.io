---
title: "ItemFlagVM"
description: "ItemFlagVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Inventory, inheriting ViewModel; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemFlagVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ItemFlagVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ItemFlagVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ItemFlagVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemFlagVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`, inheritance chain ItemFlagVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ItemFlagVM` | `public ItemFlagVM(string iconName, TextObject hint)` | constructor |
| `Icon` | `public string Icon` | property |
| `Hint` | `public HintViewModel Hint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM/)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent/)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent/)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent/)
