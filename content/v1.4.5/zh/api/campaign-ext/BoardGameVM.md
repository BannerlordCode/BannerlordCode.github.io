---
title: "BoardGameVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameVM

**Namespace:** SandBox.ViewModelCollection.BoardGame
**Module:** SandBox.ViewModelCollection
**Type:** `public class BoardGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.BoardGame/BoardGameVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Activate
`public void Activate()`

**用途 / Purpose:** 处理 `activate` 相关逻辑。

### DiceRoll
`public void DiceRoll(int roll)`

**用途 / Purpose:** 处理 `dice roll` 相关逻辑。

### SwitchTurns
`public void SwitchTurns()`

**用途 / Purpose:** 处理 `switch turns` 相关逻辑。

### ExecuteRoll
`public void ExecuteRoll()`

**用途 / Purpose:** 执行 `roll` 操作或流程。

### ExecuteForfeit
`public void ExecuteForfeit()`

**用途 / Purpose:** 执行 `forfeit` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetRollDiceKey
`public void SetRollDiceKey(HotKey key)`

**用途 / Purpose:** 设置 `roll dice key` 的值或状态。

## 使用示例

```csharp
var value = new BoardGameVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)