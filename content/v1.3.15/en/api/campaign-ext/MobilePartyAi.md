---
title: "MobilePartyAi"
description: "The AI decision-maker attached to every MobileParty on the campaign map: it picks each party's objective and short-term behavior (engage/flee/patrol/besiege/escort), sets initiative vs. avoidance bias, and recomputes movement orders every AI interval."
---

# MobilePartyAi

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MobilePartyAi`
**Base:** None (derives directly from `System.Object`)
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobilePartyAi.cs`

## Overview

`MobilePartyAi` is the **AI decision-maker** attached to every `MobileParty`. It does not perform the actual movement; instead, every "AI interval" it recomputes what the party will do next — engage, flee, patrol, besiege, escort, or hold — and writes the resulting short-term behavior (`AiBehavior`) and target back onto the `MobileParty`. The actual "how to get there" is executed by the party's navigation system based on the short-term behavior the AI set.

Its decisions rely heavily on `MobilePartyAIModel` (default implementation `DefaultMobilePartyAIModel`): every recompute asks the model "what is the best initiative behavior right now, who to fight, what score?" So **if you want to change AI behavior, you should normally extend or swap that Model, not rewrite `MobilePartyAi` itself.**

## Mental Model

Think of `MobilePartyAi` as the party's **"brain / dispatcher":**

- It is created synchronously by a `MobileParty` at construction time and is **only** accessed through `mobileParty.Ai`. Do not `new MobilePartyAi(...)` yourself — the constructor is `internal`, and detached from a `MobileParty` it can do nothing.
- Almost everything it holds is "state + timers": disabled flag, whether it is currently fleeing (`IsAlerted`), how long until it may attack the player's main party again, current initiative/avoidance bias, and the `AiBehaviorInteractable` it is currently navigating toward.
- The actual movement order is not issued by the AI directly; instead it calls `MobileParty.SetShortTermBehavior(...)` / `SetNavigationMode*`, handing the "short-term behavior + target" to the party's own navigation layer. When the next AI interval arrives it recomputes based on the party's `DefaultBehavior` and the model — so **writing `AiBehaviorInteractable` directly and expecting the party to head there permanently is useless**, as that value gets overwritten on the next tick.
- It lives in the **Campaign layer** and is serialized with the campaign save (`[SaveableField]` fields are plentiful). It does not run inside a Mission (battle scene).
- When a party joins an Army as an attached party, the AI suspends its own decisions and follows the Army leader's orders (the `Army.LeaderParty.AttachedParties.Contains` branch inside `TickInternal`).

## When to use / When not to use

**Use it for:**

- Reading AI state to make decisions: is a party fleeing (`IsAlerted`), has its decision-making been temporarily disabled, how long until it may attack the player's main party again (`DoNotAttackMainPartyUntil`).
- Temporarily tuning a party's attack/avoidance bias (`SetInitiative`), or freezing its new decisions during a scripted sequence (`SetDoNotMakeNewDecisions`).
- After changing `DefaultBehavior`, forcing an immediate recompute (`CheckPartyNeedsUpdate`) instead of waiting for the next AI interval.
- Computing a flee landing point (`CalculateFleePosition`) or evaluating whether nearby allies should join a settlement defense (`GetNearbyPartyDataWhileDefendingSettlement`).

**Do not use it for:**

- **Do not** `new MobilePartyAi(...)`: the constructor is `internal` and must be bound to a `MobileParty`.
- **Do not** treat `MobilePartyAi` as a "movement order entry point" and re-implement decision logic — when you need custom behavior, extend [MobilePartyAIModel](../MobilePartyAIModel/) / [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel/), or change `DefaultBehavior` in a [CampaignBehaviorBase](../CampaignBehaviorBase/).
- **Do not** write `AiBehaviorInteractable` / `AiBehaviorPartyBase` directly and expect the party to head there long-term: both are recomputed and overwritten by `GetBehaviors` every AI interval. To actually move the party, use the `SetMove*` / `SetShortTermBehavior` family on `MobileParty`.
- **Do not** access `mobileParty.Ai` before the party is initialized — it is `null` there and will crash with a null reference.

## Dependencies

