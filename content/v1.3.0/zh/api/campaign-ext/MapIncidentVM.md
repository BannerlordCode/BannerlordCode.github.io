---
title: "MapIncidentVM"
description: "MapIncidentVM 的自动生成类参考。"
---
# MapIncidentVM

**Namespace:** SandBox.ViewModelCollection.Map.Incidents
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapIncidentVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs`

## 概述

`MapIncidentVM` 位于 `SandBox.ViewModelCollection.Map.Incidents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Incidents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CanConfirm` | `public bool CanConfirm { get; set; }` |
| `HasFocusedOption` | `public bool HasFocusedOption { get; set; }` |
| `HasSelectedOption` | `public bool HasSelectedOption { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ConfirmText` | `public string ConfirmText { get; set; }` |
| `IncidentType` | `public string IncidentType { get; set; }` |
| `ActiveHint` | `public string ActiveHint { get; set; }` |
| `ConfirmHint` | `public HintViewModel ConfirmHint { get; set; }` |
| `FocusedOption` | `public MapIncidentOptionVM FocusedOption { get; set; }` |
| `SelectedOption` | `public MapIncidentOptionVM SelectedOption { get; set; }` |
| `Options` | `public MBBindingList<MapIncidentOptionVM> Options { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MapIncidentVM 实例
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapIncidentVM 实例
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.OnFinalize();
```

### ExecuteConfirm
`public void ExecuteConfirm()`

**用途 / Purpose:** 执行 confirm 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MapIncidentVM 实例
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.ExecuteConfirm();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapIncidentVM 实例
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapIncidentVM mapIncidentVM = ...;
mapIncidentVM.RefreshValues();
```

## 参见

- [本区域目录](../)