---
title: "GameMenuTroopSelectionVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuTroopSelectionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuTroopSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuTroopSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection/GameMenuTroopSelectionVM.cs`

## 概述

`GameMenuTroopSelectionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `Troops` | `public MBBindingList<TroopSelectionItemVM> Troops { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClearSelectionText` | `public string ClearSelectionText { get; set; }` |
| `CurrentSelectedAmountText` | `public string CurrentSelectedAmountText { get; set; }` |
| `CurrentSelectedAmountTitle` | `public string CurrentSelectedAmountTitle { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### ExecuteClearSelection
`public void ExecuteClearSelection()`

**用途 / Purpose:** 执行 `clear selection` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

## 使用示例

```csharp
var value = new GameMenuTroopSelectionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)