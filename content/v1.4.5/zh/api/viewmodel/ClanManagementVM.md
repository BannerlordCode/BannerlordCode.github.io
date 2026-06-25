---
title: "ClanManagementVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanManagementVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClanManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanManagementVM.cs`

## 概述

`ClanManagementVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Leader` | `public HeroVM Leader { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `ClanMembers` | `public ClanMembersVM ClanMembers { get; set; }` |
| `ClanParties` | `public ClanPartiesVM ClanParties { get; set; }` |
| `ClanFiefs` | `public ClanFiefsVM ClanFiefs { get; set; }` |
| `ClanIncome` | `public ClanIncomeVM ClanIncome { get; set; }` |
| `IsMembersSelected` | `public bool IsMembersSelected { get; set; }` |
| `IsPartiesSelected` | `public bool IsPartiesSelected { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `IsFiefsSelected` | `public bool IsFiefsSelected { get; set; }` |
| `IsIncomeSelected` | `public bool IsIncomeSelected { get; set; }` |
| `ClanIsInAKingdom` | `public bool ClanIsInAKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeClanName` | `public bool PlayerCanChangeClanName { get; set; }` |
| `CanChooseBanner` | `public bool CanChooseBanner { get; set; }` |
| `IsRenownProgressComplete` | `public bool IsRenownProgressComplete { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CurrentRenownText` | `public string CurrentRenownText { get; set; }` |
| `KingdomActionText` | `public string KingdomActionText { get; set; }` |
| `NextTierRenown` | `public int NextTierRenown { get; set; }` |
| `CurrentTier` | `public int CurrentTier { get; set; }` |
| `MinRenownForCurrentTier` | `public int MinRenownForCurrentTier { get; set; }` |
| `NextTier` | `public int NextTier { get; set; }` |
| `CurrentRenown` | `public int CurrentRenown { get; set; }` |
| `CurrentTierRenownRange` | `public int CurrentTierRenownRange { get; set; }` |
| `CurrentRenownOverPreviousTier` | `public int CurrentRenownOverPreviousTier { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |
| `RenownHint` | `public BasicTooltipViewModel RenownHint { get; set; }` |
| `ClanBannerHint` | `public HintViewModel ClanBannerHint { get; set; }` |
| `ChangeClanNameHint` | `public HintViewModel ChangeClanNameHint { get; set; }` |
| `KingdomActionDisabledReasonHint` | `public BasicTooltipViewModel KingdomActionDisabledReasonHint { get; set; }` |
| `GoldChangeTooltip` | `public TooltipTriggerVM GoldChangeTooltip { get; set; }` |
| `CurrentGoldText` | `public string CurrentGoldText { get; set; }` |
| `CurrentGold` | `public int CurrentGold { get; set; }` |
| `ExpenseText` | `public string ExpenseText { get; set; }` |
| `TotalIncomeText` | `public string TotalIncomeText { get; set; }` |
| `FinanceText` | `public string FinanceText { get; set; }` |
| `TotalIncome` | `public int TotalIncome { get; set; }` |
| `TotalExpensesText` | `public string TotalExpensesText { get; set; }` |
| `TotalExpenses` | `public int TotalExpenses { get; set; }` |
| `DailyChangeText` | `public string DailyChangeText { get; set; }` |
| `DailyChange` | `public int DailyChange { get; set; }` |
| `ExpectedGoldText` | `public string ExpectedGoldText { get; set; }` |
| `ExpectedGold` | `public int ExpectedGold { get; set; }` |
| `DailyChangeValueText` | `public string DailyChangeValueText { get; set; }` |
| `TotalExpensesValueText` | `public string TotalExpensesValueText { get; set; }` |
| `TotalIncomeValueText` | `public string TotalIncomeValueText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SelectHero
`public void SelectHero(Hero hero)`

**用途 / Purpose:** 处理 `select hero` 相关逻辑。

### SelectParty
`public void SelectParty(PartyBase party)`

**用途 / Purpose:** 处理 `select party` 相关逻辑。

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**用途 / Purpose:** 处理 `select settlement` 相关逻辑。

### SelectWorkshop
`public void SelectWorkshop(Workshop workshop)`

**用途 / Purpose:** 处理 `select workshop` 相关逻辑。

### SelectAlley
`public void SelectAlley(Alley alley)`

**用途 / Purpose:** 处理 `select alley` 相关逻辑。

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**用途 / Purpose:** 处理 `select previous category` 相关逻辑。

### SelectNextCategory
`public void SelectNextCategory()`

**用途 / Purpose:** 处理 `select next category` 相关逻辑。

### ExecuteOpenBannerEditor
`public void ExecuteOpenBannerEditor()`

**用途 / Purpose:** 执行 `open banner editor` 操作或流程。

### UpdateBannerVisuals
`public void UpdateBannerVisuals()`

**用途 / Purpose:** 更新 `banner visuals` 的状态或数据。

### SetSelectedCategory
`public void SetSelectedCategory(int index)`

**用途 / Purpose:** 设置 `selected category` 的值或状态。

### RefreshDailyValues
`public void RefreshDailyValues()`

**用途 / Purpose:** 刷新 `daily values` 的显示或缓存。

### RefreshCategoryValues
`public void RefreshCategoryValues()`

**用途 / Purpose:** 刷新 `category values` 的显示或缓存。

### ExecuteChangeClanName
`public void ExecuteChangeClanName()`

**用途 / Purpose:** 执行 `change clan name` 操作或流程。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `previous tab input key` 的值或状态。

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `next tab input key` 的值或状态。

## 使用示例

```csharp
var value = new ClanManagementVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)