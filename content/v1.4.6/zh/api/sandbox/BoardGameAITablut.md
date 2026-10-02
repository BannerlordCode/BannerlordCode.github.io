---
title: "BoardGameAITablut"
description: "BoardGameAITablut：SandBox 的 public 类，继承 BoardGameAIBase；公开成员 5 个（方法 4、属性 0、字段 0）。源文件 SandBox/BoardGames/AI/BoardGameAITablut.cs。"
---
# BoardGameAITablut

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class BoardGameAITablut : BoardGameAIBase`
**File:** `SandBox/BoardGames/AI/BoardGameAITablut.cs`

## 概述

BoardGameAITablut 位于 SandBox 模块，源文件 SandBox/BoardGames/AI/BoardGameAITablut.cs。它是一个 public 类，实现/继承 BoardGameAIBase，继承链为 BoardGameAITablut → BoardGameAIBase。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameAITablut 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames.AI），继承链 BoardGameAITablut → BoardGameAIBase。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/AI/BoardGameAITablut.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameAITablut` | `public BoardGameAITablut(BoardGameHelper.AIDifficulty difficulty, MissionBoardGameLogic boardGameHandler) : base(difficulty, boardGameHandler)` | 构造函数 |
| `Initialize` | `public override void Initialize()` | 方法 |
| `OnSetGameOver` | `public override void OnSetGameOver()` | 方法 |
| `CalculateMovementStageMove` | `public override Move CalculateMovementStageMove()` | 方法 |
| `InitializeDifficulty` | `protected override void InitializeDifficulty()` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 BoardGameAIBase](../BoardGameAIBase)
- [同命名空间 BoardGameAIBaghChal](../BoardGameAIBaghChal)
- [同命名空间 BoardGameAIBase](../BoardGameAIBase)
- [同命名空间 BoardGameAIKonane](../BoardGameAIKonane)
- [同命名空间 BoardGameAIMuTorere](../BoardGameAIMuTorere)
