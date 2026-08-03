---
title: "CampaignTime"
description: "A CampaignTimeModel-configured tick value for campaign absolute time and duration, shared by scheduling, deadlines, day/night logic, and saved campaign state."
---
# CampaignTime

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct CampaignTime : IComparable<CampaignTime>`
**Base:** `System.ValueType`; implements `IComparable<CampaignTime>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignTime.cs`

## Overview

`CampaignTime` is an immutable campaign-time value. It stores a `long` tick count; `Now` reads the current position from `Campaign.Current.MapTimeTracker`, while `DeltaTime` represents the most recent advancement. Minutes, hours, days, weeks, seasons, and years are interpreted through the conversion constants loaded from the active `CampaignTimeModel`. The same value type can represent an absolute event time or a duration measured from zero.

## Mental Model

Keep three values distinct: `CampaignTime.Now` is the current instant, `CampaignTime.Days(3f)` is a three-day duration, and `CampaignTime.DaysFromNow(3f)` is an absolute deadline three days ahead. Campaign owns and advances the timeline during map ticks. `CampaignTime.Initialize()` loads calendar and tick constants from `Campaign.Current.Models.CampaignTimeModel`; a mod should not initialize it itself, mutate its internal ticks, or hard-code the number of days in a week or season.

## ↑ Parent Navigation

- [Campaign API index](../)
- [Campaign system architecture](../../../architecture/)

## ↔ Sibling Navigation

- [Campaign](../Campaign): owns the current Campaign and map time tracker.
- [CampaignTimeModel](../CampaignTimeModel): supplies calendar, sunrise/sunset, and tick conversion configuration.
- [MapTimeTracker](../MapTimeTracker): stores `_numTicks` and the current tick delta.

## Children / Related Entry Points

- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) - converts `DeltaTime` into hourly/daily progress for periodic tickers.
- [CampaignBehaviorBase](../CampaignBehaviorBase) - campaign behaviors persist `CampaignTime` fields through `SyncData`.
- [SaveManager](../../save-system/SaveManager) - the owning campaign save persists the time-related state.
- [Hero](../Hero) - death days, births, and age logic share this timeline.

## Dependencies

`CampaignTime.Now` and `DeltaTime` depend on a live [Campaign](../Campaign) and its [MapTimeTracker](../MapTimeTracker). `Initialize()` depends on [CampaignTimeModel](../CampaignTimeModel), supplied through `Campaign.Models`. Downstream, [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) uses `DeltaTime.ToHours` and `ToDays` to drive hourly and daily tickers, while [Campaign](../Campaign) performs the weekly dispatch based on the calendar; campaign behaviors send time values through [IDataStore](../IDataStore); and `Hero`, `MobileParty`, issues, and Actions store absolute times as business fields.

## Lifecycle, Scheduling, and Save Risks

- Reading `Now`, `DeltaTime`, or `Elapsed*UntilNow` from the main menu or before a Campaign exists can fail because `Campaign.Current` is unavailable. Read those values from campaign events, behaviors, or an explicit session lifecycle. `IsDayTime` and `IsNightTime` read the instance tick, but still require `Initialize()` to have loaded calendar constants; do not treat zero-valued constants before initialization as a valid day/night result.
- `Zero` is the zero-tick value commonly used to initialize a field. `Never` is a `long.MaxValue` sentinel, not a scheduler that automatically prevents work. Recognize it before rendering a deadline or computing remaining time.
- The `FromNow` factories read the current map tick. Do not delay a captured “now” across save callbacks, asynchronous work, or entity cleanup; reacquire `CampaignTime.Now` when comparing.
- Calendar constants come from the model. The default fast mode changes `DaysInWeek` and `WeeksInSeason`, so hard-coding `7` or `3` makes week, season, year, and date calculations drift.
- `_numTicks` is persisted by `[SaveableField(2)]`. A custom campaign behavior should save `CampaignTime` through `IDataStore.SyncData`; do not use a floating `ToDays` value as the only save key or introduce a separate `DateTime` timeline.

## Public Member Behavior

### Current time and conversions

`Now` reads the current map tick, and `DeltaTime` reads the increment written by the latest `MapTimeTracker.Tick`. `ToMilliseconds` through `ToYears` convert the same absolute tick to different units. `Elapsed*UntilNow` computes current time minus the stored value, while `Remaining*FromNow` computes stored value minus current time. A past value can therefore have a negative Remaining result; that is a comparison result, not an exception.

### Factories, sentinels, and comparisons

`Milliseconds`, `Seconds`, `Minutes`, `Hours`, `Days`, `Weeks`, and `Years` construct durations from zero. The corresponding `*FromNow` factories add that duration to `CurrentTicks`. `+` and `-` can combine durations and time values, but the caller must preserve the intended semantics. `IsFuture`, `IsPast`, `IsNow`, the comparison operators, and `CompareTo` compare only the internal tick value.

### Calendar and display

`GetHourOfDay`, `GetDayOfWeek`, `GetDayOfSeason`, `GetDayOfYear`, `GetWeekOfSeason`, `GetSeasonOfYear`, and `GetYear` use the model constants already loaded at initialization. `IsDayTime` compares the floored current hour with `SunRise` and `SunSet`; `IsNightTime` is its inverse. `StringSameAs` only checks whether two values fall on the same campaign day, not whether their ticks are equal. `ToString()` uses `str_date_format` and `str_season_*` text entries to produce a localized date.

## Real Examples

### Remove records older than 15 campaign days

This is the real pattern used by `TournamentCampaignBehavior`: store the creation `CampaignTime`, then use `ElapsedDaysUntilNow` during load/daily processing instead of caching a wall-clock timestamp.

```csharp
private Dictionary<Town, CampaignTime> _lastCreatedTournamentDatesInTowns = new Dictionary<Town, CampaignTime>();

private void OnGameLoaded(CampaignGameStarter campaignGameStarter)
{
    foreach (KeyValuePair<Town, CampaignTime> item in _lastCreatedTournamentDatesInTowns.ToList())
    {
        if (item.Value.ElapsedDaysUntilNow >= 15f)
        {
            _lastCreatedTournamentDatesInTowns.Remove(item.Key);
        }
    }
}

private void RememberTournament(Town town)
{
    CampaignTime creationTime = CampaignTime.Now;
    _lastCreatedTournamentDatesInTowns[town] = creationTime;
}

private void OnTownRebelliousStateChanged(Town town, bool rebelliousState)
{
    if (town.InRebelliousState)
    {
        TournamentGame tournamentGame = Campaign.Current.TournamentManager.GetTournamentGame(town);
        if (tournamentGame != null)
        {
            Campaign.Current.TournamentManager.ResolveTournament(tournamentGame, town);
        }
    }
}
```

### Construct an absolute deadline three days ahead

Keep a duration and an absolute time explicit. The deadline can be saved in a behavior field and later checked with `IsPast` or `RemainingDaysFromNow`.

```csharp
private CampaignTime CreateDeadline()
{
    CampaignTime deadline = CampaignTime.DaysFromNow(3f);
    if (deadline.IsFuture && CampaignTime.Now < deadline)
    {
        return deadline;
    }
    return CampaignTime.Never;
}
```

## See Also

- [Campaign API index](../)
- [Campaign](../Campaign)
- [CampaignTimeModel](../CampaignTimeModel)
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
