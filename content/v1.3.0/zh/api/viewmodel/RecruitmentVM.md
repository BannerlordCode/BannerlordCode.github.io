---
title: "RecruitmentVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitmentVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitmentVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitmentVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs`

## 概述

`RecruitmentVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsQuitting` | `public bool IsQuitting { get; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `FocusedVolunteerTroop` | `public RecruitVolunteerTroopVM FocusedVolunteerTroop { get; set; }` |
| `FocusedVolunteerOwner` | `public RecruitVolunteerOwnerVM FocusedVolunteerOwner { get; set; }` |
| `PartyWageHint` | `public HintViewModel PartyWageHint { get; set; }` |
| `PartyCapacityHint` | `public HintViewModel PartyCapacityHint { get; set; }` |
| `PartySpeedHint` | `public BasicTooltipViewModel PartySpeedHint { get; set; }` |
| `RemainingFoodHint` | `public HintViewModel RemainingFoodHint { get; set; }` |
| `TotalWealthHint` | `public HintViewModel TotalWealthHint { get; set; }` |
| `TotalCostHint` | `public HintViewModel TotalCostHint { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `RecruitAllHint` | `public BasicTooltipViewModel RecruitAllHint { get; set; }` |
| `PartyWage` | `public int PartyWage { get; set; }` |
| `PartyCapacityText` | `public string PartyCapacityText { get; set; }` |
| `PartyWageText` | `public string PartyWageText { get; set; }` |
| `RecruitAllText` | `public string RecruitAllText { get; set; }` |
| `PartySpeedText` | `public string PartySpeedText { get; set; }` |
| `ResetAllText` | `public string ResetAllText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `RemainingFoodText` | `public string RemainingFoodText { get; set; }` |
| `TotalCostText` | `public string TotalCostText { get; set; }` |
| `Enabled` | `public bool Enabled { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `IsPartyCapacityWarningEnabled` | `public bool IsPartyCapacityWarningEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CanRecruitAll` | `public bool CanRecruitAll { get; set; }` |
| `TotalWealth` | `public int TotalWealth { get; set; }` |
| `PartyCapacity` | `public int PartyCapacity { get; set; }` |
| `InitialPartySize` | `public int InitialPartySize { get; set; }` |
| `CurrentPartySize` | `public int CurrentPartySize { get; set; }` |
| `VolunteerList` | `public MBBindingList<RecruitVolunteerVM> VolunteerList { get; set; }` |
| `TroopsInCart` | `public MBBindingList<RecruitVolunteerTroopVM> TroopsInCart { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `RecruitAllInputKey` | `public InputKeyItemVM RecruitAllInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshScreen
`public void RefreshScreen()`

**用途 / Purpose:** 刷新 `screen` 的显示或缓存。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteForceQuit
`public void ExecuteForceQuit()`

**用途 / Purpose:** 执行 `force quit` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### ExecuteRecruitAll
`public void ExecuteRecruitAll()`

**用途 / Purpose:** 执行 `recruit all` 操作或流程。

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**用途 / Purpose:** 设置 `get key text from key i d func` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetRecruitAllInputKey
`public void SetRecruitAllInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `recruit all input key` 的值或状态。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

## 使用示例

```csharp
var value = new RecruitmentVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)