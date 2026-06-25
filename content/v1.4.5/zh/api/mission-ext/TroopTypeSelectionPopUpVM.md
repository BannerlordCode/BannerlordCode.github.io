---
title: "TroopTypeSelectionPopUpVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopTypeSelectionPopUpVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TroopTypeSelectionPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TroopTypeSelectionPopUpVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/TroopTypeSelectionPopUpVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OpenPopUp
`public void OpenPopUp(string title, MBBindingList<CustomBattleTroopTypeVM> troops)`

**用途 / Purpose:** 处理 `open pop up` 相关逻辑。

### OnItemSelectionToggled
`public void OnItemSelectionToggled(CustomBattleTroopTypeVM item)`

**用途 / Purpose:** 当 `item selection toggled` 事件触发时调用此方法。

### ExecuteSelectAll
`public void ExecuteSelectAll()`

**用途 / Purpose:** 执行 `select all` 操作或流程。

### ExecuteBackToDefault
`public void ExecuteBackToDefault()`

**用途 / Purpose:** 执行 `back to default` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

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
var value = new TroopTypeSelectionPopUpVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)