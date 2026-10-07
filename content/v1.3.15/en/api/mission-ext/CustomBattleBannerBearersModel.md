---
title: "CustomBattleBannerBearersModel"
description: "Auto-generated class reference for CustomBattleBannerBearersModel."
---
# CustomBattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs`

## Overview

`CustomBattleBannerBearersModel` is the stock implementation of
[`BattleBannerBearersModel`](../BattleBannerBearersModel) — it supplies all nine abstract policy members with
the base game's actual numbers, and `EditorGame` registers it at `EditorGame.cs:57`. Reading it is the
fastest way to learn what the banner rules really are, because every threshold is a literal in one place.

The rules it encodes:

- `GetMinimumFormationTroopCountToBearBanners` returns **2** (`CustomBattleBannerBearersModel.cs:18`) — a
  formation of two men can field a banner.
- `GetBannerInteractionDistance` is **1.5** on foot and **3** mounted
  (`CustomBattleBannerBearersModel.cs:24`).
- `CanAgentPickUpAnyBanner` is a five-clause conjunction: human, no banner already,
  `CanBeAssignedForScriptedMovement()`, not panicked, and not mid-important-combat
  (`CustomBattleBannerBearersModel.cs:40`).
- `CanAgentBecomeBannerBearer` excludes the main agent, heroes, and the side's general, and requires AI
  control (`CustomBattleBannerBearersModel.cs:57`).
- `GetDesiredNumberOfBannerBearersForFormation` is **always 1** — or `0` when the formation cannot deploy
  (`CustomBattleBannerBearersModel.cs:104`).

Three static caches do the expensive work once. `_missionSpawnLogic` is resolved lazily on the first
`CanAgentBecomeBannerBearer` call (`CustomBattleBannerBearersModel.cs:46`), and `ReplacementWeapons`
enumerates every one-handed-sword `ItemObject` in the object manager on first use
(`CustomBattleBannerBearersModel.cs:112`). `BannerBearerPriorityPerTier` is a fixed seven-entry lookup
table (`CustomBattleBannerBearersModel.cs:144`).

## Mental Model

Read it as "the documented policy with three one-shot caches bolted on", and mind the cache lifetimes. The
boundaries:

- **The static caches are never invalidated.** `_missionSpawnLogic` is assigned once and kept for the life
  of the process (`CustomBattleBannerBearersModel.cs:150`), so a second mission in the same session reuses
  the *first* mission's spawn logic instance. `ReplacementWeapons` likewise caches the object list forever
  (`CustomBattleBannerBearersModel.cs:147`) — an item object added by a later module is never seen.
- **The priority table is not monotonic.** `BannerBearerPriorityPerTier` is
  `{ 0, 1, 3, 5, 6, 4, 2 }` (`CustomBattleBannerBearersModel.cs:144`) — tier 4 outranks tier 5, and tier 6
  is the *lowest* non-zero value. The index comes from `Character.Level / 4 + 1`, capped at the table's last
  index (`CustomBattleBannerBearersModel.cs:82`), so high-level soldiers are deliberately *not* the most
  likely bearers. Do not read it as a difficulty curve.
- **`GetAgentBannerBearingPriority` returns three different sentinels.** `0` for "cannot bear"
  (`CustomBattleBannerBearersModel.cs:68`), `0` again when the agent's mountedness disagrees with its
  formation's (`CustomBattleBannerBearersModel.cs:75`), and `int.MaxValue` for "already carrying a banner"
  (`CustomBattleBannerBearersModel.cs:80`) so an existing bearer is never displaced.
- **`CanFormationDeployBannerBearers` reaches into the injected logic**, not through the base class's
  forwarding helper (`CustomBattleBannerBearersModel.cs:89`), so it correctly returns `false` when the logic
  is absent — but it also enumerates `UnitsWithoutLooseDetachedOnes` and re-checks every agent
  (`CustomBattleBannerBearersModel.cs:90`), which is a per-call cost on a hot AI path.
- **`GetBannerBearerReplacementWeapon` is culture-filtered and can return null.** If no one-handed sword
  matches the agent's culture, the `Where` yields nothing and `GetRandomElementInefficiently` is called on
  an empty sequence (`CustomBattleBannerBearersModel.cs:140`). The only guard is the earlier
  `ReplacementWeapons.IsEmpty` check (`CustomBattleBannerBearersModel.cs:122`), which tests the *cached
  list*, not the *filtered* one.

## How to use

**Getting one.** It is already registered — read it with `MissionGameModels.Current.BattleBannerBearersModel`.
To change the numbers, register your own subclass where `EditorGame` registers this one.

```csharp
using TaleWorlds.MountAndBlade.ComponentInterfaces;

// One, at game start - replaces the stock policy (EditorGame.cs:57).
basicGameStarter.AddModel<BattleBannerBearersModel>(new MyBannerBearersModel());

public class MyBannerBearersModel : CustomBattleBannerBearersModel
{
    // Stock returns 2 (CustomBattleBannerBearersModel.cs:18).
    public override int GetMinimumFormationTroopCountToBearBanners() { return 10; }

    // Inherits CanAgentPickUpAnyBanner, CanAgentBecomeBannerBearer, the priority table
    // and the replacement-weapon logic unchanged.
    public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)
    {
        // Stock caps this at 1 (CustomBattleBannerBearersModel.cs:104).
        return base.GetDesiredNumberOfBannerBearersForFormation(formation) > 0 ? 2 : 0;
    }
}
```

**The mistake that bites.** Subclassing it and calling `base.CanAgentBecomeBannerBearer(agent)` — or
otherwise reusing the inherited `CanAgentPickUpAnyBanner` — across two missions in one session. The
`CanAgentBecomeBannerBearer` path caches `Mission.Current.GetMissionBehavior<MissionAgentSpawnLogic>()`
into a **static** field on first use (`CustomBattleBannerBearersModel.cs:46`) and never refreshes it, so
from the second mission onward the model is asking the *first* mission's spawn logic for
`GetGeneralCharacterOfSide`. General exclusion silently stops working and any side whose general changed
between missions gets the wrong answer, with no error.



## Key Methods

### GetMinimumFormationTroopCountToBearBanners
`public override int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** Reads and returns the minimum formation troop count to bear banners value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public override float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** Reads and returns the banner interaction distance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** Checks whether the this instance meets the preconditions for banner bearer provide effect to formation.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public override bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for agent pick up any banner.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public override bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for agent become banner bearer.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public override int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** Reads and returns the agent banner bearing priority value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public override bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** Checks whether the this instance meets the preconditions for formation deploy banner bearers.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** Reads and returns the desired number of banner bearers for formation value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** Reads and returns the banner bearer replacement weapon value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleBannerBearersModel>(new MyCustomBattleBannerBearersModel());
```

## See Also

- [Area Index](../)
- [BattleBannerBearersModel](../BattleBannerBearersModel)
- [CustomBattleMoraleModel](../CustomBattleMoraleModel)
- [CustomBattleAgentStatCalculateModel](../CustomBattleAgentStatCalculateModel)
- [中文页面](../../../../zh/api/mission-ext/CustomBattleBannerBearersModel)