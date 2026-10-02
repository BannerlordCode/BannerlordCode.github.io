---
title: "BoardGameBase"
description: "BoardGameBase：SandBox 的 public 类；公开成员 96 个（方法 51、属性 19、字段 25）。源文件 SandBox/BoardGames/BoardGameBase.cs。"
---
# BoardGameBase

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public abstract class BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameBase.cs`

## 概述

BoardGameBase 位于 SandBox 模块，源文件 SandBox/BoardGames/BoardGameBase.cs。它是一个 public 类（abstract），继承链为 BoardGameBase。public/protected 成员共 96 个：51 方法、19 属性、25 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameBase 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.BoardGames），继承链 BoardGameBase。成员构成以方法为主（方法 51/96，属性 19/96），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/BoardGames/BoardGameBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TileCount` | `public abstract int TileCount` | 属性 |
| `RotateBoard` | `protected abstract bool RotateBoard` | 属性 |
| `PreMovementStagePresent` | `protected abstract bool PreMovementStagePresent` | 属性 |
| `DiceRollRequired` | `protected abstract bool DiceRollRequired` | 属性 |
| `UnitsToPlacePerTurnInPreMovementStage` | `protected virtual int UnitsToPlacePerTurnInPreMovementStage` | 属性 |
| `SelectedUnit` | `protected virtual PawnBase SelectedUnit` | 属性 |
| `Name` | `public TextObject Name` | 属性 |
| `InPreMovementStage` | `public bool InPreMovementStage` | 属性 |
| `TileBase[]Tiles` | `public TileBase[]Tiles` | 属性 |
| `List` | `public List<PawnBase>PlayerOneUnits` | 属性 |
| `List` | `public List<PawnBase>PlayerTwoUnits` | 属性 |
| `LastDice` | `public int LastDice` | 属性 |
| `IsReady` | `public bool IsReady` | 属性 |
| `PlayerWhoStarted` | `public PlayerTurn PlayerWhoStarted` | 属性 |
| `GameOverInfo` | `public GameOverEnum GameOverInfo` | 属性 |
| `PlayerTurn` | `public PlayerTurn PlayerTurn` | 属性 |
| `InputManager` | `protected IInputContext InputManager` | 属性 |
| `List` | `protected List<PawnBase>PawnSelectFilter` | 属性 |
| `AIOpponent` | `protected BoardGameAIBase AIOpponent` | 属性 |
| `BoardGameBase` | `protected BoardGameBase(MissionBoardGameLogic mission, TextObject name, PlayerTurn startingPlayer)` | 构造函数 |
| `InitializeUnits` | `public abstract void InitializeUnits();` | 方法 |
| `InitializeTiles` | `public abstract void InitializeTiles();` | 方法 |
| `InitializeSound` | `public abstract void InitializeSound();` | 方法 |
| `List` | `public abstract List<Move>CalculateValidMoves(PawnBase pawn);` | 方法 |
| `SelectPawn` | `protected abstract PawnBase SelectPawn(PawnBase pawn);` | 方法 |
| `CheckGameEnded` | `protected abstract bool CheckGameEnded();` | 方法 |
| `OnAfterBoardSetUp` | `protected abstract void OnAfterBoardSetUp();` | 方法 |
| `OnAfterBoardRotated` | `protected virtual void OnAfterBoardRotated()` | 方法 |
| `OnBeforeEndTurn` | `protected virtual void OnBeforeEndTurn()` | 方法 |
| `RollDice` | `public virtual void RollDice()` | 方法 |
| `UpdateAllTilesPositions` | `protected virtual void UpdateAllTilesPositions()` | 方法 |
| `InitializeDiceBoard` | `public virtual void InitializeDiceBoard()` | 方法 |
| `Reset` | `public virtual void Reset()` | 方法 |
| `OnPawnArrivesGoalPosition` | `protected virtual void OnPawnArrivesGoalPosition(PawnBase pawn, Vec3 prevPos, Vec3 currentPos)` | 方法 |
| `HandlePreMovementStage` | `protected virtual void HandlePreMovementStage(float dt)` | 方法 |
| `InitializeCapturedUnitsZones` | `public virtual void InitializeCapturedUnitsZones()` | 方法 |
| `HandlePreMovementStageAI` | `protected virtual void HandlePreMovementStageAI(Move move)` | 方法 |
| `SetPawnCaptured` | `public virtual void SetPawnCaptured(PawnBase pawn, bool fake = false)` | 方法 |
| `List` | `public virtual List<List<Move>>CalculateAllValidMoves(BoardGameSide side)` | 方法 |
| `SwitchPlayerTurn` | `protected virtual void SwitchPlayerTurn()` | 方法 |
| `MovePawnToTile` | `protected virtual void MovePawnToTile(PawnBase pawn, TileBase tile, bool instantMove = false, bool displayMessage = true)` | 方法 |
| `MovePawnToTileDelayed` | `protected virtual void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | 方法 |
| `OnAfterDiceRollAnimation` | `protected virtual void OnAfterDiceRollAnimation()` | 方法 |
| `SetUserRay` | `public void SetUserRay(Vec3 rayBegin, Vec3 rayEnd)` | 方法 |
| `SetStartingPlayer` | `public void SetStartingPlayer(PlayerTurn player)` | 方法 |
| `SetGameOverInfo` | `public void SetGameOverInfo(GameOverEnum info)` | 方法 |
| `HasMovesAvailable` | `public bool HasMovesAvailable(ref List<List<Move>>moves)` | 方法 |
| `GetTotalMovesAvailable` | `public int GetTotalMovesAvailable(ref List<List<Move>>moves)` | 方法 |
| `PlayDiceRollSound` | `public void PlayDiceRollSound()` | 方法 |
| `GetPlayerOneUnitsAlive` | `public int GetPlayerOneUnitsAlive()` | 方法 |
| `GetPlayerTwoUnitsAlive` | `public int GetPlayerTwoUnitsAlive()` | 方法 |
| `GetPlayerOneUnitsDead` | `public int GetPlayerOneUnitsDead()` | 方法 |
| `GetPlayerTwoUnitsDead` | `public int GetPlayerTwoUnitsDead()` | 方法 |
| `Initialize` | `public void Initialize()` | 方法 |
| `RemovePawnFromBoard` | `protected void RemovePawnFromBoard(PawnBase pawn, float speed, bool instantMove = false)` | 方法 |
| `Tick` | `public bool Tick(float dt)` | 方法 |
| `ForceDice` | `public void ForceDice(int value)` | 方法 |
| `InitializeUnit` | `protected PawnBase InitializeUnit(PawnBase pawnToInit)` | 方法 |
| `HandlePlayerInput` | `protected Move HandlePlayerInput(float dt)` | 方法 |
| `GetHoveredPawnIfAny` | `protected PawnBase GetHoveredPawnIfAny()` | 方法 |
| `GetHoveredTileIfAny` | `protected TileBase GetHoveredTileIfAny()` | 方法 |
| `CheckSwitchPlayerTurn` | `protected void CheckSwitchPlayerTurn()` | 方法 |
| `OnVictory` | `protected void OnVictory(string message = " ")` | 方法 |
| `OnAfterEndTurn` | `protected void OnAfterEndTurn()` | 方法 |
| `OnDefeat` | `protected void OnDefeat(string message = " ")` | 方法 |
| `OnDraw` | `protected void OnDraw(string message = " ")` | 方法 |
| `EndTurn` | `protected void EndTurn()` | 方法 |
| `ClearValidMoves` | `protected void ClearValidMoves()` | 方法 |
| `HideAllValidTiles` | `protected void HideAllValidTiles()` | 方法 |
| `ShowAllValidTiles` | `protected void ShowAllValidTiles()` | 方法 |
| `OnAIWantsForfeit` | `protected void OnAIWantsForfeit()` | 方法 |
| `StringBoardGame` | `public const string StringBoardGame` | 字段 |
| `StringForfeitQuestion` | `public const string StringForfeitQuestion` | 字段 |
| `StringMovePiecePlayer` | `public const string StringMovePiecePlayer` | 字段 |
| `StringMovePieceOpponent` | `public const string StringMovePieceOpponent` | 字段 |
| `StringCapturePiecePlayer` | `public const string StringCapturePiecePlayer` | 字段 |
| `StringCapturePieceOpponent` | `public const string StringCapturePieceOpponent` | 字段 |
| `StringVictoryMessage` | `public const string StringVictoryMessage` | 字段 |
| `StringDefeatMessage` | `public const string StringDefeatMessage` | 字段 |
| `StringDrawMessage` | `public const string StringDrawMessage` | 字段 |
| `StringNoAvailableMovesPlayer` | `public const string StringNoAvailableMovesPlayer` | 字段 |
| `StringNoAvailableMovesOpponent` | `public const string StringNoAvailableMovesOpponent` | 字段 |
| `StringSeegaBarrierByP1DrawMessage` | `public const string StringSeegaBarrierByP1DrawMessage` | 字段 |
| `StringSeegaBarrierByP2DrawMessage` | `public const string StringSeegaBarrierByP2DrawMessage` | 字段 |
| `StringSeegaBarrierByP1VictoryMessage` | `public const string StringSeegaBarrierByP1VictoryMessage` | 字段 |
| `StringSeegaBarrierByP2VictoryMessage` | `public const string StringSeegaBarrierByP2VictoryMessage` | 字段 |
| `StringSeegaBarrierByP1DefeatMessage` | `public const string StringSeegaBarrierByP1DefeatMessage` | 字段 |
| `StringSeegaBarrierByP2DefeatMessage` | `public const string StringSeegaBarrierByP2DefeatMessage` | 字段 |
| `StringRollDicePlayer` | `public const string StringRollDicePlayer` | 字段 |
| `StringRollDiceOpponent` | `public const string StringRollDiceOpponent` | 字段 |
| `InvalidDice` | `protected const int InvalidDice` | 字段 |
| `DelayBeforeMovingAnyPawn` | `protected const float DelayBeforeMovingAnyPawn` | 字段 |
| `DelayBetweenPawnMovementsBegin` | `protected const float DelayBetweenPawnMovementsBegin` | 字段 |
| `PawnSelectedFactor` | `protected uint PawnSelectedFactor` | 字段 |
| `PawnUnselectedFactor` | `protected uint PawnUnselectedFactor` | 字段 |
| `SettingUpBoard` | `protected bool SettingUpBoard` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BoardGameBaghChal](../BoardGameBaghChal)
- [同命名空间 BoardGameKonane](../BoardGameKonane)
- [同命名空间 BoardGameMuTorere](../BoardGameMuTorere)
- [同命名空间 BoardGamePuluc](../BoardGamePuluc)
