---
title: "FormationQuerySystem"
description: "Auto-generated class reference for FormationQuerySystem."
---
# FormationQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationQuerySystem`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationQuerySystem.cs`

## Overview

`FormationQuerySystem` is the **memoized analytics layer of a [Formation](../../mission/Formation)** — the place where "how strong is this formation", "what is it made of", "is it under ranged fire" and "which enemy formation threatens it" are computed and cached. The file is 765 lines; the type is `public class FormationQuerySystem` (`FormationQuerySystem.cs:9`) holding one `public readonly Formation Formation` (`:11`) and roughly fifty `private readonly QueryData<T>` fields (`:13`-`:103`).

Almost nothing here is computed on the spot. Each field is a `QueryData<T>` wrapping a delegate plus a **TTL in seconds**, and the constructor (`:309`-`:658`) builds all of them. The public surface is then a flat set of properties in **pairs**: a live one that re-evaluates when the cache has expired (`public float FormationPower => _formationPower.Value;`, `:107`), and a `…ReadOnly` twin that returns whatever is cached without re-evaluating (`public float FormationPowerReadOnly => _formationPower.GetCachedValueUnlessTooOld();`, `:109`). That pairing is the whole design and it recurs for every scalar.

The TTLs are **not uniform and not interchangeable**: `_estimatedDirection` is `0.2f` (`:371`), `_weightedAverageEnemyPosition` is `0.5f` (`:629`), `_closestEnemyAgent` is `1.5f` (`:521`), the unit ratios are `2.5f` (`:427`), ranged-attack state is `3f` (`:488`), `_averageAllyPosition` is `5f` (`:423`), `_movementSpeedMaximum` is `10f` (`:441`), and `_mainClass` is `15f` (`:617`).

## Mental Model

Picture it as **a notice board outside a war room, where each notice is refreshed on its own schedule**. The wall is covered in cards: "infantry ratio", "formation power", "under ranged attack". Some are rewritten every fifth of a second because they change constantly with movement; others stay pinned for fifteen seconds because they change only when troops die. Nobody walks the room to check a card — they read it, and if it is past its refresh time someone rewrites it.

That analogy is what makes the `ReadOnly` half meaningful. Reading `InfantryUnitRatio` is like asking a clerk who, if the card is stale, walks off to recompute it — you get a fresh answer but you paid for the work. Reading `InfantryUnitRatioReadOnly` is like **glancing at the card without disturbing anyone**: you get whatever is pinned, stale or not, and you do not pay. Neither is wrong; they are for different callers.

The boundary that catches people is that **`ReadOnly` can hand back a value that is arbitrarily out of date, and nothing marks it as stale.** `_estimatedDirection` expires after `0.2f` seconds (`:371`); if you read `EstimatedDirectionReadOnly` (`:117`) from a once-per-second tick you are reading a direction computed up to a second ago — a formation that has turned 90° since then gives you a stale bearing. Meanwhile `IsMeleeFormation` has a `5f` TTL (`:433`), so the same staleness in a boolean is a different order of magnitude.

The second boundary is that **`Expire()` (`:681`) and `ExpireAfterUnitAddRemove()` (`:724`) are the invalidation contract**, and they are not symmetric. `Expire()` clears 37 caches. `ExpireAfterUnitAddRemove()` expires only `_formationPower`, then immediately re-evaluates eleven unit-ratio caches at the current mission time (`:727`-`:739`), and — only when the formation has just dropped to zero units — **overwrites eleven values with hardcoded constants** (`:740`-`:753`): ratios to `0f`, `IsMeleeFormation` to `false`, but `IsInfantryFormation` to **`true``. So an empty formation reports itself as an infantry formation, by explicit design at `:748`.

## How to use

**How to obtain it.** Do not construct it. It is created by the formation itself and reachable as `formation.QuerySystem` — the constructor takes the owning `Formation` (`:309`) and immediately reads `Mission.Current` (`:313`) and captures the formation into every delegate, so a hand-built instance is permanently bound to that one formation. Reach it through the live [`Formation`](../../mission/Formation).

**A typical use.** A mod that wants the composition of a formation for a decision, reading the live values (which refresh if stale) rather than guessing:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

Formation formation = Mission.Current.PlayerTeam.Formations[FormationClass.Infantry];
FormationQuerySystem query = formation.QuerySystem;

Debug.Print("main class = " + query.MainClass, 0);
Debug.Print("infantry ratio = " + query.InfantryUnitRatio + ", ranged = " + query.RangedUnitRatio, 0);
Debug.Print("is melee = " + query.IsMeleeFormation + ", formation power = " + query.FormationPower, 0);
```

