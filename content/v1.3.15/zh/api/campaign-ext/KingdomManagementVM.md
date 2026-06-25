---
title: "KingdomManagementVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomManagementVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs`

## 概述

`KingdomManagementVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `KingdomActionHint` | `public BasicTooltipViewModel KingdomActionHint { get; set; }` |
| `KingdomBanner` | `public BannerImageIdentifierVM KingdomBanner { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Army` | `public KingdomArmyVM Army { get; set; }` |
| `Settlement` | `public KingdomSettlementVM Settlement { get; set; }` |
| `Clan` | `public KingdomClanVM Clan { get; set; }` |
| `Policy` | `public KingdomPoliciesVM Policy { get; set; }` |
| `Diplomacy` | `public KingdomDiplomacyVM Diplomacy { get; set; }` |
| `GiftFief` | `public KingdomGiftFiefPopupVM GiftFief { get; set; }` |
| `Decision` | `public KingdomDecisionsVM Decision { get; set; }` |
| `ChangeKingdomNameHint` | `public HintViewModel ChangeKingdomNameHint { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `PlayerHasKingdom` | `public bool PlayerHasKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeKingdomName` | `public bool PlayerCanChangeKingdomName { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `KingdomActionText` | `public string KingdomActionText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `DiplomacyText` | `public string DiplomacyText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `PoliciesText` | `public string PoliciesText { get; set; }` |
| `ArmiesText` | `public string ArmiesText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnRefresh
`public void OnRefresh()`

**用途 / Purpose:** 当 `refresh` 事件触发时调用此方法。

### OnFrameTick
`public void OnFrameTick()`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

### SelectArmy
`public void SelectArmy(Army army)`

**用途 / Purpose:** 处理 `select army` 相关逻辑。

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**用途 / Purpose:** 处理 `select settlement` 相关逻辑。

### SelectClan
`public void SelectClan(Clan clan)`

**用途 / Purpose:** 处理 `select clan` 相关逻辑。

### SelectPolicy
`public void SelectPolicy(PolicyObject policy)`

**用途 / Purpose:** 处理 `select policy` 相关逻辑。

### SelectKingdom
`public void SelectKingdom(Kingdom kingdom)`

**用途 / Purpose:** 处理 `select kingdom` 相关逻辑。

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**用途 / Purpose:** 处理 `select previous category` 相关逻辑。

### SelectNextCategory
`public void SelectNextCategory()`

**用途 / Purpose:** 处理 `select next category` 相关逻辑。

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
var value = new KingdomManagementVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)