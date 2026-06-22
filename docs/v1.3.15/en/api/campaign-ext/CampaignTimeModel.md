<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignTimeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>`
**Base:** `MBGameModel<CampaignTimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs`

## Overview

`CampaignTimeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CampaignTimeModel>(new MyCampaignTimeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `CampaignStartTime` | `public abstract CampaignTime CampaignStartTime { get; }` |
| `SunRise` | `public abstract int SunRise { get; }` |
| `SunSet` | `public abstract int SunSet { get; }` |
| `TimeTicksPerMillisecond` | `public abstract long TimeTicksPerMillisecond { get; }` |
| `MillisecondInSecond` | `public abstract int MillisecondInSecond { get; }` |
| `SecondsInMinute` | `public abstract int SecondsInMinute { get; }` |
| `MinutesInHour` | `public abstract int MinutesInHour { get; }` |
| `HoursInDay` | `public abstract int HoursInDay { get; }` |
| `DaysInWeek` | `public abstract int DaysInWeek { get; }` |
| `WeeksInSeason` | `public abstract int WeeksInSeason { get; }` |
| `SeasonsInYear` | `public abstract int SeasonsInYear { get; }` |

## Usage Example

```csharp
// Typical usage of CampaignTimeModel (Model)
Game.Current.ReplaceModel<CampaignTimeModel>(new MyCampaignTimeModel());
```

## See Also

- [Complete Class Catalog](../catalog)