The same question asked cheaply, for a per-frame HUD or a debug overlay that must not trigger recomputation:

```csharp
using TaleWorlds.MountAndBlade;

FormationQuerySystem query = formation.QuerySystem;
Debug.Print("cached power = " + query.FormationPowerReadOnly, 0);
Debug.Print("cached class  = " + query.MainClassReadOnly, 0);
```

Blend formation composition into a score with the one helper that exists for it, instead of writing the weighted sum by hand:

```csharp
using TaleWorlds.MountAndBlade;

FormationQuerySystem query = formation.QuerySystem;
float score = query.GetClassWeightedFactor(1.0f, 0.8f, 1.2f, 0.6f);
Debug.Print("weighted class score = " + score, 0);
```

**What to watch out for.** Using the `ReadOnly` twins inside a loop and assuming they are free. The single most common mistake is calling a `…ReadOnly` property per unit across a whole team, which is correct-looking and free-looking, but the pair exists precisely because `ReadOnly` **skips the refresh** — so the loop returns one stale snapshot repeated N times, and the code reads as though it evaluated the formation N times. The consequence is a decision that is confidently based on a single old value. If you need fresh numbers, read the live property; if you need many, read `ReadOnly` once and reuse the local.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Formation` | `public readonly Formation Formation;` (`:11`) | The owning formation. Everything else in the class is a memoized question *about this one formation*, so this field is the identity of the object. |
| `Team` | `public TeamQuerySystem Team => Formation.Team.QuerySystem;` (`:105`) | The sibling query system at team scope. Chaining `formation.QuerySystem.Team.…` is how you cross from one formation's numbers to the whole side's. |
| `FormationPower` / `…ReadOnly` | `public float FormationPower => _formationPower.Value;` (`:107`), `public float FormationPowerReadOnly => _formationPower.GetCachedValueUnlessTooOld();` (`:109`) | Combat strength of the formation. TTL `2.5f` (`:314`). This is the only member `ExpireAfterUnitAddRemove` invalidates unconditionally (`:726`), because troop count is exactly what changes when units join or leave. |
| `EstimatedDirection` / `…ReadOnly` | `public Vec2 EstimatedDirection => _estimatedDirection.Value;` (`:115`), `…ReadOnly` (`:117`) | The bearing the formation is actually facing, measured by correlating each unit's ordered local position with its real world position (`:316`-`:371`). **The tightest TTL in the class at `0.2f`**, because it changes on every turn. Falls back to `new Vec2(0f, 1f)` when there is nothing to measure (`:370`). |
| `EstimatedInterval` / `…ReadOnly` | `public float EstimatedInterval => _estimatedInterval.Value;` (`:119`), `…ReadOnly` (`:121`) | How tightly the formation is holding its interval, solved as a least-squares projection of each unit's drift onto the formation axis (`:372`-`:403`). TTL `0.2f`. Returns `formation.Interval` unchanged when there is nothing to solve (`:402`). |
| `MainClass` / `…ReadOnly` | `public FormationClass MainClass => _mainClass.Value;` (`:139`), `…ReadOnly` (`:141`) | The dominant physical class, picked as the **maximum** of the four ratios (`:598`-`:617`). TTL `15f` — the longest in the class, because composition only changes when troops die. **Defaults to `FormationClass.Infantry`** when every ratio is zero (`:600`). |
| `InfantryUnitRatio` / `RangedUnitRatio` / `CavalryUnitRatio` / `RangedCavalryUnitRatio` | `public float InfantryUnitRatio => …` (`:143`), `RangedUnitRatio` (`:155`), `CavalryUnitRatio` (`:167`), `RangedCavalryUnitRatio` (`:171`) — each with a `…ReadOnly` twin at `:145`/`:157`/`:169`/`:173` | Share of the formation in each [`FormationClass`](../../core-extra/FormationClass), computed from `GetCountOfUnitsBelongingToPhysicalClass` divided by `CountOfUnits` (`:427`-`:432`). **All four return `0f` when the formation is empty** (`:427`). TTL `2.5f`, and all four are in a `SetupSyncGroup` (`:440`). |
| `IsInfantryFormation` / `IsRangedFormation` / `IsCavalryFormation` / `IsRangedCavalryFormation` / `IsMeleeFormation` | `public bool IsMeleeFormation => …` (`:175`), `IsInfantryFormation` (`:179`), `IsRangedFormation` (`:191`), `IsCavalryFormation` (`:195`), `IsRangedCavalryFormation` (`:199`) — each with a `…ReadOnly` twin | Boolean dominance tests derived from the ratios: `IsMeleeFormation` is `Infantry + Cavalry > Ranged + RangedCavalry` (`:433`), and each of the four others is a strict comparison against the other three (`:434`, `:437`-`:439`). **A formation with only 10% infantry can report `IsInfantryFormation == true`** if that 10% is the largest of four — the test is relative, not absolute. TTL `5f`. |
| `HasShield` / `HasThrowing` | `public bool HasShield => …` (`:183`), `HasThrowing` (`:187`) — with `…ReadOnly` twins at `:185`/`:189` | Fixed-threshold shortcuts: `HasShield` is `HasShieldUnitRatio >= 0.4f` (`:435`), `HasThrowing` is `HasThrowingUnitRatio >= 0.5f` (`:436`). **The thresholds are hard-coded in the lambda**, so a mod that wants a different cutoff must use the ratio property, not the boolean. TTL `5f`. |
| `LocalAllyUnits` / `LocalEnemyUnits` | `public MBList<Agent> LocalAllyUnits => …` (`:131`), `…ReadOnly` (`:133`), `LocalEnemyUnits` (`:135`), `…ReadOnly` (`:137`) | Agents within **30 metres** (`formationQuerySystem._localAllyUnits` query at `:425`-`:426`) of the formation's cached average position. TTL `5f`. These are `MBList<Agent>` instances **reused across evaluations** (passed back in as the reuse buffer), so a list you hold can be mutated under you by the next refresh. |
| `LocalAllyPower` / `LocalEnemyPower` / `LocalPowerRatio` | `public float LocalAllyPower => …` (`:231`), `LocalEnemyPower` (`:235`), `LocalPowerRatio` (`:239`) — with `…ReadOnly` twins | Sum of `Agent.CharacterPowerCached` over the two local lists (`:476`-`:478`). `LocalPowerRatio` is a **clamped square root of the +1 ratio, bounded to `0.5f … 1.75f`** (`:478`) — it is deliberately compressed so a single elite does not dominate. TTL `5f`. |
| `CasualtyRatio` | `public float CasualtyRatio => …` (`:243`), `…ReadOnly` (`:245`) | How much of the formation has been lost: `1f - casualties / (casualties + CountOfUnits)` (`:486`), where casualties come from `Mission.Current.GetMissionBehavior<CasualtyHandler>()?.GetCasualtyCountOfFormation(formation) ?? 0` (`:485`). **The `?? 0` means a mission with no `CasualtyHandler` silently reports `0f` — a full-strength reading, not a missing value.** TTL `10f`. |
| `IsUnderRangedAttack` / `UnderRangedAttackRatio` / `MakingRangedAttackRatio` | `public bool IsUnderRangedAttack => …` (`:247`), `…ReadOnly` (`:249`); `public float UnderRangedAttackRatio => …` (`:251`), `…ReadOnly` (`:253`); `MakingRangedAttackRatio` (`:255`), `…ReadOnly` (`:257`) | The boolean is a strict `== Agent.UnderAttackType.UnderRangedAttack` test (`:488`); the two ratios count units whose `LastRangedHitTime` / `LastRangedAttackTime` is within **10 seconds** of `MBCommon.GetTotalMissionTime()` (`:489`-`:500`). **The 10-second window is hard-coded**, so the ratio answers "recently", not "now". TTL `3f`. |
| `ClosestEnemyAgent` / `…ReadOnly` | `public Agent ClosestEnemyAgent => …` (`:271`), `…ReadOnly` (`:273`) | The nearest living enemy to this formation, found by scanning every enemy team's `ActiveAgents` and minimising squared distance to the formation's own position (`:501`-`:521`). **Returns `null`** when no enemy is alive (`:504`). TTL `1.5f`. |
| `ClosestSignificantlyLargeEnemyFormation` / `FastestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormation` (`:275`-`:285`), `…ReadOnly` (`:287`); `public FormationQuerySystem FastestSignificantlyLargeEnemyFormation` (`:289`-`:299`), `…ReadOnly` (`:301`) | Which enemy formation to fear. "Significantly large" means either `> 20%` of this formation's power, or `> 20%` of the team-power ratio (`:536`). The **live getters expire the cache themselves when the stored formation has died or emptied** (`:279`-`:282`, `:293`-`:296`) — the only properties that invalidate on read. The "fastest" variant divides distance by `(CachedMovementSpeed)²` (`:576`). Both return **null** when nothing qualifies. TTL `1.5f`. |
| `IsUnderCavalryChargeFromFront` | `public bool IsUnderCavalryChargeFromFront => …` (`:307`), `…ReadOnly` (`:308`) | The class's only predictive flag: true when the closest large enemy formation is cavalry, is moving toward this formation at `> 0.75` dot product, and this formation is circular or square **or** the charge comes from behind (`< -0.75` against our own direction) (`:639`-`:656`). The final test `num2 / num < 15f` compares normalized time-to-contact. TTL `2f`. |
| `MovementSpeedMaximum` | `public float MovementSpeedMaximum => …` (`:203`), `…ReadOnly` (`:205`) | `formation.GetAverageMaximumMovementSpeedOfUnits` (`:441`). **The longest-lived simple value at `10f` TTL.** |
| `MaximumMissileRange` / `MissileRangeAdjusted` | `public float MaximumMissileRange => …` (`:207`), `…ReadOnly` (`:209`); `MissileRangeAdjusted` (`:211`), `…ReadOnly` (`:213`) | The **max** across units of `agent.MaximumMissileRange` (`:442`-`:457`) versus the **mean** of `agent.MissileRangeAdjusted` (`:458`-`:470`). Both short-circuit to `0f` on an empty formation. The distinction matters: maximum is what the best shot can do, adjusted is what the formation as a whole can do. TTL `10f`. |
| `WeightedAverageEnemyPosition` | `public Vec2 WeightedAverageEnemyPosition => …` (`:267`), `…ReadOnly` (`:269`) | Where the enemy mass is, via `Formation.Team.GetWeightedAverageOfEnemies(...)` (`:629`). **The shortest TTL for a non-direction value at `0.5f`** — the enemy centroid moves fast. |
| `HighGroundCloseToForeseenBattleGround` | `public Vec2 HighGroundCloseToForeseenBattleGround => …` (`:303`), `…ReadOnly` (`:305`) | A defensible position: `mission.FindPositionWithBiggestSlopeTowardsDirectionInSquare` centred on this formation with a half-size of half the distance to the team's median target (`:630`-`:636`). TTL `10f`. |
| `MainFormation` / `MainFormationReliabilityFactor` | `public Formation MainFormation => …` (`:259`), `…ReadOnly` (`:261`); `public float MainFormationReliabilityFactor => …` (`:263`), `…ReadOnly` (`:265`) | The friendly formation the AI calls primary (`f.AI.IsMainFormation`, `:618`) and a `0…1` confidence in it: `× 0.5` when that formation is charging or retreating, `× 0.8` when it is under melee attack (`:625`-`:627`). **`0f` when there is no main formation** (`:621`). TTLs `15f` and `5f`. |
| `AverageAllyPosition` / `IdealAverageDisplacement` | `public Vec2 AverageAllyPosition => …` (`:123`), `…ReadOnly` (`:125`); `public float IdealAverageDisplacement => …` (`:127`), `…ReadOnly` (`:129`) | Centre of gravity across **all friendly teams**, unit-count weighted (`:404`-`:423`) — falling back to this formation's own `CachedAveragePosition` when no ally exists (`:422`). `IdealAverageDisplacement` is the half-diagonal of the formation footprint (`:424`). TTL `5f`. |
| `InsideCastleUnitCountIncludingUnpositioned` / `InsideCastleUnitCountPositioned` | `public int InsideCastleUnitCountIncludingUnpositioned => …` (`:159`), `…ReadOnly` (`:161`); `…Positioned` (`:163`), `…ReadOnly` (`:165`) | Units inside **navmesh id mod 10 == 1** (`:637`-`:638`) — the siege-castle face — split by whether they have a real position yet. The gap between the two numbers is the classic siege bug: units counted as inside but never placed. TTL `3f`. |
| `EvaluateAllPreliminaryQueryData` | `public void EvaluateAllPreliminaryQueryData()` (`:660`) | Force-refreshes the **eleven** unit-ratio and dominance caches that `SetupSyncGroup` ties together (`:663`-`:673`), using `Mission.Current.CurrentTime` (`:662`). Call this when a mass change lands and you need an immediately consistent answer; without it the `SyncGroup` lets related ratios drift apart across refresh boundaries. |
| `Expire` | `public void Expire()` (`:681`) | Invalidates 37 caches (`:683`-`:721`). **It does not re-evaluate anything** — the next read refreshes lazily. Use it after mutating formation membership through a path the engine does not already observe. |
| `ForceExpireCavalryUnitRatio` | `public void ForceExpireCavalryUnitRatio()` (`:676`) | Expires exactly one cache (`:678`). Exists because cavalry ratio is the one ratio that `ExpireAfterUnitAddRemove` does **not** refresh eagerly (`:731` evaluates it, but the dedicated force-expire lets a caller drop it without a full pass). |
| `ExpireAfterUnitAddRemove` | `public void ExpireAfterUnitAddRemove()` (`:724`) | The add/remove-unit fast path: expire `_formationPower`, re-evaluate eleven ratios (`:727`-`:739`), then — **only if `Formation.CountOfUnits == 0`** — hard-set ratios to `0f` and the five booleans to fixed values, with `IsInfantryFormation` set to `true` (`:740`-`:753`). Calling it on a formation that still has units never runs the second half. |
| `GetClassWeightedFactor` | `public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)` (`:760`) | Linear blend of the four ratios with caller-supplied weights (`:762`). The one place the class combines composition for you. Note it reads the **live** ratio properties, so it can trigger refreshes; there is no `ReadOnly` variant. |
| `InitializeTelemetryScopeNames` | `private void InitializeTelemetryScopeNames()` (`:756`) | **Empty** — a body of `{ }` (`:757`-`:758`) called from the constructor (`:657`). Present as a hook, doing nothing in this build. |

## Examples

Ask a formation what it is made of, using live values so the answer refreshes if stale:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Formation formation = Mission.Current.PlayerTeam.Formations[FormationClass.Infantry];
FormationQuerySystem query = formation.QuerySystem;

Debug.Print("main class = " + query.MainClass, 0);
Debug.Print("infantry = " + query.InfantryUnitRatio + " ranged = " + query.RangedUnitRatio, 0);
Debug.Print("cavalry  = " + query.CavalryUnitRatio + " horse   = " + query.RangedCavalryUnitRatio, 0);
Debug.Print("is melee = " + query.IsMeleeFormation + ", power = " + query.FormationPower, 0);
```

