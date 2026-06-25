---
title: "CustomBattleVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs`

## 概述

`CustomBattleVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopTypeSelectionPopUp` | `public TroopTypeSelectionPopUpVM TroopTypeSelectionPopUp { get; set; }` |
| `IsAttackerCustomMachineSelectionEnabled` | `public bool IsAttackerCustomMachineSelectionEnabled { get; set; }` |
| `IsDefenderCustomMachineSelectionEnabled` | `public bool IsDefenderCustomMachineSelectionEnabled { get; set; }` |
| `RandomizeButtonText` | `public string RandomizeButtonText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `BackButtonText` | `public string BackButtonText { get; set; }` |
| `StartButtonText` | `public string StartButtonText { get; set; }` |
| `SwitchButtonText` | `public string SwitchButtonText { get; set; }` |
| `EnemySide` | `public CustomBattleSideVM EnemySide { get; set; }` |
| `PlayerSide` | `public CustomBattleSideVM PlayerSide { get; set; }` |
| `GameTypeSelectionGroup` | `public GameTypeSelectionGroupVM GameTypeSelectionGroup { get; set; }` |
| `MapSelectionGroup` | `public MapSelectionGroupVM MapSelectionGroup { get; set; }` |
| `AttackerMeleeMachines` | `public MBBindingList<CustomBattleSiegeMachineVM> AttackerMeleeMachines { get; set; }` |
| `AttackerRangedMachines` | `public MBBindingList<CustomBattleSiegeMachineVM> AttackerRangedMachines { get; set; }` |
| `DefenderMachines` | `public MBBindingList<CustomBattleSiegeMachineVM> DefenderMachines { get; set; }` |
| `CanSwitchMode` | `public bool CanSwitchMode { get; set; }` |
| `SwitchHint` | `public HintViewModel SwitchHint { get; set; }` |
| `StartInputKey` | `public InputKeyItemVM StartInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `RandomizeInputKey` | `public InputKeyItemVM RandomizeInputKey { get; set; }` |

## 主要方法

### SetActiveState
`public void SetActiveState(bool isActive)`

**用途 / Purpose:** 设置 `active state` 的值或状态。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteBack
`public void ExecuteBack()`

**用途 / Purpose:** 执行 `back` 操作或流程。

### ExecuteStart
`public void ExecuteStart()`

**用途 / Purpose:** 执行 `start` 操作或流程。

### ExecuteRandomize
`public void ExecuteRandomize()`

**用途 / Purpose:** 执行 `randomize` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteSwitchToNextCustomBattle
`public void ExecuteSwitchToNextCustomBattle()`

**用途 / Purpose:** 执行 `switch to next custom battle` 操作或流程。

### SetStartInputKey
`public void SetStartInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `start input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

### SetRandomizeInputKey
`public void SetRandomizeInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `randomize input key` 的值或状态。

## 使用示例

```csharp
var value = new CustomBattleVM();
value.SetActiveState(false);
```

## 参见

- [完整类目录](../catalog)