---
title: "BackstoryCampaignBehavior"
description: "A one-shot world-history behavior that fires only on OnNewGameCreatedEvent: it writes seven hard-coded backstory entries (a noble quarrel, an influence overrun, a fief claim, two murders, and a family-wide vengeance feud) into the log and seeds the matching starting relations."
---

# BackstoryCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BackstoryCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BackstoryCampaignBehavior.cs`

## Overview

`BackstoryCampaignBehavior` is the **shortest and most frequently misread** behavior in CampaignSystem: 62 source lines, one event subscription, one job — **lay a fixed world history into the campaign exactly once, at `OnNewGameCreated`**.

Its entire work is seven historical entries:

| Timestamp | Content | Starting relation applied |
| --- | --- | --- |
| `CampaignTime.Years(1075) + Weeks(3) + Days(2)` | `lord_1_7` quarrels with `lord_1_1` (`CharacterInsultedLogEntry` / `ActionNotes.ValorStrategyQuarrel`) | **-50**, via `ChangeRelationAction.ApplyRelationChangeBetweenHeroes(..., -50, showQuickNotification: false)` |
| `CampaignTime.Years(1080) + Weeks(4) + Days(2)` | `lord_4_1` overrules `lord_4_16`'s influence (`OverruleInfluenceLogEntry`) | none |
| Same moment | `lord_4_16` claims `town_V6` (`SettlementClaimedLogEntry`) | `ClaimSettlementAction.Apply(heroObject4, settlement)` |
| Same moment | `dead_lord_2_2` is murdered by `lord_2_1` (`CharacterKilledLogEntry` / `KillCharacterActionDetail.Murdered`) | **-75** if the victim's clan is not a map faction and still has a leader |
| Same moment | `dead_lord_3_1` is murdered by `lord_3_5` | see the two family loops below |
| Same moment, per hero | Every hero in `nimr.Clan.Heroes` who is a lord, under middle adulthood, male, and `Mercy < 1` gets a `CharacterInsultedLogEntry` / `ActionNotes.VengeanceQuarrel` | — |
| Same moment, per hero | `Hero.DeadOrDisabledHeroes.Where(x => x.Clan == nimr.Clan)` gets the same treatment | — |
| Same moment | `nimr.Clan.Leader != null` → **-75** between that leader and `lord_3_5` | |

In the architecture it carries the **"give the campaign a starting point"** slot. Those relation deltas already exist when a save begins; the official behavior simply writes down *why*, so the encyclopedia and conversations can reference them.

## Mental Model

Think of it as **a one-shot initialisation script for world history**.

- **It subscribes to `OnNewGameCreatedEvent` and nothing else.** `RegisterEvents()` contains exactly one line: `CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, OnNewGameCreated);`. **There is no tick subscription, no death event, no save event.**
- **The `OnNewGameCreated(CampaignGameStarter)` parameter is never used.** It does not configure the game starter; it merely borrows that event as the "campaign start" moment. **That also means a mod that only needs an opening-time hook should subscribe to the same event rather than copy this behavior.**
- **`SyncData` is empty, and correctly so.** Every write goes through an official Action (log entries, relation change, claim), so **the resulting state is saved by the objects that were modified**. The behavior itself has nothing to persist.
- **Loading a save never re-runs it.** `OnNewGameCreatedEvent` fires only for a **new** campaign. **When loading an existing save those relation deltas are already in the save and must not, and will not, be re-applied.**
- **Every hero is resolved through `Game.Current.ObjectManager.GetObject<CharacterObject>("lord_x_y").HeroObject`.** `lord_1_7`, `lord_1_1`, `lord_4_1`, `lord_4_16`, `lord_2_1`, `dead_lord_2_2`, `lord_3_5`, `dead_lord_3_1` — **eight hard-coded ids, two of them `dead_lord_*`**. A null `Game.Current.ObjectManager` or a missing id throws immediately at the next `.HeroObject`. **Changing any of these ids deletes that whole piece of history.**
- **`town_V6` is hard-coded too.** `Game.Current.ObjectManager.GetObject<Settlement>("town_V6")` — a town in the imperial heartland.
- **The `dead_lord_3_1` family handling is two loops, not one.** First `nimr.Clan.Heroes` (the clan's living heroes), then `Hero.DeadOrDisabledHeroes.Where(x => x.Clan == nimr.Clan)` (the same clan's dead or disabled heroes). Both use the same predicate and the same log entry. **The predicate is a four-way AND: `hero.IsLord && hero.Age < Campaign.Current.Models.AgeModel.MiddleAdultHoodAge && !hero.IsFemale && hero.GetTraitLevel(DefaultTraits.Mercy) < 1`.**
- **`showQuickNotification: false` is deliberate.** Both `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` calls pass it — **a burst of relation pop-ups at campaign start would be noisy**, so the official code writes the log only.
- **It touches no conversation, no quest, and no army.** Not one of the 62 lines is UI-related.

