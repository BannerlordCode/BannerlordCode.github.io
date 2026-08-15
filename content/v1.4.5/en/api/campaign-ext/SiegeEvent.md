---
title: "SiegeEvent"
description: "A full runtime state machine for one siege (attack / defense) on the campaign map: it holds the besieged settlement, besieger camp and both sides' siege-engine build / bombard progress, and advances strategy, construction and bombardment in the daily campaign tick until the siege is lifted or decided."
---
# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEvent`
**Base:** 无（不继承任何类，也不是 `MBObjectBase`，因此不能通过 `MBObjectManager` 取得）
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## Overview

`SiegeEvent` represents **one siege in progress on the campaign map**: a party is besieging a settlement. It concentrates the "truth" of this siege in a single object — the besieged settlement, the besieger camp, both sides' siege engines (build progress / hit points / redeployment progress), the naval blockade state, and how to advance construction and bombardment each tick. It is a **strategic-layer** object of the campaign, independent of the actual battle (`MapEvent` + mission scene): the siege keeps running outside the battle, and the battle is just an episode within the siege.

> Note: `SiegeEvent` is not a subclass of `MBObjectBase`, so there is **no** `MBObjectManager.Instance.GetObject<SiegeEvent>` lookup. The only realistic entries to get it are `Settlement.SiegeEvent`, the player-involved `PlayerSiege.PlayerSiegeEvent`, or `Campaign.Current.SiegeEventManager.SiegeEvents`. See "How to Obtain SiegeEvent" below.

## Mental Model

Think of `SiegeEvent` as **"the siege notice board hanging over a settlement"**:

- **What it is:** during a siege, the besieged `Settlement.SiegeEvent` points at the same `SiegeEvent` instance; the besieger `MobileParty.BesiegerCamp` is also back-referenced onto this object. It does not fight battles, it only "besieges" — deploy engines, build engines, bombard walls, tally casualties, and finally end via a lift or a battle result.
- **Who creates / owns:** created by `Campaign.Current.SiegeEventManager` through `StartSiegeEvent(settlement, attackerParty)`, and put into the `MBList<SiegeEvent>` inside `SiegeEventManager`. The engine iterates this list in the daily campaign tick and calls `Tick` on each siege. **A mod should not `new SiegeEvent(...)` itself** — a siege is created when the encounter flow triggers it (the player picks the siege menu or an AI reaches a settlement).
- **Lifecycle:** `StartSiegeEvent` → constructor writes `settlement.SiegeEvent`, builds `BesiegerCamp`, applies a -5 relation between the besieger leader and the settlement's owning family head, records `SiegeStartTime`, auto-activates the blockade when there is a port and the attacker has ships, broadcasts `OnSiegeEventStarted` → daily `Tick` advances construction / bombardment / strategy → the attacker lifts or an assault / sally-out battle decides → `OnBeforeSiegeEventEnd` records the result → `FinalizeSiegeEvent` finishes and clears `Settlement.SiegeEvent` (`ReadyToBeRemoved` becomes true) → `SiegeEventManager` removes it from the list on the next tick.
- **Which layer:** the Campaign (strategy) layer, not the Mission (battle) layer. When the battle actually starts, `PlayerSiege.StartSiegeMission` calls `GetPreparedAndActiveSiegeEngines` to "project" this object's engines into `MissionSiegeWeapon` in the mission scene.
- **Relationship with `MapEvent`:** the assault (Assault), sally-out (SallyOut) and other battles within a siege are each a `MapEvent`; `SiegeEvent.Tick` **skips** engine advancement while either side's `MapEvent` is still active, avoiding conflict with battle logic. After the battle resolves, `OnBeforeSiegeEventEnd` writes the result back into the siege.
- **When to use:** read / judge the current siege state (besieged settlement, attacker, engine progress, whether it is a player siege), decide AI tactics in menus / missions, query combatants, programmatically destroy an engine, or let the attacker legally lift (`LiftSiegeAction`).
- **When not to use:** do not `new SiegeEvent` yourself, do not directly set `Settlement.SiegeEvent = null`, do not manually call `Tick` / `ConstructionTick` / `BombardTick` / `AdvanceStrategy` during a battle / mission (see Risk section); end a siege via `LiftSiegeAction`, not a manual `FinalizeSiegeEvent`.
- **Dependencies:** creation / ownership depends on `SiegeEventManager`, `Settlement`, `MobileParty`; advancement depends on `SiegeEventModel` (build speed / damage / hit chance) and `SiegeStrategyActionModel` (what to build each tick); both sides are uniformly expressed as `ISiegeEventSide` (`BesiegerCamp` is the attacker, `Settlement` itself is the defender).
- **Failure modes:** see the "Risk Section" below.

