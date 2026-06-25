---
title: "ClanPartyItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanPartyItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs`

## 概述

`ClanPartyItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Expense` | `public int Expense { get; }` |
| `Income` | `public int Income { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `CharacterModel` | `public CharacterViewModel CharacterModel { get; set; }` |
| `PartyBehaviorSelector` | `public ClanPartyBehaviorSelectorVM PartyBehaviorSelector { get; set; }` |
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasHeroMembers` | `public bool HasHeroMembers { get; set; }` |
| `IsClanRoleSelectionHighlightEnabled` | `public bool IsClanRoleSelectionHighlightEnabled { get; set; }` |
| `IsRoleSelectionPopupVisible` | `public bool IsRoleSelectionPopupVisible { get; set; }` |
| `IsDisbanding` | `public bool IsDisbanding { get; set; }` |
| `IsInArmy` | `public bool IsInArmy { get; set; }` |
| `CanUseActions` | `public bool CanUseActions { get; set; }` |
| `IsChangeLeaderVisible` | `public bool IsChangeLeaderVisible { get; set; }` |
| `IsChangeLeaderEnabled` | `public bool IsChangeLeaderEnabled { get; set; }` |
| `ActionsDisabledHint` | `public HintViewModel ActionsDisabledHint { get; set; }` |
| `IsCaravan` | `public bool IsCaravan { get; set; }` |
| `ShouldPartyHaveExpense` | `public bool ShouldPartyHaveExpense { get; set; }` |
| `HasCompanion` | `public bool HasCompanion { get; set; }` |
| `IsAutoRecruitmentVisible` | `public bool IsAutoRecruitmentVisible { get; set; }` |
| `AutoRecruitmentValue` | `public bool AutoRecruitmentValue { get; set; }` |
| `IsPartyBehaviorEnabled` | `public bool IsPartyBehaviorEnabled { get; set; }` |
| `IsMembersAndRolesVisible` | `public bool IsMembersAndRolesVisible { get; set; }` |
| `IsMainHeroParty` | `public bool IsMainHeroParty { get; set; }` |
| `ExpenseItem` | `public ClanFinanceExpenseItemVM ExpenseItem { get; set; }` |
| `LastOpenedRoleSelection` | `public ClanRoleItemVM LastOpenedRoleSelection { get; set; }` |
| `LeaderMember` | `public ClanPartyMemberItemVM LeaderMember { get; set; }` |
| `PartySizeText` | `public string PartySizeText { get; set; }` |
| `ShipCountText` | `public string ShipCountText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `AssigneesText` | `public string AssigneesText { get; set; }` |
| `RolesText` | `public string RolesText { get; set; }` |
| `PartyLeaderRoleEffectsText` | `public string PartyLeaderRoleEffectsText { get; set; }` |
| `PartyLocationText` | `public string PartyLocationText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `PartySizeSubTitleText` | `public string PartySizeSubTitleText { get; set; }` |
| `PartyWageSubTitleText` | `public string PartyWageSubTitleText { get; set; }` |
| `PartyBehaviorText` | `public string PartyBehaviorText { get; set; }` |
| `InfantryCount` | `public int InfantryCount { get; set; }` |
| `RangedCount` | `public int RangedCount { get; set; }` |
| `CavalryCount` | `public int CavalryCount { get; set; }` |
| `HorseArcherCount` | `public int HorseArcherCount { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `InArmyText` | `public string InArmyText { get; set; }` |
| `DisbandingText` | `public string DisbandingText { get; set; }` |
| `AutoRecruitmentText` | `public string AutoRecruitmentText { get; set; }` |
| `AutoRecruitmentHint` | `public HintViewModel AutoRecruitmentHint { get; set; }` |
| `InArmyHint` | `public HintViewModel InArmyHint { get; set; }` |
| `ChangeLeaderHint` | `public HintViewModel ChangeLeaderHint { get; set; }` |
| `InfantryHint` | `public BasicTooltipViewModel InfantryHint { get; set; }` |
| `RangedHint` | `public BasicTooltipViewModel RangedHint { get; set; }` |
| `CavalryHint` | `public BasicTooltipViewModel CavalryHint { get; set; }` |
| `HorseArcherHint` | `public BasicTooltipViewModel HorseArcherHint { get; set; }` |
| `HeroMembers` | `public MBBindingList<ClanPartyMemberItemVM> HeroMembers { get; set; }` |
| `Roles` | `public MBBindingList<ClanRoleItemVM> Roles { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 更新 `properties` 的状态或数据。

### OnPartySelection
`public void OnPartySelection()`

**用途 / Purpose:** 当 `party selection` 事件触发时调用此方法。

### ExecuteChangeLeader
`public void ExecuteChangeLeader()`

**用途 / Purpose:** 执行 `change leader` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ClanPartyItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)