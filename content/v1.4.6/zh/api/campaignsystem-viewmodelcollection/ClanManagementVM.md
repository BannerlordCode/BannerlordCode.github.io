---
title: "ClanManagementVM"
description: "ClanManagementVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 79 个（方法 21、属性 57、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs。"
---
# ClanManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs`

## 概述

ClanManagementVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ClanManagementVM → ViewModel。public/protected 成员共 79 个：21 方法、57 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanManagementVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement），继承链 ClanManagementVM → ViewModel。成员构成以属性为主（属性 57/79，方法 21/79），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanManagementVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanManagementVM` | `public ClanManagementVM(Action onClose, Action<Hero>showHeroOnMap, Action<Hero>openPartyAsManage, Action openBannerEditor)` | 构造函数 |
| `CreateFiefsDataSource` | `protected virtual ClanFiefsVM CreateFiefsDataSource(Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SelectHero` | `public void SelectHero(Hero hero)` | 方法 |
| `SelectParty` | `public void SelectParty(PartyBase party)` | 方法 |
| `SelectSettlement` | `public void SelectSettlement(Settlement settlement)` | 方法 |
| `SelectWorkshop` | `public void SelectWorkshop(Workshop workshop)` | 方法 |
| `SelectAlley` | `public void SelectAlley(Alley alley)` | 方法 |
| `SelectPreviousCategory` | `public void SelectPreviousCategory()` | 方法 |
| `SelectNextCategory` | `public void SelectNextCategory()` | 方法 |
| `ExecuteOpenBannerEditor` | `public void ExecuteOpenBannerEditor()` | 方法 |
| `UpdateBannerVisuals` | `public void UpdateBannerVisuals()` | 方法 |
| `SetSelectedCategory` | `public void SetSelectedCategory(int index)` | 方法 |
| `RefreshDailyValues` | `public void RefreshDailyValues()` | 方法 |
| `RefreshCategoryValues` | `public void RefreshCategoryValues()` | 方法 |
| `ExecuteChangeClanName` | `public void ExecuteChangeClanName()` | 方法 |
| `ExecuteClose` | `public void ExecuteClose()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Leader` | `public HeroVM Leader` | 属性 |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | 属性 |
| `CardSelectionPopup` | `public ClanCardSelectionPopupVM CardSelectionPopup` | 属性 |
| `Name` | `public string Name` | 属性 |
| `LeaderText` | `public string LeaderText` | 属性 |
| `ClanMembers` | `public ClanMembersVM ClanMembers` | 属性 |
| `ClanParties` | `public ClanPartiesVM ClanParties` | 属性 |
| `ClanFiefs` | `public ClanFiefsVM ClanFiefs` | 属性 |
| `ClanIncome` | `public ClanIncomeVM ClanIncome` | 属性 |
| `IsMembersSelected` | `public bool IsMembersSelected` | 属性 |
| `IsPartiesSelected` | `public bool IsPartiesSelected` | 属性 |
| `CanSwitchTabs` | `public bool CanSwitchTabs` | 属性 |
| `IsFiefsSelected` | `public bool IsFiefsSelected` | 属性 |
| `IsIncomeSelected` | `public bool IsIncomeSelected` | 属性 |
| `ClanIsInAKingdom` | `public bool ClanIsInAKingdom` | 属性 |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled` | 属性 |
| `PlayerCanChangeClanName` | `public bool PlayerCanChangeClanName` | 属性 |
| `CanChooseBanner` | `public bool CanChooseBanner` | 属性 |
| `IsRenownProgressComplete` | `public bool IsRenownProgressComplete` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `CurrentRenownText` | `public string CurrentRenownText` | 属性 |
| `KingdomActionText` | `public string KingdomActionText` | 属性 |
| `NextTierRenown` | `public int NextTierRenown` | 属性 |
| `CurrentTier` | `public int CurrentTier` | 属性 |
| `MinRenownForCurrentTier` | `public int MinRenownForCurrentTier` | 属性 |
| `NextTier` | `public int NextTier` | 属性 |
| `CurrentRenown` | `public int CurrentRenown` | 属性 |
| `CurrentTierRenownRange` | `public int CurrentTierRenownRange` | 属性 |
| `CurrentRenownOverPreviousTier` | `public int CurrentRenownOverPreviousTier` | 属性 |
| `MembersText` | `public string MembersText` | 属性 |
| `PartiesText` | `public string PartiesText` | 属性 |
| `FiefsText` | `public string FiefsText` | 属性 |
| `IncomeText` | `public string IncomeText` | 属性 |
| `RenownHint` | `public BasicTooltipViewModel RenownHint` | 属性 |
| `ClanBannerHint` | `public HintViewModel ClanBannerHint` | 属性 |
| `ChangeClanNameHint` | `public HintViewModel ChangeClanNameHint` | 属性 |
| `KingdomActionDisabledReasonHint` | `public BasicTooltipViewModel KingdomActionDisabledReasonHint` | 属性 |
| `GoldChangeTooltip` | `public TooltipTriggerVM GoldChangeTooltip` | 属性 |
| `CurrentGoldText` | `public string CurrentGoldText` | 属性 |
| `CurrentGold` | `public int CurrentGold` | 属性 |
| `ExpenseText` | `public string ExpenseText` | 属性 |
| `TotalIncomeText` | `public string TotalIncomeText` | 属性 |
| `FinanceText` | `public string FinanceText` | 属性 |
| `TotalIncome` | `public int TotalIncome` | 属性 |
| `TotalExpensesText` | `public string TotalExpensesText` | 属性 |
| `TotalExpenses` | `public int TotalExpenses` | 属性 |
| `DailyChangeText` | `public string DailyChangeText` | 属性 |
| `DailyChange` | `public int DailyChange` | 属性 |
| `ExpectedGoldText` | `public string ExpectedGoldText` | 属性 |
| `ExpectedGold` | `public int ExpectedGold` | 属性 |
| `DailyChangeValueText` | `public string DailyChangeValueText` | 属性 |
| `TotalExpensesValueText` | `public string TotalExpensesValueText` | 属性 |
| `TotalIncomeValueText` | `public string TotalIncomeValueText` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | 方法 |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotkey)` | 方法 |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | 属性 |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | 属性 |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CardSelectionItemSpriteType](../CardSelectionItemSpriteType)
- [同命名空间 ClanCardSelectionInfo](../ClanCardSelectionInfo)
- [同命名空间 ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo)
- [同命名空间 ClanCardSelectionItemPropertyInfo](../ClanCardSelectionItemPropertyInfo)
