---
title: "DiplomacyHelper"
description: "Read-only diplomacy queries for wars, prisoners of war, and player truces — the static Helpers namespace facade over stance and log data."
---
# DiplomacyHelper

**Namespace:** `Helpers`
**Module:** Helpers (TaleWorlds.CampaignSystem assembly)
**Type:** `public static class DiplomacyHelper`
**Base:** none (static)
**Source:** `TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs`

## Overview

`DiplomacyHelper` is a small static query facade for the questions the diplomacy UI keeps asking: *why is this war here, who are we fighting, who did we capture, and is the player currently truce-bound?* It contains five public methods and no state. Everything it returns is derived on the spot from `Campaign.Current.LogEntryHistory`, `IFaction.AliveLords`, `StanceLink.WarStartDate`, and the hero's `NotAttackableByPlayerUntilTime` field — nothing is cached, so the answers are always as fresh as the current campaign tick.

Two of the five are pure predicates (`IsWarCausedByPlayer`, `IsSameFactionAndNotEliminated`, `DidMainHeroSwownNotToAttackFaction`), one walks the war log history (`GetLogsForWar`), and one walks the lord list to build a prisoner roster (`GetPrisonersOfWarTakenByFaction`). Note the class sits in the bare `Helpers` namespace, not `TaleWorlds.CampaignSystem`, so `using Helpers;` is required — a detail that bites every mod that assumes nested namespaces.

## Mental Model

Treat it as a **read-only lens on the stance/log model, not a diplomacy engine**:

- **It never mutates.** There is no `SetStance`, no `DeclareWar`. If you want to change relations you go through the `*Action.Apply` path — for example [DeclareWarAction](../DeclareWarAction/) — and then these queries immediately reflect the new state because they re-read live data.
- **It is world-state dependent.** `IsWarCausedByPlayer` touches `Hero.MainHero.MapFaction` and `Campaign.Current.Models.CrimeModel`; `GetLogsForWar` touches `Campaign.Current.LogEntryHistory`. Calling any of these outside a loaded campaign throws rather than returning a default. Guard with `Campaign.Current != null` if you also run in menu/editor contexts.
- **Typical call order in a mod:** a campaign behavior subscribes to [CampaignEvents](../CampaignEvents/) (daily tick, or the war-declared event), then calls a helper to decide what to show; separately the diplomacy screen calls the same helper while rendering. There is no registration step and no teardown step — nothing to add to a starter.
- **`GetLogsForWar` walks backwards and returns newest-first.** It iterates `Campaign.Current.LogEntryHistory.GameActionLogs` from the end, keeping entries whose game time is at or after `stance.WarStartDate` **and** which implement `IWarLog` and report `IsRelatedToWar(stance, out faction1, out faction2)`. The out params tell you which two factions that particular entry involved.
- **Trap: `IsWarCausedByPlayer` returns `false` for unhandled enum values,** including the `default` case if the game adds new `DeclareWarDetail` members in a future version. Treat a `false` as "not attributable", not as "not the player".
- **Trap: `GetPrisonersOfWarTakenByFaction` iterates `prisonerFaction.AliveLords` only.** A notable who is a prisoner but not a lord (a commoner notable, a militia hero) will never be returned, even when they are literally in the capturer's jail.

### When to Use

**Use `DiplomacyHelper` when:**
- You need to explain a war to the player in UI text: filter log history down to the entries relevant to a specific [StanceLink](../StanceLink/).
- You need to decide whether the player is personally to blame for a war, for a quest objective or a reputation penalty of your own design.
- You need the set of lords one faction is holding captive in the other, for a prisoner-exchange or ransom feature.
- You need a safe "same side and still alive" faction comparison that does not trip on nulls or on destroyed factions.

**Do NOT use `DiplomacyHelper` when:**
- You want to end or declare a war. Use the `*Action` classes; these helpers are the read side.
- You need the full relationship graph. `GetStances` on [FactionHelper](../FactionHelper/) enumerates every stance link; `DiplomacyHelper` deliberately only exposes the single stance you already hold.
- You want the player's war-joining eligibility. That is `CanPlayerOfferVassalage` / `CanPlayerOfferMercenaryService` on `FactionHelper`, not `IsWarCausedByPlayer`.
- You expect `DidMainHeroSwownNotToAttackFaction` to be a general truce query — it is narrowly about the "enemy is not attackable" tooltip state driven by `NotAttackableByPlayerUntilTime`.

