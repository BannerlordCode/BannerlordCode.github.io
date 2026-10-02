---
title: "KingdomManagementVM"
description: "KingdomManagementVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement 的 public 类，继承 ViewModel；公开成员 46 个（方法 17、属性 28、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomManagementVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 KingdomManagementVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 46 个：17 方法、28 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomManagementVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`，继承链 KingdomManagementVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 28/46，方法 17/46），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Kingdom` | `public Kingdom Kingdom` | 属性 |
| `KingdomManagementVM` | `public KingdomManagementVM(Action onClose, Action onManageArmy, Action<Army>onShowArmyOnMap)` | 构造函数 |
| `CreateSettlementVM` | `protected virtual KingdomSettlementVM CreateSettlementVM(Action<KingdomDecision>forceDecision, Action<Settlement>onGrantFief)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnRefresh` | `public void OnRefresh()` | 方法 |
| `OnFrameTick` | `public void OnFrameTick()` | 方法 |
| `ExecuteClose` | `public void ExecuteClose()` | 方法 |
| `SelectArmy` | `public void SelectArmy(Army army)` | 方法 |
| `SelectSettlement` | `public void SelectSettlement(Settlement settlement)` | 方法 |
| `SelectClan` | `public void SelectClan(Clan clan)` | 方法 |
| `SelectPolicy` | `public void SelectPolicy(PolicyObject policy)` | 方法 |
| `SelectKingdom` | `public void SelectKingdom(Kingdom kingdom)` | 方法 |
| `SelectPreviousCategory` | `public void SelectPreviousCategory()` | 方法 |
| `SelectNextCategory` | `public void SelectNextCategory()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `KingdomActionHint` | `public BasicTooltipViewModel KingdomActionHint` | 属性 |
| `KingdomBanner` | `public BannerImageIdentifierVM KingdomBanner` | 属性 |
| `Leader` | `public HeroVM Leader` | 属性 |
| `Army` | `public KingdomArmyVM Army` | 属性 |
| `Settlement` | `public KingdomSettlementVM Settlement` | 属性 |
| `Clan` | `public KingdomClanVM Clan` | 属性 |
| `Policy` | `public KingdomPoliciesVM Policy` | 属性 |
| `Diplomacy` | `public KingdomDiplomacyVM Diplomacy` | 属性 |
| `GiftFief` | `public KingdomGiftFiefPopupVM GiftFief` | 属性 |
| `Decision` | `public KingdomDecisionsVM Decision` | 属性 |
| `ChangeKingdomNameHint` | `public HintViewModel ChangeKingdomNameHint` | 属性 |
| `Name` | `public string Name` | 属性 |
| `CanSwitchTabs` | `public bool CanSwitchTabs` | 属性 |
| `PlayerHasKingdom` | `public bool PlayerHasKingdom` | 属性 |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled` | 属性 |
| `PlayerCanChangeKingdomName` | `public bool PlayerCanChangeKingdomName` | 属性 |
| `LeaderText` | `public string LeaderText` | 属性 |
| `KingdomActionText` | `public string KingdomActionText` | 属性 |
| `ClansText` | `public string ClansText` | 属性 |
| `DiplomacyText` | `public string DiplomacyText` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `FiefsText` | `public string FiefsText` | 属性 |
| `PoliciesText` | `public string PoliciesText` | 属性 |
| `ArmiesText` | `public string ArmiesText` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotkey)` | 方法 |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | 属性 |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 KingdomCategoryVM](../KingdomCategoryVM/)
- [同命名空间 KingdomGiftFiefPopupVM](../KingdomGiftFiefPopupVM/)
- [同命名空间 KingdomItemVM](../KingdomItemVM/)
- [同命名空间 LeaveKingdomPermissionEvent](../LeaveKingdomPermissionEvent/)
