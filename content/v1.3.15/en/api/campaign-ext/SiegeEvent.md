---
title: "SiegeEvent"
description: "The campaign-map runtime state machine for a single active siege (a besieger party attacking a settlement): it holds the besieged settlement, the besieger camp, and both sides' siege-engine build/bombard progress, and advances strategy, construction, and bombardment every campaign daily tick until the siege is lifted or resolved."
---

# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `class SiegeEvent`  
**Base:** none (not derived from `MBObjectBase`, so it cannot be fetched through `MBObjectManager`)  
**Source:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## Overview

`SiegeEvent` represents **one siege currently in progress on the campaign map** — a party besieging a settlement. It concentrates the "truth" of that siege into a single object: the besieged settlement, the besieger camp, both sides' siege engines (build progress / hit points / redeployment progress), the naval blockade state, and the per-tick logic that advances construction and bombardment. It is a **strategic-layer** object of the Campaign system and is independent from the actual battle (`MapEvent` + a mission scene) that may break out: the siege keeps running outside of combat, and a battle is only an interlude within it. Because it is not an `MBObjectBase`, there is no `MBObjectManager.Instance.GetObject<SiegeEvent>()` accessor — the only realistic entry points are `Settlement.SiegeEvent`, `PlayerSiege.PlayerSiegeEvent`, or `Campaign.Current.SiegeEventManager.SiegeEvents`.

## Mental Model

Think of a `SiegeEvent` as **the "siege notice board" hanging over one settlement's head**:

