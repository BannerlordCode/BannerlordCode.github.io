---
title: "BoardGameAIKonane"
description: "BoardGameAIKonane 的自动生成类参考。"
---
# BoardGameAIKonane

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameAIKonane : BoardGameAIBase`
**Base:** `BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIKonane.cs`

## 概述

`BoardGameAIKonane` 位于 `SandBox.BoardGames.AI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.AI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CalculateMovementStageMove
`public override Move CalculateMovementStageMove()`

**用途 / Purpose:** 计算「movement stage move」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameAIKonane 实例
BoardGameAIKonane boardGameAIKonane = ...;
var result = boardGameAIKonane.CalculateMovementStageMove();
```

### CalculatePreMovementStageMove
`public override Move CalculatePreMovementStageMove()`

**用途 / Purpose:** 计算「pre movement stage move」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BoardGameAIKonane 实例
BoardGameAIKonane boardGameAIKonane = ...;
var result = boardGameAIKonane.CalculatePreMovementStageMove();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BoardGameAIKonane boardGameAIKonane = ...;
boardGameAIKonane.CalculateMovementStageMove();
```

## 参见

- [本区域目录](../)