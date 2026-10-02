---
title: "MobilePartyAIModel"
description: "The replaceable AI decision model that decides, for every party on the map during its thinking, whether to attack, whether to avoid, how large the patrol and defense radii should be, and which initiative behavior to pick."
---
# MobilePartyAIModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`  
**Base:** `MBGameModel<MobilePartyAIModel>`  
**Source file:** `C:\WorkSpace\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\ComponentInterfaces\MobilePartyAIModel.cs`  
**Default implementation:** `C:\WorkSpace\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\GameComponents\DefaultMobilePartyAIModel.cs`

## One-Line Responsibility

It decides, for every party on the map during its thinking tick, "whether to attack, whether to avoid, how large the patrol and defense radii should be, and which initiative behavior to pick." It does not move parties, does not change rosters, and does not write behavior directly — it only hands the decisions and radii to the AI thinking loop for consumption.

## Mental Model

This is the "decision rule layer" of the map AI, sitting between party state and the AI thinking loop. `MobilePartyAi` and each `Ai*Behavior`, on every party's thinking tick throttled by `AiCheckInterval`, first ask this model "should I attack/avoid this party", "what is the patrol radius", then use the answer to set the `MobileParty`'s short-term/default behavior. The model itself is a stateless query: it reads the current state of `MobileParty`, `Settlement`, and `Campaign` and returns a decision or a radius, and never mutates them.

The computation chain is: `MobilePartyAi` calls `ShouldPartyCheckInitiativeBehavior` every tick to decide whether evaluating the initiative is worthwhile; if so, it then calls `GetBestInitiativeBehavior` to combine the surrounding friend/foe parties and compute the best initiative behavior, target, score, and average enemy direction vector; meanwhile the patrol, defense, and flee behaviors read `GetPatrolRadius`, `SettlementDefending*`, and `FleeToNearby*` for their radii and thresholds. Most radius properties are "days × speed × hours" coefficients (patrol/defense), or world distances computed on the fly from `EncounterModel` (fleeing).

Use this model to change the behavior decisions and radii seen by all AI consumers, not to move or rearrange parties. If the goal is to truly change party position, roster, or behavior landing, use `MobileParty`'s public API, the Roster API, or `MobileParty.Ai` / `SetPartyAiAction`; do not write `Position`, recruit units, teleport, or transfer gold inside these decision callbacks — that would turn a read-only query into a side effect run on every tick. Custom implementations should stay pure-decision and deterministic to avoid divergence from replayed campaign ticks.

### Lifecycle and Registration

`Campaign.Current.Models` holds the current instance, under the property name `MobilePartyAIModel`. The game resolves and registers it through `GameModels` at campaign initialization via `GetGameModel<MobilePartyAIModel>()`. The default implementation `DefaultMobilePartyAIModel` is injected by the launcher before the campaign system starts querying. On the title screen, during early module load, or when no active campaign exists, `Campaign.Current` is `null`, so you must not unconditionally read it from a static field initializer or a menu constructor. When replacing the model, register during the campaign initialization phase and keep the vanilla instance as a delegate, to avoid recursing into yourself by fetching from the already-replaced `Campaign.Current.Models.MobilePartyAIModel`.

## When to Use / When Not to Use

**When to use:**

- To tune the whole-map AI's attack/avoid tendency, patrol and defense radii, and initiative behavior thresholds (e.g. make caravans more timid, or make patrols cover a wider area).
- To read-only query, inside your own AI extension, "should this party consider attacking/avoiding that party", or "what is the world radius for this patrol point".

**When not to use:**

