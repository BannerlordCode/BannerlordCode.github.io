---
title: "CharacterCreationGainedAttributeItemVM"
description: "CharacterCreationGainedAttributeItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation 的 public 类，继承 ViewModel；公开成员 5 个（方法 1、属性 3、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedAttributeItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationGainedAttributeItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationGainedAttributeItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedAttributeItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

CharacterCreationGainedAttributeItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedAttributeItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterCreationGainedAttributeItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationGainedAttributeItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，继承链 CharacterCreationGainedAttributeItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainedAttributeItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationGainedAttributeItemVM` | `public CharacterCreationGainedAttributeItemVM(CharacterAttribute attributeObj)` | 构造函数 |
| `SetValue` | `public void SetValue(int gainedFromOtherStages, int gainedFromCurrentStage)` | 方法 |
| `Hint` | `public BasicTooltipViewModel Hint` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `HasIncreasedInCurrentStage` | `public bool HasIncreasedInCurrentStage` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM/)
- [同命名空间 CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM/)
- [同命名空间 CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM/)
- [同命名空间 CharacterCreationCultureVM](../CharacterCreationCultureVM/)