- **What it is:** While a siege is active, the besieged `Settlement.SiegeEvent` points at the same `SiegeEvent` instance, and the attacker's `MobileParty.BesiegerCamp` is wired back into this object. It does not run the battle; it only handles the "besieging" — laying out engines, building them, bombarding walls, tallying casualties, and finally wrapping up when the attackers leave or a battle decides the outcome.
- **Who creates / holds it:** `Campaign.Current.SiegeEventManager` creates it via `StartSiegeEvent(settlement, attackerParty)` and stores it in an internal `MBList<SiegeEvent>`. The engine walks that list each campaign daily tick and calls `Tick` on every siege. **Mods should never `new SiegeEvent(...)` themselves** — a siege is created by the encounter flow (the player picks the besiege menu, or an AI party arrives at a settlement).
- **Lifecycle:** `StartSiegeEvent` → the constructor writes `settlement.SiegeEvent`, builds the `BesiegerCamp`, applies a −5 relation hit between the attacker leader and the settlement's owner-clan leader, records `SiegeStartTime`, auto-activates a blockade if the settlement has a port and ships are present, and broadcasts `OnSiegeEventStarted` → daily `Tick` advances construction / bombardment / strategy → the attackers lift the siege or an assault/sally-out battle decides the result → `OnBeforeSiegeEventEnd` records the winner → `FinalizeSiegeEvent` cleans up and clears `Settlement.SiegeEvent` (so `ReadyToBeRemoved` becomes true) → `SiegeEventManager` drops it from the list on the next tick.
- **Layer:** Campaign strategic layer, not the Mission layer. When a real battle starts, `PlayerSiege.StartSiegeMission` calls `GetPreparedAndActiveSiegeEngines` to project this object's engines into the mission scene as `MissionSiegeWeapon`.
- **Relationship with `MapEvent`:** The assault (Assault) and sally-out (SallyOut) battles of a siege are each a `MapEvent`. `Tick` **skips** engine advancement while either side's `MapEvent` is active, so it never fights the battle logic. After the battle resolves, `OnBeforeSiegeEventEnd` writes the result back into the siege.
- **When to use:** Read/judge the current siege state (besieged settlement, attacker, engine progress, whether it is the player's siege), decide AI tactics in menus/missions, enumerate involved parties, programmatically destroy an engine, or make the attacker legally lift the siege via `LiftSiegeAction`.
- **When NOT to use:** Do not `new SiegeEvent`, do not set `Settlement.SiegeEvent = null` directly, and do not manually call `Tick` / `ConstructionTick` / `BombardTick` / `AdvanceStrategy` during a battle/mission (see Risks). End a siege with `LiftSiegeAction`, not a manual `FinalizeSiegeEvent`.
- **Dependencies:** Creation/holding depends on `SiegeEventManager`, `Settlement`, `MobileParty` and the attacker's `Clan`/`Kingdom` (map faction). Advancement depends on `SiegeEventModel` (build speed / damage / hit chance) and `SiegeStrategyActionModel` (what to build each tick) plus the `SiegeStrategy` chosen by the side. Both attacker and defender are uniformly exposed as `ISiegeEventSide` (`BesiegerCamp` is the attacker; the `Settlement` itself is the defender).

## Observing and Hooking Sieges

A mod usually does not create a `SiegeEvent` — it observes the ones the game already runs, and reacts through events.

```csharp
// 1) Get the siege currently running on a settlement (most common)
Settlement besieged = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = besieged?.SiegeEvent;   // null when not under siege

// 2) The siege the player is currently participating in (attacker or defender)
SiegeEvent playerSiege = PlayerSiege.PlayerSiegeEvent;

// 3) Enumerate every active siege in the world
foreach (SiegeEvent evt in Campaign.Current.SiegeEventManager.SiegeEvents)
{
    if (evt.ReadyToBeRemoved)
        continue;
    // evt.BesiegedSettlement / evt.BesiegerCamp ...
}
```

To hook into siege progress, subscribe to the campaign events dispatched by `SiegeEvent` itself — `OnSiegeEventStarted`, `OnSiegeEventEnded`, `OnSiegeEngineBuilt`, `OnSiegeBombardmentHit`, `OnSiegeEngineDestroyed`, `OnBlockadeActivated`, `OnBlockadeDeactivated` — through [CampaignEvents](../CampaignEvents/). For example, a `CampaignBehaviorBase` can listen to `OnSiegeEngineBuilt` to award a quest objective whenever the player's besieger camp finishes an engine.

## Dependencies

### Upstream (creation / holding)
- [SiegeEventManager](../SiegeEventManager/) — the only creation entry `StartSiegeEvent`; holds the `MBList<SiegeEvent>` and drives the daily `Tick`, and runs `OnAfterLoad` on save load.
- [Settlement](../../campaign/Settlement/) — `BesiegedSettlement`; the settlement points its own `.SiegeEvent` at this object, which is the source of truth for "is this settlement under siege".
- [MobileParty](../../campaign/MobileParty/) — the attacker leader `BesiegerCamp.LeaderParty`, plus the reverse `MobileParty.BesiegedSettlement` / `.BesiegerCamp` links.
- [Clan](../../campaign/Clan/) — the settlement's `OwnerClan` receives the −5 relation hit from the constructor (unless it is the player clan).
- [Kingdom](../../campaign/Kingdom/) / `MapFaction` — both sides' involved parties are resolved through their factions' war stances in `CanPartyJoinSide`.
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.SiegeEventManager` is the owning container.

### Downstream / consumers
- [PlayerSiege](../PlayerSiege/) — static entry for the player's siege; `PlayerSiegeEvent` is "the `SiegeEvent` the player is in".
- [SiegeEventCampaignBehavior](../SiegeEventCampaignBehavior/) — subscribes to siege events, provides the `menu_siege_strategies` siege menu, and sets default tactics.
- [LiftSiegeAction](../LiftSiegeAction/) — the **correct** entry to end/lift a siege (clears the besieger camp and nulls `Settlement.SiegeEvent`).
- [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/) — the action that captures a settlement; once a siege resolves into a capture, the siege is finalized and its state becomes stale (see Risks).

### Related events / models / data
- Events: [CampaignEvents](../CampaignEvents/) and `CampaignEventDispatcher` raise `OnSiegeEventStarted` / `OnSiegeEventEnded` / `OnSiegeEngineBuilt` / `OnSiegeBombardmentHit` / `OnSiegeEngineDestroyed` / `OnBlockadeActivated` / `OnBlockadeDeactivated`.
- Models: [SiegeEventModel](../SiegeEventModel/) (build speed, damage, hit chance), [SiegeStrategyActionModel](../SiegeStrategyActionModel/) (decides what to build/deploy each tick), [SiegeStrategy](../SiegeStrategy/) (the side's chosen tactic), [SiegeBombardTargets](../SiegeBombardTargets/) (bombardment target kinds).
- Types: [BesiegerCamp](../BesiegerCamp/) (attacker `ISiegeEventSide`), [ISiegeEventSide](../ISiegeEventSide/) (unified attacker/defender interface), [BattleSideEnum](../../core-extra/BattleSideEnum/), [DefaultSiegeEngineTypes](../../core-extra/DefaultSiegeEngineTypes/) (engine kind constants).

### Save point
`SiegeEvent` is serialized via `[SaveableField]` / `[SaveableProperty]` as part of `SiegeEventManager`, so it persists with the campaign save; `OnAfterLoad` repairs cross-version saves (e.g. re-activates a blockade for pre-`v1.3.13.105378` saves).

## Risks

- **Stale reference after relief / capture.** `SiegeEvent` holds `BesiegedSettlement` and `BesiegerCamp`. If a mod destroys / removes / re-owns a settlement while it is still besieged — without first lifting the siege via `LiftSiegeAction` — `Settlement.SiegeEvent` still points at a dead object, and a later `SiegeEventManager.Tick` can crash or corrupt the save. If you must touch the settlement, first lift the siege (clear `BesiegerCamp`) so `Settlement.SiegeEvent` is naturally nulled, then act. After a siege ends, treat any cached `SiegeEvent` as suspect: check `ReadyToBeRemoved` and re-fetch `Settlement.SiegeEvent` instead of holding a long-lived reference.
- **Manually driving tick in the wrong phase.** `Tick` / `ConstructionTick` / `BombardTick` / `AdvanceStrategy` are called by the daily campaign tick and guard themselves with `CampaignTime.DeltaTime == CampaignTime.Zero` and "no side `MapEvent` active". Calling them during a mission/battle (DeltaTime is zero) or while a `MapEvent` is active returns early and does nothing; calling them outside the tick can double-count engine progress / hit points and desync engine state. Never call them from a mod.
- **Do not call `FinalizeSiegeEvent` directly.** It dereferences `Settlement.SiegeEvent`, ends any hanging `MapEvent`, and switches the player menu. If you call it without clearing the besieger camp, you leave a dangling `SiegeEvent` and corrupt `ReadyToBeRemoved` logic. Always end a siege through `LiftSiegeAction`.
- **`GetPreparedAndActiveSiegeEngines` precondition.** `PlayerSiege.StartSiegeMission` only calls it when `BesiegedSettlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls` to spawn assault weapons. Invoking that chain in any other siege state triggers `Debug.FailedAssert`.
- **`IsPlayerSiegeEvent` is transient.** It depends on `PlayerSiege.PlayerSiegeEvent` and `BesiegerCamp.LeaderParty.IsMainParty`; reading it while the siege is being finalized (`FinalizeSiegeEvent`) can yield inconsistent results. Null-check `PlayerSiege.PlayerSiegeEvent` before branching on it.
- **Blockade and the main-party anchor.** `ActivateBlockade` / `DeactivateBlockade` toggle `MobileParty.MainParty.Anchor.IsDisabled`, but only when the main party is an attacker-side party. Calling it on a non-player siege still refreshes the naval visuals of involved parties but does not freeze the main party. Do not treat it as a generic "freeze a party" switch.

## Members

### Core runtime state

#### `public readonly Settlement BesiegedSettlement`
The besieged settlement (town/castle). The constructor sets `settlement.SiegeEvent = this`, so this is the direct source for "is this settlement under siege". Wall hit points, governor, and garrison are reached through it (see [Settlement](../../campaign/Settlement/)).

#### `public readonly BesiegerCamp BesiegerCamp`
The besieger camp, which implements `ISiegeEventSide` and represents the attacker. Holds the involved attacker parties, the attacker engine container, and the leader `LeaderParty`.

#### `public CampaignTime SiegeStartTime`
The moment the siege started (`CampaignTime.Now`). It seeds the deterministic random numbers below and is commonly shown in UI as "besieged for N days".

#### `public bool IsPlayerSiegeEvent`
Whether the player is involved in this siege. Implemented as: true if the besieger-camp leader is the main party, otherwise compares `PlayerSiege.PlayerSiegeEvent == this`. Read-only query, no side effects.

#### `public bool ReadyToBeRemoved`
`=> BesiegedSettlement.Party.SiegeEvent == null`. Once the settlement's siege reference is cleared (attacker lifted / siege finalized), `SiegeEventManager` removes this object on the next tick. Read-only.

#### `public int SiegeWallSeed` / `public int SiegePeopleSeed`
Deterministic seeds computed from `SiegeStartTime`, `BesiegedSettlement.StringId`, total wall hit points, and casualties on both sides, so the wall-break and crowd distributions stay consistent across sessions. Read-only.

#### `public bool BlockadeShouldBeActivated` / `public bool IsBlockadeActive`
Naval-blockade state for settlements with a port. `BlockadeShouldBeActivated` marks "should be on but not yet" (used by `OnAfterLoad` to fix old saves); `IsBlockadeActive` is the current on/off state. Read-only.

### Sides and factions

#### `public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)`
Maps a side to the concrete attacker/defender object: **attacker → `BesiegerCamp`, defender → `BesiegedSettlement`** (the settlement itself implements `ISiegeEventSide`). Nearly every method that needs "this side's engines / parties / strategy" (`AdvanceStrategy`, `ConstructionTick`, `BreakSiegeEngine`, `GetPreparedAndActiveSiegeEngines`, …) calls this first. Pure query.

```csharp
ISiegeEventSide attacker = siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
ISiegeEventSide defender = siegeEvent.GetSiegeEventSide(BattleSideEnum.Defender);
```

#### `public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)`
Whether a party can join a side: its faction must be **not at war** with all parties on the target side and **at war** with all parties on the opposite side. Pure query.

#### `public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)`
Merges the involved parties of `BesiegerCamp` and `BesiegedSettlement` for that battle type and returns a `List<PartyBase>`. Use it when enumerating which parties take part (loot, casualties, join checks).

#### `public MapEvent.BattleTypes GetCurrentBattleType()`
The current battle type: if the attacker leader's `MapEvent` exists, returns its `EventType`; otherwise defaults to `MapEvent.BattleTypes.Siege`. Often paired with `IsPartyInvolved`.

#### `public bool IsPartyInvolved(PartyBase party)`
`=> GetInvolvedPartiesForEventType(GetCurrentBattleType()).Contains(party)`. Whether a party is involved in the siege's current battle type. Pure query.

### Lifecycle: advancing and ending

#### `public SiegeEvent(Settlement settlement, MobileParty besiegerParty)`
Constructs a siege. **Large side effects:** writes `settlement.SiegeEvent`, builds a `BesiegerCamp` and points `besiegerParty.BesiegerCamp` at it, applies a −5 relation between the attacker leader and the settlement owner-clan leader (except the player clan's settlements), initializes both siege sides, records `SiegeStartTime`, auto-`ActivateBlockade`s if the settlement has a port and the attacker has ships, and broadcasts `OnSiegeEventStarted`. **Do not `new` this from a mod** — the creation entry is `SiegeEventManager.StartSiegeEvent`, triggered by the encounter flow.

#### `public void Tick(float dt)`
Called by `SiegeEventManager` on the daily campaign tick to advance the whole siege: first `CheckBesiegerPartiesAndMakeThemLeave`, then — if `!ReadyToBeRemoved` — runs `AdvanceStrategy` → `ConstructionTick` → `BombardTick` for both attacker and defender. **Side effects:** may create/destroy engines, advance build and redeploy progress, spawn `SiegeEngineMissile`, raise `OnSiegeEngineBuilt` / `OnSiegeBombardmentHit`, and cause defender casualties. **Do not call from a mod** — it early-returns when `CampaignTime.DeltaTime == CampaignTime.Zero` or either side's `MapEvent` is active.

#### `public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)`
Records the winner when a battle ends: sets the internal `_isBesiegerDefeated` flag for `SallyOut`, and for `Siege` / `SiegeOutside`. This is the campaign-layer hook that writes the battle result back into the siege. Called by the battle-resolution flow; mods normally do not call it.

#### `public void OnAfterLoad()`
Post-load callback: `BesiegerCamp.OnAfterLoad()` rebuilds internal counters; for saves older than `v1.3.13.105378` it re-activates a pending blockade (`BlockadeShouldBeActivated`). Called by `SiegeEventManager.OnAfterLoad`; mods do not call it.

#### `public void SetPositionAfterMapChange(CampaignVec2 newPosition)`
After a map change, syncs the besieger camp position and any in-progress assault `MapEvent` position. Called by the system during map changes.

#### `public void FinalizeSiegeEvent()`
Formally ends the siege: broadcasts `OnSiegeEventEnded`, finalizes `BesiegerCamp` and `BesiegedSettlement`, ends any hanging `MapEvent`, switches the player menu to `siege_attacker_defeated` / `siege_attacker_left`, and calls `PlayerSiege.FinalizePlayerSiege()` when relevant. **Side effect:** dereferences `Settlement.SiegeEvent` (making `ReadyToBeRemoved` true) and may switch game menus. **Do not call directly** — let the siege end naturally with the battle/lift, or use `LiftSiegeAction`.

### Siege strategy and engine construction (`EngineConstruction`)

The engine build/redeploy lifecycle is driven by `ConstructionTick`. Each `SiegeEngineConstructionProgress` records `Progress` (0→1), `Hitpoints` / `MaxHitPoints`, and `RedeploymentProgress`. A non-constructed, non-redeploying engine gains `Progress` per hour from `SiegeEventModel.GetConstructionProgressPerHour`; once `IsActive` (`Progress >= 1f` and not being redeployed) `CreateSiegeObject` spawns its `RangedSiegeEngine` and broadcasts `OnSiegeEngineBuilt`. The chosen tactic comes from [SiegeStrategy](../SiegeStrategy/) and the per-tick decision from [SiegeStrategyActionModel](../SiegeStrategyActionModel/).

#### `public void AdvanceStrategy(ISiegeEventSide siegeEventSide)`
Advances one side's siege strategy: asks `SiegeStrategyActionModel.GetLogicalActionForStrategy` what the side should do now (build new engine / deploy from reserve / move to reserve / remove / hold), then hands off to `DoSiegeAction`. Called by `Tick` → `TickSiegeEventSide`; mods rarely call it directly.

#### `public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)`
Executes one siege action: build and deploy a new engine, deploy from reserve, move to reserve, remove a deployed engine, or hold. Refreshes `BesiegedSettlement.Party.SetVisualAsDirty()` as needed. The action decision comes from `AdvanceStrategy`, but a mod that wants to programmatically reshape a side's layout can call it directly (supplying correct `deploymentIndex` / `reserveIndex`).

#### `public void ConstructionTick(ISiegeEventSide siegeEventSide)`
Advances one side's **engine construction and redeployment**: accumulates `Progress` on unfinished, non-redeploying engines via `SiegeEventModel.GetConstructionProgressPerHour` (0→1); on completion calls `CreateSiegeObject` to spawn the `RangedSiegeEngine`; advances `RedeploymentProgress` on redeploying engines; cleans up expired removed engines. Called by `Tick`; mods do not call it.

#### `public void BombardTick(ISiegeEventSide siegeEventSide)`
Advances one side's **bombardment**: resolves already-collided `SiegeEngineMissile` (hitting walls or opposing ranged engines), and for every ready-to-fire (`IsReadyToFire`) ranged engine picks a target, records `OnFireDecisionTaken`, and rolls `SiegeEventModel.GetSiegeEngineHitChance` to spawn a new `SiegeEngineMissile`. Called by `Tick`; mods do not call it.

#### `public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)`
Destroys one **active** engine of a given type on a side (removed from deployment, not sent to reserve). A `Preparations` engine has its progress reset to zero; ranged/melee engines are found via `DeployedRangedSiegeEngines` / `DeployedMeleeSiegeEngines`, removed, and the map visual is refreshed. **When to call:** when you need to programmatically destroy an engine (quest reward, special event) — best called from an event callback, at a time that does not collide with `Tick`.

```csharp
// Tear down one siege tower the attacker has built
ISiegeEventSide attacker = siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
siegeEvent.BreakSiegeEngine(attacker, DefaultSiegeEngineTypes.SiegeTower);
```

### Reading and arranging siege engines

#### `public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)`
Returns a `Dictionary<SiegeEngineType, int>` of that side's engines that are "built and alive" (`Hitpoints > 0`, not `Preparations`). Read-only.

#### `public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)`
Returns the list of engines (`MissionSiegeWeapon`) that side can field in battle — the projection of campaign-layer engines into the mission scene. Read-only. Called by `PlayerSiege.StartSiegeMission` only when `CurrentSiegeState == OnTheWalls` to spawn controllable siege weapons. **Note:** entering this chain in any state other than `OnTheWalls` triggers `Debug.FailedAssert`.

```csharp
if (PlayerSiege.PlayerSiegeEvent != null && MobileParty.MainParty.BesiegerCamp != null
    && MobileParty.MainParty.BesiegedSettlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls)
{
    SiegeEvent playerSiege = PlayerSiege.PlayerSiegeEvent;
    List<MissionSiegeWeapon> attackerWeapons =
        playerSiege.GetPreparedAndActiveSiegeEngines(playerSiege.GetSiegeEventSide(BattleSideEnum.Attacker));
    List<MissionSiegeWeapon> defenderWeapons =
        playerSiege.GetPreparedAndActiveSiegeEngines(playerSiege.GetSiegeEventSide(BattleSideEnum.Defender));
}
```

#### `public void CreateSiegeObject(SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)`
When an engine finishes construction, spawns the `RangedSiegeEngine` sub-object for ranged engines, broadcasts `OnSiegeEngineBuilt`, and refreshes the map visual. Called by `ConstructionTick` when `IsActive` is reached.

#### `public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)`
After a battle, writes each engine's remaining hit points / alive state back to the campaign layer: surviving engines get their `Hitpoints` updated, destroyed ones call `BreakSiegeEngine`. Called by the system after siege-battle resolution.

#### `public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)`
For one attacker ranged engine, picks the highest-priority (nearest) target among the opposing deployed ranged engines, returning `targetIndex` and `targetPriority` via `out` parameters. Called internally by `BombardTick`; mods rarely call it.

#### Nested data: `SiegeEnginesContainer` / `SiegeEngineConstructionProgress` / `RangedSiegeEngine` / `SiegeEngineMissile`
- `SiegeEnginesContainer` (via `ISiegeEventSide.SiegeEngines`): one side's engine container. Capacity constants — attacker at most **3** melee + **4** ranged, defender **0** melee + **4** ranged. Exposes `DeployedSiegeEngines` / `ReservedSiegeEngines` / `RemovedSiegeEngines` (all `MBReadOnlyList<SiegeEngineConstructionProgress>`), `AllSiegeEngines()`, plus `AddPrebuiltEngineToReserve` / `DeploySiegeEngineAtIndex` / `RemoveDeployedSiegeEngine` / `RemovedSiegeEngineFromReservedSiegeEngines` / `FindDeploymentIndexOfDeployedEngine` / `ClearRemovedEnginesIfNecessary`.
- `SiegeEngineConstructionProgress`: progress record for a single engine. `IsConstructed => Progress >= 1f`, `IsActive => IsConstructed && !IsBeingRedeployed`; carries `Hitpoints` / `MaxHitPoints` / `RedeploymentProgress` and (for ranged engines) `RangedSiegeEngine`. Provides `SetProgress` / `SetHitpoints` / `SetRedeploymentProgress` / `SetRangedSiegeEngine`.
- `RangedSiegeEngine`: bombard sub-state of a ranged engine — `EngineType`, `IsReadyToFire` (`NextTimeEngineCanBombard.IsPast`), current/previous target, and fire time; methods `Hold` / `Reload` / `OnFireDecisionTaken`.
- `SiegeEngineMissile`: snapshot of a fired projectile (shooter type/slot, target type/slot, hit success, collision and decision times), consumed by `BombardTick`.

### Naval blockade

#### `public void ActivateBlockade()` / `public void DeactivateBlockade()`
Enable/disable the naval blockade for a settlement with a port. Toggles `MobileParty.MainParty.Anchor.IsDisabled` (only when the main party is an attacker-side party), broadcasts `OnBlockadeActivated` / `OnBlockadeDeactivated`, and refreshes the involved naval visuals. `ActivateBlockade` also sets `BlockadeShouldBeActivated` to false. Normally auto-enabled by the constructor when "port + attacker has ships", or re-activated from old saves by `OnAfterLoad`; mods rarely need to call these.

### `public override string ToString()`
Returns `"Siege of " + BesiegedSettlement.Name`, handy for logs/debugging.

## Examples

### Example 1: Scan all active sieges and report the one the player is in

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

foreach (SiegeEvent siegeEvent in Campaign.Current.SiegeEventManager.SiegeEvents)
{
    if (siegeEvent.ReadyToBeRemoved)
        continue;

    Settlement besieged = siegeEvent.BesiegedSettlement;
    MobileParty besieger = siegeEvent.BesiegerCamp.LeaderParty;

    if (siegeEvent.IsPlayerSiegeEvent)
    {
        InformationManager.DisplayMessage(new InformationMessage(
            $"Player is besieging {besieged.Name} (attacker leader: {besieger.Name})"));
    }
}
```

