---
title: "BoardGameBase"
description: "BoardGameBase: a public class in SandBox; 96 exposed members (51 methods, 19 properties, 25 fields). Source: SandBox/BoardGames/BoardGameBase.cs."
---
# BoardGameBase

**Namespace:** `SandBox.BoardGames`
**Module:** `SandBox`
**Type:** `public abstract class BoardGameBase`
**File:** `SandBox/BoardGames/BoardGameBase.cs`

## Overview

BoardGameBase lives in the SandBox module, source file SandBox/BoardGames/BoardGameBase.cs. It is a public class (abstract); the inheritance chain is BoardGameBase. It exposes 96 public/protected members: 51 methods, 19 properties, 25 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameBase is a top-level type in SandBox, namespace differing from (SandBox.BoardGames) the module directory; inheritance chain BoardGameBase. The surface is method-led (methods 51/96, properties 19/96), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/BoardGameBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TileCount` | `public abstract int TileCount` | property |
| `RotateBoard` | `protected abstract bool RotateBoard` | property |
| `PreMovementStagePresent` | `protected abstract bool PreMovementStagePresent` | property |
| `DiceRollRequired` | `protected abstract bool DiceRollRequired` | property |
| `UnitsToPlacePerTurnInPreMovementStage` | `protected virtual int UnitsToPlacePerTurnInPreMovementStage` | property |
| `SelectedUnit` | `protected virtual PawnBase SelectedUnit` | property |
| `Name` | `public TextObject Name` | property |
| `InPreMovementStage` | `public bool InPreMovementStage` | property |
| `TileBase[]Tiles` | `public TileBase[]Tiles` | property |
| `List` | `public List<PawnBase>PlayerOneUnits` | property |
| `List` | `public List<PawnBase>PlayerTwoUnits` | property |
| `LastDice` | `public int LastDice` | property |
| `IsReady` | `public bool IsReady` | property |
| `PlayerWhoStarted` | `public PlayerTurn PlayerWhoStarted` | property |
| `GameOverInfo` | `public GameOverEnum GameOverInfo` | property |
| `PlayerTurn` | `public PlayerTurn PlayerTurn` | property |
| `InputManager` | `protected IInputContext InputManager` | property |
| `List` | `protected List<PawnBase>PawnSelectFilter` | property |
| `AIOpponent` | `protected BoardGameAIBase AIOpponent` | property |
| `BoardGameBase` | `protected BoardGameBase(MissionBoardGameLogic mission, TextObject name, PlayerTurn startingPlayer)` | constructor |
| `InitializeUnits` | `public abstract void InitializeUnits();` | method |
| `InitializeTiles` | `public abstract void InitializeTiles();` | method |
| `InitializeSound` | `public abstract void InitializeSound();` | method |
| `List` | `public abstract List<Move>CalculateValidMoves(PawnBase pawn);` | method |
| `SelectPawn` | `protected abstract PawnBase SelectPawn(PawnBase pawn);` | method |
| `CheckGameEnded` | `protected abstract bool CheckGameEnded();` | method |
| `OnAfterBoardSetUp` | `protected abstract void OnAfterBoardSetUp();` | method |
| `OnAfterBoardRotated` | `protected virtual void OnAfterBoardRotated()` | method |
| `OnBeforeEndTurn` | `protected virtual void OnBeforeEndTurn()` | method |
| `RollDice` | `public virtual void RollDice()` | method |
| `UpdateAllTilesPositions` | `protected virtual void UpdateAllTilesPositions()` | method |
| `InitializeDiceBoard` | `public virtual void InitializeDiceBoard()` | method |
| `Reset` | `public virtual void Reset()` | method |
| `OnPawnArrivesGoalPosition` | `protected virtual void OnPawnArrivesGoalPosition(PawnBase pawn, Vec3 prevPos, Vec3 currentPos)` | method |
| `HandlePreMovementStage` | `protected virtual void HandlePreMovementStage(float dt)` | method |
| `InitializeCapturedUnitsZones` | `public virtual void InitializeCapturedUnitsZones()` | method |
| `HandlePreMovementStageAI` | `protected virtual void HandlePreMovementStageAI(Move move)` | method |
| `SetPawnCaptured` | `public virtual void SetPawnCaptured(PawnBase pawn, bool fake = false)` | method |
| `List` | `public virtual List<List<Move>>CalculateAllValidMoves(BoardGameSide side)` | method |
| `SwitchPlayerTurn` | `protected virtual void SwitchPlayerTurn()` | method |
| `MovePawnToTile` | `protected virtual void MovePawnToTile(PawnBase pawn, TileBase tile, bool instantMove = false, bool displayMessage = true)` | method |
| `MovePawnToTileDelayed` | `protected virtual void MovePawnToTileDelayed(PawnBase pawn, TileBase tile, bool instantMove, bool displayMessage, float delay)` | method |
| `OnAfterDiceRollAnimation` | `protected virtual void OnAfterDiceRollAnimation()` | method |
| `SetUserRay` | `public void SetUserRay(Vec3 rayBegin, Vec3 rayEnd)` | method |
| `SetStartingPlayer` | `public void SetStartingPlayer(PlayerTurn player)` | method |
| `SetGameOverInfo` | `public void SetGameOverInfo(GameOverEnum info)` | method |
| `HasMovesAvailable` | `public bool HasMovesAvailable(ref List<List<Move>>moves)` | method |
| `GetTotalMovesAvailable` | `public int GetTotalMovesAvailable(ref List<List<Move>>moves)` | method |
| `PlayDiceRollSound` | `public void PlayDiceRollSound()` | method |
| `GetPlayerOneUnitsAlive` | `public int GetPlayerOneUnitsAlive()` | method |
| `GetPlayerTwoUnitsAlive` | `public int GetPlayerTwoUnitsAlive()` | method |
| `GetPlayerOneUnitsDead` | `public int GetPlayerOneUnitsDead()` | method |
| `GetPlayerTwoUnitsDead` | `public int GetPlayerTwoUnitsDead()` | method |
| `Initialize` | `public void Initialize()` | method |
| `RemovePawnFromBoard` | `protected void RemovePawnFromBoard(PawnBase pawn, float speed, bool instantMove = false)` | method |
| `Tick` | `public bool Tick(float dt)` | method |
| `ForceDice` | `public void ForceDice(int value)` | method |
| `InitializeUnit` | `protected PawnBase InitializeUnit(PawnBase pawnToInit)` | method |
| `HandlePlayerInput` | `protected Move HandlePlayerInput(float dt)` | method |
| `GetHoveredPawnIfAny` | `protected PawnBase GetHoveredPawnIfAny()` | method |
| `GetHoveredTileIfAny` | `protected TileBase GetHoveredTileIfAny()` | method |
| `CheckSwitchPlayerTurn` | `protected void CheckSwitchPlayerTurn()` | method |
| `OnVictory` | `protected void OnVictory(string message = " ")` | method |
| `OnAfterEndTurn` | `protected void OnAfterEndTurn()` | method |
| `OnDefeat` | `protected void OnDefeat(string message = " ")` | method |
| `OnDraw` | `protected void OnDraw(string message = " ")` | method |
| `EndTurn` | `protected void EndTurn()` | method |
| `ClearValidMoves` | `protected void ClearValidMoves()` | method |
| `HideAllValidTiles` | `protected void HideAllValidTiles()` | method |
| `ShowAllValidTiles` | `protected void ShowAllValidTiles()` | method |
| `OnAIWantsForfeit` | `protected void OnAIWantsForfeit()` | method |
| `StringBoardGame` | `public const string StringBoardGame` | field |
| `StringForfeitQuestion` | `public const string StringForfeitQuestion` | field |
| `StringMovePiecePlayer` | `public const string StringMovePiecePlayer` | field |
| `StringMovePieceOpponent` | `public const string StringMovePieceOpponent` | field |
| `StringCapturePiecePlayer` | `public const string StringCapturePiecePlayer` | field |
| `StringCapturePieceOpponent` | `public const string StringCapturePieceOpponent` | field |
| `StringVictoryMessage` | `public const string StringVictoryMessage` | field |
| `StringDefeatMessage` | `public const string StringDefeatMessage` | field |
| `StringDrawMessage` | `public const string StringDrawMessage` | field |
| `StringNoAvailableMovesPlayer` | `public const string StringNoAvailableMovesPlayer` | field |
| `StringNoAvailableMovesOpponent` | `public const string StringNoAvailableMovesOpponent` | field |
| `StringSeegaBarrierByP1DrawMessage` | `public const string StringSeegaBarrierByP1DrawMessage` | field |
| `StringSeegaBarrierByP2DrawMessage` | `public const string StringSeegaBarrierByP2DrawMessage` | field |
| `StringSeegaBarrierByP1VictoryMessage` | `public const string StringSeegaBarrierByP1VictoryMessage` | field |
| `StringSeegaBarrierByP2VictoryMessage` | `public const string StringSeegaBarrierByP2VictoryMessage` | field |
| `StringSeegaBarrierByP1DefeatMessage` | `public const string StringSeegaBarrierByP1DefeatMessage` | field |
| `StringSeegaBarrierByP2DefeatMessage` | `public const string StringSeegaBarrierByP2DefeatMessage` | field |
| `StringRollDicePlayer` | `public const string StringRollDicePlayer` | field |
| `StringRollDiceOpponent` | `public const string StringRollDiceOpponent` | field |
| `InvalidDice` | `protected const int InvalidDice` | field |
| `DelayBeforeMovingAnyPawn` | `protected const float DelayBeforeMovingAnyPawn` | field |
| `DelayBetweenPawnMovementsBegin` | `protected const float DelayBetweenPawnMovementsBegin` | field |
| `PawnSelectedFactor` | `protected uint PawnSelectedFactor` | field |
| `PawnUnselectedFactor` | `protected uint PawnUnselectedFactor` | field |
| `SettingUpBoard` | `protected bool SettingUpBoard` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoardGameBaghChal](../BoardGameBaghChal)
- [same namespace BoardGameKonane](../BoardGameKonane)
- [same namespace BoardGameMuTorere](../BoardGameMuTorere)
- [same namespace BoardGamePuluc](../BoardGamePuluc)