Read the same data once, cheaply, and reuse the locals across a whole team — the correct use of the `ReadOnly` twins:

```csharp
using TaleWorlds.MountAndBlade;

foreach (Formation formation in Mission.Current.PlayerTeam.FormationsIncludingSpecialAndEmpty)
{
    FormationQuerySystem query = formation.QuerySystem;
    float power = query.FormationPowerReadOnly;
    bool melee = query.IsMeleeFormationReadOnly;
    Debug.Print("formation " + formation.FormationClass + " power " + power + " melee " + melee, 0);
}
```

Branch on the threat picture before committing a charge, handling the null cases the source actually allows:

```csharp
using TaleWorlds.MountAndBlade;

FormationQuerySystem query = formation.QuerySystem;

Agent closest = query.ClosestEnemyAgentReadOnly;
if (closest != null)
{
    Debug.Print("nearest enemy agent " + closest.Index, 0);
}

FormationQuerySystem threat = query.ClosestSignificantlyLargeEnemyFormation;
if (threat == null)
{
    Debug.Print("no significantly large enemy formation", 0);
    return;
}

Debug.Print("threat is " + threat.MainClassReadOnly
    + ", under cavalry charge = " + query.IsUnderCavalryChargeFromFrontReadOnly, 0);
```

Force a consistent composition read after a mass casualty event instead of trusting the sync group across refresh boundaries:

```csharp
using TaleWorlds.MountAndBlade;

FormationQuerySystem query = formation.QuerySystem;
query.EvaluateAllPreliminaryQueryData();
Debug.Print("consistent ratios: inf " + query.InfantryUnitRatioReadOnly
    + " rng " + query.RangedUnitRatioReadOnly, 0);
```

## Risks and crash boundaries

- **Never construct it.** The constructor binds to one formation and immediately reads `Mission.Current` (`:309`-`:313`). A hand-built instance captures `this` into every delegate and answers questions about a formation that is not in the battle. Reach it as `formation.QuerySystem`.
- **`ReadOnly` returns stale values with no staleness marker.** TTLs run from `0.2f` to `15f`; nothing tells you which you got. `EstimatedDirectionReadOnly` (`:117`) can be a second old.
- **`LocalAllyUnits` / `LocalEnemyUnits` are reused buffers.** The query passes its own previous list back in as the fill target (`:425`-`:426`), so the next refresh rewrites the list you are holding. **Copy before iterating across frames.**
- **An empty formation reports `IsInfantryFormation == true`.** `ExpireAfterUnitAddRemove` hard-sets it at `:748`. Do not read that boolean as "there are infantry here".
- **Relative, not absolute, dominance.** `IsInfantryFormation` (`:434`) only compares ratios against each other, so a formation that is 90% cavalry with 10% infantry still reports `IsInfantryFormation == true`.
- **`CasualtyRatio` silently reads `0f` without a `CasualtyHandler`.** The `?? 0` at `:485` is indistinguishable from "no casualties". In a mission where that behavior is absent you get a permanent full-strength reading.
- **`ClosestEnemyAgent` can be null** (`:504`), and both `…EnemyFormation` getters can be null (`:283`, `:297`). All three are the documented not-found signal, not an error.
- **`GetClassWeightedFactor` triggers refreshes.** It reads live ratios (`:762`) and has no `ReadOnly` twin — calling it per frame is not free.
- **`Expire()` invalidates but does not compute.** After it, the next read pays for the refresh; code that expires in a tight loop converts a cheap read into an expensive one every time.
- **The 10-second windows are hard-coded.** `UnderRangedAttackRatio` and `MakingRangedAttackRatio` (`:492`, `:498`) answer "within 10s", and `IsUnderRangedAttack` passes `10f` to `GetUnderAttackTypeOfUnits` (`:488`). There is no parameter to change them.
- **`MainClass` defaults to Infantry** (`:600`) on an all-zero ratio set.
- **Private no-op:** `InitializeTelemetryScopeNames` (`:756`) has an empty body. Do not expect telemetry scope names to be set.
- **Not a save participant.** No `[Serializable]`; the whole object is a runtime cache rebuilt with the mission.