### Example 2: Destroy one built attacker engine from a settlement's siege

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

Settlement besieged = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = besieged?.SiegeEvent;
if (siegeEvent != null && !siegeEvent.ReadyToBeRemoved)
{
    ISiegeEventSide attacker = siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
    siegeEvent.BreakSiegeEngine(attacker, DefaultSiegeEngineTypes.SiegeTower);
}
```

### Example 3: Take both sides' fieldable engines before a player assault

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.Party;
using System.Collections.Generic;

if (PlayerSiege.PlayerSiegeEvent != null
    && MobileParty.MainParty.BesiegerCamp != null
    && MobileParty.MainParty.BesiegedSettlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls)
{
    SiegeEvent playerSiege = PlayerSiege.PlayerSiegeEvent;
    List<MissionSiegeWeapon> attackerWeapons =
        playerSiege.GetPreparedAndActiveSiegeEngines(playerSiege.GetSiegeEventSide(BattleSideEnum.Attacker));
    List<MissionSiegeWeapon> defenderWeapons =
        playerSiege.GetPreparedAndActiveSiegeEngines(playerSiege.GetSiegeEventSide(BattleSideEnum.Defender));
    // Hand these to the scene/UI; do NOT enter this chain outside the OnTheWalls state
}
```

## See Also

