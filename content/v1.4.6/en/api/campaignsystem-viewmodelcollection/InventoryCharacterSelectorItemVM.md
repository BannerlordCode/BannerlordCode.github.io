---
title: "InventoryCharacterSelectorItemVM"
description: "InventoryCharacterSelectorItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting SelectorItemVM; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryCharacterSelectorItemVM.cs."
---
# InventoryCharacterSelectorItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class InventoryCharacterSelectorItemVM : SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryCharacterSelectorItemVM.cs`

## Overview

InventoryCharacterSelectorItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryCharacterSelectorItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is InventoryCharacterSelectorItemVM → SelectorItemVM. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryCharacterSelectorItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain InventoryCharacterSelectorItemVM → SelectorItemVM. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. SelectorItemVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryCharacterSelectorItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterID` | `public string CharacterID` | property |
| `Hero` | `public Hero Hero` | property |
| `InventoryCharacterSelectorItemVM` | `public InventoryCharacterSelectorItemVM(string characterID, Hero hero, TextObject characterName) : base(characterName)` | constructor |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
- [same namespace InventoryTradeVM](../InventoryTradeVM)
