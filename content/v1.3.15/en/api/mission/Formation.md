---
title: "Formation"
description: "A Mission Team's troop grouping by class (Infantry/Cavalry/Ranged/Skirmisher/HorseArcher...): the control surface that issues movement, charge, arrangement, riding, firing and facing orders to every Agent it holds."
---
# Formation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Formation : IFormation`
**Source:** `TaleWorlds.MountAndBlade/Formation.cs`

## Overview

`Formation` is the **tactical group** a `Team` splits its troops into during a `Mission`, one group per class (infantry, archers, cavalry, horse archers, skirmishers, …). It is not an entity on the battlefield — it is the *control surface* that gathers a set of `Agent`s into one unit and lets you issue a single move / charge / arrangement / mount / fire / face command that is then fanned out to every member. Think of `Agent` as the individual soldier being commanded and `Formation` as the command board that drives the whole squad at once. At any moment an `Agent` belongs to exactly one `Formation`, and a `Team` owns one `Formation` per `FormationClass` plus a few special formations. You almost never `new` a `Formation` yourself — the `Team` creates and owns them when it initializes.

## Mental Model

Picture `Formation` as **the per-class, centrally-commandable squad inside a Team**:

- **Lifecycle:** born with the `Mission`. A `Team` constructs one `Formation` per class (`new Formation(team, index)`, `Formation.cs:605`) and disposes them together with the `Team` when the `Mission` ends.
- **Who creates / owns it:** the `Team` (`Team.FormationsIncludingSpecialAndEmpty` / `Team.FormationsIncludingEmpty`, both `MBList<Formation>`). The formation itself does not spawn units; the spawn system routes troops in via `Team.AddAgentToTeam` → `Formation.AddUnit`.
- **What layer it lives in:** the pure runtime combat layer (`TaleWorlds.MountAndBlade`). It takes no part in the campaign save. It reads live state such as `Mission.Current`, `Mission.Current.Mode`, `Mission.Current.IsFormationUnitPositionAvailableMT` — outside a `Mission` context a `Formation` is meaningless.
- **How it is driven:** orders are written as small *Order* objects (`MovementOrder`, `ArrangementOrder`, `FormOrder`, `RidingOrder`, `FiringOrder`, `FacingOrder`); each frame `Formation.Tick` translates those orders into per-`Agent` settings (`agent.SetRidingOrder` / `agent.SetFiringOrder` / `agent.SetTargetFormationIndex`, …).

The `OrderOfBattle` is the broader system this plugs into: the pre-battle deployment / order screen (the `OrderOfBattle*` view-models and the `OrderController` that executes player and AI orders) is where a human player picks classes, heroes and initial orders. At runtime, modders mostly read and set those same orders through `Formation` and the `OrderController` rather than through the UI layer (see [the mission-ext bucket](../../mission-ext/)).

## How to Obtain a Formation

You always take a `Formation` *from a `Team`* — you never construct one. There are two equivalent ways:

```csharp
// Option 1 (recommended): take it directly by class. Internally this is just
// FormationsIncludingSpecialAndEmpty[(int)cls].
Team playerTeam = Mission.Current.PlayerTeam;
Formation infantry = playerTeam.GetFormation(FormationClass.Infantry);
Formation archers  = playerTeam.GetFormation(FormationClass.Ranged);

// Option 2: iterate the list the Team holds.
foreach (Formation f in playerTeam.FormationsIncludingSpecialAndEmpty)
{
    if (f.CountOfUnits > 0)
    {
        // this formation has troops in it
    }
}

// Use FormationsIncludingEmpty when you only want non-empty regular formations.
foreach (Formation f in playerTeam.FormationsIncludingEmpty) { /* ... */ }
```

> Note: the argument to `GetFormation` is a `FormationClass` value (see below); its integer value *is* the formation's index in the list. There is **no** `Team.Formations` property and no `Formations.GetFormation(...)` — call `team.GetFormation(...)` directly.

## Formation Classes (FormationClass)

`FormationClass` (`TaleWorlds.Core`) is both the "class slot" of a formation and the index into the team's formation array:

