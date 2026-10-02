---
title: "MapInfoVM"
description: "MapInfoVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 11 个（方法 5、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs。"
---
# MapInfoVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapInfoVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs`

## 概述

MapInfoVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapInfoVM → ViewModel。public/protected 成员共 11 个：5 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapInfoVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar），继承链 MapInfoVM → ViewModel。成员构成以方法为主（方法 5/11，属性 5/11），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapInfoVM` | `public MapInfoVM()` | 构造函数 |
| `CreateItems` | `protected virtual void CreateItems()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Tick` | `public void Tick()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `UpdatePlayerInfo` | `protected virtual void UpdatePlayerInfo(bool updateForced)` | 方法 |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended` | 属性 |
| `IsInfoBarEnabled` | `public bool IsInfoBarEnabled` | 属性 |
| `ExtendHint` | `public HintViewModel ExtendHint` | 属性 |
| `MBBindingList` | `public MBBindingList<MapInfoItemVM>PrimaryInfoItems` | 属性 |
| `MBBindingList` | `public MBBindingList<MapInfoItemVM>SecondaryInfoItems` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapBarShortcuts](../MapBarShortcuts)
- [同命名空间 MapBarVM](../MapBarVM)
- [同命名空间 MapInfoItemVM](../MapInfoItemVM)
- [同命名空间 MapNavigationItemVM](../MapNavigationItemVM)