- Do not change the return values/fields to move parties or change rosters. Use `MobileParty`'s position/velocity API for movement, the Roster API for rosters, and `MobileParty.Ai` / `SetPartyAiAction` for behavior landing.
- Do not write world-mutating side effects such as recruiting, teleporting, or gold transfer inside the model methods `ShouldConsiderAttacking`, `ShouldConsiderAvoiding`, `GetBestInitiativeBehavior` — they are pure decisions.
- Do not call `GetBestInitiativeBehavior` manually every frame; it is already throttled by the AI thinking loop via `AiCheckInterval`, and calling it again is redundant and expensive.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry; the model is obtained via `Campaign.Current.Models.MobilePartyAIModel`. |
| [`MobileParty`](../../campaign/MobileParty) | Provides all decision inputs: party speed, position, morale, land/sea status, `Army`, default/short-term behavior. |
| [`Settlement`](../../campaign/Settlement) | Provides the patrol/defense target settlement types (hideout, castle, village) and port positions. |
| [`EncounterModel`](../EncounterModel) | Provides `GetEncounterJoiningRadius`, `NeededMaximumDistanceForEncounteringMobileParty`, which the radius properties depend on for computation. |
| [`MilitaryPowerModel`](../MilitaryPowerModel) | `GetContextForPosition` is called when estimating siege strength. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`AiPartyThinkBehavior`](../AiPartyThinkBehavior) | The main initiative-behavior thinking loop; calls `ShouldPartyCheckInitiativeBehavior` and `GetBestInitiativeBehavior`. |
| [`AiPatrollingBehavior`](../AiPatrollingBehavior) | The patrol behavior; calls `GetPatrolRadius` to refresh the patrol range. |
| [`AiMilitaryBehavior`](../AiMilitaryBehavior) | The military behavior; depends on the initiative decision. |
| [`AiVisitSettlementBehavior`](../AiVisitSettlementBehavior) | The visit-settlement behavior; uses `FleeToNearbySettlementRadius` for its search. |
| [`MapEvent`](../../campaign/MapEvent) | Reads the party's friend/foe status when building an encounter, and interacts with initiative score computation. |

### Actions, Events and Save Boundary

The model itself does not save, does not dispatch events, and has no cached fields of its own. All radii and decisions are computed at runtime from the current state. Legal party behavior landing goes through `MobileParty.Ai` / `SetPartyAiAction`, roster changes go through the Roster API; model replacement must be completed during campaign initialization (the `CampaignGameStarter` registration phase), not hot-swapped mid-battle or mid-quest, otherwise different parties would see inconsistent decision rules. Custom implementations should stay deterministic for identical inputs to avoid conflict with replayed campaign ticks.

## Member Contract

### Configuration / Radius (read-only properties)

| Member | Default implementation | Purpose | When called & side effects |
| --- | --- | --- | --- |
| `AiCheckInterval` | `0.25f` | AI re-evaluation interval (days). | `MobilePartyAi` uses it to throttle every party's thinking and random recompute; do not return `0` or a negative value, otherwise it recomputes every frame or never. |
| `FleeToNearbyPartyRadius` | Computed live as `EncounterModel.GetEncounterJoiningRadius × EstimatedMaximumLordPartySpeedExceptPlayer × AiCheckInterval × 1.5` | World search distance for "flee from nearby enemy party". | Used by the flee behavior when searching for nearby threats; it is a computed value depending on `EncounterModel`, not a constant. |
| `FleeToNearbySettlementRadius` | `FleeToNearbyPartyRadius × 2` | Search distance for a settlement to flee to. | Paired with the previous property; the search range for "flee toward settlement". |
| `HideoutPatrolDistanceAsDays` | `0.5f` | Radius coefficient for patrolling hideouts (days × speed × hours). | Used internally by `GetPatrolRadius` for hideout targets; returns days, not world units. |
| `FortificationPatrolDistanceAsDays` | `0.3f` (v1.3.15) / `0.5f` (v1.4.5) | Radius coefficient for patrolling castles/defense points (days). | Used internally by `GetPatrolRadius` for `IsFortification` targets. |
| `VillagePatrolDistanceAsDays` | `0.25f` | Radius coefficient for patrolling villages (days). | Used internally by `GetPatrolRadius` for `IsVillage` targets. |
| `SettlementDefendingWaitingPositionRadius` | `3f` | Radius of the defending party's waiting position. | `MobilePartyAi` reads it directly when computing the defense waiting point; should not return a negative value. |
| `SettlementDefendingNearbyPartyCheckRadius` | `SettlementDefendingWaitingPositionRadius × 3` | Range for checking nearby enemy parties while defending. | `MobilePartyAi` searches for nearby threats to decide defense; depends on the previous property. |
| `NeededFoodsInDaysThresholdForSiege` | `12f` | Minimum food-days threshold required for a siege. | Read-only; the siege decision judges whether supply is sufficient. |
| `NeededFoodsInDaysThresholdForRaid` | `8f` | Minimum food-days threshold required for a raid. | Read-only; the raid decision judges whether supply is sufficient. |

