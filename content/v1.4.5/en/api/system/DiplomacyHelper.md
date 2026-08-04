---
title: "DiplomacyHelper"
description: "Reads war causes, faction relationships, war history, prisoner ownership, and player attack restrictions without mutating diplomacy state."
---
# DiplomacyHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DiplomacyHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs`

## One-sentence responsibility

`DiplomacyHelper` answers questions about the current Campaign's faction relationships and war history; it does not declare war, make peace, create alliances, or change captivity.

## Mental model

This is a read-only query layer over live Campaign state. Callers supply `IFaction` objects, a `StanceLink`, or a war event's `DeclareWarDetail`; the helper applies a narrow game rule and returns a boolean, a new list, or a localized explanation. The underlying state is owned by [Campaign](../../campaign/Campaign), [IFaction](../../campaign/IFaction), `FactionManager`, the war `StanceLink`, and campaign behaviors.

Use it to reuse the game's existing meaning of “same active faction”, “allied kingdom”, “war caused by the player”, or “lord captured by this faction”. Do not use it as a diplomacy mutation API. War and peace transitions belong to [DeclareWarAction](../../campaign-ext/DeclareWarAction) and the corresponding peace actions; diplomacy score and threshold calculations belong to the active diplomacy [Model](../../campaign/DiplomacyModel). Those systems dispatch events and update persistence that this helper never touches.

## When to use and when not to use

- **Use it:** inside a `CampaignEvents.WarDeclared` listener, diplomacy UI query, quest condition, or other Campaign code that already holds the relevant factions.
- **Use it:** when displaying a war timeline from a [StanceLink](../../campaign/StanceLink), or when filtering live `AliveLords` by their current prisoner party.
- **Do not use it:** to start or end a war, propose an alliance, alter a crime rating, or release a prisoner. Call the appropriate Action or Campaign behavior instead.
- **Do not use it:** as a general faction comparison when the Campaign is not running. Several methods directly read `Hero.MainHero`, `Campaign.Current`, or faction-owned collections without a phase guard.

## Public entries

### Determine whether a war was caused by the player

```csharp
public static bool IsWarCausedByPlayer(
    IFaction faction1,
    IFaction faction2,
    DeclareWarAction.DeclareWarDetail declareWarDetail)
```

The result is determined by the declaration detail, not by a general relation check:

- `CausedByPlayerHostility` returns `true`.
- `CausedByKingdomDecision` returns `true` only when `faction1` is the main hero's faction and the main hero is that faction's leader.
- `CausedByCrimeRatingChange` returns `true` when `faction2` is the main hero's faction and `faction1.MainHeroCrimeRating` exceeds the active `CrimeModel.DeclareWarCrimeRatingThreshold`.
- `CausedByKingdomCreation` returns `true` when `faction1` is the main hero's faction.
- Any other enum value returns `false`.

This method is a classification helper for downstream quest or notification logic. It does not inspect or change the war stance.

### Compare active faction identity

```csharp
public static bool IsSameFactionAndNotEliminated(
    IFaction faction1,
    IFaction faction2)
```

Null inputs return `false`. The method requires the two references to be the same faction object and requires that faction to be non-eliminated. It is used by map/nameplate, AI, settlement, and encyclopedia code where an eliminated faction must not be treated as an active ally.

### Collect log entries related to a war

```csharp
public static List<(LogEntry, IFaction, IFaction)> GetLogsForWar(StanceLink stance)
```

The helper takes `stance.WarStartDate`, walks `Campaign.Current.LogEntryHistory.GameActionLogs` backward from the newest entry, and keeps entries whose game time is on or after the war start and whose `IWarLog.IsRelatedToWar` implementation accepts the stance. Each tuple contains the log entry, its effector faction, and its effected faction. The returned list is newly allocated; it does not add or remove history entries.

There is no “war end” upper bound in this method. A caller rendering an old war must use the stance and current history consistently, then decide how to display the returned tuples. The stock `KingdomWarItemVM` uses this result, keeps entries implementing `IEncyclopediaLog`, and creates `KingdomWarLogItemVM` rows.

### Find living lords currently held by a faction

```csharp
public static List<Hero> GetPrisonersOfWarTakenByFaction(
    IFaction capturerFaction,
    IFaction prisonerFaction)
```

The method iterates `prisonerFaction.AliveLords` and returns lords for which `IsPrisoner` is true and `PartyBelongedToAsPrisoner?.MapFaction` equals `capturerFaction`. It is a current-state query: it does not include dead lords, infer historical captures, or mutate the hero's captivity. The result is a new list.

### Read the main hero's attack restriction

```csharp
public static bool DidMainHeroSwornNotToAttackFaction(
    IFaction faction,
    out TextObject explanation)
```

When `faction.NotAttackableByPlayerUntilTime.IsFuture` is true, the method returns `true` and sets `explanation` to the localized `str_enemy_not_attackable_tooltip` text. Otherwise it sets `explanation` to `null` and returns `false`. Encounter and conversation menu code uses this pair to disable a hostile action and show its tooltip; the method does not remove or shorten the restriction.

### Check a kingdom alliance

