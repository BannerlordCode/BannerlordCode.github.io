---
title: "CraftingAvailableHeroItemVM"
description: "CraftingAvailableHeroItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 18 个（方法 6、属性 11、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs。"
---
# CraftingAvailableHeroItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingAvailableHeroItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs`

## 概述

CraftingAvailableHeroItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CraftingAvailableHeroItemVM → ViewModel。public/protected 成员共 18 个：6 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingAvailableHeroItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting），继承链 CraftingAvailableHeroItemVM → ViewModel。成员构成以属性为主（属性 11/18，方法 6/18），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hero` | `public Hero Hero` | 属性 |
| `CraftingAvailableHeroItemVM` | `public CraftingAvailableHeroItemVM(Hero hero, Action<CraftingAvailableHeroItemVM>onSelection)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshStamina` | `public void RefreshStamina()` | 方法 |
| `RefreshOrderAvailability` | `public void RefreshOrderAvailability(CraftingOrder order)` | 方法 |
| `RefreshSkills` | `public void RefreshSkills()` | 方法 |
| `RefreshPerks` | `public void RefreshPerks()` | 方法 |
| `ExecuteSelection` | `public void ExecuteSelection()` | 方法 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `HeroData` | `public HeroVM HeroData` | 属性 |
| `Hint` | `public BasicTooltipViewModel Hint` | 属性 |
| `CurrentStamina` | `public float CurrentStamina` | 属性 |
| `MaxStamina` | `public int MaxStamina` | 属性 |
| `StaminaPercentage` | `public string StaminaPercentage` | 属性 |
| `SmithySkillLevel` | `public int SmithySkillLevel` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingPerkVM>CraftingPerks` | 属性 |
| `PerksText` | `public string PerksText` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingHeroPopupVM](../CraftingHeroPopupVM)
- [同命名空间 CraftingListPropertyItem](../CraftingListPropertyItem)
- [同命名空间 CraftingPerkVM](../CraftingPerkVM)
- [同命名空间 CraftingResourceItemVM](../CraftingResourceItemVM)
