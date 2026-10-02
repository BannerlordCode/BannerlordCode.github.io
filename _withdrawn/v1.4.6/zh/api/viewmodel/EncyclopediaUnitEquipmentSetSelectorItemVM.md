---
title: "EncyclopediaUnitEquipmentSetSelectorItemVM"
description: "EncyclopediaUnitEquipmentSetSelectorItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items 的 public 类，继承 SelectorItemVM；公开成员 4 个（方法 0、属性 3、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaUnitEquipmentSetSelectorItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaUnitEquipmentSetSelectorItemVM : SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

EncyclopediaUnitEquipmentSetSelectorItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs。它是一个 public 类，实现/继承 SelectorItemVM，继承链为 EncyclopediaUnitEquipmentSetSelectorItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaUnitEquipmentSetSelectorItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`，继承链 EncyclopediaUnitEquipmentSetSelectorItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitEquipmentSetSelectorItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EquipmentSet` | `public Equipment EquipmentSet` | 属性 |
| `EncyclopediaUnitEquipmentSetSelectorItemVM` | `public EncyclopediaUnitEquipmentSetSelectorItemVM(Equipment equipmentSet, string name = "") : base(name)` | 构造函数 |
| `MBBindingList` | `public MBBindingList<CharacterEquipmentItemVM>LeftEquipmentList` | 属性 |
| `MBBindingList` | `public MBBindingList<CharacterEquipmentItemVM>RightEquipmentList` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SelectorItemVM](../SelectorItemVM/)
- [同命名空间 EncyclopediaDwellingVM](../EncyclopediaDwellingVM/)
- [同命名空间 EncyclopediaFactionVM](../EncyclopediaFactionVM/)
- [同命名空间 EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM/)
- [同命名空间 EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM/)
