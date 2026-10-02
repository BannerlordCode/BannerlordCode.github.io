---
title: "BoardGameAIBase"
description: "BoardGameAIBase：SandBox.BoardGames.AI 的 public 类；公开成员 17 个（方法 11、属性 4、字段 0）。canonical 桶 sandbox。源文件 SandBox/BoardGames/AI/BoardGameAIBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameAIBase

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public abstract class BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAIBase.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BoardGameAIBase 位于 SandBox 模块，源文件 SandBox/BoardGames/AI/BoardGameAIBase.cs。它是一个 public 类（abstract），继承链为 BoardGameAIBase。public/protected 成员共 17 个：11 方法、4 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameAIBase 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.BoardGames.AI`，继承链 BoardGameAIBase。成员构成以方法为主（方法 11/17，属性 4/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/AI/BoardGameAIBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `public BoardGameAIBase.AIState State` | 属性 |
| `RecentMoveCalculated` | `public Move RecentMoveCalculated` | 属性 |
| `AbortRequested` | `public bool AbortRequested` | 属性 |
| `BoardGameAIBase` | `protected BoardGameAIBase(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler)` | 构造函数 |
| `CalculatePreMovementStageMove` | `public virtual Move CalculatePreMovementStageMove()` | 方法 |
| `CalculateMovementStageMove` | `public abstract Move CalculateMovementStageMove();` | 方法 |
| `InitializeDifficulty` | `protected abstract void InitializeDifficulty();` | 方法 |
| `WantsToForfeit` | `public virtual bool WantsToForfeit()` | 方法 |
| `OnSetGameOver` | `public virtual void OnSetGameOver()` | 方法 |
| `Initialize` | `public virtual void Initialize()` | 方法 |
| `SetDifficulty` | `public void SetDifficulty(BoardGameHelper.AIDifficulty difficulty)` | 方法 |
| `HowLongDidAIThinkAboutMove` | `public float HowLongDidAIThinkAboutMove()` | 方法 |
| `UpdateThinkingAboutMove` | `public void UpdateThinkingAboutMove(float dt)` | 方法 |
| `ResetThinking` | `public void ResetThinking()` | 方法 |
| `CanMakeMove` | `public bool CanMakeMove()` | 方法 |
| `AIState` | `public enum AIState` | 属性 |
| `AIState` | `public enum AIState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BoardGameAIBaghChal](../BoardGameAIBaghChal/)
- [同命名空间 BoardGameAIKonane](../BoardGameAIKonane/)
- [同命名空间 BoardGameAIMuTorere](../BoardGameAIMuTorere/)
- [同命名空间 BoardGameAIPuluc](../BoardGameAIPuluc/)