## Cross-Version Notes

The v1.4.5 file is 765 lines: one public field (`:11`), fifty `QueryData<T>` fields (`:13`-`:103`), one constructor (`:309`-`:658`) and five public methods (`:660`, `:676`, `:681`, `:724`, `:760`). The identically named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout keeps the `X` / `XReadOnly` pairing and the per-query TTL design, and `bannerlord-1.5.3` retains the shape. **The TTL constants and the dominance thresholds are the volatile part** — they are ordinary float literals inside the lambdas (`:435`-`:439`), so a retuned AI in a later version can change what `HasShield` or `IsMeleeFormation` means without any signature change.

## Dependencies

- Owning type: [`Formation`](../../mission/Formation), reached through its `QuerySystem` property; every delegate captures the constructor's `formation` parameter.
- Sibling scope: [`TeamQuerySystem`](../TeamQuerySystem), returned by `Team` (`:105`).
- The memoization primitive this class is built on: [`QueryData`](../QueryData), whose `Value`, `GetCachedValueUnlessTooOld`, `Evaluate`, `Expire` and `SetValue` supply the caching semantics, plus the static `SetupSyncGroup` used at `:440` and `:475`.
- Unit-condition predicates behind the ratio queries: [`QueryLibrary`](../QueryLibrary) (`HasShield`, `HasThrown`, `IsInfantry`, `IsRanged`, `IsCavalry`, `IsRangedCavalry`).
- Casualty source: [`CasualtyHandler`](../CasualtyHandler), fetched through `Mission.Current.GetMissionBehavior<CasualtyHandler>()` (`:485`).
- Teams and hostility used by the enemy scans: [`Team`](../../mission/Team) and [`IMBTeam`](../../mission/IMBTeam) — `team.IsEnemyOf(formation.Team)` at `:507`, `:530`, `:566`.
- The agents returned: [`Agent`](../../mission/Agent), whose `MaximumMissileRange`, `MissileRangeAdjusted`, `CharacterPowerCached`, `LastRangedHitTime` and `LastRangedAttackTime` are read at `:451`, `:467`, `:476`-`:478`, `:492`, `:498`.
- The classification enum: [`FormationClass`](../../core-extra/FormationClass).
- Bucket index: [mission-ext API](../)