| Value | Meaning |
|-------|---------|
| `Infantry = 0` | Infantry |
| `Ranged = 1` | Archer / crossbowman |
| `Cavalry = 2` | Cavalry |
| `HorseArcher = 3` | Horse archer |
| `Skirmisher = 4` | Skirmisher (javelins, etc.) |
| `HeavyInfantry = 5` | Heavy infantry |
| `LightCavalry = 6` | Light cavalry |
| `HeavyCavalry = 7` | Heavy cavalry |
| `NumberOfAllFormations = 10` / `Unset = 10` | sentinel meaning "none / unassigned" |

A formation carries a `LogicalClass` (what it *should* be, inferred from current members) and a `PhysicalClass` (the dominant real class, `QuerySystem.MainClass`). `RepresentativeClass` / `SecondaryLogicalClasses` / `SecondaryPhysicalClasses` let you know at a glance what is mixed into the squad without iterating units.

## When to Use / When NOT to Use

**Use `Formation` when:**

- You want to issue a **squad-level tactical command**: move a group to a point, charge, change arrangement, mount/dismount, hold/fire.
- You want to **query or operate on a whole squad**: count troops, filter by condition, run one action on every `Agent` (`ApplyActionOnEachUnit`).
- You want to **read squad posture**: average position, nearest enemy formation, formation width, unit count, whether it is all cavalry (`QuerySystem` + the `CountOf*` properties).

**Do NOT use `Formation` when:**

- You want to change the **instantaneous state of a single soldier** — operate on that `Agent` directly; do not touch the formation's orders for one unit.
- You are on the **campaign (Campaign) layer** where no `Mission` exists. Store your decision as a `FormationClass` + in-team index or an `OrderType`, then push it through a `MissionBehavior` once the `Mission` starts (see [MissionBehavior](../MissionBehavior/)).
- You want to **serialize / save a `Formation` reference**. It is a pure runtime object that goes stale when the `Mission` ends; save a *rebuildable* key like class + team, not an object reference.
- You assume the **same `Formation` instance survives across `Mission`es** — every battle creates brand-new instances.

## Dependencies

- **Upstream (creates / owns / drives)**
  - [Team](../Team/) — creates and owns all formations; exposes `GetFormation`, `FormationsIncludingSpecialAndEmpty`.
  - [Mission](../Mission/) — provides `Mission.Current`, runs `Formation.Tick`, and decides `Mode` (deployment / battle).
  - [OrderController](../../mission-ext/OrderController/) — `Team.MasterOrderController` / `PlayerOrderController` actually performs `Split` / `TransferUnits` / player orders.
- **Downstream (commanded / queried)**
  - [Agent](../Agent/) — the units inside a formation; added via `AddUnit` and driven via `agent.SetTargetFormationIndex` / `SetRidingOrder` / `SetFiringOrder`.
  - `FormationQuerySystem` (`QuerySystem`) — per-formation posture cache (enemy distance, class ratio, average position).
  - `FormationAI` (`AI`) — the formation's AI behavior, driven by `Team.TeamAI`.
- **Order vocabulary (existing EN pages)**
  - [MovementOrder](../../mission-ext/MovementOrder/) — move / charge / follow / attack factories.
  - [ArrangementOrder](../../mission-ext/ArrangementOrder/) — line / column / circle / square / shield-wall / scatter / loose / wedge.
  - [OrderType](../../mission-ext/OrderType/), [FiringOrder](../../mission-ext/FiringOrder/), [RidingOrder](../../mission-ext/RidingOrder/), [FacingOrder](../../mission-ext/FacingOrder/), [FormOrder](../../mission-ext/FormOrder/).
- **Related behaviors / entry points**
  - [MissionBehavior](../MissionBehavior/) — the callback entry point for reading/issuing formation orders in battle.
  - [MBGameManager](../../mission-ext/MBGameManager/) / [MissionLogic](../../mission-ext/MissionLogic/) — where modders hook into the mission loop.
  - [FormationSpawnData](../FormationSpawnData/) — how troops are routed into formations.

## Risks

`Formation` is one of the easiest types to crash with if you hold or call it outside its live `Mission`:

