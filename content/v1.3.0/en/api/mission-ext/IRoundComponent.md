---
title: "IRoundComponent"
description: "Auto-generated class reference for IRoundComponent."
---
# IRoundComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IRoundComponent : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IRoundComponent.cs`

## Overview

`IRoundComponent` is the read-and-subscribe contract for multiplayer round state. It extends `IMissionBehavior` (`IRoundComponent.cs:7`) and adds six paired `Action` events (`IRoundComponent.cs:12` through `IRoundComponent.cs:37`) plus six read-only properties: `LastRoundEndRemainingTime`, `RemainingRoundTime`, `CurrentRoundState`, `RoundCount`, `RoundWinner` and `RoundEndReason` (`IRoundComponent.cs:41` through `IRoundComponent.cs:61`). It is a *mission behaviour*, so it is owned by the mission and reached with `Mission.Current.GetMissionBehavior<IRoundComponent>()`. That lookup is the whole entry point — no factory, no registration table, no constructor call by a mod.

Two concrete types implement it in this tree, and both are also mission behaviours: `MultiplayerRoundComponent : MissionNetwork, IRoundComponent, IMissionBehavior` (`MultiplayerRoundComponent.cs:9`) and `MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior` (`MultiplayerRoundController.cs:12`). Three consumers read it: the lobby component caches it at `MissionLobbyComponent.cs:132`, the multiplayer game-mode client caches it at `MissionMultiplayerGameModeBaseClient.cs:140` and re-reads it at `MissionMultiplayerGameModeBaseClient.cs:106`, and the scoreboard reaches it through `this._mpGameModeBase.RoundComponent` at `MissionScoreboardComponent.cs:61`.

## Mental Model

The six events are not six distinct moments, they are **three** moments expressed with different granularity. `OnRoundStarted` / `OnCurrentRoundStateChanged` fire when the round state machine moves into or within `Playing`; `OnPreparationEnded`, `OnRoundEnding` and `OnPreRoundEnding` bracket the end; `OnPostRoundEnded` closes it. Each is declared with a paired add/remove token (visible as the add/remove RID comments on every member), so these are real CLR events, and unsubscribing from inside a handler is safe.

The six properties are sampled, not pushed, and they are meaningful at different points. `RemainingRoundTime` is a countdown that is meaningless before a round starts; `LastRoundEndRemainingTime` only holds a value after a round has ended; `RoundWinner` and `RoundEndReason` describe the round that just finished, so during a live round they still carry the previous round's answer. Reading `RoundEndReason` to decide whether the current round is ending is a category error — that is what `OnPreRoundEnding` and `OnRoundEnding` are for.

The important boundary is that the interface declares **no methods**. You cannot drive a round through it — no `StartRound`, no `EndRound`, no `SetTimeLimit`. Round control is server-side state pushed as `MissionStateChange` network messages by `MissionLobbyComponent` (`MissionLobbyComponent.cs:233`), and this interface is the read side of that broadcast. A mod subscribed to `OnRoundStarted` is reacting to a message, not calling anything.

Because it extends `IMissionBehavior`, a lookup on a non-multiplayer mission returns null. `MissionLobbyComponent.cs:132` caches the result once and reuses it, so a handler installed after the lobby component has already cached null is invisible to that consumer for the rest of the mission.

## How to use

**Getting it.** Look it up from the live mission and null-check, because it exists only in multiplayer missions:

```csharp
public class RoundWatcher : MissionBehavior
{
    private IRoundComponent _rounds;

    public override void OnBehaviorInitialize()
    {
        _rounds = Mission.GetMissionBehavior<IRoundComponent>();
        if (_rounds == null)
        {
            return;   // singleplayer / editor mission: nothing to watch
        }
        _rounds.OnRoundStarted += OnRoundStarted;
        _rounds.OnPreparationEnded += OnPreparationEnded;
        _rounds.OnPostRoundEnded += OnPostRoundEnded;
    }

    private void OnRoundStarted()
    {
        Debug.Print("round " + _rounds.RoundCount + " state=" + _rounds.CurrentRoundState
                    + " remaining=" + _rounds.RemainingRoundTime, false);
    }

    private void OnPreparationEnded()
    {
        Debug.Print("last round winner=" + _rounds.RoundWinner
                    + " reason=" + _rounds.RoundEndReason, false);
    }

    private void OnPostRoundEnded() { }

    public override void OnRemoveBehavior()
    {
        if (_rounds != null)
        {
            _rounds.OnRoundStarted -= OnRoundStarted;
            _rounds.OnPreparationEnded -= OnPreparationEnded;
            _rounds.OnPostRoundEnded -= OnPostRoundEnded;
        }
    }
}
```

Read the current state without subscribing, from inside any mission behaviour:

```csharp
IRoundComponent rounds = Mission.Current.GetMissionBehavior<IRoundComponent>();
if (rounds != null && rounds.RoundCount > 3 && rounds.RoundWinner == BattleSideEnum.Attacker)
{
    // ...
}
```

**The mistake that fires your handler on every network re-sync.** Treating `OnCurrentRoundStateChanged` as a general "something changed" notification and starting a timer or an animation from it. It is raised from the `MissionStateChange` handler whenever the received state differs from what the lobby already holds (`MissionLobbyComponent.cs:233`), and because the message is network-replayed per client it can arrive more than once for the same logical transition. Use `OnRoundStarted` for "a round began" — it has a single, unambiguous trigger.

## See Also

- [MissionLobbyComponent — caches the round component and owns the round state broadcast](../MissionLobbyComponent)
- [MultiplayerRoundComponent — one of the two concrete implementations](../MultiplayerRoundComponent)
- [IMissionSystemHandler — the other mission-lifetime callback contract](../IMissionSystemHandler)
- [LobbyNetworkComponent — another multiplayer mission behaviour](../LobbyNetworkComponent)
- [Area Index](../)