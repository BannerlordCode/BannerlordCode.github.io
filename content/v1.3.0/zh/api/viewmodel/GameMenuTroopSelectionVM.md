---
title: "GameMenuTroopSelectionVM"
description: "GameMenuTroopSelectionVM 的自动生成类参考。"
---
# GameMenuTroopSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuTroopSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.RefreshValues();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.ExecuteCancel();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 「reset」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.ExecuteReset();
```

### ExecuteClearSelection
`public void ExecuteClearSelection()`

**用途 / Purpose:** 执行 「clear selection」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.ExecuteClearSelection();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.SetCancelInputKey(hotkey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.SetDoneInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 「reset input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuTroopSelectionVM 实例
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.SetResetInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenuTroopSelectionVM gameMenuTroopSelectionVM = ...;
gameMenuTroopSelectionVM.RefreshValues();
```

## 参见

- [本区域目录](../)