## How to Obtain SiegeEvent

```csharp
// 1) Get the siege in progress from a settlement (most common)
Settlement besieged = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = besieged?.SiegeEvent;   // null when not under siege

// 2) The siege the player is currently participating in (attacker or defender)
SiegeEvent playerSiege = PlayerSiege.PlayerSiegeEvent;

// 3) Iterate all sieges in progress in the world
foreach (SiegeEvent evt in Campaign.Current.SiegeEventManager.SiegeEvents)
{
    if (evt.ReadyToBeRemoved)
        continue;
    // evt.BesiegedSettlement / evt.BesiegerCamp ...
}
```

## Dependencies

### Upstream (creation / ownership)

- [SiegeEventManager](../../campaign/SiegeEventManager) — the only creation entry `StartSiegeEvent`, holds `MBList<SiegeEvent>`, drives the daily `Tick`, and `OnAfterLoad` on load.
- [Settlement](../../campaign/Settlement/) — `BesiegedSettlement`; the settlement points its own `.SiegeEvent` at this object, the source of truth for "is this settlement under siege".
- [MobileParty](../../campaign/MobileParty/) — the besieger leader `BesiegerCamp.LeaderParty`, and the `MobileParty.BesiegedSettlement` / `.BesiegerCamp` back-references.
- [EncounterManager](../../campaign/EncounterManager) — triggers `StartSiegeEvent` when a party reaches a settlement.

### Downstream / consumers

- [SiegeEventCampaignBehavior](../../campaign/SiegeEventCampaignBehavior) — subscribes to siege-related events, provides siege menus like `menu_siege_strategies`, sets default tactics.
- [PlayerSiege](../../campaign/PlayerSiege) — static entry for the player siege; `PlayerSiegeEvent` is "the SiegeEvent the player is currently in".
- [SiegeAftermathCampaignBehavior](../../campaign/SiegeAftermathCampaignBehavior) / [SiegeAftermathAction](../SiegeAftermathAction/) — handle occupation / vassalage consequences after a siege is decided.
- [LiftSiegeAction](../LiftSiegeAction/) — the **correct** entry to end / lift a siege (clears the attacker, nulls `Settlement.SiegeEvent`).

### Related events / models / data

- Events: `OnSiegeEventStarted` / `OnSiegeEventEnded` / `OnSiegeEngineBuilt` / `OnSiegeBombardmentHit` / `OnSiegeEngineDestroyed` / `OnBlockadeActivated` / `OnBlockadeDeactivated` in [CampaignEvents](../CampaignEvents/) and [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher).
- Models: [SiegeEventModel](../../campaign/SiegeEventModel) (build speed, damage, hit chance), [SiegeStrategyActionModel](../../campaign/SiegeStrategyActionModel) (what to build / deploy each tick), [SiegeStrategy](../../campaign/SiegeStrategy) (tactics), [SiegeBombardTargets](../../campaign/SiegeBombardTargets) (bombard target types).
- Types: [BesiegerCamp](../../campaign/BesiegerCamp) (attacker `ISiegeEventSide`), [ISiegeEventSide](../../campaign/ISiegeEventSide) (unified interface for both sides), [BattleSideEnum](../../core-extra/BattleSideEnum/), [DefaultSiegeEngineTypes](../../core-extra/DefaultSiegeEngineTypes/), [MapEvent](../../campaign/MapEvent/) (the assault / sally-out of a siege is its corresponding `MapEvent`), [Town](../../campaign/Town/) (defender walls / governor).

### Save point

- `SiegeEvent` is serialized via `[SaveableField]` / `[SaveableProperty]`, persisted with the campaign save as part of `SiegeEventManager`; `OnAfterLoad` handles cross-version repair (old saves re-activate the blockade, etc.).

## Risk Section

