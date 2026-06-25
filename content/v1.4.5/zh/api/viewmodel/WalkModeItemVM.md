---
title: "WalkModeItemVM"
description: "WalkModeItemVM 的自动生成类参考。"
---
# WalkModeItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WalkModeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode/WalkModeItemVM.cs`

## 概述

`WalkModeItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ToggleInputKey` | `public InputKeyItemVM ToggleInputKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `TypeId` | `public string TypeId { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 WalkModeItemVM 实例
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WalkModeItemVM 实例
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.OnFinalize();
```

### OnEnabled
`public void OnEnabled()`

**用途 / Purpose:** 在 「enabled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WalkModeItemVM 实例
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.OnEnabled();
```

### ToggleState
`public void ToggleState()`

**用途 / Purpose:** 获取或更新 「toggle state」 的状态。

```csharp
// 先通过子系统 API 拿到 WalkModeItemVM 实例
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.ToggleState();
```

### SetToggleInputKey
`public void SetToggleInputKey(HotKey hotKey, bool isHotKeyConsoleOnly)`

**用途 / Purpose:** 为 「toggle input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WalkModeItemVM 实例
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.SetToggleInputKey(hotKey, false);
```

### SetToggleInputKey
`public void SetToggleInputKey(GameKey gameKey, bool isHotKeyConsoleOnly)`

**用途 / Purpose:** 为 「toggle input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WalkModeItemVM 实例
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.SetToggleInputKey(gameKey, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WalkModeItemVM walkModeItemVM = ...;
walkModeItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)