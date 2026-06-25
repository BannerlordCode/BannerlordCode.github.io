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

`DefaultCampaignTimeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCampaignTimeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
Game.Current.ReplaceModel<DefaultCampaignTimeModel>(new MyDefaultCampaignTimeModel());
```

## See Also

- [Area Index](../)