- **Save corruption / dangling reference:** `SiegeEvent` holds `BesiegedSettlement` and `BesiegerCamp`. If a mod destroys / removes / reassigns it while the settlement is still under siege, without first lifting the attacker via `LiftSiegeAction`, then `Settlement.SiegeEvent` still points at a dead object, and `SiegeEventManager`'s later `Tick` may crash or corrupt the save. Correct order: first `LiftSiegeAction.GetGameAction(party)` or directly clear `BesiegerCamp` so `Settlement.SiegeEvent` clears naturally, then handle the settlement.
- **Manually driving tick in the wrong phase:** `Tick` / `ConstructionTick` / `BombardTick` / `AdvanceStrategy` are called by the daily campaign tick, internally guarded by `CampaignTime.DeltaTime == CampaignTime.Zero`. Calling them manually during a mission / battle (DeltaTime is 0) or while either side's `MapEvent` is active returns early / is a no-op; calling them outside a battle may overlap with the normal tick, causing build progress / hit points to be **double-counted** and engine state to become inconsistent.
- **Do not call `FinalizeSiegeEvent` directly:** it is responsible for dereferencing `Settlement.SiegeEvent`, ending the hanging `MapEvent` and switching the player menu. If you call it without clearing the attacker, it leaves a dangling `SiegeEvent` and the `ReadyToBeRemoved` logic breaks. End a siege via `LiftSiegeAction`.
- **State prerequisite of `GetPreparedAndActiveSiegeEngines`:** `PlayerSiege.StartSiegeMission` only calls it to generate assault engines when `BesiegedSettlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls`; calling the same chain in another siege state triggers `Debug.FailedAssert`.
- **Transience of `IsPlayerSiegeEvent`:** it depends on `PlayerSiege.PlayerSiegeEvent` and `BesiegerCamp.LeaderParty.IsMainParty`; reading it during the siege finishing (`FinalizeSiegeEvent`) may give inconsistent results, so null-check `PlayerSiege.PlayerSiegeEvent` when using it for a key branch.
- **Blockade and the main-party anchor:** `ActivateBlockade` / `DeactivateBlockade` toggle `MobileParty.MainParty.Anchor.IsDisabled` (only when the main party is an attacker). Calling it for a **non-player** siege also iterates combatants to refresh naval visuals, but that does not affect the main-party anchor; do not treat it as a general "freeze a party" switch.

## Member Reference

### Core runtime state

#### `public readonly Settlement BesiegedSettlement`
The besieged settlement (town / castle). At construction `settlement.SiegeEvent = this`, so it is the direct source of "is this settlement under siege". Wall hit points, governor and population are accessed through it (see [Town](../../campaign/Town/)).

#### `public readonly BesiegerCamp BesiegerCamp`
The besieger camp, implementing `ISiegeEventSide`, representing the attacker. Holds the attacker's combatant list, attacker engine container and leader `LeaderParty`.

#### `public CampaignTime SiegeStartTime`
The moment the siege started (`CampaignTime.Now`). Used to compute the random seeds above, and often to display "besieged for X days" in the UI.

#### `public bool IsPlayerSiegeEvent`
Whether this is a siege the player participates in. Implementation: returns true if the besieger-camp leader is the main party, otherwise compares `PlayerSiege.PlayerSiegeEvent == this`. Read-only query, no side effects.

#### `public bool ReadyToBeRemoved`
`=> BesiegedSettlement.Party.SiegeEvent == null`. Once the settlement's siege reference is cleared (attacker lifted / finished), `SiegeEventManager` removes the object from the list on the next tick. Read-only.

#### `public int SiegeWallSeed` / `public int SiegePeopleSeed`
Deterministic random seeds computed from `SiegeStartTime`, `BesiegedSettlement.StringId`, total wall hit points and both sides' casualties, ensuring the same siege's wall-damage distribution / crowd distribution is consistent across sessions. Read-only.

#### `public bool BlockadeShouldBeActivated` / `public bool IsBlockadeActive`
Naval blockade state for settlements with a port. `BlockadeShouldBeActivated` marks "should activate but not yet" (re-activated on load for old saves by `OnAfterLoad` per this flag); `IsBlockadeActive` is whether the blockade is currently active. Read-only.

### Combatants and factions

#### `public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)`
Maps a side to the actual attacker / defender object: **attacker → `BesiegerCamp`, defender → `BesiegedSettlement`** (the settlement itself implements `ISiegeEventSide`). Almost every method needing "one side's engines / combatants / strategy" (`AdvanceStrategy`, `ConstructionTick`, `BreakSiegeEngine`, `GetPreparedAndActiveSiegeEngines`, etc.) first uses it to get the corresponding `ISiegeEventSide`. Pure query, no side effects.

