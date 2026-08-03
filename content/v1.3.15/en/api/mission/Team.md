---
title: "Team"
description: "One side in a battle — a Mission-owned collection of Agents and Formations with its own OrderControllers, TeamAI, faction relationships, and colors (attacker / defender / player / neutral)."
---
# Team

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public class Team : IMissionTeam`  
**Base:** `IMissionTeam`  
**Source:** `TaleWorlds.MountAndBlade/Team.cs`

## Overview

`Team` represents **one faction/side inside a single `Mission`**: the attacker, the defender, the player's party, the player's allies, or even neutral onlookers — each is a `Team`. A `Team` is simultaneously:

- a container that *owns* a set of `Agent`s (soldiers, the player, mounts);
- the owner of a set of `Formation`s (infantry / ranged / cavalry / special);
- a mount point for a command system (`OrderController`, master/player) and a tactical AI system (`TeamAIComponent`);
- the carrier of faction relationships (enemy / friend) and visual identity (`Color` / `Banner`).

It connects downward to thousands of `Agent`s via `Agent.Team` and is managed upward by `Mission.Teams`. Most combat mods start their "friend-or-foe", "formation command", and "strength tally" logic from `Team`.

## Responsibility in One Line

A single-battle unit group that is commanded together, shares one faction relationship and one color scheme — described to the outside world as "enemy / friend / player side" and categorized internally as "attacker / defender / neutral".

## Mental Model

Think of a `Team` as **"all the units under one banner on the battlefield"**:

- **How long it lives:** Only for the lifetime of one `Mission`. It is created by `Mission.Teams` when the mission loads and destroyed by `Mission.Teams.Clear()` → `Team.Clear()` when the mission ends. Switching scenes builds a brand-new `Mission` with a brand-new set of `Team`s.
- **Who creates it:** Never `new Team()` yourself. `Team` is a managed wrapper around the native `MBTeam` (the `MBTeam` field). The only real creation entry is `Mission.Teams.Add(BattleSideEnum side, ...)`, called by the campaign/mission spawn logic during initialization. The engine then raises `MissionBehavior.OnAddTeam` / `AfterAddTeam` for every team.
- **Which layer it lives in:** It belongs to the **runtime combat layer** of `TaleWorlds.MountAndBlade`, decoupled from the campaign layer (`Campaign` / `Hero`). The same `Hero` belongs to a different `Team` instance in every battle.
- **Relationship to `Agent`:** Each `Agent` is added to exactly one team on spawn (`Team.AddAgentToTeam`) and references it back via `agent.Team`; switching teams uses `agent.SetTeam(...)`, which syncs the native side and broadcasts.
- **Relationship to `Formation`:** A team pre-creates 10 `Formation`s in `Initialize()` (8 standard + 2 special), indexed by `FormationClass`; `GetFormation(FormationClass)` simply indexes in.
- **Relationship to the command system:** It holds 2 `OrderController`s by default — `MasterOrderController` (index 0, commander / AI issued) and `PlayerOrderController` (index 1, player issued); more controllers are lazily created per `Agent`.

## How to Obtain a Team

```csharp
// 1) The player's own team (most common entry point)
Team playerTeam = Mission.Current?.PlayerTeam;

// 2) Iterate every team in the current Mission
foreach (Team team in Mission.Current.Teams)
{
    // ...
}

// 3) Get the player-relative side: player, player enemy, player ally
Team enemy = Mission.Current.PlayerEnemyTeam;
Team ally  = Mission.Current.PlayerAllyTeam;
Team enemy2 = Mission.GetTeam(TeamSideEnum.EnemyTeam);   // static convenience

// 4) Get by attacker/defender side (a battle may have several of each)
foreach (Team t in Mission.GetTeamsOfSide(BattleSideEnum.Attacker))
{
    // ...
}

// 5) From an Agent, get the team it belongs to
Team team = someAgent.Team;