- Upstream: [MobileParty](../../campaign/MobileParty/) creates and holds this object at its own construction, exposing it through `MobileParty.Ai`; [PartyComponent](../PartyComponent/) decides what kind of party this is (lord/caravan/garrison/bandit), which influences the AI's patrol and flee strategy.
- Decision core: every AI interval it queries [MobilePartyAIModel](../MobilePartyAIModel/) (default [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel/)) for the best initiative behavior and score; the enum is [AiBehavior](../AiBehavior/).
- Downstream systems: the AI's results are written back to [MobileParty](../../campaign/MobileParty/)'s short-term behavior and navigation mode, which in turn drives settlements, clans, and faction dynamics; the targets involved are mostly [Settlement](../../campaign/Settlement/), [Clan](../../campaign/Clan/) parties, and the global models in [Campaign](../../campaign/Campaign/).
- Save: most fields on this object carry `[SaveableField]` / `[SaveableProperty]` and are read/written with the campaign save; compatibility migration for older saves is done in `OnLateLoad` / `PreAfterLoad`.

## Risks

- **Access timing**: `mobileParty.Ai` is `null` before `MobileParty` is fully constructed. Reading it directly during very early campaign initialization or a custom construction path will crash. Accessing it inside a [CampaignBehaviorBase](../CampaignBehaviorBase/) tick or event callback is safe, because by then all parties are built.
- **Direct target assignment is not persistent**: any direct assignment to `AiBehaviorInteractable` / `AiBehaviorPartyBase` only lives until the next AI interval; to truly command the party, use `MobileParty`'s `SetMove*` / `SetShortTermBehavior`.
- **`SetInitiative` has no effect on the player's main party**: in source, `SetInitiative` returns immediately when `_mobileParty == MobileParty.MainParty`. Forgetting this leads to "why did my bias not take effect" confusion.
- **Remember to restore a frozen decision**: `SetDoNotMakeNewDecisions(true)` keeps blocking new initiative targets (good for escort, scripted sequences), but without the matching `false` the party may "space out" for a long time. `DisableAi()` is the same — without a paired `EnableAi()` it will **permanently** stop the party from thinking and hold position.
- **Save interaction**: if you want to cache custom state on the AI, you must wire it into [Campaign](../../campaign/Campaign/)'s save yourself (register a `SaveableField` or use `CampaignBehaviorBase.SyncData`), otherwise it is lost on reload.
- **Daily tick path**: the recompute happens in the internal `Tick(dt)` → `TickInternal()` → `GetBehaviors(out ...)` → `SetAiBehavior(...)`. Do not call this internal chain manually from outside; use the public `CheckPartyNeedsUpdate()` to trigger an immediate recompute.

## Members

Key public members visible to mods are grouped by theme below. Each describes its **purpose, side effects, and when it is called.**

### State and toggles

#### `public bool IsDisabled { get; }`
Whether AI thinking is suspended. When `true`, `TickInternal` will not reselect a behavior (unless the disable timer has elapsed, which auto-`EnableAi`s). Set `true` by `DisableAi` / `DisableForHours`, reset by `EnableAi`.

#### `public bool RethinkAtNextHourlyTick { get; set; }`
When `true`, the next hourly tick forces the AI to recompute a behavior (set in paths like `GetDefendSettlementBehavior`, e.g. when switching from land to port navigation). Mods usually read it, but may set it `true` to request an early recompute.

#### `public bool DoNotMakeNewDecisions { get; private set; }`
When `true`, the AI will not grab new "initiative behaviors" but keeps executing its existing objective. Set by `SetDoNotMakeNewDecisions`; good for keeping a party from acting on its own during escort or scripted sequences.

#### `public bool IsAlerted { get; private set; }`
Whether the party is currently "fleeing" (`FleeTo*` behavior). `GetBehaviors` sets it `true` when the flee branch is selected. Reading it tells you whether a party is being chased.

#### `public CampaignTime DoNotAttackMainPartyUntil { get; internal set; }`
Before this `CampaignTime`, the party will not proactively attack the player's main party (`MobileParty.MainParty`). Written by `SetDoNotAttackMainParty`; used internally during decisions. Read it to learn "how long until the no-attack constraint lifts."

#### `public int HourCounter`
Public field, counts elapsed hours (random 0–99 initial value at construction). Mainly for debugging / telemetry; mods usually should not change it.

### Current behavior target

