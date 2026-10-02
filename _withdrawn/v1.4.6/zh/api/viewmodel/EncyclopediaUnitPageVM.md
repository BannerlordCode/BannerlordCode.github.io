---
title: "EncyclopediaUnitPageVM"
description: "EncyclopediaUnitPageVM：TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages 的 public 类，继承 EncyclopediaContentPageVM；公开成员 16 个（方法 4、属性 11、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaUnitPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaUnitPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

EncyclopediaUnitPageVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs。它是一个 public 类，实现/继承 EncyclopediaContentPageVM，继承链为 EncyclopediaUnitPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 16 个：4 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaUnitPageVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，继承链 EncyclopediaUnitPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 11/16，方法 4/16），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaUnitPageVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaUnitPageVM` | `public EncyclopediaUnitPageVM(EncyclopediaPageArgs args) : base(args)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `GetName` | `public override string GetName()` | 方法 |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | 方法 |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | 方法 |
| `MBBindingList` | `public MBBindingList<EncyclopediaSkillVM>Skills` | 属性 |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>PropertiesList` | 属性 |
| `SelectorVM` | `public SelectorVM<EncyclopediaUnitEquipmentSetSelectorItemVM>EquipmentSetSelector` | 属性 |
| `CurrentSelectedEquipmentSet` | `public EncyclopediaUnitEquipmentSetSelectorItemVM CurrentSelectedEquipmentSet` | 属性 |
| `UnitCharacter` | `public CharacterViewModel UnitCharacter` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `Tree` | `public EncyclopediaTroopTreeNodeVM Tree` | 属性 |
| `TreeDisplayErrorText` | `public string TreeDisplayErrorText` | 属性 |
| `EquipmentSetText` | `public string EquipmentSetText` | 属性 |
| `HasErrors` | `public bool HasErrors` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [同命名空间 EncyclopediaClanPageVM](../EncyclopediaClanPageVM/)
- [同命名空间 EncyclopediaConceptPageVM](../EncyclopediaConceptPageVM/)
- [同命名空间 EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [同命名空间 EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM/)
