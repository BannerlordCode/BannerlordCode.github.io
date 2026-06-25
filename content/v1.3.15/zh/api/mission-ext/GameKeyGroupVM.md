---
title: "GameKeyGroupVM"
description: "GameKeyGroupVM 的自动生成类参考。"
---
# GameKeyGroupVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyGroupVM.cs`

## 概述

`GameKeyGroupVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameKeys` | `public MBBindingList<GameKeyOptionVM> GameKeys { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameKeyGroupVM 实例
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.RefreshValues();
```

### OnDone
`public void OnDone()`

**用途 / Purpose:** 在 「done」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameKeyGroupVM 实例
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.OnDone();
```

### OnGamepadActiveStateChanged
`public void OnGamepadActiveStateChanged()`

**用途 / Purpose:** 在 「gamepad active state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameKeyGroupVM 实例
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.OnGamepadActiveStateChanged();
```

### Cancel
`public void Cancel()`

**用途 / Purpose:** 检查当前对象是否满足 「cel」 的前置条件。

```csharp
// 先通过子系统 API 拿到 GameKeyGroupVM 实例
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.Cancel();
```

### ApplyValues
`public void ApplyValues()`

**用途 / Purpose:** 将 「values」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 GameKeyGroupVM 实例
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.ApplyValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameKeyGroupVM gameKeyGroupVM = ...;
gameKeyGroupVM.RefreshValues();
```

## 参见

- [本区域目录](../)