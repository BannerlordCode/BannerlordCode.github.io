---
title: "PerkVM"
description: "PerkVM：TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper 的 public 类，继承 ViewModel；公开成员 17 个（方法 3、属性 11、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PerkVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PerkVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

PerkVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PerkVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 17 个：3 方法、11 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PerkVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`，继承链 PerkVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 11/17，方法 3/17），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentState` | `public PerkVM.PerkStates CurrentState` | 属性 |
| `PerkVM` | `public PerkVM(PerkObject perk, bool isAvailable, PerkVM.PerkAlternativeType alternativeType, Action<PerkVM>onStartSelection, Action<PerkVM>onSelectionOver, Func<PerkObject, bool>getIsPerkSelected, Func<PerkObject, bool>getIsPreviousPerkSelected)` | 构造函数 |
| `RefreshState` | `public void RefreshState()` | 方法 |
| `ExecuteShowPerkConcept` | `public void ExecuteShowPerkConcept()` | 方法 |
| `ExecuteStartSelection` | `public void ExecuteStartSelection()` | 方法 |
| `IsTutorialHighlightEnabled` | `public bool IsTutorialHighlightEnabled` | 属性 |
| `Hint` | `public BasicTooltipViewModel Hint` | 属性 |
| `Level` | `public int Level` | 属性 |
| `PerkState` | `public int PerkState` | 属性 |
| `AlternativeType` | `public int AlternativeType` | 属性 |
| `LevelText` | `public string LevelText` | 属性 |
| `BackgroundImage` | `public string BackgroundImage` | 属性 |
| `PerkId` | `public string PerkId` | 属性 |
| `PerkStates` | `public enum PerkStates` | 属性 |
| `PerkAlternativeType` | `public enum PerkAlternativeType` | 属性 |
| `PerkStates` | `public enum PerkStates` | 嵌套类型 |
| `PerkAlternativeType` | `public enum PerkAlternativeType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM/)
- [同命名空间 CharacterAttributeItemVM](../CharacterAttributeItemVM/)
- [同命名空间 CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM/)
- [同命名空间 CharacterDeveloperVM](../CharacterDeveloperVM/)
