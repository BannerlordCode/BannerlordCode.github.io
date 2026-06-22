<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignTime`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignTime

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** struct (implements `IComparable<CampaignTime>`)  
**File:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CampaignTime.cs`

`CampaignTime` is the time-point / duration value type of the campaign time system. Mods use it for almost any "X days later", "how long ago", "expires at" calculation.

## Overview

`CampaignTime` is immutable, storing milliseconds internally. Common entry points are the static `Now` (current moment), `Never` (never), and `DeltaTime` (this frame's delta). Durations are created via static factories (e.g. `CampaignTime.HoursFromNow(24)`), or converted via the `Elapsed*UntilNow` / `Remaining*FromNow` / `To*` properties. All comparison operators are supported.

## Static members

| Name | Type | Description |
|------|------|-------------|
| Now | CampaignTime | Current campaign moment |
| Never | CampaignTime | "Never" sentinel |
| DeltaTime | CampaignTime | This frame's time delta |
| DaysInSeason | int | Days per season |
| DaysInYear | int | Days per year |

## Main properties

| Name | Type | Description |
|------|------|-------------|
| IsFuture | bool | Whether in the future |
| IsPast | bool | Whether already past |
| IsNow | bool | Whether exactly now |
| IsDayTime / IsNightTime | bool | Whether day / night |
| CurrentHourInDay | float | Hour of the current day |
| ElapsedMillisecondsUntilNow / ElapsedSecondsUntilNow / ElapsedHoursUntilNow / ElapsedDaysUntilNow / ElapsedWeeksUntilNow / ElapsedSeasonsUntilNow / ElapsedYearsUntilNow | float | Elapsed time since now (per unit) |
| RemainingMillisecondsFromNow / RemainingSecondsFromNow / RemainingHoursFromNow / RemainingDaysFromNow / RemainingWeeksFromNow / RemainingSeasonsFromNow / RemainingYearsFromNow | float | Remaining time from now (per unit) |
| ToMilliseconds / ToSeconds / ToMinutes / ToHours / ToDays / ToWeeks / ToSeasons | double | Value converted to each unit |

## Operators & comparison

```csharp
public static bool operator <(CampaignTime x, CampaignTime y);
public static bool operator >(CampaignTime x, CampaignTime y);
public static bool operator <=(CampaignTime x, CampaignTime y);
public static bool operator >=(CampaignTime x, CampaignTime y);
public static bool operator ==(CampaignTime x, CampaignTime y);
public static bool operator !=(CampaignTime x, CampaignTime y);
public int CompareTo(CampaignTime other);
```

## Usage example

```csharp
// Current moment and "3 days later"
CampaignTime now = CampaignTime.Now;
CampaignTime deadline = now + CampaignTime.HoursFromNow(72);  // 3 days

// Check expiry
if (deadline.IsPast)
{
    InformationManager.DisplayMessage(new InformationMessage("Expired"));
}

// Days remaining
float daysLeft = deadline.RemainingDaysFromNow;

// Compare two times
if (hero.DeathDay != CampaignTime.Never && hero.DeathDay < now)
{
    // dead
}
```

::: tip
The source also provides static factories `HoursFromNow` / `DaysFromNow` / `SecondsFromNow` and `+`/`-` operators for building durations. See the source file.
:::

## See also

- [Hero](../campaign/Hero.md)
- [Campaign](./Campaign.md)
- [Town](./Town.md)
