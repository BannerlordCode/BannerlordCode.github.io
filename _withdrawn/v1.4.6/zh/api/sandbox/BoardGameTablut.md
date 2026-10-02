---
title: "BoardGameTablut"
description: "BoardGameTablut：SandBox.BoardGames 的 public 类，继承 BoardGameBase；公开成员 34 个（方法 19、属性 7、字段 4）。canonical 桶 sandbox。源文件 SandBox/BoardGames/BoardGameTablut.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameTablut

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGameTablut : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameTablut.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BoardGameTablut 位于 SandBox 模块，源文件 SandBox/BoardGames/BoardGameTablut.cs。它是一个 public 类，实现/继承 BoardGameBase，继承链为 BoardGameTablut → BoardGameBase。public/protected 成员共 34 个：19 方法、7 属性、4 字段、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameTablut 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.BoardGames`，继承链 BoardGameTablut → BoardGameBase。成员构成以方法为主（方法 19/34，属性 7/34），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/BoardGameTablut.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | 属性 |
| `RotateBoard` | `protected override bool RotateBoard` | 属性 |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | 属性 |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | 属性 |
| `BoardGameTablut` | `public BoardGameTablut(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | 构造函数 |
| `IsCitadelTile` | `public static bool IsCitadelTile(int tileX, int tileY)` | 方法 |
| `InitializeUnits` | `public override void InitializeUnits()` | 方法 |
| `InitializeTiles` | `public override void InitializeTiles()` | 方法 |
| `InitializeSound` | `public override void InitializeSound()` | 方法 |
| `Reset` | `public override void Reset()` | 方法 |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | 方法 |
| `SetPawnCaptured` | `public override void SetPawnCaptured(PawnBase pawn, bool fake = false)` | 方法 |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | 方法 |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | 方法 |
| `MovePawnToTileDelayed` | `protected override void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | 方法 |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | 方法 |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | 方法 |
| `AIMakeMove` | `public bool AIMakeMove(Move move)` | 方法 |
| `HasAvailableMoves` | `public bool HasAvailableMoves(PawnTablut pawn)` | 方法 |
| `GetRandomAvailableMove` | `public Move GetRandomAvailableMove(PawnTablut pawn)` | 方法 |
| `GetWinningMoveIfPresent` | `public Move GetWinningMoveIfPresent(BoardGameSide side)` | 方法 |
| `TakeBoardSnapshot` | `public BoardGameTablut.BoardInformation TakeBoardSnapshot()` | 方法 |
| `UndoMove` | `public void UndoMove(ref BoardGameTablut.BoardInformation board)` | 方法 |
| `CheckGameState` | `public BoardGameTablut.State CheckGameState()` | 方法 |
| `BoardWidth` | `public const int BoardWidth` | 字段 |
| `BoardHeight` | `public const int BoardHeight` | 字段 |
| `AttackerPawnCount` | `public const int AttackerPawnCount` | 字段 |
| `DefenderPawnCount` | `public const int DefenderPawnCount` | 字段 |
| `PawnInformation` | `public struct PawnInformation` | 属性 |
| `BoardInformation` | `public struct BoardInformation` | 属性 |
| `State` | `public enum State` | 属性 |
| `PawnInformation` | `public struct PawnInformation` | 嵌套类型 |
| `BoardInformation` | `public struct BoardInformation` | 嵌套类型 |
| `State` | `public enum State` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BoardGameBase](../BoardGameBase/)
- [同命名空间 BoardGameBaghChal](../BoardGameBaghChal/)
- [同命名空间 BoardGameBase](../BoardGameBase/)
- [同命名空间 BoardGameKonane](../BoardGameKonane/)
- [同命名空间 BoardGameMuTorere](../BoardGameMuTorere/)
