---
title: "TownManagementVM"
description: "TownManagementVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement 的 public 类，继承 ViewModel；公开成员 34 个（方法 4、属性 29、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TownManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TownManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

TownManagementVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TownManagementVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 34 个：4 方法、29 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TownManagementVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，继承链 TownManagementVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 29/34，方法 4/34），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 SettlementBuildingProjectVM](../SettlementBuildingProjectVM/)
- [同命名空间 SettlementDailyProjectVM](../SettlementDailyProjectVM/)
- [同命名空间 SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM/)
- [同命名空间 SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM/)
