---
title: "RefinementActionItemVM"
description: "RefinementActionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs。"
---
# RefinementActionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RefinementActionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs`

## 概述

RefinementActionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 RefinementActionItemVM → ViewModel。public/protected 成员共 9 个：3 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RefinementActionItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement），继承链 RefinementActionItemVM → ViewModel。成员构成以属性为主（属性 5/9，方法 3/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RefineFormula` | `public Crafting.RefiningFormula RefineFormula` | 属性 |
| `RefinementActionItemVM` | `public RefinementActionItemVM(Crafting.RefiningFormula refineFormula, Action<RefinementActionItemVM>onSelect)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshDynamicProperties` | `public void RefreshDynamicProperties()` | 方法 |
| `ExecuteSelectAction` | `public void ExecuteSelectAction()` | 方法 |
| `MBBindingList` | `public MBBindingList<CraftingResourceItemVM>InputMaterials` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingResourceItemVM>OutputMaterials` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 RefinementVM](../RefinementVM)
