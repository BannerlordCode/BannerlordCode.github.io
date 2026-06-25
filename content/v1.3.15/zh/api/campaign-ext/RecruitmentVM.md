---
title: "RecruitmentVM"
description: "RecruitmentVM 的自动生成类参考。"
---
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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.RefreshValues();
```

### RefreshScreen
`public void RefreshScreen()`

**用途 / Purpose:** 使 「screen」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.RefreshScreen();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.ExecuteDone();
```

### ExecuteForceQuit
`public void ExecuteForceQuit()`

**用途 / Purpose:** 执行 「force quit」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.ExecuteForceQuit();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 「reset」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.ExecuteReset();
```

### ExecuteRecruitAll
`public void ExecuteRecruitAll()`

**用途 / Purpose:** 执行 「recruit all」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.ExecuteRecruitAll();
```

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 停用当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.Deactivate();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.OnFinalize();
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**用途 / Purpose:** 为 「get key text from key i d func」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetGetKeyTextFromKeyIDFunc(func<string, getKeyTextFromKeyId);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetDoneInputKey(hotKey);
```

### SetRecruitAllInputKey
`public void SetRecruitAllInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「recruit all input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetRecruitAllInputKey(hotKey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「reset input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RecruitmentVM 实例
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetResetInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RecruitmentVM recruitmentVM = ...;
recruitmentVM.RefreshValues();
```

## 参见

- [本区域目录](../)