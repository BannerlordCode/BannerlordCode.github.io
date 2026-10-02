---
title: "RecruitVolunteerVM"
description: "RecruitVolunteerVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment 的 public 类，继承 ViewModel；公开成员 16 个（方法 5、属性 10、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RecruitVolunteerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitVolunteerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

RecruitVolunteerVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 RecruitVolunteerVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 16 个：5 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RecruitVolunteerVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`，继承链 RecruitVolunteerVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 10/16，方法 5/16），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OwnerHero` | `public Hero OwnerHero` | 属性 |
| `List` | `public List<CharacterObject>VolunteerTroops` | 属性 |
| `GoldCost` | `public int GoldCost` | 属性 |
| `RecruitVolunteerVM` | `public RecruitVolunteerVM(Hero owner, List<CharacterObject>troops, Action<RecruitVolunteerVM, RecruitVolunteerTroopVM>onRecruit, Action<RecruitVolunteerVM, RecruitVolunteerTroopVM>onRemoveFromCart)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteRecruit` | `public void ExecuteRecruit(RecruitVolunteerTroopVM troop)` | 方法 |
| `ExecuteRemoveFromCart` | `public void ExecuteRemoveFromCart(RecruitVolunteerTroopVM troop)` | 方法 |
| `OnRecruitMoveToCart` | `public void OnRecruitMoveToCart(RecruitVolunteerTroopVM troop)` | 方法 |
| `OnRecruitRemovedFromCart` | `public void OnRecruitRemovedFromCart(RecruitVolunteerTroopVM troop)` | 方法 |
| `MBBindingList` | `public MBBindingList<RecruitVolunteerTroopVM>Troops` | 属性 |
| `Owner` | `public RecruitVolunteerOwnerVM Owner` | 属性 |
| `CanRecruit` | `public bool CanRecruit` | 属性 |
| `ButtonIsVisible` | `public bool ButtonIsVisible` | 属性 |
| `QuantityText` | `public string QuantityText` | 属性 |
| `RecruitText` | `public string RecruitText` | 属性 |
| `RecruitHint` | `public HintViewModel RecruitHint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 RecruitmentVM](../RecruitmentVM/)
- [同命名空间 RecruitVolunteerOwnerVM](../RecruitVolunteerOwnerVM/)
- [同命名空间 RecruitVolunteerTroopVM](../RecruitVolunteerTroopVM/)
