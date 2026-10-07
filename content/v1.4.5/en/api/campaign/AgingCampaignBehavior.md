---
title: "AgingCampaignBehavior"
description: "Campaign ageing engine: advances hero life stages daily, rolls old-age death, and owns the main hero's illness countdown and extra lives."
---

# AgingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AgingCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AgingCampaignBehavior.cs`

## Overview

`AgingCampaignBehavior` is the campaign's **time engine**. Every day it checks each hero's age, advances the "out of infancy → into teens → of age" stages, raises the matching events, and rolls `ProbabilityOfDeath` to decide who dies of old age. The player main hero has a separate "illness" path: `Campaign.Current.MainHeroIllDays` accumulates, from day four it loses `5% × days` of its hit points each day, and at zero hit points it dies.

It is also **the only source of age events for the main hero**: all three `CampaignEventDispatcher.Instance.OnHeroComesOfAge(hero)` / `OnHeroReachesTeenAge` / `OnHeroGrowsOutOfInfancy` call sites live in this one file. The thresholds themselves are not here — every one is read from `Campaign.Current.Models.AgeModel`.

## Mental Model

Read it as **a state machine invoked once per hero per day, plus two private tables**. Three things to internalise:

1. **The two dictionaries are its private state, and both are serialized.** `_heroesYoungerThanHeroComesOfAge` maps "not-yet-adult hero → last observed integer age", and `_extraLivesContainer` maps "extra lives". `SyncData` writes both:

   ```csharp
   dataStore.SyncData("_extraLivesContainer", ref _extraLivesContainer);
   dataStore.SyncData("_heroesYoungerThanHeroComesOfAge", ref _heroesYoungerThanHeroComesOfAge);
   ```

   **Why does the first table exist?** Because `DailyTickHero` decides whether to advance a stage by asking "did the age change?":

   ```csharp
   if (_heroesYoungerThanHeroComesOfAge.TryGetValue(hero, out var value))
   {
       int num = (int)hero.Age;
       if (value != num)
       {
           if (num >= Campaign.Current.Models.AgeModel.HeroComesOfAge) { ...; CampaignEventDispatcher.Instance.OnHeroComesOfAge(hero); }
           else if (num == Campaign.Current.Models.AgeModel.BecomeTeenagerAge) { CampaignEventDispatcher.Instance.OnHeroReachesTeenAge(hero); }
           else if (num == Campaign.Current.Models.AgeModel.BecomeChildAge) { CampaignEventDispatcher.Instance.OnHeroGrowsOutOfInfancy(hero); }
       }
   }
   ```

   **The tests use `==`, not `>=`**, so a stage fires **only on the exact day the age equals the threshold**. Move `AgeModel.BecomeChildAge` to 18 and a hero can skip both "out of infancy" and "into teens" on the same day, because the `HeroComesOfAge` branch matches first and removes the entry. That is the most fragile logic in the class.

2. **Extra lives have exactly two sources.** `OnPerkOpened`: `DefaultPerks.Medicine.CheatDeath` grants one to the holder; `DefaultPerks.Medicine.HealthAdvise` while the holder is a clan leader grants **one to every living hero in the clan**. Nothing else produces them.

3. **Player illness and NPC old age are two separate paths.** NPCs go through `IsItTimeOfDeath(hero)`: `Age >= BecomeOldAge && MBRandom.RandomFloat < hero.ProbabilityOfDeath`, and on a hit either spend an extra life, or — for an as-yet-unwell main hero — pop an Inquiry and set `TimeControlMode = Stop`, or call `KillCharacterAction.ApplyByOldAge`. The player instead runs through the `Hero.IsMainHeroIll` branch inside `DailyTickHero`; **the main hero is never executed inside `IsItTimeOfDeath`.**

## How to use

**How to obtain it.** **Do not construct it.** It is a `CampaignBehaviorBase` the engine adds at campaign start. Reach the live instance with `Campaign.Current.GetCampaignBehavior<AgingCampaignBehavior>()`; the same applies to any subclass you register.

```csharp
AgingCampaignBehavior aging = Campaign.Current.GetCampaignBehavior<AgingCampaignBehavior>();
Debug.Print("aging behaviour live = " + (aging != null), 0);
```