> Note: Among the radius properties, `Hideout`/ `Fortification`/ `VillagePatrolDistanceAsDays` and `SettlementDefending*` are "days × speed" coefficients multiplied by `mobileParty._lastCalculatedSpeed × CampaignTime.HoursInDay` to get a world distance; `FleeToNearby*` are live world distances depending on `EncounterModel`.

### Decision (methods)

| Member | Purpose | When called & side effects |
| --- | --- | --- |
| `ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)` → `bool` | Decides whether `party` should consider attacking `targetParty`: the target is not the main party or the main party is attackable, both parties share land/sea status (or can attack via a settlement with a port), and current morale permits the attack. | Called internally by `GetBestInitiativeBehavior` when computing the attack score; also usable as a read-only outer decision query. Pure decision, no side effects. |
| `ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)` → `bool` | Decides whether `party` should consider avoiding `targetParty`: the target is aggressive and not a raft, or it is a garrison, and morale permits being attacked. | Called when computing the avoidance score; pure decision, no side effects. |
| `GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)` → `float` | Returns the patrol radius (world units) based on `mobileParty.TargetSettlement`'s type and party speed; returns `0` when there is no target settlement. | Called by the patrol behavior (`AiPatrollingBehavior`) when refreshing the patrol range; internally reads `TargetSettlement`, `_lastCalculatedSpeed`, then the patrol party multiplies by `0.5`. |
| `ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)` → `bool` | Whether this party is worth evaluating the initiative behavior this tick: excludes garrisons/militia/bandits/ownerless lord parties, excludes the main party and those under siege, excludes parties attached inside an army. | `MobilePartyAi` calls it first every tick; only if it returns `true` does it call `GetBestInitiativeBehavior`; pure decision. |
| `GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)` → `void` | Combining the surrounding friend/foe parties, computes the best initiative behavior (`EngageParty`/`FleeToPoint`, etc.), target, score, and average enemy direction vector. | Called by `MobilePartyAi` when the previous method returns `true`; this is the core of AI initiative; it does two `MobileParty.StartFindingLocatablesAroundPosition` spatial queries and estimates strength, so it is expensive. |

The observable rules of the default implementation include: the attack score is affected by the strength ratio of both sides, distance, morale, faction relations, and whether a siege is in progress; the avoidance score rises when the target is closer and we are weaker; the patrol radius varies with the target settlement type and party speed; all decisions first require both parties to be in a consistent land/sea state (unless attacking via a settlement with a port). Cross-version implementations should delegate to the current version's vanilla model rather than copying the old formulas into the new version.

## Real Read Path

The following code only queries the already-registered model in the current campaign, to decide "whether my party should avoid a threat and try to flee to a nearby settlement":

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public bool ShouldMyPartyFlee(MobileParty me, MobileParty threat)
{
    if (Campaign.Current == null || me == null || threat == null)
    {
        return false;
    }

    MobilePartyAIModel ai = Campaign.Current.Models.MobilePartyAIModel;

    // First ask the model "should I consider avoiding", then check whether the threat lies within "flee from nearby party radius"
    bool considerAvoid = ai.ShouldConsiderAvoiding(me, threat);
    float fleeRadius = ai.FleeToNearbyPartyRadius;

    return considerAvoid && me.Position.Distance(threat.Position) <= fleeRadius;
}
```

This is suitable for UI hints or debugging; ordinary AI should not call `GetBestInitiativeBehavior` again on its own — that is throttled by the thinking loop via `AiCheckInterval`.

## Safe Practices When Replacing the Model

If you only want to fine-tune patrol/defense radii or attack tendency, keep vanilla as a delegate so all decisions still execute in pairs:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public sealed class ModMobilePartyAIModel : MobilePartyAIModel
{
    private readonly MobilePartyAIModel _vanilla;

    public ModMobilePartyAIModel(MobilePartyAIModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float AiCheckInterval => _vanilla.AiCheckInterval;
    public override float FleeToNearbyPartyRadius => _vanilla.FleeToNearbyPartyRadius;
    public override float FleeToNearbySettlementRadius => _vanilla.FleeToNearbySettlementRadius;
    public override float HideoutPatrolDistanceAsDays => _vanilla.HideoutPatrolDistanceAsDays * 1.5f;
    public override float FortificationPatrolDistanceAsDays => _vanilla.FortificationPatrolDistanceAsDays;
    public override float VillagePatrolDistanceAsDays => _vanilla.VillagePatrolDistanceAsDays;
    public override float SettlementDefendingNearbyPartyCheckRadius => _vanilla.SettlementDefendingNearbyPartyCheckRadius;
    public override float SettlementDefendingWaitingPositionRadius => _vanilla.SettlementDefendingWaitingPositionRadius;
    public override float NeededFoodsInDaysThresholdForSiege => _vanilla.NeededFoodsInDaysThresholdForSiege;
    public override float NeededFoodsInDaysThresholdForRaid => _vanilla.NeededFoodsInDaysThresholdForRaid;

    public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)
        => _vanilla.ShouldConsiderAttacking(party, targetParty);

    public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)
        => _vanilla.ShouldConsiderAvoiding(party, targetParty);

    public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)
        => _vanilla.GetPatrolRadius(mobileParty, patrolPoint);

    public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)
        => _vanilla.ShouldPartyCheckInitiativeBehavior(mobileParty);

    public override void GetBestInitiativeBehavior(
        MobileParty mobileParty,
        out AiBehavior bestInitiativeBehavior,
        out MobileParty bestInitiativeTargetParty,
        out float bestInitiativeBehaviorScore,
        out Vec2 averageEnemyVec)
    {
        _vanilla.GetBestInitiativeBehavior(
            mobileParty, out bestInitiativeBehavior, out bestInitiativeTargetParty,
            out bestInitiativeBehaviorScore, out averageEnemyVec);
    }
}
```

