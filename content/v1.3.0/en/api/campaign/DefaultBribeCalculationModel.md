---
title: "DefaultBribeCalculationModel"
description: "Auto-generated class reference for DefaultBribeCalculationModel."
---
# DefaultBribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**Base:** `BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`

## Overview

`DefaultBribeCalculationModel` prices entry into a lord's hall or a dungeon, and it is built out of four stacked components rather than one lookup. `IsBribeNotNeededToEnterKeep` and `IsBribeNotNeededToEnterDungeon` do not compute a price at all — they ask `SettlementAccessModel` for an `AccessDetails` and report whether access is full, or limited with some solution other than a bribe (`TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs:17`, `:25`). When a bribe *is* needed, `GetBribeInternal` sums four terms: a base value from the settlement's map faction (5000 at war with the player's clan, 3000 at war with the player's faction, 100 when neutral, and 0 in every remaining branch) (`:75`–`:95`); a fifth of the crime model's gold cost, itself divided by 5 (`:39`, `:40`); a renown penalty of `(500 − renown) × 15 / 10` when the player clan has under 500 renown, floored so the total never drops below 50 (`:86`–`:89`); and finally a Roguery discount that scales the total down to a multiple of 25 (`:29`, `:92`). Already-paid bribe is subtracted at the end, never added (`:93`).

## Mental Model

The rounding order is the part that decides the real price, because it is not commutative. The sum is divided by 25, truncated to an integer, then multiplied back by 25 (`:92`) — so everything is rounded *down* to the nearest 25 denars, and only after that is the already-paid amount subtracted (`:93`). A mod adding a term to the middle of `GetBribeInternal` inherits the truncation, so a component smaller than 25 is free at low prices and can vanish entirely once the total rounds down. The dungeon price is not a separate calculation: `GetBribeToEnterDungeon` delegates straight to `GetBribeToEnterLordsHall` (`:85`), so a lord's hall and a dungeon in the same town always cost the same, and an override of only the hall method silently reprices the dungeon too. The consumers are the guard behaviour: `GuardsCampaignBehavior.cs:517` reads the dungeon price when deciding whether to offer the bribe option, and `:534` compares `Settlement.BribePaid` against it to decide whether entry is already unlocked — which is why the subtraction at `:93` is safe to remove and dangerous to move.

## Key Methods

### IsBribeNotNeededToEnterKeep
`public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**Purpose:** Determines whether this instance is in the bribe not needed to enter keep state or condition.

```csharp
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.IsBribeNotNeededToEnterKeep(settlement);
```

### IsBribeNotNeededToEnterDungeon
`public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**Purpose:** Determines whether this instance is in the bribe not needed to enter dungeon state or condition.

```csharp
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.IsBribeNotNeededToEnterDungeon(settlement);
```

### GetBribeToEnterLordsHall
`public override int GetBribeToEnterLordsHall(Settlement settlement)`

**Purpose:** Reads and returns the bribe to enter lords hall value held by this instance.

```csharp
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.GetBribeToEnterLordsHall(settlement);
```

### GetBribeToEnterDungeon
`public override int GetBribeToEnterDungeon(Settlement settlement)`

**Purpose:** Reads and returns the bribe to enter dungeon value held by this instance.

```csharp
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.GetBribeToEnterDungeon(settlement);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BribeCalculationModel>(new DefaultBribeCalculationModel());
}
```

`BribeCalculationModel` is declared as `MBGameModel<BribeCalculationModel>` (`BribeCalculationModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:273`.

## See Also

- [Area Index](../)