```csharp
ISiegeEventSide attacker = siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
ISiegeEventSide defender = siegeEvent.GetSiegeEventSide(BattleSideEnum.Defender);
```

#### `public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)`
Judges whether a party can join the given side: its faction must **not be at war** with all combatants of the target side, and **must be at war** with all combatants of the other side. Pure query.

#### `public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)`
Merges the combatants of `BesiegerCamp` and `BesiegedSettlement` for that battle type into a `List<PartyBase>`. Call it when you need to enumerate which parties a siege involves (distribute loot, tally casualties, judge joinability).

#### `public MapEvent.BattleTypes GetCurrentBattleType()`
The current battle type: if the attacker leader's `MapEvent` exists, take its `EventType`, otherwise default to `MapEvent.BattleTypes.Siege`. Often paired with `IsPartyInvolved` to judge whether a party is drawn into the current siege battle.

#### `public bool IsPartyInvolved(PartyBase party)`
`=> GetInvolvedPartiesForEventType(GetCurrentBattleType()).Contains(party)`, judging whether a party is drawn into the "current battle type" siege. Pure query.

### Lifecycle: advance and end

#### Constructor `public SiegeEvent(Settlement settlement, MobileParty besiegerParty)`
Establishes a siege. **Large side effects:** writes `settlement.SiegeEvent`, newly creates `BesiegerCamp` and points `besiegerParty.BesiegerCamp` at it, applies a -5 relation between the besieger leader and the settlement's owning family head (except the player's family settlement), initializes both sides' siege sides, records `SiegeStartTime`, auto-`ActivateBlockade` when there is a port and the attacker has ships, and broadcasts `OnSiegeEventStarted`. **Do not** `new` it manually from a mod; the creation entry is `SiegeEventManager.StartSiegeEvent`, triggered by the encounter flow.

#### `public void Tick(float dt)`
Called by `SiegeEventManager` in the daily campaign tick to advance the whole siege: first `CheckBesiegerPartiesAndMakeThemLeave`, then if `!ReadyToBeRemoved` runs `AdvanceStrategy` → `ConstructionTick` → `BombardTick` for attacker and defender in turn. **Side effects:** may create / destroy engines, advance build and redeploy progress, generate `SiegeEngineMissile`, trigger events like `OnSiegeEngineBuilt` / `OnSiegeBombardmentHit`, and may cause garrison casualties. **Do not call it manually from a mod** — it returns early when `CampaignTime.DeltaTime == CampaignTime.Zero` or either side's `MapEvent` is active.

#### `public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)`
Records the result when a battle ends: sets the internal `_isBesiegerDefeated` flag for `SallyOut`, and for `Siege` / `SiegeOutside` respectively. This is the key campaign-layer hook that writes "battle result" back into the siege state. Called by the battle-resolution flow; a mod usually does not call it directly.

#### `public void OnAfterLoad()`
Load callback: `BesiegerCamp.OnAfterLoad()` rebuilds internal counts; for saves older than `v1.3.13.105378` with `BlockadeShouldBeActivated` true, re-activates the blockade. Called by `SiegeEventManager.OnAfterLoad` iterating; a mod does not call it directly.

#### `public void SetPositionAfterMapChange(CampaignVec2 newPosition)`
After a map change, syncs the besieger-camp position and syncs the position of any in-progress siege assault `MapEvent`. Called by the system when handling map changes.

#### `public void FinalizeSiegeEvent()`
Formally ends the siege: broadcasts `OnSiegeEventEnded`, finalizes `BesiegerCamp` and `BesiegedSettlement`, ends any hanging `MapEvent`, switches the player-related UI to `siege_attacker_defeated` / `siege_attacker_left`, and calls `PlayerSiege.FinalizePlayerSiege()` when appropriate. **Side effects:** dereferences `Settlement.SiegeEvent` (making `ReadyToBeRemoved` true), may switch the game menu. **Do not call it directly** — let the siege end naturally with the battle / lift, or use `LiftSiegeAction` to make the attacker leave.

### Siege strategy and engine advancement

#### `public void AdvanceStrategy(ISiegeEventSide siegeEventSide)`
Advances one side's siege strategy: asks `SiegeStrategyActionModel.GetLogicalActionForStrategy` what the side should do now (build new engine / deploy from reserve / move back to reserve / dismantle / hold), then hands it to `DoSiegeAction`. Called by `Tick` → `TickSiegeEventSide`; a mod generally does not call it directly.

