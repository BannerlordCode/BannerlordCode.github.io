---
title: "TreeNodeTablut"
description: "TreeNodeTablut：SandBox.BoardGames.AI 的 public 类；公开成员 5 个（方法 3、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox/BoardGames/AI/TreeNodeTablut.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TreeNodeTablut

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class TreeNodeTablut`
**File:** `SandBox/BoardGames/AI/TreeNodeTablut.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TreeNodeTablut 位于 SandBox 模块，源文件 SandBox/BoardGames/AI/TreeNodeTablut.cs。它是一个 public 类，继承链为 TreeNodeTablut。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TreeNodeTablut 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.BoardGames.AI`，继承链 TreeNodeTablut。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/AI/TreeNodeTablut.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OpeningMove` | `public Move OpeningMove` | 属性 |
| `TreeNodeTablut` | `public TreeNodeTablut(BoardGameSide lastTurnIsPlayedBy, int depth)` | 构造函数 |
| `CreateTreeAndReturnRootNode` | `public static TreeNodeTablut CreateTreeAndReturnRootNode(BoardGameTablut.BoardInformation initialBoardState, int maxDepth)` | 方法 |
| `GetChildWithBestScore` | `public TreeNodeTablut GetChildWithBestScore()` | 方法 |
| `SelectAction` | `public void SelectAction()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BoardGameAIBaghChal](../BoardGameAIBaghChal/)
- [同命名空间 BoardGameAIBase](../BoardGameAIBase/)
- [同命名空间 BoardGameAIKonane](../BoardGameAIKonane/)
- [同命名空间 BoardGameAIMuTorere](../BoardGameAIMuTorere/)
