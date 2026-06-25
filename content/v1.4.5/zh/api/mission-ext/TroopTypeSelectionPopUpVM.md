---
title: "TroopTypeSelectionPopUpVM"
description: "TroopTypeSelectionPopUpVM 的自动生成类参考。"
---
# TroopTypeSelectionPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TroopTypeSelectionPopUpVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/TroopTypeSelectionPopUpVM.cs`

## 概述

`TroopTypeSelectionPopUpVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `Items` | `public MBBindingList<CustomBattleTroopTypeVM> Items { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `SelectAllLbl` | `public string SelectAllLbl { get; set; }` |
| `BackToDefaultLbl` | `public string BackToDefaultLbl { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.OnFinalize();
```

### OpenPopUp
`public void OpenPopUp(string title, MBBindingList<CustomBattleTroopTypeVM> troops)`

**用途 / Purpose:** **用途 / Purpose:** 打开pop up对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.OpenPopUp("example", troops);
```

### OnItemSelectionToggled
`public void OnItemSelectionToggled(CustomBattleTroopTypeVM item)`

**用途 / Purpose:** **用途 / Purpose:** 在 item selection toggled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.OnItemSelectionToggled(item);
```

### ExecuteSelectAll
`public void ExecuteSelectAll()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select all 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteSelectAll();
```

### ExecuteBackToDefault
`public void ExecuteBackToDefault()`

**用途 / Purpose:** **用途 / Purpose:** 执行 back to default 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteBackToDefault();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** **用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** **用途 / Purpose:** 执行 done 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteDone();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteReset();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.SetCancelInputKey(hotkey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.SetDoneInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 reset input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TroopTypeSelectionPopUpVM 实例
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.SetResetInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.RefreshValues();
```

## 参见

- [本区域目录](../)