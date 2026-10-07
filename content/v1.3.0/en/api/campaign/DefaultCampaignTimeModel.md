---
title: "DefaultCampaignTimeModel"
description: "Auto-generated class reference for DefaultCampaignTimeModel."
---
# DefaultCampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignTimeModel : CampaignTimeModel`
**Base:** `CampaignTimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`

## Overview

`DefaultCampaignTimeModel` defines the calendar the whole campaign runs on, and every value in it is a hard-coded constant. A new campaign starts in the year 1084, one full season in, at nine in the morning (`TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs:15`). Sunrise is at hour 2 and sunset at hour 22 (`:25`, `:35`), giving a 20-hour day of usable light inside a 24-hour day. The rest of the members are the unit conversions the rest of the engine divides by: 1000 milliseconds per second at 10 campaign ticks each, 60 seconds per minute, 60 minutes per hour, 24 hours per day, 7 days per week, 3 weeks per season and 4 seasons per year (`:45`, `:55`, `:65`, `:75`, `:85`, `:95`, `:105`, `:115`).

## Mental Model

These are not conveniences — they are the units every other model's durations are written in, which makes them a load-bearing convention rather than a preference. A mod that changes `WeeksInSeason` does not just rescale the calendar: `CampaignTime.Weeks(...)` is evaluated against the same constants, so a duration expressed in weeks silently becomes a different number of in-game days. The most-used members in practice are the simple integer properties, and one example shows the intended use: `DefaultArmyManagementCalculationModel.cs:99` computes its three-hour maximum wait as `CampaignTime.HoursInDay * 3f` rather than writing 72, so it follows whatever day length the campaign defines. `CampaignStartTime` is read as the origin for elapsed-time statistics at `StatisticsCampaignBehavior.cs:675` and, notably, by the tutorial at `LocateAndRescueTravellerTutorialQuest.cs:363`, which uses its elapsed hours to decide the tutorial has run long enough — so shifting the start date changes tutorial pacing as a side effect. The tick rate at `:45` is the separate concern of how finely time is represented, and it is the one value that must stay consistent with `MillisecondInSecond` at `:55`.

## Key Properties

| Name | Signature |
|------|-----------|
| `CampaignStartTime` | `public override CampaignTime CampaignStartTime { get; }` |
| `SunRise` | `public override int SunRise { get; }` |
| `SunSet` | `public override int SunSet { get; }` |
| `TimeTicksPerMillisecond` | `public override long TimeTicksPerMillisecond { get; }` |
| `MillisecondInSecond` | `public override int MillisecondInSecond { get; }` |
| `SecondsInMinute` | `public override int SecondsInMinute { get; }` |
| `MinutesInHour` | `public override int MinutesInHour { get; }` |
| `HoursInDay` | `public override int HoursInDay { get; }` |
| `DaysInWeek` | `public override int DaysInWeek { get; }` |
| `WeeksInSeason` | `public override int WeeksInSeason { get; }` |
| `SeasonsInYear` | `public override int SeasonsInYear { get; }` |

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<CampaignTimeModel>(new DefaultCampaignTimeModel());
}
```

`CampaignTimeModel` is declared as `MBGameModel<CampaignTimeModel>` (`CampaignTimeModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:344`.

## See Also

- [Area Index](../)