**The most common pitfall.** **Stage tests use `==`, not `>=`.** `age == BecomeTeenagerAge` and `age == BecomeChildAge` fire **only on the exact threshold day**, so moving an `AgeModel` threshold lets a hero skip several events entirely.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | Subscribes to **nine** events: `DailyTickHeroEvent`, `OnCharacterCreationIsOverEvent`, `HeroComesOfAgeEvent`, `HeroReachesTeenAgeEvent`, `HeroGrowsOutOfInfancyEvent`, `PerkOpenedEvent`, `HeroCreated`, `HeroKilledEvent` and `OnGameLoadedEvent`. Note that the three age events it **raises itself are also ones it listens to**, using them to call `HeroDeveloper.InitializeHeroDeveloper`. |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | Syncs only the two dictionaries; **the third field `_gameStartDay` is not serialized.** It is assigned in `OnCharacterCreationIsOver` and used to exempt everyone from death on the campaign's first day. |
| `DailyTickHero` | `private void DailyTickHero(Hero hero)` | **The heart of the type**, called once per hero per day. In order: first-day exemption → apply an existing death mark → advance stages → player illness damage and death. **It opens with `if (CampaignOptions.IsLifeDeathCycleDisabled || flag || hero.IsTemplate) return;`, where `flag` means "today equals `_gameStartDay`".** |
| `IsItTimeOfDeath` | `private void IsItTimeOfDeath(Hero hero)` | The NPC old-age roll: `Age >= BecomeOldAge && !IsLifeDeathCycleDisabled && DeathMark == None && MBRandom.RandomFloat < ProbabilityOfDeath`. On a hit it branches three ways — spend an extra life, be the as-yet-unwell main hero (Inquiry plus pause), or `ApplyByOldAge`. |
| `OnHeroReachesTeenAge` | `private void OnHeroReachesTeenAge(Hero hero)` | Teen equipment plus **a full personality-trait inheritance roll** over `DefaultTraits.Personality` using `MBRandom.RandomFloat` (20% take the father's trait, 60% the mother's, and so on), ending in `hero.HeroDeveloper.InitializeHeroDeveloper()`. **One of the longest methods in the type, and it returns early for the player's clan** (equipment only). |
| `OnHeroComesOfAge` | `private void OnHeroComesOfAge(Hero hero)` | Adulthood: NPCs inherit skills via `HeroCreationModel.GetInheritedSkillsForHero`, the player gets `HeroDeveloper.SetInitialLevel`. It then force-assigns battle and civilian equipment — **and when either is null it raises `Debug.FailedAssert` and falls back to `generic_bat_dummy` / `generic_civ_dummy`**, so deleting those ids in a mod cascades into a crash. |
| `KillMainHeroWithIllness` | `private void KillMainHeroWithIllness()` | The illness death path in three statements: `TimeControlMode = CampaignTimeControlMode.Stop`, then `Hero.MainHero.AddDeathMark(null, DiedOfOldAge)`, then `KillCharacterAction.ApplyByOldAge(Hero.MainHero)`. **Note the death mark says "died of old age", not "died of illness".** |
| `OnGameLoaded` | `private void OnGameLoaded(CampaignGameStarter obj)` | Load hook whose entire body is `CheckYoungHeroes()`. **It is the repair pass for `_heroesYoungerThanHeroComesOfAge`**, adding heroes the table is missing and re-raising events they already passed. |
| `CheckYoungHeroes` | `private void CheckYoungHeroes()` | The repair logic: heroes with `Age < HeroComesOfAge && !IsDead` that are not in the table get added; and for entries that are `!IsDisabled` it re-raises `OnHeroGrowsOutOfInfancy` / `OnHeroReachesTeenAge` based on `Age > BecomeChildAge` / `Age > BecomeTeenagerAge`. **The inner `!ContainsKey(item)` check runs right after the `Add` and is therefore always false — that re-raise branch is dead code.** |

## Examples

Inspect a hero's age stage — every threshold comes from `AgeModel`:

```csharp
AgeModel age = Campaign.Current.Models.AgeModel;
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.Age < age.HeroComesOfAge)
    {
        Debug.Print(hero.Name + " is a child, age=" + (int)hero.Age + " teenAt=" + age.BecomeTeenagerAge, 0);
    }
    else if (hero.Age >= age.BecomeOldAge)
    {
        Debug.Print(hero.Name + " is old, death chance=" + hero.ProbabilityOfDeath, 0);
    }
}
```

Listen for the age events this behavior raises — this is where a mod should hook:

```csharp
public class MyAgeWatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroComesOfAgeEvent.AddNonSerializedListener(this, OnComesOfAge);
        CampaignEvents.HeroGrowsOutOfInfancyEvent.AddNonSerializedListener(this, OnGrowsUp);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnComesOfAge(Hero hero)
    {
        Debug.Print(hero.Name + " reached adulthood", 0);
    }

    private void OnGrowsUp(Hero hero)
    {
        Debug.Print(hero.Name + " left infancy", 0);
    }
}
```

Observe the behaviour's degradation when the life/death cycle is switched off — it becomes a pure age-stage driver:

```csharp
Debug.Print("life/death cycle disabled = " + CampaignOptions.IsLifeDeathCycleDisabled, 0);
Debug.Print("main hero illness days = " + Campaign.Current.MainHeroIllDays, 0);
Hero hero = Hero.AllAliveHeroes.First();
if (!CampaignOptions.IsLifeDeathCycleDisabled && hero.Age >= Campaign.Current.Models.AgeModel.BecomeOldAge)
{
    Debug.Print("subject to old-age death: " + hero.ProbabilityOfDeath, 0);
}
```

## Risks and crash boundaries

