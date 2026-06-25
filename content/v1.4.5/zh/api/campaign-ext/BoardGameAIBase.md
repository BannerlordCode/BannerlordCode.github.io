---
title: "BoardGameAIBase"
description: "BoardGameAIBase 的自动生成类参考。"
---
# BoardGameAIBase

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public abstract class BoardGameAIBase`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.AI/BoardGameAIBase.cs`

## 概述

`BoardGameAIBase` 位于 `SandBox.BoardGames.AI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.AI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RecentMoveCalculated` | `public Move RecentMoveCalculated { get; }` |

## 主要方法

### CalculatePreMovementStageMove
`public virtual Move CalculatePreMovementStageMove()`

**用途 / Purpose:** 计算pre movement stage move的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.CalculatePreMovementStageMove();
```

### CalculateMovementStageMove
`public abstract Move CalculateMovementStageMove()`

**用途 / Purpose:** 计算movement stage move的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.CalculateMovementStageMove();
```

### WantsToForfeit
`public virtual bool WantsToForfeit()`

**用途 / Purpose:** 调用 WantsToForfeit 对应的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.WantsToForfeit();
```

### OnSetGameOver
`public virtual void OnSetGameOver()`

**用途 / Purpose:** 在 set game over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.OnSetGameOver();
```

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.Initialize();
```

### SetDifficulty
`public void SetDifficulty(AIDifficulty difficulty)`

**用途 / Purpose:** 为 difficulty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.SetDifficulty(difficulty);
```

### HowLongDidAIThinkAboutMove
`public float HowLongDidAIThinkAboutMove()`

**用途 / Purpose:** 调用 HowLongDidAIThinkAboutMove 对应的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.HowLongDidAIThinkAboutMove();
```

### UpdateThinkingAboutMove
`public void UpdateThinkingAboutMove(float dt)`

**用途 / Purpose:** 重新计算并更新 thinking about move 的最新表示。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.UpdateThinkingAboutMove(0);
```

### ResetThinking
`public void ResetThinking()`

**用途 / Purpose:** 将 thinking 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
boardGameAIBase.ResetThinking();
```

### CanMakeMove
`public bool CanMakeMove()`

**用途 / Purpose:** 检查当前对象是否满足 make move 的前置条件。

```csharp
// 先通过子系统 API 拿到 BoardGameAIBase 实例
BoardGameAIBase boardGameAIBase = ...;
var result = boardGameAIBase.CanMakeMove();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BoardGameAIBase instance = ...;
```

## 参见

- [本区域目录](../)