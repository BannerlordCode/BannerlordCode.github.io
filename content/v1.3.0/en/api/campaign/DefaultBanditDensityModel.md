---
title: "DefaultBanditDensityModel"
description: "Auto-generated class reference for DefaultBanditDensityModel."
---
# DefaultBanditDensityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs`

## Overview

`DefaultBanditDensityModel` supplies every number the bandit system uses to size the world, and half of them scale with the player's campaign progress so the map gets harder as the campaign runs. The fixed population constants are: 2 bandit parties to infest a hideout, at most 4 parties inside one and 4 around it, 8 hideouts per bandit faction and 6 at the start (`TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs:18`, `:28`, `:38`, `:48`, `:58`). The two fight sizes are the ones that move: a hideout's first fight is `floor(6 × (2 + PlayerProgress))` troops and its boss fight is `floor(1 + 5 × (1 + PlayerProgress))` (`:78`, `:88`), so at progress 0 a first fight is 12 troops and a boss fight 6. Looter support is capped at 300 per clan, except the deserter clan at 50 and the looters faction at 300 minus however many war parties the deserters already have (`:126`, `:131`). The player's own hideout budget is a flat 25 minimum and a 40 maximum that rises by the SmallUnitTactics perk bonus (`:119`, `:139`).

## Mental Model

The properties are read as plain values from campaign behaviours and mission setup with no caching, which makes an override cheap but means the numbers are consulted in unrelated places. `AiLandBanditPatrollingBehavior.cs:38` and `:75` compare the number of parties in a settlement against `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`, while `SandBoxMissions.cs:689` and `:731` ask `GetMaximumTroopCountForHideoutMission` when building the player's priority roster — the same model feeding both AI decisions and the player's own mission setup. Two consequences follow. The progress-scaled properties read `Campaign.Current.PlayerProgress` at call time, so a value captured at campaign start is stale and a mod that caches them must refresh on day tick. And `IsPositionInsideNavalSafeZone` returns `false` unconditionally (`:150`), which means no position is inside a safe zone — that is a world-wide statement, not a placeholder, and any mod introducing one must override the method rather than expecting the stock model to detect a new region.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission { get; }` |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout { get; }` |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission { get; }` |

## Key Methods

### GetMinimumTroopCountForHideoutMission
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Reads and returns the minimum troop count for hideout mission value held by this instance.

```csharp
DefaultBanditDensityModel defaultBanditDensityModel = ...;
var result = defaultBanditDensityModel.GetMinimumTroopCountForHideoutMission(party);
```

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**Purpose:** Reads and returns the max supported number of looters for clan value held by this instance.

```csharp
DefaultBanditDensityModel defaultBanditDensityModel = ...;
var result = defaultBanditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan);
```

### GetMaximumTroopCountForHideoutMission
`public override int GetMaximumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Reads and returns the maximum troop count for hideout mission value held by this instance.

```csharp
DefaultBanditDensityModel defaultBanditDensityModel = ...;
var result = defaultBanditDensityModel.GetMaximumTroopCountForHideoutMission(party);
```

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** Determines whether this instance is in the position inside naval safe zone state or condition.

```csharp
DefaultBanditDensityModel defaultBanditDensityModel = ...;
var result = defaultBanditDensityModel.IsPositionInsideNavalSafeZone(position);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BanditDensityModel>(new DefaultBanditDensityModel());
}
```

`BanditDensityModel` is declared as `MBGameModel<BanditDensityModel>` (`BanditDensityModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:262`.

## See Also

- [Area Index](../)