In actual registration, save the vanilla delegate during the model registration phase of campaign initialization; do not fetch yourself again via `Campaign.Current.Models.MobilePartyAIModel` after the model has been replaced, otherwise it recurses. To make the replacement cover the new version's land/sea/port rules, prefer delegating to the current version's default model, then layer your own bounded corrections on top.

## Risks and Debugging Order

1. **Campaign not yet created:** `Campaign.Current` is `null` on the title screen and during early module load; defer fetching the model until a campaign-start hook.
2. **Wrong replacement timing:** You must register via `GameModels` / `CampaignGameStarter` during campaign initialization; runtime hot-swapping makes different parties see different rules, and fetching yourself from the already-replaced instance recurses.
3. **Radius returns 0:** `GetPatrolRadius` returns `0` when `TargetSettlement` is `null`; the caller must handle the "no patrol target" case and not assume a positive value.
4. **Mutating the world inside a decision callback:** Recruiting, teleporting, and gold transfer must run in behavior, the `Roster` API, or an `Action`, not inside decision callbacks like `ShouldConsider*` / `GetBestInitiativeBehavior`.
5. **High-frequency call cost:** `GetBestInitiativeBehavior` internally does two `Locatable` searches over nearby parties and estimates strength, which is expensive; throttle strictly by `AiCheckInterval` and do not call it proactively every frame.
6. **Inconsistent land/sea status:** `ShouldConsiderAttacking` requires both parties to share land/sea status (unless attacking via a port settlement), so cross-sea attack decisions return `false`; custom implementations must preserve this constraint, otherwise anomalous sea encounters occur.

## Version and Navigation

The v1.3.15 interface contains the 10 read-only properties and 5 abstract methods above. v1.4.5 additionally **adds** the `FortificationPortPatrolDistanceAsDays` property (patrol radius coefficient for port defense points) and the `GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort)` method (computes the nearby threat/ally check radius around a settlement), and changes the default value of `FortificationPatrolDistanceAsDays` from `0.3f` to `0.5f`. Cross-version implementations should delegate to the current version's vanilla model instead of copying the old formulas into the new version (see [version differences](../../../architecture/version-delta)).

- [Party Model Index](../models/)
- [↑ Parent: Campaign Extension API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ PartyWageModel](../PartyWageModel)
- [↔ PartyNavigationModel](../PartyNavigationModel)
- [↔ EncounterModel](../EncounterModel)
- [↔ MilitaryPowerModel](../MilitaryPowerModel)
- [MobileParty](../../campaign/MobileParty)
- [Settlement](../../campaign/Settlement)
- [Campaign System Guide](../../../guide/campaign-system)
