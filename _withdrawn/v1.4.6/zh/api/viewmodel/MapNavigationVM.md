---
title: "MapNavigationVM"
description: "MapNavigationVM：TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar 的 public 类，继承 ViewModel；公开成员 19 个（方法 13、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapNavigationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNavigationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

MapNavigationVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapNavigationVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 19 个：13 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapNavigationVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，继承链 MapNavigationVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 13/19，属性 5/19），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapBarShortcuts](../MapBarShortcuts/)
- [同命名空间 MapBarVM](../MapBarVM/)
- [同命名空间 MapInfoItemVM](../MapInfoItemVM/)
- [同命名空间 MapInfoVM](../MapInfoVM/)