## Dependencies

- [StanceLink](../StanceLink/) — `GetLogsForWar` takes one and reads its `WarStartDate` as the lower time bound.
- [DeclareWarAction](../DeclareWarAction/) — supplies the `DeclareWarDetail` enum that `IsWarCausedByPlayer` switches on; war changes must go through the action.
- [CrimeModel](../CrimeModel/) — `IsWarCausedByPlayer` compares `faction1.MainHeroCrimeRating` against `CrimeModel.DeclareWarCrimeRatingThreshold`.
- [FactionHelper](../FactionHelper/) — the sibling static facade for power ratios, possible war partners, and vassalage eligibility.
- [LogEntry](../LogEntry/) and the campaign log history — `GetLogsForWar` filters `Campaign.Current.LogEntryHistory.GameActionLogs`.
- [EncounterManager](../EncounterManager/) — battles and map events are what most war log entries are produced by, and are the usual thing you want to link a war to.
- [Hero](../../campaign/Hero/) — `Hero.MainHero`, `AliveLords`, `MapFaction`, and `MainHeroCrimeRating` are all inputs.
- [CampaignGameStarter](../CampaignGameStarter/) — where you register the behavior that actually calls into this helper at runtime.
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.LogEntryHistory` and `Campaign.Current.Models` are the live reads behind every method.
- [Kingdom](../../campaign/Kingdom/) — the concrete `IFaction` implementations whose stances and lords are being queried.

## Key members

#### `public static bool IsWarCausedByPlayer(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

Decides whether a given `DeclareWarDetail` reason should be blamed on the player, evaluated per reason:
- `CausedByPlayerHostility` → always `true` (direct aggression).
- `CausedByKingdomDecision` → `true` only when `faction1` is the player's map faction *and* that faction's leader is the player.
- `CausedByCrimeRatingChange` → `true` only when `faction2` is the player's map faction *and* `faction1.MainHeroCrimeRating` exceeds `Campaign.Current.Models.CrimeModel.DeclareWarCrimeRatingThreshold`.
- `CausedByKingdomCreation` → `true` only when `faction1` is the player's map faction.
- **Return-value semantics:** `false` means "not attributable to the player under this rule". It is **not** a statement that the player had no involvement, and it is also what you get for any enum value this version does not handle.
- **Argument order matters:** `faction1` is the aggressor for the decision/creation/crime cases and `faction2` is the player's faction for the crime case. Swapping them silently returns `false`.
- **Null hazard:** the crime branch dereferences `faction1.MainHeroCrimeRating` without a null check; a null `faction1` throws.

#### `public static bool IsSameFactionAndNotEliminated(IFaction faction1, IFaction faction2)`

Null-safe "are these literally the same faction object, and is it still alive" check.
- **Return-value semantics:** `false` for null input, `false` if the two references differ, `false` if `faction1.IsEliminated` **or** `faction2.IsEliminated`.
- **Use:** filtering diplomacy UI lists. Because it compares by reference (the `==` on `IFaction` is reference identity for the game's faction objects), two different `Kingdom` instances wrapping the same culture are *not* considered the same faction.
- **Note:** both arguments are checked against `IsEliminated` even though the equality test already guarantees they are the same object; the duplication is defensive, not a second condition.

#### `public static List<ValueTuple<LogEntry, IFaction, IFaction>> GetLogsForWar(StanceLink stance)`

Collects every log entry relevant to a war.
- **Algorithm:** starts at `stance.WarStartDate`; iterates `Campaign.Current.LogEntryHistory.GameActionLogs` from the last index down to 0; keeps an entry when its `GameTime.NumTicks >= warStartDate.NumTicks` **and** the entry `is IWarLog` **and** `warLog.IsRelatedToWar(stance, out faction1, out faction2)` returns true; appends `(logEntry, faction1, faction2)`.
- **Return-value semantics:** a fresh `List`, newest-first. Empty (never `null`) when the stance is at peace, has a null `WarStartDate`, or no entry type implements `IWarLog` for that war.
- **Cost:** O(n) over the entire log history, on every call. Cache the result per stance if you are rendering a scrolling list; do not call it inside a per-frame draw loop.
- **Trap:** entries from an *earlier* war between the same two factions are excluded by the `WarStartDate` bound, so re-entering the same war resets the window. Entries after a *peace* that still reference the same factions are **kept**, because the filter is only a lower time bound.

#### `public static List<Hero> GetPrisonersOfWarTakenByFaction(IFaction capturerFaction, IFaction prisonerFaction)`

Builds the list of lords `prisonerFaction` currently has locked up in `capturerFaction`.
- **Algorithm:** iterates `prisonerFaction.AliveLords`; keeps heroes with `IsPrisoner`; compares `hero.PartyBelongedToAsPrisoner?.MapFaction` against `capturerFaction` (null-safe on the party, **not** on the factions themselves).
- **Return-value semantics:** a fresh `List<Hero>`; empty when nobody matches. Null `capturerFaction` or `prisonerFaction` throws on `.AliveLords`.
- **Trap:** dead lords are excluded by `AliveLords`, and non-lord prisoners are excluded entirely. Neither is filtered out afterwards.
- **Use:** the raw material for a ransom screen. Convert to a value with `Hero.Gold` or your own per-hero price model — this method deliberately does not price anything.

#### `public static bool DidMainHeroSwownNotToAttackFaction(IFaction faction, out TextObject explanation)`

Checks the "you cannot attack this yet" gate.
- **Algorithm:** returns `true` and sets `explanation` to the localized `str_enemy_not_attackable_tooltip` text when `faction.NotAttackableByPlayerUntilTime.IsFuture`; otherwise sets `explanation = null` and returns `false`.
- **Return-value semantics:** the `out` parameter is the **only** channel for the reason. Ignoring it and just branching on the bool gives the player a silent, unexplained disabled button.
- **Trap:** the spell-checked name in the source is `DidMainHeroSwownNotToAttackFaction` (missing "n" in "Sworn"). Call it exactly as spelled or you get a compile error, not a silent failure.
- **Trap:** `explanation` is null on the `false` path. Anything that renders `explanation` unconditionally will render an empty string.
- **Trap:** it only ever considers the *main hero*. Vassal/clan-member heroes under truce are not covered.

## Examples

### Example 1 — build a war chronicle for the diplomacy screen

```csharp
public List<string> BuildWarChronicle(StanceLink stance)
{
    // Newest-first, already bounded by stance.WarStartDate.
    var entries = DiplomacyHelper.GetLogsForWar(stance);
    var lines = new List<string>();
    foreach (var (logEntry, aggressor, defender) in entries)
    {
        if (!DiplomacyHelper.IsSameFactionAndNotEliminated(aggressor, defender))
        {
            continue; // an entry spanning a dead faction is not displayable
        }
        lines.Add($"{aggressor.Name} vs {defender.Name}: {logEntry.LogEventText}");
    }
    return lines;
}
```

### Example 2 — blame the player only for reasons the game considers their fault

```csharp
public bool ShouldPlayerFeelGuilty(IFaction aggressor, IFaction defender,
                                   DeclareWarAction.DeclareWarDetail detail)
{
    // Note the argument order: faction1 is the aggressor in 3 of the 4 branches.
    return DiplomacyHelper.IsWarCausedByPlayer(aggressor, defender, detail);
}
```

### Example 3 — ransom screen gated on the truce tooltip

```csharp
public string TryStartRansom(IFaction capturerFaction, IFaction prisonerFaction)
{
    // The out parameter is the only source of the reason string.
    if (DiplomacyHelper.DidMainHeroSwownNotToAttackFaction(capturerFaction, out var explanation))
    {
        return explanation.ToString(); // localized tooltip, safe to show verbatim
    }

    var prisoners = DiplomacyHelper.GetPrisonersOfWarTakenByFaction(capturerFaction, prisonerFaction);
    return $"{prisoners.Count} captive lord(s).";
}
```

### Example 4 — subscribe to war events and log the relevant entries

```csharp
public class WarChronicleBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSettlementLeftEvent.AddNonSerializedListener(this, OnSettlementLeft);
    }

    private void OnSettlementLeft(Settlement settlement, bool seenByPlayer)
    {
        var stance = settlement.MapFaction?.GetStanceWith(Hero.MainHero.MapFaction);
        if (stance == null)
        {
            return;
        }
        foreach (var entry in DiplomacyHelper.GetLogsForWar(stance))
        {
            Debug.Print($"WAR: {entry.Item1.LogEventText} between {entry.Item2.Name} and {entry.Item3.Name}");
        }
    }
}
```

## Risks and crash boundaries

- **Hard dependency on a loaded campaign.** `GetLogsForWar` dereferences `Campaign.Current.LogEntryHistory` and `IsWarCausedByPlayer` dereferences `Campaign.Current.Models.CrimeModel`. In the character-creation menu, the encyclopedia preview, or the editor these are not initialized and you get a `NullReferenceException`. Gate on `Campaign.Current != null` in any code that also runs outside a campaign.
- **Null factions are not uniformly safe.** `IsSameFactionAndNotEliminated` is the only null-tolerant method. `IsWarCausedByPlayer` dereferences `faction1`/`faction2` in most branches, `GetPrisonersOfWarTakenByFaction` dereferences both immediately, and `DidMainHeroSwownNotToAttackFaction` dereferences `faction`. Factions come and go during a campaign; re-resolve them each call rather than caching an `IFaction` across a kingdom merge or a clan becoming a kingdom.
- **Cross-domain dependency:** this class lives in the `Helpers` namespace inside `TaleWorlds.CampaignSystem`, but reaches into `TaleWorlds.Core` (`Hero`, `Campaign`, `GameTexts`) and `TaleWorlds.Localization` (`TextObject`). It also returns `TextObject`, so any assembly reference you drop must reference `TaleWorlds.Localization` or you get a load-time `FileNotFoundException` on first call, not a compile error.
- **Load order:** the class is `static` with no initializer state, so there is nothing to order — but its *inputs* are order-sensitive. Log history for a war only exists after the war has been declared through an action; asking `GetLogsForWar` for a peace stance returns empty rather than throwing, which can read as "no data" when it really means "no war".
- **Save serialization:** none of these methods touch saved state, and none of them are save-safe to call from inside a `SyncData` override — `Campaign.Current.LogEntryHistory` is not valid during the save walk in every code path. Call it from behavior logic, never from persistence callbacks.
- **ID stability:** the results are keyed by object identity, not string ids. A clan being absorbed into a kingdom changes its `MapFaction` mid-campaign, so a prisoner captured yesterday may no longer match today's `GetPrisonersOfWarTakenByFaction` result. Do not cache results across a kingdom formation.
- **Enum extensibility:** `IsWarCausedByPlayer` has no `default` branch and returns `false` for anything unhandled. New `DeclareWarDetail` members added by a future game version will be silently reported as "not the player's fault". If your mod depends on that verdict, also handle the raw `declareWarDetail` value yourself.
- **Localization coupling:** `DidMainHeroSwownNotToAttackFaction` hard-codes the text id `str_enemy_not_attackable_tooltip`. A translation or DLC that removes that key yields a broken text object rather than an exception.

## Cross-Version Notes

- **v1.3.x (this page):** the five public methods above are the complete surface. `DidMainHeroSwownNotToAttackFaction` keeps its historical misspelling, and `GetLogsForWar` returns `List<ValueTuple<LogEntry, IFaction, IFaction>>`.
- **v1.4.x:** unchanged. The `Helpers` namespace quirk is preserved, so `using Helpers;` is still required and moving the class would be a breaking change for every existing mod.
- **v1.5.x:** still no mutating members. New `DeclareWarDetail` enum values are the realistic change here; branch on the enum defensively rather than assuming four cases.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](./)
- ↔ Sibling: [FactionHelper](../FactionHelper/) — power ratios, war-partner lists, vassalage eligibility
- ↔ Sibling: [StanceLink](../StanceLink/) — the stance object `GetLogsForWar` filters on
- ↔ Sibling: [DeclareWarAction](../DeclareWarAction/) — the write side of every war change
- ↔ Sibling: [CrimeModel](../CrimeModel/) — the threshold that makes a crime rating count as a cause of war
- ↔ Sibling: [EncounterManager](../EncounterManager/) — the battles most war-log entries describe
- ↔ Sibling: [HeroHelper](../HeroHelper/) — the other hero-side static facade in the same namespace
- ↑ Campaign world: [Campaign](../../campaign/Campaign/)
- ↑ Hero: [Hero](../../campaign/Hero/)