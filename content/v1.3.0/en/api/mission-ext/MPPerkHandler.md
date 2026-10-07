---
title: "MPPerkHandler"
description: "Auto-generated class reference for MPPerkHandler."
---
# MPPerkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class MPPerkHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`

## Overview

`MPPerkHandler` is a **nested class inside `MPPerkObject`** (`MPPerkObject.cs:1375`), and it is the runtime face of a multiplayer peer's selected perks. It is never constructed by a mod: the three static factories on the outer type each return an instance of a *private* implementation subclass — `MPPerkHandlerInstance` (`MPPerkObject.cs:1247`), `MPCombatPerkHandlerInstance` (`MPPerkObject.cs:1261`) and `MPOnSpawnPerkHandlerInstance` (`MPPerkObject.cs:1233`), all of which are `private class` declarations. So the handler is always one of three hidden concrete types reached through `MPPerkObject.GetPerkHandler`, `GetCombatPerkHandler` or `GetOnSpawnPerkHandler`.

The handler's lifetime is one call: it is constructed, queried, and dropped. There is no registration and nothing holds it — `MissionMultiplayerFlagDomination` at `MissionMultiplayerFlagDomination.cs:1114`, `MissionMultiplayerSiege` at `MissionMultiplayerSiege.cs:731`, `MissionMultiplayerTeamDeathmatch` at `MissionMultiplayerTeamDeathmatch.cs:151` and `MissionPeer` itself at `MissionPeer.cs:288` all do the same thing: fetch a handler, read a couple of perk effects, let it go.

The base class caches only the agent it was built for (`MPPerkObject.cs:1407`, `MPPerkObject.cs:1409`) and exposes one computed property, `IsWarmup` (`MPPerkObject.cs:1379`), which walks three levels of null-tolerant lookups: `Mission.Current`, then `MissionMultiplayerGameModeBase`, then `MultiplayerWarmupComponent`, coalescing every miss to `false` (`MPPerkObject.cs:1385`, `MPPerkObject.cs:1392`, `MPPerkObject.cs:1399`, `MPPerkObject.cs:1402`). So "is the warmup running" reads false on a mission with no warmup component rather than throwing.

## Mental Model

**Every factory can return null, and the reasons differ.** `GetPerkHandler(Agent)` needs a non-empty `SelectedPerks` list *and* requires `!agent.IsMount` (`MPPerkObject.cs:1019`) — so asking about a horse returns null even when the rider has perks. `GetPerkHandler(MissionPeer)` only checks the list is non-null and non-empty (`MPPerkObject.cs:1030`) — no mount check. `GetOnSpawnPerkHandler(MissionPeer)` is looser still: it only null-checks the list (`MPPerkObject.cs:1100`), so an **empty** perk list still produces a live handler. Copying one factory's guard into another changes behaviour for a specific case, and the cases are all reachable.

`GetPerkHandler(Agent)` and `GetCombatPerkHandler` both do a **two-step peer resolution**: try `agent.MissionPeer.SelectedPerks`, and if that is null, fall back to `agent.OwningAgentMissionPeer.SelectedPerks` (`MPPerkObject.cs:1003`, `MPPerkObject.cs:1015`, and the same pair at `MPPerkObject.cs:1049` and `MPPerkObject.cs:1061`). The fallback exists for AI-owned and rider-owned agents, where the `Agent` itself is not the peer's avatar. If you resolve a peer yourself, do the same fallback or you will conclude "no perks" for a mounted AI.

`GetCombatPerkHandler(attacker, defender)` normalises **both** agents off their mounts first — `attacker.RiderAgent` if mounted, likewise the defender (`MPPerkObject.cs:1040`, `MPPerkObject.cs:1065`) — and then applies a same-target guard: it returns a handler only when `attacker != defender` **and** at least one of the two perk lists is non-empty (`MPPerkObject.cs:1090`). So a friendly-fire calculation where attacker and defender are the same reference gets null and skips every combat-perk check.