1. **Calling it outside a `Mission` throws `NullReferenceException`.** Many members read `Mission.Current` — `Reset()`, `Tick()`, `IsDeployment => Mission.Current.Mode`, `IsConvenientForTransfer => Mission.Current.MissionTeamAIType`, `CreateNewOrderWorldPosition`, and more. In any scope where `Mission == null` (campaign map tick, menus, early save-load) calling `formation.Xxx` dereferences null. Only touch a formation while `Mission.Current != null` and the mission is active.

2. **Holding a `Formation` reference after the `Mission` ends = dangling reference.** When the `Mission` ends the `Team` and its formations are torn down; a cached field now points at a dead object. Re-calling it reads a null or wrong `Mission.Current`. Prefer events and local variables; do not store formations long-term.

3. **Holding an `Agent` taken from a formation after that `Agent` is dead.** `GetFirstUnit()`, `GetUnitWithIndex(...)`, `ApplyActionOnEachUnit(...)` and the `DetachedUnits` / `LooseDetachedUnits` lists hand back `Agent` references that may have died between frames. Before acting on one, check `agent.IsActive()` / `agent.State == AgentState.Active` (and that you are still inside the `Mission`). Treating a stale `Agent` as live leads to the same null/dead-reference crashes as risk 1–2.

4. **Wrong-phase orders are silently replaced or ignored.** `SetMovementOrder` contains an auto-replace loop `while (!_movementOrder.IsApplicable(this))` inside `Tick`: during deployment, an order that does not apply then (e.g. `Charge` without a valid target position) is quietly swapped for `Move` or `Stop`. For deployment positioning use `MovementOrder.MovementOrderMove(pos)`; issue the real "charge" after `OnDeploymentFinished` or from battle logic.

5. **`Split` / `TransferUnits` rearrange units and raise `OnFormationsChanged`.** Calling them mid-`foreach` over `FormationsIncludingSpecialAndEmpty` mutates the list you are iterating, risking skipped/duplicated entries. Collect targets first, or do it inside a suitable `MissionLogic` callback.

6. **`SetControlledByAI(false)` hands the formation to the player and can re-trigger AI activation.** Switching an AI-controlled formation to manual while `TeamAI` also drives it makes orders "fight". Before mixing control, be clear on `PlayerOwner` vs `IsAIOwned` (`SetControlledByAI` internally calls `AI.ActiveBehavior.OnLostAIControl()` / re-`OnBehaviorActivated()`).

7. **Do not write a `Formation` / `Team` into a serializable field (save corruption).** These are transient runtime objects; loading a save would yield a wrong/empty reference and can break `Mission` init. Use a rebuildable key (`FormationClass` + in-team enum).

8. **Setting `BannerCode` broadcasts a network message in multiplayer.** Assigning `formation.BannerCode` on the server does `GameNetwork.BeginBroadcastModuleEvent` with `InitializeFormation`; a client-only assignment will not sync. Change banners through the server-authoritative path.

## Key Members

### Core properties

| Property | Type | Meaning / notes |
|----------|------|-----------------|
| `Team` | `Team` (`readonly`) | The owning team. |
| `Index` | `int` (`readonly`) | Index of the formation in the team (equals `(int)FormationIndex`). |
| `FormationIndex` | `FormationClass` (`readonly`) | The class slot this formation represents. |
| `CountOfUnits` | `int` | Troops in formation + detached ones. |
| `CountOfUnitsWithoutDetachedOnes` | `int` | Only arranged (non-detached) troops. |
| `DetachedUnits` / `LooseDetachedUnits` | `MBReadOnlyList<Agent>` | Units pulled out of the arrangement via `DetachUnit`. |
| `QuerySystem` | `FormationQuerySystem` | Posture cache: class ratio, nearest enemy, average/median position, speed. |
| `AI` | `FormationAI` | The formation's AI controller. |
| `OrderPosition` / `OrderGroundPosition` / `OrderPositionIsValid` | `Vec2` / `Vec3` / `bool` | Current order target point; invalid → `CreateNewOrderWorldPosition` prints a yellow warning. |
| `CurrentPosition` | `Vec2` | The formation's actual center (average position + facing). |
| `Direction` / `CurrentDirection` | `Vec2` | The formation's facing. |
| `LogicalClass` / `PhysicalClass` | `FormationClass` | Logical class / dominant physical class. |
| `ArrangementOrder` / `FormOrder` / `RidingOrder` / `FiringOrder` / `FacingOrder` | order type | Current order (read-only; change them via the `Set*` methods). |
| `IsDeployment` | `bool` | `Mission.Current.Mode == MissionMode.Deployment`. |
| `IsAIControlled` | `bool` | Whether AI owns the formation. |
| `Captain` | `Agent` | Formation captain; assignment raises `OnCaptainChanged`. |
| `PlayerOwner` | `Agent` | Player commander; assigning it **auto-calls** `SetControlledByAI(value == null)`. |
| `IsSpawning` | `bool` | True between `BeginSpawn` / `EndSpawn`. |
| `TargetFormation` | `Formation` | Locked enemy/friendly target; assigning fans `agent.SetTargetFormationIndex` to the whole squad. |

