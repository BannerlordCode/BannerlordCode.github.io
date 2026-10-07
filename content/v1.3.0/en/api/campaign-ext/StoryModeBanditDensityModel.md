---
title: "StoryModeBanditDensityModel"
description: "Auto-generated class reference for StoryModeBanditDensityModel."
---
# StoryModeBanditDensityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**Base:** `BanditDensityModel`
**File:** `StoryMode/GameComponents/StoryModeBanditDensityModel.cs`

## Overview

`StoryModeBanditDensityModel` is almost entirely a pass-through, and the four exceptions are all the same rule: while the storyline restricts player interaction, bandit spawning is switched off by returning zero. The four properties that gate it are the hideout counts — parties around a hideout, parties inside a hideout, hideouts per bandit faction, initial hideouts per faction (`StoryMode/GameComponents/StoryModeBanditDensityModel.cs:17`, `:31`, `:45`, `:59`) — plus `GetMaxSupportedNumberOfLootersForClan`, which returns `0` rather than a faction looter cap (`:132`). Every other member, from `NumberOfMinimumBanditTroopsInHideoutMission` to `IsPositionInsideNavalSafeZone`, forwards verbatim to `base.BaseModel` with no story condition at all.

## Mental Model

Model this as a zeroing decorator over the sandbox bandit rules rather than as a density calculator — the shape to expect is "check the story flag, otherwise delegate". The values being zeroed are read all over the campaign AI, not just where bandits spawn: `AiLandBanditPatrollingBehavior.cs:38` compares the number of parties in a settlement against `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`, and `SandBoxMissions.cs:689` asks `GetMaximumTroopCountForHideoutMission` for the player roster. During a restricted segment those reads see the unzeroed passthrough values, so a behaviour that depends on a minimum can still fire while the properties that would create the bandits return nothing — the game empties existing parties without removing the logic that patrols them. A mod that wants bandits during a restricted phase must override the specific property and return the sandbox value rather than a constant, because the sandbox constants are not exposed as public fields on this class.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout { get; }` |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction { get; }` |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission { get; }` |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout { get; }` |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission { get; }` |

## Key Methods

### GetMaximumTroopCountForHideoutMission
`public override int GetMaximumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Reads and returns the maximum troop count for hideout mission value held by this instance.

```csharp
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMaximumTroopCountForHideoutMission(party);
```

### IsPositionInsideNavalSafeZone
`public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)`

**Purpose:** Determines whether this instance is in the position inside naval safe zone state or condition.

```csharp
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.IsPositionInsideNavalSafeZone(position);
```

### GetMaxSupportedNumberOfLootersForClan
`public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)`

**Purpose:** Reads and returns the max supported number of looters for clan value held by this instance.

```csharp
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMaxSupportedNumberOfLootersForClan(clan);
```

### GetMinimumTroopCountForHideoutMission
`public override int GetMinimumTroopCountForHideoutMission(MobileParty party)`

**Purpose:** Reads and returns the minimum troop count for hideout mission value held by this instance.

```csharp
StoryModeBanditDensityModel storyModeBanditDensityModel = ...;
var result = storyModeBanditDensityModel.GetMinimumTroopCountForHideoutMission(party);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BanditDensityModel>(new StoryModeBanditDensityModel());
}
```

`BanditDensityModel` is declared as `MBGameModel<BanditDensityModel>` (`BanditDensityModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:90`.

## See Also

- [Area Index](../)