There is a genuine **decompiler artifact** worth naming, because it looks like a bug and is not one. `GetPerkHandler(MissionPeer)` at `MPPerkObject.cs:1029` reads `peer?.SelectedPerks ?? peer?.SelectedPerks` — the same expression on both sides of the `??`. The same shape appears in `GetOnSpawnPerkHandler` at `MPPerkObject.cs:1100`. The original source was a null-conditional on a *different* property (something like `peer?.Team`), which the decompiler collapsed. The practical consequence is that these two factories null-check only `SelectedPerks`, and the second arm is dead. Do not "fix" it by inventing a property — that is how you ship a handler that resolves for peers it was never meant to.

`RaiseEventForAllPeers` is the broadcast helper, and it is **server-only**: it is gated on `GameNetwork.IsServerOrRecorder` (`MPPerkObject.cs:1120`), iterates `GameNetwork.NetworkPeers`, fetches each peer's handler and calls `OnEvent(flags)` (`MPPerkObject.cs:1124`, `MPPerkObject.cs:1127`). `RaiseEventForAllPeersOnTeam(Team side, ...)` is the same shape with a team filter (`MPPerkObject.cs:1134`, `MPPerkObject.cs:1136`). Calling either from a client does nothing at all — silently.

## How to use

**Getting it.** Fetch, use, discard. The concrete type is private, so treat the handler as the abstract base:

```csharp
using TaleWorlds.MountAndBlade;

// One agent's own perks. Null on a mount, or when the peer selected nothing.
MPPerkObject.MPPerkHandler handler = MPPerkObject.GetPerkHandler(Agent.Main);
if (handler != null)
{
    Debug.Print("warmup: " + handler.IsWarmup, false);
}

// The same peer by component -- note this overload has no mount check.
MissionPeer peer = Agent.Main?.GetComponent<MissionPeer>();
MPPerkObject.MPPerkHandler byPeer = MPPerkObject.GetPerkHandler(peer);   // MPPerkObject.cs:1027

// Attacker/defender pair, for combat perks. Null when attacker == defender.
MPPerkObject.MPCombatPerkHandler combat =
    MPPerkObject.GetCombatPerkHandler(attacker, defender);
```

Raise a perk event the way the game does — server side only:

```csharp
if (GameNetwork.IsServerOrRecorder)
{
    MPPerkObject.RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags.OnKill);
    // or, for one side only
    MPPerkObject.RaiseEventForAllPeersOnTeam(Mission.Current.PlayerTeam,
                                             MPPerkCondition.PerkEventFlags.OnHit);
}
```

To add a perk you extend `MPPerkObject`'s condition set, not this handler — the handler only dispatches what the condition model already describes.

**The mistake that makes every perk stop firing and logs nothing.** Calling `RaiseEventForAllPeers` from a client because you wanted the local player's perk to react. The whole body is inside `if (GameNetwork.IsServerOrRecorder)` (`MPPerkObject.cs:1120`), so on a client the method is an empty no-op — no exception, no warning. Worse, the *stat* the perk modifies may still be computed locally, so you get a perk that sometimes applies and sometimes does depending on whether the server happened to raise the event, which is very hard to attribute. Raise perk events on the server and let them replicate.

## Usage Example

```csharp
The `GetMissionBehavior<MPPerkHandler>()` line previously on this page cannot work: `MPPerkHandler` is not a mission behaviour, and its implementations are `private` classes. Use the static factories:

```csharp
var handler = MPPerkObject.GetPerkHandler(Agent.Main);   // may be null
```
```

## See Also

- [MultiplayerAgentApplyDamageModel — the model whose ApplyGeneralDamageModifiers resolves a combat perk handler](../MultiplayerAgentApplyDamageModel)
- [MultiplayerMissionAgentVisualSpawnComponent — reads the same SelectedPerks list for idle-animation overrides](../MultiplayerMissionAgentVisualSpawnComponent)
- [MissionReinforcementsHelper — another static-facade class in this namespace](../MissionReinforcementsHelper)
- [Area Index](../)