---
title: "ItemMenuTooltipPropertyVM"
description: "ItemMenuTooltipPropertyVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting TooltipProperty; 13 exposed members (0 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs."
---
# ItemMenuTooltipPropertyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ItemMenuTooltipPropertyVM : TooltipProperty`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs`

## Overview

ItemMenuTooltipPropertyVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs. It is a public class, implementing/inheriting TooltipProperty; the inheritance chain is ItemMenuTooltipPropertyVM → TooltipProperty. It exposes 13 public/protected members: 4 properties, 9 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemMenuTooltipPropertyVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain ItemMenuTooltipPropertyVM → TooltipProperty. The surface is property-led (properties 4/13, methods 0/13), so it mostly exposes state for reading. TooltipProperty on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM()` | constructor |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(string definition, string value, int textHeight, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null, string modifierBonusText = null, bool isModifierBeneficial = false) : base(definition, value, textHeight, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(string definition, Func<string>_valueFunc, int textHeight, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(definition, _valueFunc, textHeight, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(Func<string>_definitionFunc, Func<string>_valueFunc, int textHeight, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(_definitionFunc, _valueFunc, textHeight, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(Func<string>_definitionFunc, Func<string>_valueFunc, object[]valueArgs, int textHeight, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(_definitionFunc, _valueFunc, valueArgs, textHeight, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(string definition, string value, int textHeight, Color color, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None, string modifierBonusText = null, bool isModifierBeneficial = false) : base(definition, value, textHeight, color, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(string definition, Func<string>_valueFunc, int textHeight, Color color, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(definition, _valueFunc, textHeight, color, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(Func<string>_definitionFunc, Func<string>_valueFunc, int textHeight, Color color, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(_definitionFunc, _valueFunc, textHeight, color, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(TooltipProperty property, HintViewModel propertyHint = null) : base(property)` | constructor |
| `PropertyHint` | `public HintViewModel PropertyHint` | property |
| `HasModifierBonus` | `public bool HasModifierBonus` | property |
| `IsModifierBeneficial` | `public bool IsModifierBeneficial` | property |
| `ModifierBonusText` | `public string ModifierBonusText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