```csharp
public static bool HasAllianceWithFaction(
    IFaction faction1,
    IFaction faction2)
```

Null, identical, eliminated, and non-kingdom factions return `false`. After those guards, the method casts both values to `Kingdom` and returns `Kingdom.IsAllyWith`. It therefore answers the current kingdom-alliance relation, not a proposed alliance or a generic “friendly” relation. `KingdomTruceItemVM`, kingdom diplomacy UI, and encyclopedia pages use this query.

## Real Campaign usage

### Classify a declared war from the event payload

The source registers listeners with the three-argument `CampaignEvents.WarDeclared` event. A Campaign behavior can reuse the same boundary without calling an Action again:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

CampaignEvents.WarDeclared.AddNonSerializedListener(this, OnWarDeclared);

private void OnWarDeclared(
    IFaction faction1,
    IFaction faction2,
    DeclareWarAction.DeclareWarDetail detail)
{
    bool causedByPlayer = DiplomacyHelper.IsWarCausedByPlayer(
        faction1,
        faction2,
        detail);
}
```

This observes the event after the game has selected the declaration detail. It must not call `DeclareWarAction.Apply` from the listener merely to “make the result take effect”; the Action has already performed the transition and dispatched the event.

### Read a live faction relationship and its war log

`IFaction.GetStanceWith` is the real acquisition path for a `StanceLink`:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

IFaction playerFaction = Hero.MainHero?.MapFaction;
IFaction targetFaction = Settlement.CurrentSettlement?.MapFaction;

if (playerFaction != null && targetFaction != null)
{
    bool sameActiveFaction = DiplomacyHelper.IsSameFactionAndNotEliminated(
        playerFaction,
        targetFaction);
    bool alliedKingdoms = DiplomacyHelper.HasAllianceWithFaction(
        playerFaction,
        targetFaction);

    StanceLink stance = playerFaction.GetStanceWith(targetFaction);
    if (stance != null && stance.IsAtWar)
    {
        foreach (var (entry, effector, effected) in DiplomacyHelper.GetLogsForWar(stance))
        {
            LogEntry warLog = entry;
            IFaction sourceFaction = effector;
            IFaction destinationFaction = effected;
        }
    }
}
```

The null checks protect the example during menu transitions or before a playable Campaign has established the main hero and current settlement. The helper still reads live state; it is not a saved snapshot.

## Dependencies and ownership

- [IFaction](../../campaign/IFaction) supplies faction identity, elimination state, kingdom status, crime rating, prisoner lords, and stance access.
- [Campaign](../../campaign/Campaign) supplies the active `CrimeModel`, `LogEntryHistory`, and Campaign lifetime required by the war-cause and war-log queries.
- [DeclareWarAction](../../campaign-ext/DeclareWarAction) owns the war transition and publishes [CampaignEvents](../../campaign/CampaignEvents); `DiplomacyHelper` only classifies the event payload.
- [StanceLink](../../campaign/StanceLink) supplies the war start date and current relation used by `GetLogsForWar`.
- [Hero](../../campaign/Hero), [Kingdom](../../campaign/Kingdom), [LogEntry](../../campaign/LogEntry), [CampaignTime](../../campaign/CampaignTime), and [TextObject](../../localization/TextObject) are the returned or consulted state types.
- [FactionManager](../../campaign/FactionManager) and the active diplomacy [Model](../../campaign/DiplomacyModel) own broader stance storage and calculations; this helper is not their replacement.

## Risks and version boundaries

- `IsWarCausedByPlayer` directly reads `Hero.MainHero.MapFaction` and, for crime-caused wars, `Campaign.Current.Models.CrimeModel`. Call it from a live Campaign event or guarded Campaign code; it is not a safe startup utility.
- `GetLogsForWar` does not null-check `stance`, `Campaign.Current`, `LogEntryHistory`, or the entries it scans. Pass a live stance obtained from `IFaction.GetStanceWith` and use it while Campaign state is valid.
- `GetPrisonersOfWarTakenByFaction` does not null-check `prisonerFaction` before enumerating `AliveLords`. The null-conditional operator only protects a lord's prisoner party, not the input faction.
- `DidMainHeroSwornNotToAttackFaction` does not null-check `faction`; on a negative result it deliberately returns `explanation = null`. Callers must not display the explanation without checking the boolean.
- `HasAllianceWithFaction` is null-safe and rejects non-kingdom factions, but it does not create an alliance or persist a decision. Use the alliance behavior/decision flow for mutations.
- None of these methods owns save data or changes world state. Caching their result across a save load, faction elimination, capture, or stance transition can produce stale UI or incorrect quest decisions.

## Version note

This page follows v1.4.5 `DiplomacyHelper.cs`. Its public surface is six read-only queries. The helper does not replace `DeclareWarAction`, peace/alliance actions, `FactionManager`, or the active diplomacy Model.

## Navigation

- [↑ API system index](../)
- [Related: IFaction](../../campaign/IFaction)
- [Related: DeclareWarAction](../../campaign-ext/DeclareWarAction)
- [Related: StanceLink](../../campaign/StanceLink)
- [Related: Campaign](../../campaign/Campaign)
- [Related: CampaignEvents](../../campaign/CampaignEvents)