// 6) Resolve by team index (common in network / native callbacks)
Team t = Mission.GetTeamFromTeamIndex(someAgent.TeamIndex);
```

> **Sentinel trap:** `Mission.Teams.Find(MBTeam)` returns `Team.Invalid` (a static sentinel whose `Mission == null`) when nothing matches — **not `null`**. Always test validity with `team.IsValid` (i.e. `MBTeam.IsValid`), never with `team == null`.

## When to Use / When NOT to Use

**Use:**
- `Mission.Current.Teams` to iterate, and `agent.Team` to read the owning team;
- `Mission.Current.PlayerTeam` / `PlayerEnemyTeam` / `PlayerAllyTeam` for the player-related sides;
- `team.ActiveAgents` to enumerate currently-alive members and `team.GetFormation(FormationClass.X)` to manipulate formations;
- `team.IsEnemyOf(other)` / `team.IsFriendOf(other)` for friend-or-foe checks;
- `team.QuerySystem` to read aggregated strength / position statistics.

**Do NOT:**
- **Do not `new Team(...)`:** the constructor is not for mods. `TeamCollection.Add(Team)` prints `"Pre-created Team can not be added to TeamCollection!"` and does nothing. Create a team only via `Mission.Teams.Add(BattleSideEnum, ...)`.
- **Do not cache `Team` references across missions:** after the mission ends the `Team` / `MBTeam` become invalid, `IsValid` turns `false`, and further access reads corrupt data or crashes. Re-fetch from `Mission.Current` every frame.
- **Do not hard-code indices like `Teams[0]`, `Teams[1]`:** there can be multiple attackers/defenders (Attacker / AttackerAlly / Defender / DefenderAlly), and order is not guaranteed. Use `Mission.Current.PlayerTeam` or `Mission.GetTeamsOfSide(...)`.
- **Do not manually add/remove team members outside the Mission tick:** `AddAgentToTeam` / `RemoveAgentFromTeam` / `DeactivateAgent` are called by the engine on spawn/death; calling them yourself breaks `_activeAgents` / `_teamAgents` consistency. To switch teams use `agent.SetTeam(...)`.
- **Do not arbitrarily change faction relationships on the client:** `SetIsEnemyOf` only broadcasts when `GameNetwork.IsServerOrRecorder`; it is correct only when called on the server.

## Dependencies

**Upstream (creates / owns)**
- [Mission](../Mission/) — the global scene; holds the `Teams` collection and calls `Team.Tick` every frame.
- [TeamCollection](../../mission-ext/) — the concrete type of `Mission.Teams`; provides the `Add(BattleSideEnum)` creation entry.
- [MBTeam](../../mission-ext/) — the native (C++) team; `Team`'s `MBTeam` field is its managed wrapper.

**Downstream / owned**
- [Agent](../Agent/) — belongs via `agent.Team`; `ActiveAgents` / `TeamAgents` list members back.
- [Formation](../Formation/) — 10 per team, indexed by `FormationClass`.
- [OrderController](../../mission-ext/) — `MasterOrderController` / `PlayerOrderController` / lazily created.
- [TeamAIComponent](../../mission-ext/) — tactical AI mount point (`TeamAI`).
- [TeamQuerySystem](../../mission-ext/) — aggregated queries (strength, position).
- [Banner](../../core-extra/) — the team banner; `Color` / `Color2` are `uint` ARGB.
- [BattleSideEnum](../../core-extra/) / [TeamSideEnum](../../core-extra/) / [FormationClass](../../core-extra/) — side / identity / formation enums.

**Related Events · Behaviors · Models**
- `MissionBehavior.OnAddTeam` / `AfterAddTeam` (override in [MissionBehavior](../MissionBehavior/)) — raised when a team is added.
- Instance events: `OnFormationsChanged`, `OnOrderIssued`, `OnFormationAIActiveBehaviorChanged`, `OnFormationsChangedInDeployment`.
- [TacticComponent](../../mission-ext/) — registered onto `TeamAI` via `AddTacticOption`.
- [MissionObject](../../mission-ext/) — flags / capture points associate with a team via `Side`.
- [MissionState](../../mission-ext/) — faction relationships may only be written while the mission is in progress.

## Risks

1. **Referencing a `Team` after the mission ends:** Mission end runs `Teams.Clear()` → per-team `Team.Clear()` → native `ResetTeams`, and `Team.Invalid` is reset to `null`. If a mod stores a `Team` in a field and accesses it after `OnMissionEnded`, its `MBTeam` is dead; reading `ActiveAgents` / `Formations` / `QuerySystem` throws or returns corrupt data. **Fix:** clear the reference in `MissionBehavior.OnMissionEnded`; before any access check `Mission.Current != null` and `team.IsValid`.

2. **Assuming team index / team order is stable:** `TeamIndex` comes from `MBTeam.Index` (native creation order), and there may be Attacker/AttackerAlly/Defender/DefenderAlly teams. Hard-coded indices misalign ally/enemy detection.

3. **Mutating team membership outside the Mission tick:** Manually calling `AddAgentToTeam` / `RemoveAgentFromTeam` skips `Agent.SetTeam`'s native sync and network broadcast; `DeactivateAgent` only removes from `_activeAgents`, not `_teamAgents`, leaving them inconsistent (e.g. `TeamAgents` still holds deactivated units). To switch teams use `agent.SetTeam(...)`.

4. **Faction relationships can only be changed on the server:** `SetIsEnemyOf` does not broadcast under `!IsServerOrRecorder`, so client-side calls desync client/server faction state; `PlayerEnemyTeam` / `PlayerAllyTeam` are recomputed from it. Always call on the server while the `Mission` is running.

5. **`Team.Invalid` is not `null`:** `Find()` and `GetTeamFromTeamIndex(-1)` return the sentinel, not `null`; a `== null` check wrongly treats it as "valid". Always use `IsValid`.

6. **Objects may be null under Replay:** `Initialize()` skips creating `FormationsIncludingEmpty`, `_orderControllers`, `QuerySystem`, and `DetachmentManager` when `GameNetwork.IsReplay`. Accessing those fields under replay can be `null`/empty, and most `Tick` logic is `IsReplay`-guarded; do not assume formations / order controllers exist during replay.

## Key Members

> Key mod-visible members grouped by theme. Each notes **purpose + side effect + when to call**. Purely internal fields are omitted.

### 1. Side & Identity

| Member | Type | Purpose / when to call |
|--------|------|------------------------|
| `Side` | `BattleSideEnum` | Attacker / Defender / None. Set at construction from `Teams.Add`'s `side` arg; read-only afterwards. The "physical side". |
| `TeamSide` | `TeamSideEnum` | Identity derived relative to the player: `PlayerTeam` / `PlayerAllyTeam` / `EnemyTeam` (anything that is neither player nor ally counts as enemy, including neutral). Read-only. |
| `IsPlayerTeam` / `IsPlayerAlly` | `bool` | Equivalent to `Mission.PlayerTeam == this`, and "same Side and not the player" respectively. Drives UI highlight and command permission. |
| `IsAttacker` / `IsDefender` | `bool` | Direct derivations of `Side`. |
| `IsValid` | `bool` | `MBTeam.IsValid`. **Whether the team is still valid** (false after mission end). Use instead of `== null`. |
| `TeamIndex` | `int` | `MBTeam.Index`. Used in network messages and `GetTeamFromTeamIndex`. |
| `Color` / `Color2` | `uint` | Primary / secondary team color (ARGB). Passed at construction; `Add` defaults to `uint.MaxValue` (engine picks the side default). |
| `Banner` | `Banner` | The team banner object; may be `null`. |
| `MoraleChangeFactor` | `float` | Morale change multiplier (default `1f`); scales how much the team's morale rises/falls. |

### 2. Formations

- **`FormationsIncludingEmpty`** (`MBList<Formation>`, 8): standard formations (Infantry/Ranged/Cavalry/HorseArcher/…), including empty ones.
- **`FormationsIncludingSpecialAndEmpty`** (`MBList<Formation>`, 10): the 8 above plus 2 special (e.g. Reserve/Unset). Created in `Initialize()`; empty under replay.
- **`GetFormation(FormationClass formationIndex)`**: returns the `Formation` at the given index (the `FormationClass` enum value). `Team` does no bounds check — pass a value inside the enum range.
- **`HasAnyFormationsIncludingSpecialThatIsNotEmpty()`**: whether any non-empty formation exists — commonly used to test "does this team still have troops".
- **`GetFormationCount()`** / **`GetAIControlledFormationCount()`**: count of non-empty formations / how many of those are AI-controlled.

### 3. Members (Agents)

- **`ActiveAgents`** (`MBReadOnlyList<Agent>`): currently alive and active members (excluding those removed by `DeactivateAgent`).
- **`TeamAgents`** (`MBReadOnlyList<Agent>`): **every member that ever joined** the team, including deactivated/dead ones not yet fully removed. Use it for "ever belonged", use `ActiveAgents` for "can still fight".
- **`Heroes`** (`IEnumerable<Agent>`): yields the player hero `Agent.Main` only if `Agent.Main.Team == this` (only the player main hero is included, not every hero on the team).
- **`Leader`** (`Agent`): the player main hero if on this team, else the first active `IsHero` unit; `null` if neither.
- **`HasBots`** (`bool`): whether there is any non-mount, non-player-controlled AI unit — decides whether `TeamAI.Tick` runs.
- `AddAgentToTeam` / `RemoveAgentFromTeam` / `DeactivateAgent`: called by the engine on `Agent.SetTeam` / death; **mods should not call them** (see Risk 3).

### 4. Command & AI

- **`MasterOrderController`** / **`PlayerOrderController`**: the two default `OrderController`s (index 0 / 1). The former is issued by AI/commander, the latter by the player. Indexing the list when empty throws — do not use under replay / before initialization.
- **`GetOrderControllerOf(Agent agent)`**: gets the `Agent`-specific `OrderController`, lazily `new`-ing and wiring events if absent. For issuing orders to a single unit.
- **`SetCustomOrderController(OrderController, OrderController)`**: replaces the default master/player controllers, re-binding the old controllers' delegates onto the new ones; sets `_alreadyHasCustomOrderController`.
- **`TeamAI`** (`TeamAIComponent`) / **`HasTeamAi`** (`bool`): the tactical AI component and whether it exists.
- **`AddTeamAI(TeamAIComponent teamAI, bool forceNotAIControlled = false)`**: attaches `TeamAI`, sets formations to AI control, initializes detachments, resets tactics, and ticks once any formation with troops. **Large side effects** — typically called by a behavior during mission init.
- **`AddTacticOption` / `RemoveTacticOption` / `ClearTacticOptions` / `ResetTactic`**: operate the `TeamAI` tactic table; all silently no-op when there is no `TeamAI`.
- **`DelegateCommandToAI()`**: hands every formation back to AI control (`SetControlledByAI(true)`). Use when the player gives up manual command.
- **`SetPlayerRole(bool isPlayerGeneral, bool isPlayerSergeant)`**: sets "player is general / sergeant", which decides whether the player team's formations are AI-controlled (`!IsPlayerGeneral` → AI takes over).
- **`AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)`**: assigns an online player as sergeant of a formation, taking over its command (and, on the server, network-pushes `AssignFormationToPlayer` to that player).

### 5. Space, Queries & Tactical Stats

- **`QuerySystem`** (`TeamQuerySystem`): aggregated queries (average strength, unit counts, formation state). `null` under replay.
- **`GetAveragePosition()`** / **`GetAveragePositionOfEnemies()`**: average ground position (`Vec2`) of this team's / enemies' active units; `Vec2.Invalid` if none.
- **`GetMedianPosition(Vec2 averagePosition)`**: the world position (`WorldPosition`) of the member nearest the average point — used to find the "formation core".
- **`GetWeightedAverageOfEnemies(Vec2 basePoint)`**: enemy weighted center using squared distance to `basePoint` as weight — common for "nearest threat direction".
- **`HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)`**: whether any enemy team still has active units; `ignoreMountedAgents=true` counts only infantry.
- **`CachedEnemyDataForFleeing`** / **`UpdateCachedEnemyDataForFleeing()`**: fleeing-AI cached enemy formation data; recomputed only when the list is empty, and `Tick` clears the cache every frame to force recompute.
- **`DetachmentManager`** / **`DisableDetachmentTicking()`**: manages formation detachments (e.g. skirmish groups); the latter sets `_tickDetachments = false`, stopping detachment advancement in `Tick`.

### 6. Faction Relations & Lifecycle

- **`IsEnemyOf(Team other)`** / **`IsFriendOf(Team other)`**: based on `MBTeam`'s friend/foe relationship. Note `IsFriendOf` returns `true` for itself.
- **`SetIsEnemyOf(Team otherTeam, bool isEnemyOf)`**: rewrites the friend/foe relation and syncs `MBTeam`; broadcasts the `TeamSetIsEnemyOf` network message only on server/recorder (see Risk 4).
- **`Tick(float dt)`**: called every frame by the engine inside `Mission.TickAgentsAndTeams` — advances `TeamAI`, detachments, and each formation; handles retreat (`Mission.RetreatSide`) and clears the fleeing cache. **Mods must not call it.**
- **`OnMissionEnded()`**: called by `Mission` at mission end, forwarded to `TeamAI.OnMissionEnded`.
- **`OnAgentRemoved(Agent agent)`**: called by the engine when an `Agent` is removed (returns immediately on client/replay), notifying each formation's AI to clean up.
- **`Reset()`** / **`Clear()`**: `Reset` resets formations, drops extra order controllers, rebuilds `QuerySystem`; `Clear` unbinds formation events first then `Reset`. Used on mission restart / internal reset; mods rarely call directly.
- **`TriggerOnFormationsChanged(Formation)`** / **`TriggerOnFormationsChangedInDeployment()`**: raise the corresponding events (formation changed / formation changed in deployment).
- **`Invalid`** (static): the sentinel `Team` (`Mission == null`) returned when no team is found; `IsValid` is `false`.
- **Static helpers:** `DoesFirstFormationClassContainSecond(f1, f2)` (bitwise test), `GetFormationFormationClass(Formation)` (infers troop type from query system), `GetPlayerTeamFormationClass(Agent)` (infers the `FormationClass` the main hero belongs to from equipped gear).

## Examples

### Example 1: Iterate enemy teams and read their average position (in a MissionBehavior per-frame tick)

```csharp
public override void OnMissionTick(float dt)
{
    base.OnMissionTick(dt);

    Mission mission = Mission.Current;
    if (mission == null || mission.PlayerTeam == null) return;

    Team playerTeam = mission.PlayerTeam;
    int aliveFriendCount = playerTeam.ActiveAgents.Count;

    // Find every team that is an enemy of the player and still has active units
    foreach (Team team in mission.Teams)
    {
        if (team.IsEnemyOf(playerTeam) && team.ActiveAgents.Count > 0)
        {
            Vec2 enemyAverage = team.GetAveragePosition();
            // Use enemyAverage for a UI marker or an AI decision
        }
    }
}
```

### Example 2: Issue an "Advance" order to the player team's infantry formation (real acquisition path)

```csharp
// Inside a MissionBehavior, ensure the player is the general
Team playerTeam = Mission.Current.PlayerTeam;
if (playerTeam != null && playerTeam.IsPlayerGeneral)
{
    Formation infantry = playerTeam.GetFormation(FormationClass.Infantry);
    if (infantry != null && infantry.CountOfUnits > 0)
    {
        // MasterOrderController carries orders issued by the commander / AI
        playerTeam.MasterOrderController.SetOrder(OrderType.Advance);
    }
}
```

> Both examples avoid caching the `Team` — they re-fetch from `Mission.Current` every time, so the reference never goes stale after a mission switch.

## Cross-Version Notes

- The semantics of this page follow the full `bannerlord-1.4.5` source. `Team`'s core API (`Side` / `TeamSide` / `ActiveAgents` / `GetFormation` / `IsEnemyOf` / `OrderController` / `TeamAI` / `Tick`) is consistent across v1.3.0 / v1.3.15 / v1.4.5.
- v1.4.5 mostly pushed network-sync details down into `MissionNetworkHelper` and `OrderController`, with minimal impact on `Team`'s public surface. The cross-version-safe pattern is always "fetch via `Mission.Current` / `agent.Team`, never `new` it yourself".

## See Also

- ↑ Parent: [Mission API Index](../)
- ↔ Sibling: [Mission](../Mission/) · [Agent](../Agent/) · [Formation](../Formation/) · [MissionBehavior](../MissionBehavior/) · [TacticOption](../TacticOption/)
- Related (cross-bucket): [TeamCollection](../../mission-ext/) · [MBTeam](../../mission-ext/) · [TeamAIComponent](../../mission-ext/) · [TeamQuerySystem](../../mission-ext/) · [OrderController](../../mission-ext/) · [TacticComponent](../../mission-ext/) · [MissionObject](../../mission-ext/) · [Banner](../../core-extra/) · [BattleSideEnum](../../core-extra/) · [TeamSideEnum](../../core-extra/) · [FormationClass](../../core-extra/)
