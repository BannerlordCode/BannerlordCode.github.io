---
title: "BoardGameKonane"
description: "BoardGameKonane：SandBox.BoardGames 的 public 类，继承 BoardGameBase；公开成员 32 个（方法 18、属性 6、字段 5）。canonical 桶 sandbox。源文件 SandBox/BoardGames/BoardGameKonane.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameKonane

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGameKonane : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameKonane.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BoardGameKonane 位于 SandBox 模块，源文件 SandBox/BoardGames/BoardGameKonane.cs。它是一个 public 类，实现/继承 BoardGameBase，继承链为 BoardGameKonane → BoardGameBase。public/protected 成员共 32 个：18 方法、6 属性、5 字段、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameKonane 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.BoardGames`，继承链 BoardGameKonane → BoardGameBase。成员构成以方法为主（方法 18/32，属性 6/32），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/BoardGameKonane.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | 属性 |
| `RotateBoard` | `protected override bool RotateBoard` | 属性 |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | 属性 |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | 属性 |
| `BoardGameKonane` | `public BoardGameKonane(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | 构造函数 |
| `InitializeUnits` | `public override void InitializeUnits()` | 方法 |
| `InitializeTiles` | `public override void InitializeTiles()` | 方法 |
| `InitializeSound` | `public override void InitializeSound()` | 方法 |
| `Reset` | `public override void Reset()` | 方法 |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | 方法 |
| `SetPawnCaptured` | `public override void SetPawnCaptured(PawnBase pawn, bool fake = false)` | 方法 |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | 方法 |
| `HandlePreMovementStage` | `protected override void HandlePreMovementStage(float dt)` | 方法 |
| `HandlePreMovementStageAI` | `protected override void HandlePreMovementStageAI(Move move)` | 方法 |
| `MovePawnToTileDelayed` | `protected override void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | 方法 |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | 方法 |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | 方法 |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | 方法 |
| `AIMakeMove` | `public void AIMakeMove(Move move)` | 方法 |
| `CheckForRemovablePawns` | `public int CheckForRemovablePawns(bool playerOne)` | 方法 |
| `TakeBoardSnapshot` | `public BoardGameKonane.BoardInformation TakeBoardSnapshot()` | 方法 |
| `UndoMove` | `public void UndoMove(ref BoardGameKonane.BoardInformation board)` | 方法 |
| `CheckWhichPawnsAreCaptured` | `protected void CheckWhichPawnsAreCaptured(PawnKonane pawn, bool fake = false)` | 方法 |
| `WhitePawnCount` | `public const int WhitePawnCount` | 字段 |
| `BlackPawnCount` | `public const int BlackPawnCount` | 字段 |
| `BoardWidth` | `public static readonly int BoardWidth` | 字段 |
| `BoardHeight` | `public static readonly int BoardHeight` | 字段 |
| `List` | `public List<PawnBase>RemovablePawns` | 字段 |
| `BoardInformation` | `public struct BoardInformation` | 属性 |
| `PawnInformation` | `public struct PawnInformation` | 属性 |
| `BoardInformation` | `public struct BoardInformation` | 嵌套类型 |
| `PawnInformation` | `public struct PawnInformation` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BoardGameBase](../BoardGameBase/)
- [同命名空间 BoardGameBaghChal](../BoardGameBaghChal/)
- [同命名空间 BoardGameBase](../BoardGameBase/)
- [同命名空间 BoardGameMuTorere](../BoardGameMuTorere/)
- [同命名空间 BoardGamePuluc](../BoardGamePuluc/)
