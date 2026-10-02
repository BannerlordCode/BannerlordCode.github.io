---
title: "BoardGameMuTorere"
description: "BoardGameMuTorere：SandBox.BoardGames 的 public 类，继承 BoardGameBase；公开成员 27 个（方法 16、属性 6、字段 2）。canonical 桶 sandbox。源文件 SandBox/BoardGames/BoardGameMuTorere.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameMuTorere

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public class BoardGameMuTorere : BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameMuTorere.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BoardGameMuTorere 位于 SandBox 模块，源文件 SandBox/BoardGames/BoardGameMuTorere.cs。它是一个 public 类，实现/继承 BoardGameBase，继承链为 BoardGameMuTorere → BoardGameBase。public/protected 成员共 27 个：16 方法、6 属性、2 字段、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameMuTorere 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.BoardGames`，继承链 BoardGameMuTorere → BoardGameBase。成员构成以方法为主（方法 16/27，属性 6/27），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/BoardGameMuTorere.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TileCount` | `public override int TileCount` | 属性 |
| `RotateBoard` | `protected override bool RotateBoard` | 属性 |
| `PreMovementStagePresent` | `protected override bool PreMovementStagePresent` | 属性 |
| `DiceRollRequired` | `protected override bool DiceRollRequired` | 属性 |
| `BoardGameMuTorere` | `public BoardGameMuTorere(MissionBoardGameLogic mission, PlayerTurn startingPlayer) : base(mission, new TextObject(" ", null), startingPlayer)` | 构造函数 |
| `InitializeUnits` | `public override void InitializeUnits()` | 方法 |
| `InitializeTiles` | `public override void InitializeTiles()` | 方法 |
| `InitializeCapturedUnitsZones` | `public override void InitializeCapturedUnitsZones()` | 方法 |
| `InitializeSound` | `public override void InitializeSound()` | 方法 |
| `Reset` | `public override void Reset()` | 方法 |
| `List` | `public override List<Move>CalculateValidMoves(PawnBase pawn)` | 方法 |
| `SelectPawn` | `protected override PawnBase SelectPawn(PawnBase pawn)` | 方法 |
| `MovePawnToTileDelayed` | `protected override void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | 方法 |
| `SwitchPlayerTurn` | `protected override void SwitchPlayerTurn()` | 方法 |
| `CheckGameEnded` | `protected override bool CheckGameEnded()` | 方法 |
| `OnAfterBoardSetUp` | `protected override void OnAfterBoardSetUp()` | 方法 |
| `FindTileByCoordinate` | `public TileMuTorere FindTileByCoordinate(int x)` | 方法 |
| `TakePawnsSnapshot` | `public BoardGameMuTorere.BoardInformation TakePawnsSnapshot()` | 方法 |
| `UndoMove` | `public void UndoMove(ref BoardGameMuTorere.BoardInformation board)` | 方法 |
| `AIMakeMove` | `public void AIMakeMove(Move move)` | 方法 |
| `FindAvailableTile` | `public TileBase FindAvailableTile()` | 方法 |
| `WhitePawnCount` | `public const int WhitePawnCount` | 字段 |
| `BlackPawnCount` | `public const int BlackPawnCount` | 字段 |
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
- [同命名空间 BoardGameKonane](../BoardGameKonane/)
- [同命名空间 BoardGamePuluc](../BoardGamePuluc/)