### The role of each hard-coded id

| Id | Role |
| --- | --- |
| `lord_1_7` | Imperial noble, instigator of the `ValorStrategyQuarrel` |
| `lord_1_1` | Imperial noble, target of that quarrel |
| `lord_4_1` | The noble whose influence overrode someone else's |
| `lord_4_16` | The overruled noble, and **also the one who claims `town_V6`** |
| `lord_2_1` | Murderer of `dead_lord_2_2` |
| `dead_lord_2_2` | The murdered `dead_lord_` clan hero |
| `lord_3_5` | Murderer of `dead_lord_3_1` |
| `dead_lord_3_1` | The death that triggers the whole-family vengeance feud |

## How to use

**How to obtain it.** **Do not construct it.** It is a `CampaignBehaviorBase` added at campaign start; reach it with `Campaign.Current.GetCampaignBehavior<BackstoryCampaignBehavior>()`.

```csharp
using TaleWorlds.CampaignSystem;

BackstoryCampaignBehavior backstory = Campaign.Current.GetCampaignBehavior<BackstoryCampaignBehavior>();
Debug.Print("backstory behavior live = " + (backstory != null), 0);
```

**The most common pitfall.** **It fires only on `OnNewGameCreatedEvent`.** Loading a save never re-runs it, so **do not expect it to repair an already-broken save**.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | **The only subscription point in the whole class** (`:12-15`): `CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, OnNewGameCreated)`. **There is no second subscription** — no tick, no character-death, no save event. **That is why it runs exactly once on a new campaign and never on a load.** |
| `OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | `public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | The world-history script itself (`:21-61`), 58 lines in seven stages. **The `campaignGameStarter` parameter is never read** — the callback is only borrowed as an "it is campaign start" hook. Internally it writes four hard-coded history entries, two family loops, and one leader relation delta, in that order. |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **Empty implementation** (`:17-19`). Correct by design: every write goes through `LogEntry.AddLogEntry`, `ChangeRelationAction`, or `ClaimSettlementAction`, so **the resulting state is saved by the objects that were modified** and the behavior must not duplicate it. |

## Examples

Read the same backstory actors for your own opening-time setup, shaped after the `ObjectManager` lookups inside `OnNewGameCreated`:

```csharp
using TaleWorlds.CampaignSystem;

public static string DescribeBackstoryActors()
{
    if (Game.Current == null || Game.Current.ObjectManager == null)
    {
        return "";
    }

    string[] ids = new string[] { "lord_1_7", "lord_1_1", "lord_4_1", "lord_4_16", "lord_2_1", "dead_lord_2_2", "lord_3_5", "dead_lord_3_1" };
    for (int i = 0; i < ids.Length; i++)
    {
        CharacterObject character = Game.Current.ObjectManager.GetObject<CharacterObject>(ids[i]);
        if (character != null && character.HeroObject != null)
        {
            Debug.Print(ids[i] + " = " + character.HeroObject.Name.ToString()
                + " clan=" + character.HeroObject.Clan.Name.ToString(), 0);
        }
    }

    return "ok";
}
```