### Order system (issuing commands)

Every command is built as an Order object first, then handed to a `Set*` method; the order is realized on the units during `Tick`.

#### `public void SetMovementOrder(MovementOrder input)`
Sets the move / charge order. **Side effects:** raises `OnBeforeMovementOrderApplied`; if the new order differs in "aggression" it refreshes the squad's `DrivenProperty`; finally `SetTargetFormation(null)` clears any lock; if the order is not currently applicable it is auto-replaced during `Tick`. **When to call:** as the unified command entry during battle or deployment positioning.

```csharp
// Move to a world position
WorldPosition pos = new WorldPosition(Mission.Current.Scene, new Vec3(120f, 40f, 0f));
formation.SetMovementOrder(MovementOrder.MovementOrderMove(pos));

// Charge immediately (parameterless static read-only instance)
formation.SetMovementOrder(MovementOrder.MovementOrderCharge);

// Charge a specific enemy formation
formation.SetMovementOrder(MovementOrder.MovementOrderChargeToTarget(enemyFormation));

// Follow an Agent / a scene entity / attack an entity
formation.SetMovementOrder(MovementOrder.MovementOrderFollow(someAgent));
formation.SetMovementOrder(MovementOrder.MovementOrderFollowEntity(someGameEntity));
formation.SetMovementOrder(MovementOrder.MovementOrderAttackEntity(someGameEntity, surroundEntity: true));
```

Available static factories / read-only instances (see [MovementOrder](../../mission-ext/MovementOrder/)): `MovementOrderCharge`, `MovementOrderStop`, `MovementOrderRetreat`, `MovementOrderAdvance`, `MovementOrderFallBack` (all read-only), plus `MovementOrderMove(WorldPosition)`, `MovementOrderChargeToTarget(Formation)`, `MovementOrderFollow(Agent)`, `MovementOrderFollowEntity(GameEntity)`, `MovementOrderAttackEntity(GameEntity, bool)`.

> There is no `Formation.MoveTo(...)` / `Formation.Charge()` shortcut — you must go through `MovementOrder` + `SetMovementOrder`.

#### `public void SetArrangementOrder(ArrangementOrder order)`
Sets the arrangement: line `ArrangementOrderLine`, column `ArrangementOrderColumn`, circle `ArrangementOrderCircle`, square `ArrangementOrderSquare`, shield wall `ArrangementOrderShieldWall`, scatter `ArrangementOrderScatter`, loose `ArrangementOrderLoose`, wedge `ArrangementOrderSkein`. **Side effects:** recomputes `Width` / defense factor, invalidates `QuerySystem` and forces a cache recalculation (see [ArrangementOrder](../../mission-ext/ArrangementOrder/)).

```csharp
formation.SetArrangementOrder(ArrangementOrder.ArrangementOrderLine);
formation.SetArrangementOrder(ArrangementOrder.ArrangementOrderShieldWall);
```

#### `public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)`
Sets how the formation *forms up* (e.g. `FormOrder.FormOrderCustom(width)`). **Side effects:** raises `FormOrder.OnApply` and invalidates `QuerySystem`.

