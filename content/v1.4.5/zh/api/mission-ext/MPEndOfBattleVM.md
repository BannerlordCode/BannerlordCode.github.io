---
title: "MPEndOfBattleVM"
description: "MPEndOfBattleVM 的自动生成类参考。"
---
# MPEndOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPEndOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MPEndOfBattleVM.cs`

## 概述

`MPEndOfBattleVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `CountdownTitle` | `public string CountdownTitle { get; set; }` |
| `Countdown` | `public int Countdown { get; set; }` |
| `Header` | `public string Header { get; set; }` |
| `BattleResult` | `public int BattleResult { get; set; }` |
| `ResultText` | `public string ResultText { get; set; }` |
| `AllySide` | `public MPEndOfBattleSideVM AllySide { get; set; }` |
| `EnemySide` | `public MPEndOfBattleSideVM EnemySide { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPEndOfBattleVM 实例
MPEndOfBattleVM mPEndOfBattleVM = ...;
mPEndOfBattleVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPEndOfBattleVM 实例
MPEndOfBattleVM mPEndOfBattleVM = ...;
mPEndOfBattleVM.OnFinalize();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MPEndOfBattleVM 实例
MPEndOfBattleVM mPEndOfBattleVM = ...;
mPEndOfBattleVM.Tick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPEndOfBattleVM mPEndOfBattleVM = ...;
mPEndOfBattleVM.RefreshValues();
```

## 参见

- [本区域目录](../)