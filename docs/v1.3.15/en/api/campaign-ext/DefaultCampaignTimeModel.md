<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCampaignTimeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignTimeModel : CampaignTimeModel`
**Base:** `CampaignTimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`

## Overview

`DefaultCampaignTimeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCampaignTimeModel>(new MyDefaultCampaignTimeModel())` to change how it computes.

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
// Typical usage of DefaultCampaignTimeModel (Model)
Game.Current.ReplaceModel<DefaultCampaignTimeModel>(new MyDefaultCampaignTimeModel());
```

## See Also

- [Complete Class Catalog](../catalog)