Append your own history on the same event, shaped after the official relation-change line:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.LogEntries;

public class MyBackstoryBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, OnNewGameCreated);
    }

    private void OnNewGameCreated(CampaignGameStarter starter)
    {
        Hero first = Game.Current.ObjectManager.GetObject<CharacterObject>("lord_2_1").HeroObject;
        Hero second = Game.Current.ObjectManager.GetObject<CharacterObject>("lord_2_3").HeroObject;
        if (first == null || second == null)
        {
            return;
        }

        LogEntry.AddLogEntry(
            new CharacterInsultedLogEntry(first, second, null, ActionNotes.ValorStrategyQuarrel),
            CampaignTime.Years(1076f) + CampaignTime.Weeks(1f));
        ChangeRelationAction.ApplyRelationChangeBetweenHeroes(first, second, -30, showQuickNotification: false);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

Reproduce the official "young male lords take the vengeance quarrel" two-loop pattern — the most worth copying part of this behavior:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.LogEntries;

public static int SeedVengeanceQuarrels(Hero avenger, Hero victim, CampaignTime when)
{
    if (avenger == null || victim == null || victim.Clan == null || Campaign.Current == null)
    {
        return 0;
    }

    Clan clan = victim.Clan;
    float middleAge = Campaign.Current.Models.AgeModel.MiddleAdultHoodAge;
    int written = 0;

    foreach (Hero hero in clan.Heroes)
    {
        if (hero.IsLord && hero.Age < middleAge && !hero.IsFemale && hero.GetTraitLevel(DefaultTraits.Mercy) < 1)
        {
            LogEntry.AddLogEntry(
                new CharacterInsultedLogEntry(hero, avenger, victim.CharacterObject, ActionNotes.VengeanceQuarrel), when);
            written++;
        }
    }

    foreach (Hero hero in Hero.DeadOrDisabledHeroes.Where(x => x.Clan == clan))
    {
        if (hero.IsLord && hero.Age < middleAge && !hero.IsFemale && hero.GetTraitLevel(DefaultTraits.Mercy) < 1)
        {
            LogEntry.AddLogEntry(
                new CharacterInsultedLogEntry(hero, avenger, victim.CharacterObject, ActionNotes.VengeanceQuarrel), when);
            written++;
        }
    }

    return written;
}
```

Check whether the hard-coded settlement exists — the safe version of the official `GetObject<Settlement>("town_V6")` line:

```csharp
using TaleWorlds.CampaignSystem;

public static string DescribeV6()
{
    if (Game.Current == null || Game.Current.ObjectManager == null)
    {
        return "";
    }

    Settlement townV6 = Game.Current.ObjectManager.GetObject<Settlement>("town_V6");
    if (townV6 == null)
    {
        return "town_V6 missing";
    }

    return "town_V6 owner=" + (townV6.Owner != null ? townV6.Owner.Name.ToString() : "none");
}
```

## Risks and crash boundaries

- **Fires only on `OnNewGameCreatedEvent`.** Loading a save never re-runs it, so **do not expect it to repair an already-broken save**. Patch-on-load logic must subscribe to `OnGameLoadFinishedEvent`.
- **The `campaignGameStarter` parameter is unused.** That is not an oversight — the callback is only borrowed as an opening-time hook. **If your mod just needs campaign start, subscribe to the same event instead of inheriting or copying this behavior.**
- **Eight hero ids plus one settlement id are hard-coded.** `lord_1_7`, `lord_1_1`, `lord_4_1`, `lord_4_16`, `lord_2_1`, `dead_lord_2_2`, `lord_3_5`, `dead_lord_3_1`, `town_V6`. **If any id is absent from your mod combination, `GetObject<CharacterObject>(...)` returns null and the very next `.HeroObject` throws** — and because this happens at campaign start, **the player gets nothing at all**. Removing heroes is the easiest trap here.
- **It uses `Game.Current.ObjectManager`, not `Campaign.Current.ObjectManager`.** The former is the global object manager on `TaleWorlds.Core.Game` and is available earlier in module load; the latter requires a campaign to exist. **Using `Game.Current` is correct here because this event fires at a moment when campaign objects are not yet fully assembled.**
- **Depends on `Campaign.Current.Models.AgeModel.MiddleAdultHoodAge`.** The age threshold comes from a replaceable model, so **replacing `AgeModel` changes which heroes count as "young male lords" and therefore how many feud log entries appear.**
- **`Hero.DeadOrDisabledHeroes.Where(x => x.Clan == nimr.Clan)` is a full-table LINQ filter.** The data set is small at campaign start, but it runs once per new campaign, so a mod that greatly increases the hero count should keep that in mind.
- **Both `ChangeRelationAction` calls pass `showQuickNotification: false`.** That is a deliberate suppression of opening relation pop-ups. **If you copy this line without the flag, two quick notifications fire back to back at campaign start.**
- **`ClaimSettlementAction.Apply(heroObject4, settlement)` really changes ownership of `town_V6`.** It is not merely a log entry — **the settlement genuinely changes hands**, which affects taxes, garrison, and AI behaviour.
- **The `dead_lord_2_2` relation delta is conditional.** `if (!heroObject6.Clan.IsMapFaction && heroObject6.Clan.Leader != null)` gates the -75. **If the victim's clan is already a map faction the delta never happens**, so the starting relation between `lord_2_1` and that clan leader can differ between saves.
- **Empty `SyncData` is safe because every write is an official Action.** But **if you add fields in a derived class you must write them into `SyncData` yourself**, or they come back as defaults after loading.
- **The behavior holds no state, no cache, and no static fields.** Not one of the 58 lines keeps anything. **The only way to extend it is to derive and shadow `RegisterEvents` and `OnNewGameCreated` — neither is `virtual`, so you must `new` your own method and subscribe yourself.**

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BackstoryCampaignBehavior.cs` is a 62-line original-source file. Five things to check across versions: whether those nine hard-coded ids changed (especially `town_V6`), the two relation coefficients of -50 and -75, the two time anchors `CampaignTime.Years(1075)` and `Years(1080)`, the four conditions of the vengeance-feud predicate, and **whether it still subscribes only to `OnNewGameCreatedEvent`** — if some version added an `OnGameLoadFinished` subscription, this page's "loading never re-runs it" conclusion changes. **The time anchors are the version-sensitive part**: changing them preserves the relative order of the official history but shifts its absolute dates.

## Dependencies

- Official registration point: `gameStarter.AddBehavior(new BackstoryCampaignBehavior());` at `SandBoxManager.cs:33`, the third behavior registered in `SandBoxManager.Initialize`
- Base class: [CampaignBehaviorBase](../CampaignBehaviorBase) supplies the two hooks this type overrides, `RegisterEvents` and `SyncData`
- Event: `OnNewGameCreatedEvent` on [CampaignEvents](../CampaignEvents), dispatched by `CampaignEventDispatcher`; `AddNonSerializedListener` means the handle is not saved
- Object resolution: `GetObject<CharacterObject>` and `GetObject<Settlement>` on `Game.Current.ObjectManager` (the `TaleWorlds.Core.Game` singleton) — all nine hard-coded ids go through it
- Log side: `AddLogEntry(LogEntry, CampaignTime)` on [LogEntry](../LogEntry), plus `CharacterInsultedLogEntry`, `OverruleInfluenceLogEntry`, `SettlementClaimedLogEntry`, `CharacterKilledLogEntry`, and `ActionNotes`
- Relations and fiefs: `ApplyRelationChangeBetweenHeroes` on [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) and `Apply` on [ClaimSettlementAction](../../campaign-ext/ClaimSettlementAction); the former writes through [Hero](../Hero)'s relation chain, the latter changes `OwnerClan` on [Settlement](../Settlement)
- Age model: `MiddleAdultHoodAge` on [AgeModel](../AgeModel); the trait side is `Mercy` on [DefaultTraits](../DefaultTraits)
- Bucket index: [campaign API section](../)