- ↑ Parent: [Campaign-ext module](../) · [Campaign module](../../campaign/)
- ↔ Siblings (same bucket): [SiegeEventManager](../SiegeEventManager/) · [BesiegerCamp](../BesiegerCamp/) · [PlayerSiege](../PlayerSiege/) · [SiegeStrategy](../SiegeStrategy/) · [SiegeEventModel](../SiegeEventModel/) · [SiegeStrategyActionModel](../SiegeStrategyActionModel/) · [ISiegeEventSide](../ISiegeEventSide/) · [LiftSiegeAction](../LiftSiegeAction/) · [CampaignEvents](../CampaignEvents/) · [SiegeEventCampaignBehavior](../SiegeEventCampaignBehavior/) · [SiegeBombardTargets](../SiegeBombardTargets/) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)
- Related (other buckets): [Settlement](../../campaign/Settlement/) · [MobileParty](../../campaign/MobileParty/) · [Clan](../../campaign/Clan/) · [Kingdom](../../campaign/Kingdom/) · [Campaign](../../campaign/Campaign/) · [PartyBase](../../campaign/PartyBase/) · [Hero](../../campaign/Hero/) · [BattleSideEnum](../../core-extra/BattleSideEnum/) · [DefaultSiegeEngineTypes](../../core-extra/DefaultSiegeEngineTypes/) · [MapEvent](../../campaign/) · [Town](../../campaign/)
