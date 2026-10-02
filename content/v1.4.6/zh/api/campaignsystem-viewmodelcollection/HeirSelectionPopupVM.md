---
title: "HeirSelectionPopupVM"
description: "HeirSelectionPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 17 个（方法 5、属性 11、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs。"
---
# HeirSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class HeirSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs`

## 概述

HeirSelectionPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 HeirSelectionPopupVM → ViewModel。public/protected 成员共 17 个：5 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HeirSelectionPopupVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup），继承链 HeirSelectionPopupVM → ViewModel。成员构成以属性为主（属性 11/17，方法 5/17），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeirSelectionPopupVM` | `public HeirSelectionPopupVM(Dictionary<Hero, int>heirApparents)` | 构造函数 |
| `Update` | `public void Update()` | 方法 |
| `ExecuteSelectHeir` | `public void ExecuteSelectHeir()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `TitleText` | `public string TitleText` | 属性 |
| `ButtonOkLabel` | `public string ButtonOkLabel` | 属性 |
| `NameLabel` | `public string NameLabel` | 属性 |
| `AgeLabel` | `public string AgeLabel` | 属性 |
| `CultureLabel` | `public string CultureLabel` | 属性 |
| `OccupationLabel` | `public string OccupationLabel` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `MBBindingList` | `public MBBindingList<HeirSelectionPopupHeroVM>HeirApparents` | 属性 |
| `CurrentSelectedHero` | `public HeirSelectionPopupHeroVM CurrentSelectedHero` | 属性 |
| `AreHotkeysVisible` | `public bool AreHotkeysVisible` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 HeirSelectionPopupHeroVM](../HeirSelectionPopupHeroVM)