#### `public void SetRidingOrder(RidingOrder order)`
Mount / dismount. **Side effects:** iterates the squad calling `agent.SetRidingOrder(order.OrderEnum)` and reshapes the formation.

#### `public void SetFiringOrder(FiringOrder order)`
Open / hold fire. **Side effects:** iterates the squad calling `agent.SetFiringOrder(order.OrderEnum)`.

#### `public void SetFacingOrder(FacingOrder order)`
Sets the facing instruction (e.g. `FacingOrderLookAtEnemy`, `FacingOrderLookAtDirection`).

#### `public void SetTargetFormation(Formation targetFormation)`
Locks a target formation (for charge / engagement). **Side effects:** writes `TargetFormation`, which fans `agent.SetTargetFormationIndex` to the whole squad; pass `null` to clear.

#### `public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)`
Toggles AI control. **Side effects:** when AI takes over and the formation has units, it immediately `AI.Tick()`s and issues `AI.ActiveBehavior.CurrentOrder` as the movement order; handing back to the player calls `AI.ActiveBehavior.OnLostAIControl()`. Interacts with `PlayerOwner` assignment.

### Query & batch operations

#### `public int CountOfUnits` / `CountOfUnitsWithoutDetachedOnes` / `CountOfDetachedUnits`
Current squad size, split by whether detached units are counted.

#### `public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)`
Counts units (arranged + detached) matching a predicate.

```csharp
int mounted = formation.GetCountOfUnitsWithCondition(a => a.HasMount);
```

#### `public bool HasUnitsWithCondition(Func<Agent, bool> function, out Agent result)`
Whether any unit matches; returns one via `out` if so.

#### `public void ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)`
Runs one action on every `Agent` in the formation (excluding detached). Variants `ApplyActionOnEachAttachedUnit`, `ApplyActionOnEachDetachedUnit`, `ApplyActionOnEachUnitViaBackupList` cover attached / detached / "use a backup list to survive mutation during iteration".

```csharp
formation.ApplyActionOnEachUnit(a =>
{
    if (a.Health < a.HealthLimit)
        a.Health = Math.Min(a.Health + 10f, a.HealthLimit);
});
```

#### `public Agent GetFirstUnit()` / `public Agent GetUnitWithIndex(int unitIndex)`
Takes a unit by index (arranged first, then detached). Indices are **not** stable across `Mission`es.

#### `public FormationQuerySystem QuerySystem`
Posture query entry: class ratio (`CavalryUnitRatioReadOnly`, …), nearest enemy, average/median position, speed, units inside/outside a castle, etc. If the data may be stale, call `QuerySystem.Expire()` to force a recompute.

### Unit management inside a formation

#### `public void TransferUnits(Formation target, int unitCount)`
Moves `unitCount` units from this formation to another. **Side effects:** routed through `Team.MasterOrderController.TransferUnits`; both sides `CalculateLogicalClass`, their `QuerySystem` is invalidated, and `Team.QuerySystem.ExpireAfterUnitAddRemove` fires. Transferred units keep their old orders/positioning when the target was empty. Guarded by `IsSplittableByAI` in `TransferUnitsAux`.

#### `public IEnumerable<Formation> Split(int count = 2)`
Splits this formation into `count` formations (via `Team.MasterOrderController.SplitFormation`). **Side effects:** `PostponeCostlyOperations = true` during the split; afterwards each new formation `QuerySystem.Expire()`s and recomputes `LogicalClass`. Returns the split-off formations.

#### `public void DetachUnit(Agent unit, bool isLoose)` / `public void AttachUnit(Agent unit)`
Temporarily pulls a single unit out of / back into the arrangement. A detached unit still belongs to the `Team` but no longer takes part in the formation layout and can be commanded individually.

#### `public void BeginSpawn(int unitCount, bool isMounted)` / `public void EndSpawn()`
Marks spawn start/end; `IsSpawning` is true between them. Units stream in via `AddUnit` during this window; after `EndSpawn` the formation is considered complete.

