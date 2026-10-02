---
title: "PartyTroopManagerItemVM"
description: "PartyTroopManagerItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs。"
---
# PartyTroopManagerItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyTroopManagerItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs`

## 概述

PartyTroopManagerItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PartyTroopManagerItemVM → ViewModel。public/protected 成员共 9 个：3 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyTroopManagerItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp），继承链 PartyTroopManagerItemVM → ViewModel。成员构成以属性为主（属性 5/9，方法 3/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public Action<PartyTroopManagerItemVM>SetFocused` | 属性 |
| `PartyTroopManagerItemVM` | `public PartyTroopManagerItemVM(PartyCharacterVM baseTroop, Action<PartyTroopManagerItemVM>setFocused)` | 构造函数 |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | 方法 |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | 方法 |
| `ExecuteOpenTroopEncyclopedia` | `public void ExecuteOpenTroopEncyclopedia()` | 方法 |
| `IsFocused` | `public bool IsFocused` | 属性 |
| `PartyCharacter` | `public PartyCharacterVM PartyCharacter` | 属性 |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable` | 属性 |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyRecruitTroopVM](../PartyRecruitTroopVM)
- [同命名空间 PartyTroopManagerVM](../PartyTroopManagerVM)
- [同命名空间 PartyUpgradeTroopVM](../PartyUpgradeTroopVM)
