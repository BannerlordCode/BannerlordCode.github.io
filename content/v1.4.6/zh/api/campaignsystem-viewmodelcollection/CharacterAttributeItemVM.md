---
title: "CharacterAttributeItemVM"
description: "CharacterAttributeItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 19 个（方法 6、属性 12、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs。"
---
# CharacterAttributeItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterAttributeItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs`

## 概述

CharacterAttributeItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterAttributeItemVM → ViewModel。public/protected 成员共 19 个：6 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterAttributeItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper），继承链 CharacterAttributeItemVM → ViewModel。成员构成以属性为主（属性 12/19，方法 6/19），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AttributeType` | `public CharacterAttribute AttributeType` | 属性 |
| `CharacterAttributeItemVM` | `public CharacterAttributeItemVM(Hero hero, CharacterAttribute currAtt, CharacterDeveloperHeroItemVM developerVM, Action<CharacterAttributeItemVM>onInpectAttribute, Action<CharacterAttributeItemVM>onAddAttributePoint)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteInspectAttribute` | `public void ExecuteInspectAttribute()` | 方法 |
| `ExecuteAddAttributePoint` | `public void ExecuteAddAttributePoint()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `RefreshWithCurrentValues` | `public void RefreshWithCurrentValues()` | 方法 |
| `Commit` | `public void Commit()` | 方法 |
| `MBBindingList` | `public MBBindingList<AttributeBoundSkillItemVM>BoundSkills` | 属性 |
| `AttributeValue` | `public int AttributeValue` | 属性 |
| `UnspentAttributePoints` | `public int UnspentAttributePoints` | 属性 |
| `UnspentAttributePointsText` | `public string UnspentAttributePointsText` | 属性 |
| `Name` | `public string Name` | 属性 |
| `NameExtended` | `public string NameExtended` | 属性 |
| `Description` | `public string Description` | 属性 |
| `IncreaseHelpText` | `public string IncreaseHelpText` | 属性 |
| `IsInspecting` | `public bool IsInspecting` | 属性 |
| `IsAttributeAtMax` | `public bool IsAttributeAtMax` | 属性 |
| `CanAddPoint` | `public bool CanAddPoint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM)
- [同命名空间 CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM)
- [同命名空间 CharacterDeveloperVM](../CharacterDeveloperVM)
- [同命名空间 FocusAddedByPlayerEvent](../FocusAddedByPlayerEvent)
