---
title: "ClanPartyItemVM"
description: "ClanPartyItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement 的 public 类，继承 ViewModel；公开成员 63 个（方法 5、属性 56、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanPartyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ClanPartyItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanPartyItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 63 个：5 方法、56 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanPartyItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，继承链 ClanPartyItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 56/63，方法 5/63），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Expense` | `public int Expense` | 属性 |
| `Income` | `public int Income` | 属性 |
| `Party` | `public PartyBase Party` | 属性 |
| `ClanPartyItemVM` | `public ClanPartyItemVM(PartyBase party, Action<ClanPartyItemVM>onAssignment, Action onExpenseChange, Action onShowChangeLeaderPopup, ClanPartyItemVM.ClanPartyType type, IDisbandPartyCampaignBehavior disbandBehavior, ITeleportationCampaignBehavior teleportationBehavior)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateProperties` | `public void UpdateProperties()` | 方法 |
| `OnPartySelection` | `public void OnPartySelection()` | 方法 |
| `ExecuteChangeLeader` | `public void ExecuteChangeLeader()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `CharacterModel` | `public CharacterViewModel CharacterModel` | 属性 |
| `PartyBehaviorSelector` | `public ClanPartyBehaviorSelectorVM PartyBehaviorSelector` | 属性 |
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `HasHeroMembers` | `public bool HasHeroMembers` | 属性 |
| `IsClanRoleSelectionHighlightEnabled` | `public bool IsClanRoleSelectionHighlightEnabled` | 属性 |
| `IsRoleSelectionPopupVisible` | `public bool IsRoleSelectionPopupVisible` | 属性 |
| `IsDisbanding` | `public bool IsDisbanding` | 属性 |
| `IsInArmy` | `public bool IsInArmy` | 属性 |
| `CanUseActions` | `public bool CanUseActions` | 属性 |
| `IsChangeLeaderVisible` | `public bool IsChangeLeaderVisible` | 属性 |
| `IsChangeLeaderEnabled` | `public bool IsChangeLeaderEnabled` | 属性 |
| `ActionsDisabledHint` | `public HintViewModel ActionsDisabledHint` | 属性 |
| `IsCaravan` | `public bool IsCaravan` | 属性 |
| `ShouldPartyHaveExpense` | `public bool ShouldPartyHaveExpense` | 属性 |
| `HasCompanion` | `public bool HasCompanion` | 属性 |
| `IsAutoRecruitmentVisible` | `public bool IsAutoRecruitmentVisible` | 属性 |
| `AutoRecruitmentValue` | `public bool AutoRecruitmentValue` | 属性 |
| `IsPartyBehaviorEnabled` | `public bool IsPartyBehaviorEnabled` | 属性 |
| `IsMembersAndRolesVisible` | `public bool IsMembersAndRolesVisible` | 属性 |
| `IsMainHeroParty` | `public bool IsMainHeroParty` | 属性 |
| `ExpenseItem` | `public ClanFinanceExpenseItemVM ExpenseItem` | 属性 |
| `LastOpenedRoleSelection` | `public ClanRoleItemVM LastOpenedRoleSelection` | 属性 |
| `LeaderMember` | `public ClanPartyMemberItemVM LeaderMember` | 属性 |
| `PartySizeText` | `public string PartySizeText` | 属性 |
| `ShipCountText` | `public string ShipCountText` | 属性 |
| `MembersText` | `public string MembersText` | 属性 |
| `AssigneesText` | `public string AssigneesText` | 属性 |
| `RolesText` | `public string RolesText` | 属性 |
| `PartyLeaderRoleEffectsText` | `public string PartyLeaderRoleEffectsText` | 属性 |
| `PartyLocationText` | `public string PartyLocationText` | 属性 |
| `Name` | `public string Name` | 属性 |
| `PartySizeSubTitleText` | `public string PartySizeSubTitleText` | 属性 |
| `PartyWageSubTitleText` | `public string PartyWageSubTitleText` | 属性 |
| `PartyBehaviorText` | `public string PartyBehaviorText` | 属性 |
| `InfantryCount` | `public int InfantryCount` | 属性 |
| `RangedCount` | `public int RangedCount` | 属性 |
| `CavalryCount` | `public int CavalryCount` | 属性 |
| `HorseArcherCount` | `public int HorseArcherCount` | 属性 |
| `ShipCount` | `public int ShipCount` | 属性 |
| `InArmyText` | `public string InArmyText` | 属性 |
| `DisbandingText` | `public string DisbandingText` | 属性 |
| `AutoRecruitmentText` | `public string AutoRecruitmentText` | 属性 |
| `AutoRecruitmentHint` | `public HintViewModel AutoRecruitmentHint` | 属性 |
| `InArmyHint` | `public HintViewModel InArmyHint` | 属性 |
| `ChangeLeaderHint` | `public HintViewModel ChangeLeaderHint` | 属性 |
| `InfantryHint` | `public BasicTooltipViewModel InfantryHint` | 属性 |
| `RangedHint` | `public BasicTooltipViewModel RangedHint` | 属性 |
| `CavalryHint` | `public BasicTooltipViewModel CavalryHint` | 属性 |
| `HorseArcherHint` | `public BasicTooltipViewModel HorseArcherHint` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanPartyMemberItemVM>HeroMembers` | 属性 |
| `MBBindingList` | `public MBBindingList<ClanRoleItemVM>Roles` | 属性 |
| `ClanPartyType` | `public enum ClanPartyType` | 属性 |
| `ClanPartyType` | `public enum ClanPartyType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType/)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo/)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo/)
