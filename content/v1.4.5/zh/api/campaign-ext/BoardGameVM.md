---
title: "BoardGameVM"
description: "BoardGameVM 的自动生成类参考。"
---
# BoardGameVM

**Namespace:** SandBox.ViewModelCollection.BoardGame
**Module:** SandBox.ViewModelCollection
**Type:** `public class BoardGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.BoardGame/BoardGameVM.cs`

## 概述

`BoardGameVM` 位于 `SandBox.ViewModelCollection.BoardGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.BoardGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instructions` | `public BoardGameInstructionsVM Instructions { get; set; }` |
| `CanRoll` | `public bool CanRoll { get; set; }` |
| `IsPlayersTurn` | `public bool IsPlayersTurn { get; set; }` |
| `IsGameUsingDice` | `public bool IsGameUsingDice { get; set; }` |
| `DiceResult` | `public string DiceResult { get; set; }` |
| `RollDiceText` | `public string RollDiceText { get; set; }` |
| `TurnOwnerText` | `public string TurnOwnerText { get; set; }` |
| `BoardGameType` | `public string BoardGameType { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `ForfeitText` | `public string ForfeitText { get; set; }` |
| `RollDiceKey` | `public InputKeyItemVM RollDiceKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BoardGameVM 实例
BoardGameVM boardGameVM = ...;
boardGameVM.RefreshValues();
```

### Activate
`public void Activate()`

**用途 / Purpose:** 激活当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 BoardGameVM 实例
BoardGameVM boardGameVM = ...;
boardGameVM.Activate();
```

### DiceRoll
`public void DiceRoll(int roll)`

**用途 / Purpose:** 处理与 「dice roll」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameVM 实例
BoardGameVM boardGameVM = ...;
boardGameVM.DiceRoll(0);
```

### SwitchTurns
`public void SwitchTurns()`

**用途 / Purpose:** 处理与 「switch turns」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BoardGameVM 实例
BoardGameVM boardGameVM = ...;
boardGameVM.SwitchTurns();
```

### ExecuteRoll
`public void ExecuteRoll()`

**用途 / Purpose:** 执行 「roll」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BoardGameVM 实例
BoardGameVM boardGameVM = ...;
boardGameVM.ExecuteRoll();
```

### ExecuteForfeit
`public void ExecuteForfeit()`

**用途 / Purpose:** 执行 「forfeit」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BoardGameVM 实例
BoardGameVM boardGameVM = ...;
boardGameVM.ExecuteForfeit();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BoardGameVM 实例
BoardGameVM boardGameVM = ...;
boardGameVM.OnFinalize();
```

### SetRollDiceKey
`public void SetRollDiceKey(HotKey key)`

**用途 / Purpose:** 为 「roll dice key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameVM 实例
BoardGameVM boardGameVM = ...;
boardGameVM.SetRollDiceKey(key);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGameVM boardGameVM = ...;
boardGameVM.RefreshValues();
```

## 参见

- [本区域目录](../)