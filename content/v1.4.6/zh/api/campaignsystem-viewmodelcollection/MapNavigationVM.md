---
title: "MapNavigationVM"
description: "MapNavigationVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 19 个（方法 13、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs。"
---
# MapNavigationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNavigationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs`

## 概述

MapNavigationVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapNavigationVM → ViewModel。public/protected 成员共 19 个：13 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapNavigationVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar），继承链 MapNavigationVM → ViewModel。成员构成以方法为主（方法 13/19，属性 5/19），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapNavigationVM` | `public MapNavigationVM(INavigationHandler navigationHandler, Func<MapBarShortcuts>getMapBarShortcuts)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `Tick` | `public void Tick()` | 方法 |
| `RefreshStates` | `protected virtual void RefreshStates()` | 方法 |
| `ExecuteOpenQuests` | `public void ExecuteOpenQuests()` | 方法 |
| `ExecuteOpenInventory` | `public void ExecuteOpenInventory()` | 方法 |
| `ExecuteOpenParty` | `public void ExecuteOpenParty()` | 方法 |
| `ExecuteOpenCharacterDeveloper` | `public void ExecuteOpenCharacterDeveloper()` | 方法 |
| `ExecuteOpenKingdom` | `public void ExecuteOpenKingdom()` | 方法 |
| `ExecuteOpenClan` | `public void ExecuteOpenClan()` | 方法 |
| `ExecuteOpenEscapeMenu` | `public void ExecuteOpenEscapeMenu()` | 方法 |
| `ExecuteOpenMainHeroKingdomEncyclopedia` | `public void ExecuteOpenMainHeroKingdomEncyclopedia()` | 方法 |
| `MBBindingList` | `public MBBindingList<MapNavigationItemVM>NavigationItems` | 属性 |
| `FinanceHint` | `public HintViewModel FinanceHint` | 属性 |
| `EncyclopediaHint` | `public HintViewModel EncyclopediaHint` | 属性 |
| `CenterCameraHint` | `public HintViewModel CenterCameraHint` | 属性 |
| `CampHint` | `public HintViewModel CampHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapBarShortcuts](../MapBarShortcuts)
- [同命名空间 MapBarVM](../MapBarVM)
- [同命名空间 MapInfoItemVM](../MapInfoItemVM)
- [同命名空间 MapInfoVM](../MapInfoVM)
