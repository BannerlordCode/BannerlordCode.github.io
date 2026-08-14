---
title: "SettlementMenuOverlayVM"
description: "SettlementMenuOverlayVM 的自动生成类参考。"
---
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

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementMenuOverlayVM 实例
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.RefreshValues();
```

### ExecuteOnOverlayClosed
`public override void ExecuteOnOverlayClosed()`

**用途 / Purpose:** 执行 on overlay closed 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementMenuOverlayVM 实例
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.ExecuteOnOverlayClosed();
```

### UpdateOverlayType
`public override void UpdateOverlayType(GameMenu.MenuOverlayType newType)`

**用途 / Purpose:** 重新计算并更新 overlay type 的最新表示。

```csharp
// 先通过子系统 API 拿到 SettlementMenuOverlayVM 实例
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.UpdateOverlayType(newType);
```

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementMenuOverlayVM 实例
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.Refresh();
```

### ExecuteAddCompanion
`public void ExecuteAddCompanion()`

**用途 / Purpose:** 执行 add companion 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementMenuOverlayVM 实例
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.ExecuteAddCompanion();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementMenuOverlayVM 实例
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.OnFinalize();
```

### Compare
`public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SettlementMenuOverlayVM 实例
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
var result = settlementMenuOverlayVM.Compare(x, y);
```

### Compare
`public int Compare(GameMenuPartyItemVM x, GameMenuPartyItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SettlementMenuOverlayVM 实例
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
var result = settlementMenuOverlayVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementMenuOverlayVM settlementMenuOverlayVM = ...;
settlementMenuOverlayVM.RefreshValues();
```

## 参见

- [本区域目录](../)