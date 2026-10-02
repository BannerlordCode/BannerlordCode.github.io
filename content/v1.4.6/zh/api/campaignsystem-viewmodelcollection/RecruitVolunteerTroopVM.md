---
title: "RecruitVolunteerTroopVM"
description: "RecruitVolunteerTroopVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 21 个（方法 8、属性 12、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs。"
---
# RecruitVolunteerTroopVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitVolunteerTroopVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs`

## 概述

RecruitVolunteerTroopVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 RecruitVolunteerTroopVM → ViewModel。public/protected 成员共 21 个：8 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RecruitVolunteerTroopVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment），继承链 RecruitVolunteerTroopVM → ViewModel。成员构成以属性为主（属性 12/21，方法 8/21），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RecruitVolunteerTroopVM` | `public RecruitVolunteerTroopVM(RecruitVolunteerVM owner, CharacterObject character, int index, Action<RecruitVolunteerTroopVM>onClick, Action<RecruitVolunteerTroopVM>onRemoveFromCart)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteRecruit` | `public void ExecuteRecruit()` | 方法 |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | 方法 |
| `ExecuteRemoveFromCart` | `public void ExecuteRemoveFromCart()` | 方法 |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | 方法 |
| `ExecuteFocus` | `public void ExecuteFocus()` | 方法 |
| `ExecuteUnfocus` | `public void ExecuteUnfocus()` | 方法 |
| `Level` | `public string Level` | 属性 |
| `CanBeRecruited` | `public bool CanBeRecruited` | 属性 |
| `IsHiglightEnabled` | `public bool IsHiglightEnabled` | 属性 |
| `Wage` | `public int Wage` | 属性 |
| `Cost` | `public int Cost` | 属性 |
| `IsInCart` | `public bool IsInCart` | 属性 |
| `IsTroopEmpty` | `public bool IsTroopEmpty` | 属性 |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation` | 属性 |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | 属性 |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 RecruitmentVM](../RecruitmentVM)
- [同命名空间 RecruitVolunteerOwnerVM](../RecruitVolunteerOwnerVM)
- [同命名空间 RecruitVolunteerVM](../RecruitVolunteerVM)
