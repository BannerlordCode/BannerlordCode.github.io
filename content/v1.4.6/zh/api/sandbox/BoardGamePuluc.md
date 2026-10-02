---
title: "BoardGamePuluc"
description: "BoardGamePuluc：SandBox 的 public 类，继承 BoardGameBase；公开成员 30 个（方法 18、属性 6、字段 3）。源文件 SandBox/BoardGames/BoardGamePuluc.cs。"
---
# BoardGamePuluc

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGamePuluc : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGamePuluc.cs`

## 概述

BoardGamePuluc 位于 SandBox 模块，源文件 SandBox/BoardGames/BoardGamePuluc.cs。它是一个 public 类，实现/继承 BoardGameBase，继承链为 BoardGamePuluc → BoardGameBase。public/protected 成员共 30 个：18 方法、6 属性、3 字段、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGamePuluc 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames），继承链 BoardGamePuluc → BoardGameBase。成员构成以方法为主（方法 18/30，属性 6/30），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/BoardGamePuluc.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | 属性 |
| `RotateBoard` | `protected override bool RotateBoard` | 属性 |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | 属性 |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | 属性 |
| `BoardGamePuluc` | `public BoardGamePuluc(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | 构造函数 |
| `InitializeUnits` | `public override void InitializeUnits()` | 方法 |
| `InitializeTiles` | `public override void InitializeTiles()` | 方法 |
| `InitializeSound` | `public override void InitializeSound()` | 方法 |
| `InitializeDiceBoard` | `public override void InitializeDiceBoard()` | 方法 |
| `Reset` | `public override void Reset()` | 方法 |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | 方法 |
| `RollDice` | `public override void RollDice()` | 方法 |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | 方法 |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | 方法 |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | 方法 |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | 方法 |
| `UpdateAllTilesPositions` | `protected override void UpdateAllTilesPositions()` | 方法 |
| `OnBeforeEndTurn` | `protected override void OnBeforeEndTurn()` | 方法 |
| `MovePawnToTile` | `protected override void MovePawnToTile(PawnBase pawn, TileBase tile, bool instantMove = false, bool displayMessage = true)` | 方法 |
| `OnAfterDiceRollAnimation` | `protected override void OnAfterDiceRollAnimation()` | 方法 |
| `AIMakeMove` | `public void AIMakeMove(Move move)` | 方法 |
| `TakeBoardSnapshot` | `public BoardGamePuluc.BoardInformation TakeBoardSnapshot()` | 方法 |
| `UndoMove` | `public void UndoMove(ref BoardGamePuluc.BoardInformation board)` | 方法 |
| `WhitePawnCount` | `public const int WhitePawnCount` | 字段 |
| `BlackPawnCount` | `public const int BlackPawnCount` | 字段 |
| `TrackTileCount` | `public const int TrackTileCount` | 字段 |
| `PawnInformation` | `public struct PawnInformation` | 属性 |
| `BoardInformation` | `public struct BoardInformation` | 属性 |
| `PawnInformation` | `public struct PawnInformation` | 嵌套类型 |
| `BoardInformation` | `public struct BoardInformation` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 BoardGameBase](../BoardGameBase)
- [同命名空间 BoardGameBaghChal](../BoardGameBaghChal)
- [同命名空间 BoardGameBase](../BoardGameBase)
- [同命名空间 BoardGameKonane](../BoardGameKonane)
- [同命名空间 BoardGameMuTorere](../BoardGameMuTorere)
