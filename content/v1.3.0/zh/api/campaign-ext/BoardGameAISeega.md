---
title: "BoardGameAISeega"
description: "BoardGameAISeega 的自动生成类参考。"
---
# BoardGameAISeega

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameAISeega : BoardGameAIBase`
**Base:** `BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAISeega.cs`

## 概述

`BoardGameAISeega` 位于 `SandBox.BoardGames.AI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.AI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CalculateMovementStageMove
`public override Move CalculateMovementStageMove()`

**用途 / Purpose:** 计算「movement stage move」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameAISeega 实例
BoardGameAISeega boardGameAISeega = ...;
var result = boardGameAISeega.CalculateMovementStageMove();
```

### WantsToForfeit
`public override bool WantsToForfeit()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BoardGameAISeega 实例
BoardGameAISeega boardGameAISeega = ...;
var result = boardGameAISeega.WantsToForfeit();
```

### CalculatePreMovementStageMove
`public override Move CalculatePreMovementStageMove()`

**用途 / Purpose:** 计算「pre movement stage move」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameAISeega 实例
BoardGameAISeega boardGameAISeega = ...;
var result = boardGameAISeega.CalculatePreMovementStageMove();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGameAISeega boardGameAISeega = ...;
boardGameAISeega.CalculateMovementStageMove();
```

## 参见

- [本区域目录](../)