#### `public IInteractablePoint AiBehaviorInteractable { get; set; }`
The interactable point the AI is currently navigating toward (usually a `PartyBase`, or a settlement's `Settlement.Party`). On assignment it also re-caches `AiBehaviorPartyBase`: if the new value is a `PartyBase` it syncs over, otherwise it clears. Note it is overwritten by recompute every AI interval — **do not** expect a direct assignment to make the party head there long-term.

#### `public PartyBase AiBehaviorPartyBase { get; private set; }`
The party/settlement side cached when `AiBehaviorInteractable` lands on an actual `PartyBase`. Used by `UpdateBehavior` in behaviors like `EngageParty` to fetch the `MobileParty`. Can be manually recomputed from `AiBehaviorInteractable` via `CacheAiBehaviorPartyBase()`.

#### `public float AvoidInitiative { get; }`
The current "avoidance bias" weight. Returns the set `_avoidInitiative` while still before `_initiativeRestoreTime`, otherwise falls back to `1f`. Influences the AI's trade-off between engage and flee.

#### `public float AttackInitiative { get; }`
The current "attack bias" weight, same rule as `AvoidInitiative` (returns to `1f` after the timer). Set by `SetInitiative`.

#### `public static readonly List<(float, Vec2)> DangerousPartiesAndTheirVecs`
Globally shared "dangerous parties and their positions" list (`(weight, coord)`), used by the AI to avoid strong enemies when pathing. In 1.4.5 declared as a value tuple `List<(float, Vec2)>`, in 1.3.x as `List<ValueTuple<float, Vec2>>` (same semantics). Mods usually only read it or let the model maintain it; do not freely add/remove.

#### Nested type `public class FleeingData`
Holds flee-state (`AlreadyReachedTheDestinationWhileFleeing`, `ShouldFleeClockWise`, `CwFleeDirectionIsBlocked`, `CcwFleeDirectionIsBlocked`). Public method `Clear()` resets all four flags; often called before a flee recompute.

### Decision bias and freezing

#### `public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)`
Temporarily changes the party's attack/avoidance bias to the given values, auto-restoring to `1f` after `hoursUntilReset` hours. **No effect on `MobileParty.MainParty`** (source returns immediately). Good for making a party temporarily more aggressive or more timid.

```csharp
MobilePartyAi ai = lordParty.Ai;
// More aggressive, less avoidant for 12 hours; then auto-restores
ai.SetInitiative(attackInitiative: 1.6f, avoidInitiative: 0.7f, hoursUntilReset: 12f);
```

#### `public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)`
Freezes / unfreezes "grabbing new initiative behaviors." Set `true` during sequences or escort; remember to set it back to `false` afterward, or the party may stay passive for a long time.

#### `public void SetDoNotAttackMainParty(int hours)`
Makes the party not proactively attack the player's main party for the next `hours` hours. If there is already a later lift time, the later one wins (it never shortens an existing constraint).

```csharp
MobilePartyAi ai = someLordParty.Ai;
// Do not attack the player's main party for the next 6 hours
ai.SetDoNotAttackMainParty(6);
```

### Behavior queries and computation

#### `public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)`
Called when a party is defending a settlement (its `DefaultBehavior == DefendSettlement`) and the target settlement is under attack; scans nearby allied parties to decide whether to join the fight, join from the land side, and who the strongest land/naval ally is. Returns `false` if the party itself is too far from the settlement to matter. Mostly called inside `GetDefendSettlementBehavior`, but mods can call it directly to ask "are there any allies nearby who can help?"

#### `public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)`
Computes a flee landing point away from `partyToFleeFrom`, written to `fleeTargetPoint` (via `out`). Internally considers both sides' speeds, navigation reachability, and whether the existing flee direction is blocked, to pick a point that shakes off the enemy. Mostly called inside `GetFleeBehavior`.

#### `public void CacheAiBehaviorPartyBase()`
If `AiBehaviorInteractable` is actually a `PartyBase`, caches it into `AiBehaviorPartyBase`. Mainly called after save load (`PreAfterLoad`) to reconnect old data. Mods usually do not need to call it manually.

#### `public void CheckPartyNeedsUpdate()`
If `DefaultBehavior` is flagged as needing an update, immediately runs a `Tick(0f)` and triggers `EncounterManager.HandleEncounterForMobileParty`, making the party **immediately** re-decide according to the new default behavior instead of waiting for the next AI interval. Call it after changing `DefaultBehavior`.

```csharp
// After changing the party's DefaultBehavior / TargetSettlement:
lordParty.Ai.CheckPartyNeedsUpdate();
```

### Enable / disable and timers

#### `public void DisableAi()`
Permanently suspends the party's AI thinking (`IsDisabled = true`, lift time set to `CampaignTime.Never`). **Must be paired with `EnableAi()`**, otherwise the party will sit still forever.

#### `public void DisableForHours(int hours)`
Temporarily suspends AI thinking for `hours` hours; auto-`EnableAi`s on the next `TickInternal` after expiry. Good for a short "standby" for a party.

#### `public void EnableAi()`
Resumes AI thinking (`IsDisabled = false`, lift time set to `Now`). Pairs with `DisableAi` / `DisableForHours`.

#### `public bool EnableAgainAtHourIsPast()`
Returns whether the disable timer has passed (`_enableAgainAtHour.IsPast`). After `DisableForHours` you can poll "is it time to recover?"; because `DisableAi` sets the lift time to `Never`, this is always `false` for it.

```csharp
if (party.Ai.IsDisabled && party.Ai.EnableAgainAtHourIsPast())
{
    // Temporary disable expired but not yet auto-recovered by a tick — fallback handling
    party.Ai.EnableAi();
}
```

## Examples

### Example 1: read AI state in an hourly tick and temporarily freeze a fleeing caravan

Below shows the **real acquisition path**: subscribe to the hourly tick inside a `CampaignBehaviorBase`, get the controller through `mobileParty.Ai`, then read state and make a tweak. Parties already in the world have a non-null `Ai`.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public class EscortSafetyBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HourlyTickEvent.AddNonSerializedEventListener(this, OnHourlyTick);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnHourlyTick()
    {
        foreach (MobileParty party in MobileParty.All)
        {
            // Get the AI controller through mobileParty.Ai; an initialized party's Ai is not null
            MobilePartyAi ai = party.Ai;
            if (ai == null) continue;

            if (ai.IsAlerted && party.IsCaravan)
            {
                // Caravan is fleeing: stop it from making new initiative decisions for a while, focus on disengaging
                ai.SetDoNotMakeNewDecisions(true);
            }
        }
    }
}
```

### Example 2: temporarily bias a lord party and recompute immediately

```csharp
// lordParty is some initialized lord party
MobilePartyAi ai = lordParty.Ai;