#### `public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)`
Actually executes a siege action: newly build and deploy an engine, deploy from reserve, move to reserve, dismantle a deployed engine, or hold. Refreshes `BesiegedSettlement.Party.SetVisualAsDirty()` as appropriate. The action decision comes from `AdvanceStrategy`; a mod that wants to programmatically change one side's layout may also call it directly (but must supply the correct `deploymentIndex` / `reserveIndex`).

#### `public void ConstructionTick(ISiegeEventSide siegeEventSide)`
Advances one side's **build and redeploy**: for an unfinished engine not being redeployed, accumulates `Progress` (0→1) per `SiegeEventModel.GetConstructionProgressPerHour`; when built, calls `CreateSiegeObject` to generate a `RangedSiegeEngine`; one being redeployed advances `RedeploymentProgress` proportionally. Cleans up expired removed engines. Called by `Tick`; a mod does not call it directly.

#### `public void BombardTick(ISiegeEventSide siegeEventSide)`
Advances one side's **bombardment**: processes already-hit `SiegeEngineMissile` (smash walls or the other side's ranged engines), and for all ready (`IsReadyToFire`) ranged engines decides targets, records `OnFireDecisionTaken`, and rolls new `SiegeEngineMissile` per `SiegeEventModel.GetSiegeEngineHitChance`. Called by `Tick`; a mod does not call it directly.

#### `public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)`
Destroys one **active** engine of the specified type on the specified side (removed from the deployment slot, not entering reserve). The `Preparations` type zeroes progress; ranged / melee types are found via `DeployedRangedSiegeEngines` / `DeployedMeleeSiegeEngines` and `RemoveDeployedSiegeEngine`, then refreshes the map visuals. **When to call:** when you need to programmatically destroy an engine (mission reward, special event), preferably in an event callback at a time that does not conflict with `Tick`.

```csharp
// Tear down one siege tower the attacker is using
ISiegeEventSide attacker = siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
siegeEvent.BreakSiegeEngine(attacker, DefaultSiegeEngineTypes.SiegeTower);
```

### Reading and placing siege engines

#### `public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)`
Returns a `Dictionary<SiegeEngineType, int>` aggregating the count by type of engines on that side that are "built and alive (Hitpoints > 0, not `Preparations`)". Read-only.

#### `public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)`
Returns the list of engines on that side that can enter battle (elements `MissionSiegeWeapon`), used to project campaign-layer engines into the mission scene. Read-only. Called by `PlayerSiege.StartSiegeMission` when `CurrentSiegeState == OnTheWalls` to generate controllable siege weapons. **Note:** entering this chain in a state other than `OnTheWalls` triggers `Debug.FailedAssert`.

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
When an engine finishes building, generates a `RangedSiegeEngine` child for ranged engines, broadcasts `OnSiegeEngineBuilt` and refreshes map visuals. Called by `ConstructionTick` when `IsActive` is reached.

#### `public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)`
After a battle, writes each engine's remaining hit points / alive state from the mission scene back into the campaign layer: alive ones write back `Hitpoints`, destroyed ones call `BreakSiegeEngine`. Called by the system after an assault battle resolves.

#### `public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)`
For one attacker ranged engine, picks the highest-priority (nearest) target among the defender's deployed ranged engines, returning `targetIndex` and `targetPriority` via `out` parameters. Called internally by `BombardTick`; a mod generally does not call it directly.

#### Nested data: `SiegeEnginesContainer` / `SiegeEngineConstructionProgress` / `RangedSiegeEngine` / `SiegeEngineMissile`

