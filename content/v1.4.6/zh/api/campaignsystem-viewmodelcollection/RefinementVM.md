---
title: "RefinementVM"
description: "RefinementVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 8 个（方法 3、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs。"
---
# RefinementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RefinementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs`

## 概述

RefinementVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 RefinementVM → ViewModel。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RefinementVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement），继承链 RefinementVM → ViewModel。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RefinementVM` | `public RefinementVM(Action onRefinementSelectionChange, Func<CraftingAvailableHeroItemVM>getCurrentHero)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSelectedRefinement` | `public void ExecuteSelectedRefinement(Hero currentCraftingHero)` | 方法 |
| `RefreshRefinementActionsList` | `public void RefreshRefinementActionsList(Hero craftingHero)` | 方法 |
| `CurrentSelectedAction` | `public RefinementActionItemVM CurrentSelectedAction` | 属性 |
| `IsValidRefinementActionSelected` | `public bool IsValidRefinementActionSelected` | 属性 |
| `MBBindingList` | `public MBBindingList<RefinementActionItemVM>AvailableRefinementActions` | 属性 |
| `RefinementText` | `public string RefinementText` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 RefinementActionItemVM](../RefinementActionItemVM)
