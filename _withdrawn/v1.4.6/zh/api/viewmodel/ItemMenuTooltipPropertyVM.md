---
title: "ItemMenuTooltipPropertyVM"
description: "ItemMenuTooltipPropertyVM：TaleWorlds.CampaignSystem.ViewModelCollection.Inventory 的 public 类，继承 TooltipProperty；公开成员 13 个（方法 0、属性 4、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemMenuTooltipPropertyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ItemMenuTooltipPropertyVM : TooltipProperty`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ItemMenuTooltipPropertyVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs。它是一个 public 类，实现/继承 TooltipProperty，继承链为 ItemMenuTooltipPropertyVM → TooltipProperty → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：4 属性、9 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemMenuTooltipPropertyVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，继承链 ItemMenuTooltipPropertyVM → TooltipProperty → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 4/13，方法 0/13），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuTooltipPropertyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM()` | 构造函数 |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(string definition, string value, int textHeight, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null, string modifierBonusText = null, bool isModifierBeneficial = false) : base(definition, value, textHeight, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(string definition, Func<string>_valueFunc, int textHeight, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(definition, _valueFunc, textHeight, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(Func<string>_definitionFunc, Func<string>_valueFunc, int textHeight, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(_definitionFunc, _valueFunc, textHeight, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(Func<string>_definitionFunc, Func<string>_valueFunc, object[]valueArgs, int textHeight, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(_definitionFunc, _valueFunc, valueArgs, textHeight, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(string definition, string value, int textHeight, Color color, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None, string modifierBonusText = null, bool isModifierBeneficial = false) : base(definition, value, textHeight, color, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(string definition, Func<string>_valueFunc, int textHeight, Color color, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(definition, _valueFunc, textHeight, color, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(Func<string>_definitionFunc, Func<string>_valueFunc, int textHeight, Color color, bool onlyShowWhenExtended = false, HintViewModel propertyHint = null) : base(_definitionFunc, _valueFunc, textHeight, color, onlyShowWhenExtended, TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `ItemMenuTooltipPropertyVM` | `public ItemMenuTooltipPropertyVM(TooltipProperty property, HintViewModel propertyHint = null) : base(property)` | 构造函数 |
| `PropertyHint` | `public HintViewModel PropertyHint` | 属性 |
| `HasModifierBonus` | `public bool HasModifierBonus` | 属性 |
| `IsModifierBeneficial` | `public bool IsModifierBeneficial` | 属性 |
| `ModifierBonusText` | `public string ModifierBonusText` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TooltipProperty](../TooltipProperty/)
- [同命名空间 InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM/)
- [同命名空间 InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent/)
- [同命名空间 InventoryFilterChangedEvent](../InventoryFilterChangedEvent/)
- [同命名空间 InventoryItemInspectedEvent](../InventoryItemInspectedEvent/)