- `SiegeEnginesContainer` (accessed via `ISiegeEventSide.SiegeEngines`): one side's engine container. Capacity constants — attacker at most **3** melee + **4** ranged, defender **0** melee + **4** ranged. Exposes `DeployedSiegeEngines` / `ReservedSiegeEngines` / `RemovedSiegeEngines` (all `MBReadOnlyList<SiegeEngineConstructionProgress>`), `AllSiegeEngines()`, and `AddPrebuiltEngineToReserve` / `DeploySiegeEngineAtIndex` / `RemoveDeployedSiegeEngine` / `RemovedSiegeEngineFromReservedSiegeEngines` / `FindDeploymentIndexOfDeployedEngine` / `ClearRemovedEnginesIfNecessary`.
- `SiegeEngineConstructionProgress`: progress record for a single engine. `IsConstructed => Progress >= 1f`, `IsActive => IsConstructed && !IsBeingRedeployed`; contains `Hitpoints` / `MaxHitPoints` / `RedeploymentProgress` and (for ranged engines) `RangedSiegeEngine`. Provides `SetProgress` / `SetHitpoints` / `SetRedeploymentProgress` / `SetRangedSiegeEngine`.
- `RangedSiegeEngine`: bombard sub-state of a ranged engine — `EngineType`, `IsReadyToFire` (`NextTimeEngineCanBombard.IsPast`), current / last target, hit time; methods `Hold` / `Reload` / `OnFireDecisionTaken`.
- `SiegeEngineMissile`: snapshot of a fired projectile (shooter type / slot, target type / slot, whether it hit, collision and decision time), consumed by `BombardTick`.

### Naval blockade

#### `public void ActivateBlockade()` / `public void DeactivateBlockade()`
Enable / disable the naval blockade for a settlement with a port. Toggles `MobileParty.MainParty.Anchor.IsDisabled` (only when the main party is an attacker), broadcasts `OnBlockadeActivated` / `OnBlockadeDeactivated`, refreshes the involved naval visuals. `ActivateBlockade` also sets `BlockadeShouldBeActivated` to false. Generally auto-enabled by the constructor when "has a port and the attacker has ships", or re-activated by `OnAfterLoad` for old saves; a mod usually does not need to call it manually.

### `public override string ToString()`
Returns `"Siege of " + BesiegedSettlement.Name`, handy for logs / debugging.

## Typical Usage Examples

### Example 1: Scan all sieges in progress, identify the one the player is in

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

### Example 2: Get the siege from a settlement and destroy one built attacker engine

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

### Example 3: Before a player siege battle, take out both sides' usable engines (source projected into the mission scene)

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
    // Hand to scene / UI; do not go down this chain in a state other than OnTheWalls
}
```

## Cross-Version Notes

- **API stability:** `SiegeEvent`'s public members are essentially consistent across v1.3.0 / v1.3.15 / v1.4.5 (constructor, `BesiegedSettlement` / `BesiegerCamp`, `IsPlayerSiegeEvent`, `ReadyToBeRemoved`, the `Tick` / `ConstructionTick` / `BombardTick`, `GetPreparedAndActiveSiegeEngines`, `BreakSiegeEngine`, etc. are all present).
- **The only difference** is the internal save-migration logic: `OnAfterLoad` re-activates the blockade for old saves `< v1.3.13.105378`; `SetPositionAfterMapChange` does `BesiegerCamp.OnAfterLoad` compat for old saves `< v1.3.0`. These do not affect a mod's use of the public API.
- This page follows the v1.4.5 authoritative source; the v1.3.15 docs reuse the same API.

## See Also

- ↑ Parent: [Campaign-ext module (campaign-ext)](../) · [Campaign module (campaign)](../../campaign/)
- ↔ Siblings (same bucket): [SiegeEventManager](../../campaign/SiegeEventManager) · [BesiegerCamp](../../campaign/BesiegerCamp) · [PlayerSiege](../../campaign/PlayerSiege) · [SiegeStrategy](../../campaign/SiegeStrategy) · [SiegeAftermathAction](../SiegeAftermathAction/) · [LiftSiegeAction](../LiftSiegeAction/) · [CampaignEvents](../CampaignEvents/) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [SiegeEventCampaignBehavior](../../campaign/SiegeEventCampaignBehavior) · [SiegeEventModel](../../campaign/SiegeEventModel) · [SiegeStrategyActionModel](../../campaign/SiegeStrategyActionModel) · [ISiegeEventSide](../../campaign/ISiegeEventSide)
- Related types (other buckets): [Settlement](../../campaign/Settlement/) · [MobileParty](../../campaign/MobileParty/) · [MapEvent](../../campaign/MapEvent/) · [Campaign](../../campaign/Campaign/) · [Hero](../../campaign/Hero/) · [PartyBase](../../campaign/PartyBase/) · [Town](../../campaign/Town/) · [Clan](../../campaign/Clan/) · [BattleSideEnum](../../core-extra/BattleSideEnum/) · [DefaultSiegeEngineTypes](../../core-extra/DefaultSiegeEngineTypes/) · [SiegeBombardTargets](../../campaign/SiegeBombardTargets)
