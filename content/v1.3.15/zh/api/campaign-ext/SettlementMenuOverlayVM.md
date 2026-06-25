---
title: "SettlementMenuOverlayVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementMenuOverlayVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/SettlementMenuOverlayVM.cs`

## 概述

`SettlementMenuOverlayVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingFoodText` | `public string RemainingFoodText { get; set; }` |
| `ProsperityChangeAmount` | `public int ProsperityChangeAmount { get; set; }` |
| `MilitiaChangeAmount` | `public int MilitiaChangeAmount { get; set; }` |
| `GarrisonChangeAmount` | `public int GarrisonChangeAmount { get; set; }` |
| `GarrisonAmount` | `public int GarrisonAmount { get; set; }` |
| `CrimeChangeAmount` | `public int CrimeChangeAmount { get; set; }` |
| `LoyaltyChangeAmount` | `public int LoyaltyChangeAmount { get; set; }` |
| `SecurityChangeAmount` | `public int SecurityChangeAmount { get; set; }` |
| `FoodChangeAmount` | `public int FoodChangeAmount { get; set; }` |
| `RemainingFoodHint` | `public BasicTooltipViewModel RemainingFoodHint { get; set; }` |
| `SecurityHint` | `public BasicTooltipViewModel SecurityHint { get; set; }` |
| `PartyFilterHint` | `public HintViewModel PartyFilterHint { get; set; }` |
| `CharacterFilterHint` | `public HintViewModel CharacterFilterHint { get; set; }` |
| `MilitasHint` | `public BasicTooltipViewModel MilitasHint { get; set; }` |
| `GarrisonHint` | `public BasicTooltipViewModel GarrisonHint { get; set; }` |
| `ProsperityHint` | `public BasicTooltipViewModel ProsperityHint { get; set; }` |
| `LoyaltyHint` | `public BasicTooltipViewModel LoyaltyHint { get; set; }` |
| `WallsHint` | `public BasicTooltipViewModel WallsHint { get; set; }` |
| `CrimeHint` | `public BasicTooltipViewModel CrimeHint { get; set; }` |
| `LeaveMembersHint` | `public HintViewModel LeaveMembersHint { get; set; }` |
| `SettlementOwnerBanner` | `public BannerImageIdentifierVM SettlementOwnerBanner { get; set; }` |
| `CharacterList` | `public MBBindingList<GameMenuPartyItemVM> CharacterList { get; set; }` |
| `PartyList` | `public MBBindingList<GameMenuPartyItemVM> PartyList { get; set; }` |
| `IssueList` | `public MBBindingList<StringItemWithHintVM> IssueList { get; set; }` |
| `MilitasLbl` | `public string MilitasLbl { get; set; }` |
| `GarrisonLbl` | `public string GarrisonLbl { get; set; }` |
| `CrimeLbl` | `public string CrimeLbl { get; set; }` |
| `CanLeaveMembers` | `public bool CanLeaveMembers { get; set; }` |
| `ProsperityLbl` | `public string ProsperityLbl { get; set; }` |
| `LoyaltyLbl` | `public string LoyaltyLbl { get; set; }` |
| `SecurityLbl` | `public string SecurityLbl { get; set; }` |
| `WallsLbl` | `public string WallsLbl { get; set; }` |
| `WallsLevel` | `public int WallsLevel { get; set; }` |
| `SettlementNameLbl` | `public string SettlementNameLbl { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `IsCrimeEnabled` | `public bool IsCrimeEnabled { get; set; }` |
| `IsNoGarrisonWarning` | `public bool IsNoGarrisonWarning { get; set; }` |
| `IsCrimeLabelHighlightEnabled` | `public bool IsCrimeLabelHighlightEnabled { get; set; }` |
| `IsLoyaltyRebellionWarning` | `public bool IsLoyaltyRebellionWarning { get; set; }` |
| `IsShipyardEnabled` | `public bool IsShipyardEnabled { get; set; }` |
| `ShipyardLbl` | `public string ShipyardLbl { get; set; }` |
| `ShipyardHint` | `public BasicTooltipViewModel ShipyardHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteOnOverlayClosed
`public override void ExecuteOnOverlayClosed()`

**用途 / Purpose:** 执行 `on overlay closed` 操作或流程。

### UpdateOverlayType
`public override void UpdateOverlayType(GameMenu.MenuOverlayType newType)`

**用途 / Purpose:** 更新 `overlay type` 的状态或数据。

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### ExecuteAddCompanion
`public void ExecuteAddCompanion()`

**用途 / Purpose:** 执行 `add companion` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Compare
`public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new SettlementMenuOverlayVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)