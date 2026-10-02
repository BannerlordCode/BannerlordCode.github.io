---
title: "RecruitVolunteerOwnerVM"
description: "RecruitVolunteerOwnerVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 HeroVM；公开成员 7 个（方法 4、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs。"
---
# RecruitVolunteerOwnerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitVolunteerOwnerVM : HeroVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs`

## 概述

RecruitVolunteerOwnerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs。它是一个 public 类，实现/继承 HeroVM，继承链为 RecruitVolunteerOwnerVM → HeroVM → ViewModel。public/protected 成员共 7 个：4 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RecruitVolunteerOwnerVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment），继承链 RecruitVolunteerOwnerVM → HeroVM → ViewModel。成员构成以方法为主（方法 4/7，属性 2/7），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerOwnerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RecruitVolunteerOwnerVM` | `public RecruitVolunteerOwnerVM(Hero hero, int relation) : base(hero, hero != null && hero.IsNotable)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | 方法 |
| `ExecuteFocus` | `public void ExecuteFocus()` | 方法 |
| `ExecuteUnfocus` | `public void ExecuteUnfocus()` | 方法 |
| `TitleText` | `public string TitleText` | 属性 |
| `RelationToPlayer` | `public int RelationToPlayer` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 HeroVM](../HeroVM)
- [同命名空间 RecruitmentVM](../RecruitmentVM)
- [同命名空间 RecruitVolunteerTroopVM](../RecruitVolunteerTroopVM)
- [同命名空间 RecruitVolunteerVM](../RecruitVolunteerVM)
