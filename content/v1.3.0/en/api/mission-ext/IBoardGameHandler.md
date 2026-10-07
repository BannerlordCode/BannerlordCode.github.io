---
title: "IBoardGameHandler"
description: "Auto-generated class reference for IBoardGameHandler."
---
# IBoardGameHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBoardGameHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/IBoardGameHandler.cs`

## Overview

`IBoardGameHandler` is the interface a board-game **presentation layer** must implement so that the shared board-game logic can drive a UI without knowing what that UI is. It declares five void methods and no properties (`IBoardGameHandler.cs:9` through `IBoardGameHandler.cs:21`). It is not a mission behaviour and not a component: the owner is a plain public field `Handler` on `MissionBoardGameLogic` (`MissionBoardGameLogic.cs:426`), a `MissionLogic` that lives as long as the board-game mission. The one production implementer is the Gauntlet view `MissionGauntletBoardGameView`, which assigns itself in `OnMissionScreenActivate` with `this._missionBoardGameHandler.Handler = this;` (`MissionGauntletBoardGameView.cs:53`). The pairing is what makes the split work: the logic decides *that* a turn switched and the handler decides *how* the screen shows it.

## Mental Model

The five calls fall into two groups with different failure behaviour, and the difference is the whole story.

`Install` and `Uninstall` are called by the logic and are **null-guarded**. `MissionBoardGameLogic` wraps `Install()` in `if (this.Handler != null)` (`MissionBoardGameLogic.cs:163`) and `Uninstall()` in `if (this.Handler != null && gameOverInfo != GameOverEnum.PlayerCanceledTheGame)` (`MissionBoardGameLogic.cs:278`). The second guard is not defensive coding, it is semantics: when the player cancels, the view is torn down by the screen change itself and calling `Uninstall` would double-tear-down the prefab.

`SwitchTurns`, `DiceRoll` and `Activate` are called from `BoardGameBase` and are **not** null-guarded: `this.MissionHandler.Handler.SwitchTurns()` at `BoardGameBase.cs:291`, `this.MissionHandler.Handler.DiceRoll(this.LastDice)` at `BoardGameBase.cs:311`, `this.MissionHandler.Handler.Activate()` at `BoardGameBase.cs:518`. So the invariant is asymmetric — a board game may legitimately run with no handler installed, but it must not reach its first tick or its first turn switch before one exists.

`DiceRoll(int roll)` carries the already-resolved result, and the caller guards it with `if (this.LastDice != -1)` (`BoardGameBase.cs:309`), using `-1` as the "no roll this turn" sentinel. Your handler receives a real die value; it does not roll anything. `Activate` is different again: it fires from `OnAfterReady`-style logic exactly once per game, on `_firstTickAfterReady` (`BoardGameBase.cs:515`), which is why it is the natural place to start animations or timers.

The available games are gated before any of this: `RequiresDiceRolling()` is a switch over the board-game index that returns `true` only for index 1 (`MissionBoardGameLogic.cs:343`), and `IsBoardGameAvailable()` requires a scene entity tagged `boardgame` and a null `OpposingAgent` (`MissionBoardGameLogic.cs:402`, tag constant at `MissionBoardGameLogic.cs:420`). A handler is never asked to display a turn until the logic has confirmed there is a board entity to display it on.

## How to use

**Getting it.** You do not obtain the interface — you provide it. Implement all five members on a view-like class, fetch the logic from the live mission, and assign the field. The field is public and untyped as far as the assignment site is concerned, so there is no registration step and no cast required:

```csharp
public class MyBoardGameHandler : IBoardGameHandler
{
    private bool _installed;

    public void Install()       { _installed = true; }
    public void Uninstall()     { _installed = false; }
    public void Activate()      { /* first tick after the board reports ready */ }

    public void SwitchTurns()
    {
        // BoardGameBase has already committed the turn; just show it.
    }

    public void DiceRoll(int roll)
    {
        // roll is the resolved die result. -1 never reaches you.
    }
}

public class MyBoardGameBehavior : MissionLogic
{
    public override void OnMissionScreenActivate()
    {
        base.OnMissionScreenActivate();
        MissionBoardGameLogic logic = Mission.GetMissionBehavior<MissionBoardGameLogic>();
        if (logic != null)
        {
            logic.Handler = new MyBoardGameHandler();
        }
    }
}
```

From the other side, the logic asks for the score and the dice through its own methods — `logic.RollDice()` forwards to `this.Board.RollDice()` (`MissionBoardGameLogic.cs:339`) and `logic.RequiresDiceRolling()` tells the UI whether to show a dice panel.

**The mistake that crashes the first turn.** Assigning `Handler` from a mission behaviour constructor or `OnAfterStart` instead of on screen activation. `BoardGameBase` reaches `Handler.Activate()` and `Handler.SwitchTurns()` without null checks, so if the board's first tick runs before your assignment lands, the field is still null and the mission dies with a `NullReferenceException` on the very first ready tick — with no board-game screen in frame to explain it.

## See Also

- [MissionBattleSchedulerClientComponent — another interface-implementing client-side view in this area](../MissionBattleSchedulerClientComponent)
- [MissionReinforcementsHelper — the mission-logic side of spawn decisions](../MissionReinforcementsHelper)
- [MissionLogic — the base class the owning logic derives from](../MissionLogic)
- [MissionSiegeEnginesLogic — a sibling mission logic with no handler field](../MissionSiegeEnginesLogic)
- [Area Index](../)

## How to use

The placeholder snippet previously on this page declared a doubled-`I` type name and assigned an ellipsis; it could not compile, and `IBoardGameHandler` has no implementation to instantiate or fetch from a subsystem anyway. The real direction of the relationship is the opposite: you implement it and push it onto `MissionBoardGameLogic.Handler`.

```csharp
// The handler is pushed, not pulled.
MissionBoardGameLogic logic = Mission.Current.GetMissionBehavior<MissionBoardGameLogic>();
if (logic != null)
{
    logic.Handler = new MyBoardGameHandler();
}
```

## See Also

- [MissionLogic — the base class the owning logic derives from](../MissionLogic)
- [MissionBattleSchedulerClientComponent — another client-side view implementing an engine interface](../MissionBattleSchedulerClientComponent)
- [MissionHintLogic — another small MissionLogic in the same bucket](../MissionHintLogic)
- [MissionSiegeEnginesLogic — a sibling mission logic without a handler field](../MissionSiegeEnginesLogic)
- [Area Index](../)