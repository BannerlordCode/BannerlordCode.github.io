---
title: "ClanFiefsVM"
description: "ClanFiefsVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories 的 public 类，继承 ViewModel；公开成员 24 个（方法 6、属性 17、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFiefsVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFiefsVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanFiefsVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanFiefsVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 24 个：6 方法、17 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFiefsVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，继承链 ClanFiefsVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 17/24，方法 6/24），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFiefsVM` | `public ClanFiefsVM(Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup)` | 构造函数 |
| `CreateSettlementItem` | `protected virtual ClanSettlementItemVM CreateSettlementItem(Settlement settlement, Action<ClanSettlementItemVM>onSelection, Action onShowSendMembers, ITeleportationCampaignBehavior teleportationBehavior)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RefreshAllLists` | `public void RefreshAllLists()` | 方法 |
| `SelectFief` | `public void SelectFief(Settlement settlement)` | 方法 |
| `ExecuteAssignGovernor` | `public void ExecuteAssignGovernor()` | 方法 |
| `GovernorActionText` | `public string GovernorActionText` | 属性 |
| `CanChangeGovernorOfCurrentFief` | `public bool CanChangeGovernorOfCurrentFief` | 属性 |
| `GovernorActionHint` | `public HintViewModel GovernorActionHint` | 属性 |
| `IsAnyValidFiefSelected` | `public bool IsAnyValidFiefSelected` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `TaxText` | `public string TaxText` | 属性 |
| `GovernorText` | `public string GovernorText` | 属性 |
| `ProfitText` | `public string ProfitText` | 属性 |
| `TownsText` | `public string TownsText` | 属性 |
| `CastlesText` | `public string CastlesText` | 属性 |
| `NoFiefsText` | `public string NoFiefsText` | 属性 |
| `NoGovernorText` | `public string NoGovernorText` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanSettlementItemVM>Settlements` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanSettlementItemVM>Castles` | 属性 |
| `CurrentSelectedFief` | `public ClanSettlementItemVM CurrentSelectedFief` | 属性 |
| `SortController` | `public ClanFiefsSortControllerVM SortController` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM/)
- [同命名空间 ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM/)
- [同命名空间 ClanIncomeVM](../ClanIncomeVM/)
- [同命名空间 ClanMembersSortControllerVM](../ClanMembersSortControllerVM/)
