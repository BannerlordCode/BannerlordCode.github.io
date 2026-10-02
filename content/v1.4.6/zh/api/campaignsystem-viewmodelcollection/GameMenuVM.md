---
title: "GameMenuVM"
description: "GameMenuVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 21 个（方法 8、属性 12、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs。"
---
# GameMenuVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs`

## 概述

GameMenuVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameMenuVM → ViewModel。public/protected 成员共 21 个：8 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu），继承链 GameMenuVM → ViewModel。成员构成以属性为主（属性 12/21，方法 8/21），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuContext` | `public MenuContext MenuContext` | 属性 |
| `GameMenuVM` | `public GameMenuVM(MenuContext menuContext)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetIdleMode` | `public void SetIdleMode(bool isIdle)` | 方法 |
| `Refresh` | `public void Refresh(bool forceUpdateItems)` | 方法 |
| `OnFrameTick` | `public void OnFrameTick()` | 方法 |
| `UpdateMenuContext` | `public void UpdateMenuContext(MenuContext newMenuContext)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetLeaveHotKey` | `public void SetLeaveHotKey(GameKey gameKey)` | 方法 |
| `ExecuteLink` | `public void ExecuteLink(string link)` | 方法 |
| `IsNight` | `public bool IsNight` | 属性 |
| `IsInSiegeMode` | `public bool IsInSiegeMode` | 属性 |
| `IsEncounterMenu` | `public bool IsEncounterMenu` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `ContextText` | `public string ContextText` | 属性 |
| `MBBindingList` | `public MBBindingList<GameMenuItemVM>ItemList` | 属性 |
| `MBBindingList` | `public MBBindingList<GameMenuItemProgressVM>ProgressItemList` | 属性 |
| `Background` | `public string Background` | 属性 |
| `BackgroundCopy` | `public string BackgroundCopy` | 属性 |
| `MenuId` | `public string MenuId` | 属性 |
| `MBBindingList` | `public MBBindingList<GameMenuPlunderItemVM>PlunderItems` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameMenuItemProgressVM](../GameMenuItemProgressVM)
- [同命名空间 GameMenuItemVM](../GameMenuItemVM)
- [同命名空间 GameMenuPlunderItemVM](../GameMenuPlunderItemVM)