- **Stage tests use `==`, not `>=`.** `num == BecomeTeenagerAge` and `num == BecomeChildAge` fire **only on the exact threshold day**. Moving `AgeModel` thresholds lets a hero **skip several events at once**, because the `HeroComesOfAge` branch matches first and removes the entry.
- **`CheckYoungHeroes`'s re-raise branch is dead code.** `!ContainsKey(item)` runs immediately after the `Add` and is always false, so `OnHeroGrowsOutOfInfancy` / `OnHeroReachesTeenAge` **are never re-raised on load**. Mods depending on those events must replay them themselves after loading.
- **`_gameStartDay` is not serialized.** It is only assigned in `OnCharacterCreationIsOver`, so after a load the `flag` in `DailyTickHero` is always false and **the first-day death exemption no longer holds**.
- **`OnHeroComesOfAge` depends on two hard-coded dummy ids.** If `generic_bat_dummy` or `generic_civ_dummy` is missing, the code after `Debug.FailedAssert` NREs on its own (`MBEquipmentRosterExtensions.All.Find(...)` returning null, then `.GetBattleEquipments()`).
- **`OnHeroReachesTeenAge` returns early for the player's clan.** It assigns equipment, then `if (hero.Clan == Clan.PlayerClan) return;` — **player's children roll no personality traits and never call `InitializeHeroDeveloper`.**
- **Player illness lives in `DailyTickHero`, not `IsItTimeOfDeath`.** Damage is `MathF.Ceiling(HitPoints * (0.05f * MainHeroIllDays))`, applied daily from day four. **`MainHeroIllDays <= 3` returns immediately.**
- **The death mark says "old age" even for illness.** `KillMainHeroWithIllness` writes `DiedOfOldAge`, so **logs and saves cannot distinguish an illness death.**
- **Extra lives recognise only two perks.** `DefaultPerks.Medicine.CheatDeath` (self) and `DefaultPerks.Medicine.HealthAdvise` (whole clan while leader). `_extraLivesContainer` entries are removed as soon as they hit zero.
- **`OnHeroKilled` only cleans up.** It removes the victim from `_heroesYoungerThanHeroComesOfAge` and **never touches `_extraLivesContainer`**, so dead heroes' extra-life entries linger (harmless, but they accumulate in the save).
- **`OnHeroCreated` can throw.** It uses `_heroesYoungerThanHeroComesOfAge.Add(hero, num)` rather than an indexer assignment; a second `HeroCreated` for the same `Hero` instance raises `ArgumentException`.
- **Template heroes are exempt throughout.** `hero.IsTemplate` returns immediately.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AgingCampaignBehavior.cs` is 349 lines whose **public surface is just the two overrides `RegisterEvents` and `SyncData`**; the remaining 17 members (15 private methods and two dictionary fields) are all private. The 1.4.6 file of the same name exposes an identical public surface.

The thresholds live in [AgeModel](../AgeModel) and its official implementation [DefaultAgeModel](../DefaultAgeModel), **not in this file** — this type only reads them.

## Dependencies

- Base: [CampaignBehaviorBase](../CampaignBehaviorBase), supplying the `RegisterEvents` / `SyncData` override points; registered at `SandBoxManager.cs:140` via `gameStarter.AddBehavior(new AgingCampaignBehavior())`.
- Threshold source: [AgeModel](../AgeModel) — `HeroComesOfAge` / `BecomeTeenagerAge` / `BecomeChildAge` / `BecomeOldAge` / `MiddleAdultHoodAge` / `MaxAge`, all read through `Campaign.Current.Models.AgeModel`.
- Hero side: [Hero](../Hero) with `Age` / `ProbabilityOfDeath` / `IsAlive` / `IsTemplate` / `DeathMark` / `HeroDeveloper`, plus `Hero.MainHero` / `Hero.IsMainHeroIll` / `Hero.AllAliveHeroes` / `Hero.DeadOrDisabledHeroes` / `Hero.FindAll`.
- Death execution: [KillCharacterAction](../../campaign-ext/KillCharacterAction).ApplyByOldAge / ApplyByDeathMark and `KillCharacterAction.KillCharacterActionDetail.DiedOfOldAge`.
- Event plumbing: the nine entry points on [CampaignEvents](../CampaignEvents) and the three `On*` outlets on [CampaignEventDispatcher](../CampaignEventDispatcher) — `OnHeroComesOfAge` / `OnHeroReachesTeenAge` / `OnHeroGrowsOutOfInfancy`.
- Switches: [CampaignOptions](../CampaignOptions).IsLifeDeathCycleDisabled and `Campaign.Current.MainHeroIllDays`.
- Equipment: [Equipment](../../core-extra/Equipment), `EquipmentHelper.AssignHeroEquipmentFromEquipment` and `Campaign.Current.Models.EquipmentSelectionModel`.
- Traits: the `DefaultTraits.Personality` family plus `Hero.GetTraitLevel` / `SetTraitLevel` and `CharacterObject.GetTraitLevel`.
- Serialization: [IDataStore](../IDataStore).SyncData(string, ref); both dictionaries participate.
