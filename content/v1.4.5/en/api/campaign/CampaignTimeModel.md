---
title: "CampaignTimeModel"
description: "Auto-generated class reference for CampaignTimeModel."
---
# CampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>`
**Base:** `MBGameModel<CampaignTimeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CampaignTimeModel.cs`

## Overview

`CampaignTimeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CampaignTimeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
// Typically obtained from a subsystem API or factory
CampaignTimeModel instance = ...;
```

## See Also

- [Area Index](../)