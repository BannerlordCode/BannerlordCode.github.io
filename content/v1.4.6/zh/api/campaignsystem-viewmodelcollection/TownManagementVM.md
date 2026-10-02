---
title: "TownManagementVM"
description: "TownManagementVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 34 个（方法 4、属性 29、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs。"
---
# TownManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TownManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs`

## 概述

TownManagementVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TownManagementVM → ViewModel。public/protected 成员共 34 个：4 方法、29 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TownManagementVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement），继承链 TownManagementVM → ViewModel。成员构成以属性为主（属性 29/34，方法 4/34），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TownManagementVM` | `public TownManagementVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `CompletionText` | `public string CompletionText` | 属性 |
| `GovernorText` | `public string GovernorText` | 属性 |
| `ManageText` | `public string ManageText` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `WallsText` | `public string WallsText` | 属性 |
| `CurrentProjectText` | `public string CurrentProjectText` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `HasGovernor` | `public bool HasGovernor` | 属性 |
| `IsGovernorSelectionEnabled` | `public bool IsGovernorSelectionEnabled` | 属性 |
| `IsTown` | `public bool IsTown` | 属性 |
| `Show` | `public bool Show` | 属性 |
| `IsThereCurrentProject` | `public bool IsThereCurrentProject` | 属性 |
| `IsSelectingGovernor` | `public bool IsSelectingGovernor` | 属性 |
| `MBBindingList` | `public MBBindingList<TownManagementDescriptionItemVM>MiddleFirstTextList` | 属性 |
| `MBBindingList` | `public MBBindingList<TownManagementDescriptionItemVM>MiddleSecondTextList` | 属性 |
| `MBBindingList` | `public MBBindingList<TownManagementShopItemVM>Shops` | 属性 |
| `MBBindingList` | `public MBBindingList<TownManagementVillageItemVM>Villages` | 属性 |
| `GovernorSelectionDisabledHint` | `public HintViewModel GovernorSelectionDisabledHint` | 属性 |
| `VillagesText` | `public string VillagesText` | 属性 |
| `ShopsInSettlementText` | `public string ShopsInSettlementText` | 属性 |
| `IsCurrentProjectDaily` | `public bool IsCurrentProjectDaily` | 属性 |
| `CurrentProjectProgress` | `public int CurrentProjectProgress` | 属性 |
| `ProjectSelection` | `public SettlementProjectSelectionVM ProjectSelection` | 属性 |
| `GovernorSelection` | `public SettlementGovernorSelectionVM GovernorSelection` | 属性 |
| `ReserveControl` | `public TownManagementReserveControlVM ReserveControl` | 属性 |
| `CurrentGovernorTooltip` | `public BasicTooltipViewModel CurrentGovernorTooltip` | 属性 |
| `CurrentGovernor` | `public HeroVM CurrentGovernor` | 属性 |
| `ConsumptionTooltip` | `public BasicTooltipViewModel ConsumptionTooltip` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [同命名空间 SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [同命名空间 SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [同命名空间 SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