// Temporarily raise attack bias, lower avoidance bias; auto-restores after 12 hours (no effect on MainParty)
ai.SetInitiative(attackInitiative: 1.6f, avoidInitiative: 0.7f, hoursUntilReset: 12f);

// Don't attack the player's main party for the next 6 hours
ai.SetDoNotAttackMainParty(6);

// If DefaultBehavior was changed earlier, trigger a decision now instead of waiting for the next AI interval
ai.CheckPartyNeedsUpdate();
```

## Cross-version notes

- The public API (`IsDisabled`, `RethinkAtNextHourlyTick`, `DoNotMakeNewDecisions`, `IsAlerted`, `DoNotAttackMainPartyUntil`, `AvoidInitiative`, `AttackInitiative`, `AiBehaviorPartyBase`, `AiBehaviorInteractable` and all public methods) is **identical across v1.3.0 / v1.3.15 / v1.4.5**.
- The only internal difference: `DangerousPartiesAndTheirVecs` is declared as `List<(float, Vec2)>` (C# value tuple) in 1.4.5, and as `List<ValueTuple<float, Vec2>>` in 1.3.x — same semantics for mods, no need to distinguish.
- Pre-1.3.0 saves are migrated once in `OnLateLoad` / `PreAfterLoad` (converting old `FleeToGate` short-term behaviors, old target fields, etc. into the new structure). Cross-version mods need not handle this compatibility logic; the engine runs it automatically on load.

## Navigation

- ↑ Parent (bucket index): [campaign-ext index](../)
- ↔ Siblings (same-bucket related types): [MobilePartyAIModel](../MobilePartyAIModel/) · [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel/) · [PartyComponent](../PartyComponent/) · [AiBehavior](../AiBehavior/) · [CampaignBehaviorBase](../CampaignBehaviorBase/)
- Related types (cross-bucket): [MobileParty](../../campaign/MobileParty/) · [Settlement](../../campaign/Settlement/) · [Clan](../../campaign/Clan/) · [Campaign](../../campaign/Campaign/)