#### `public void AddUnit(Agent unit)` / `public void RemoveUnit(Agent unit)`
Adds / removes a unit, raising `OnUnitAdded` / `OnUnitRemoved` and `OnUnitCountChanged`.

### Lifecycle & per-frame

#### `public void Tick(float dt)`
Called every frame by the `Mission` to drive the whole formation: refreshes average/median position and speed caches, advances `AI.Tick()` (if `Team.HasTeamAi` and the formation is AI- or player-sergeant-controlled), realizes the current `MovementOrder` into positioning (`SetPositioning`), clears empty target formations, and raises `OnTick`. **Do not call it manually** — the engine calls it in the battle loop; you normally only read state or issue orders from a custom `MissionBehavior`'s `OnMissionTick`.

#### `public void Reset()`
Resets to the initial state (line formation, default `FacingOrderLookAtEnemy`, cleared player ownership). Called once at construction; mods rarely call it again.

#### `public void OnDeploymentFinished()`
Deployment-phase end hook. **Side effects:** `AI.OnDeploymentFinished()` and `OrderController.TryCancelStopOrder(this)` cancels the deployment stop order. Called by the deployment controller when switching to battle.

#### `public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)`
Sets the formation's order point, facing and spacing. **Side effects:** clamps out-of-bounds to `Mission.Current.GetClosestBoundaryPosition`; large moves trigger `Arrangement.UpdateLocalPositionErrors`; writes `OrderPosition` / `Direction` / `UnitSpacing` and flips the arrangement if needed. Mostly called internally by `MovementOrder.Tick`, but mods may call it directly to place a formation.

#### `public void Rearrange(IFormationArrangement arrangement)`
Replaces the underlying arrangement algorithm (e.g. `LineFormation` / `ColumnFormation`); switching re-subscribes `OnWidthChanged` / `OnShapeChanged`.

## Example

### Example 1: move the player's infantry formation to a point (real acquisition path)

```csharp
// Inside a custom MissionBehavior / MissionLogic, while the Mission is active
if (Mission.Current?.PlayerTeam == null) return;

// Take the formation by class from the Team (do not new it yourself)
Formation infantry = Mission.Current.PlayerTeam.GetFormation(FormationClass.Infantry);
if (infantry == null || infantry.CountOfUnits == 0) return;

// Build a world position as the move target
WorldPosition target = new WorldPosition(Mission.Current.Scene, new Vec3(120f, 40f, 0f));
infantry.SetMovementOrder(MovementOrder.MovementOrderMove(target));
```

### Example 2: shield-wall the infantry and charge everyone (at deployment end / battle start)

```csharp
public override void OnMissionTick(float dt)
{
    Mission mission = Mission.Current;
    if (mission == null || mission.PlayerTeam == null) return;

    foreach (Formation f in mission.PlayerTeam.FormationsIncludingSpecialAndEmpty)
    {
        if (f.CountOfUnits == 0) continue;

        // Shield-wall the infantry / heavy infantry, charge the rest
        if (f.LogicalClass == FormationClass.Infantry || f.LogicalClass == FormationClass.HeavyInfantry)
        {
            f.SetArrangementOrder(ArrangementOrder.ArrangementOrderShieldWall);
        }
        f.SetMovementOrder(MovementOrder.MovementOrderCharge);
    }
}
```

> Key point: both examples go through `Mission.Current.PlayerTeam.GetFormation(...)` + the `MovementOrder` factories, with no ellipsis placeholders or dummy value names.

## See Also

- [↑ Mission](../Mission/) — the scene and driver that owns the formation
- [↔ Team](../Team/) — creates and owns all formations
- [↔ Agent](../Agent/) — the units inside a formation
- [↔ MissionBehavior](../MissionBehavior/) — callback entry point for reading/issuing formation orders in battle
- [↔ FormationSpawnData](../FormationSpawnData/) — how troops are routed into formations
- [Related OrderController](../../mission-ext/OrderController/) — actually performs Split / Transfer / player orders
- [Related MovementOrder](../../mission-ext/MovementOrder/) — move / charge factories
- [Related ArrangementOrder](../../mission-ext/ArrangementOrder/) — arrangement orders
