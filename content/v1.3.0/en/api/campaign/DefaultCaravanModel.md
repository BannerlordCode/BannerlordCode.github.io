---
title: "DefaultCaravanModel"
description: "Auto-generated class reference for DefaultCaravanModel."
---
# DefaultCaravanModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCaravanModel : CaravanModel`
**Base:** `CaravanModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs`

## Overview

`DefaultCaravanModel` prices and gates the player's own trading caravans. Forming one costs 15000 gold, or 22500 for a large caravan, with the Aserai trader cultural feat multiplying that figure (`TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs:62`, `:65`). The caravan starts with 10000 gold, 15000 if large, plus a flat 5000 more when the owner is the main hero (`:73`, `:74`, `:77`). Spending is capped twice and independently: at most 300 items may be bought from any single category (`:21`) and at most 1500 gold per category (`:85`). Hero power is the gate in both directions — an elite caravan only spawns for a hero of at least 112 power, with the chance rising as `power × 0.0045 − 0.5` (`:29`, `:31`), and forming a caravan costs a hero 30 power once they are above 50 (`:39`, `:41`). `CanHeroCreateCaravan` requires the hero to be a merchant with no party, no enabled caravans already, and the ability to lead a party (`:49`–`:53`).

## Mental Model

Separate the player-facing costs from the AI-facing ones, because they are consumed in different places and fail differently. `CaravanConversationsCampaignBehavior.cs:308` and `:310` read `GetCaravanFormingCost` for the two conversation options that offer a caravan, so the two booleans on that method select between large and naval variants — the naval flag is accepted and priced identically to the small variant (`:62`), which is worth knowing before assuming a naval caravan costs more. Everything else is read by the AI merchant behaviour, which means the power thresholds are AI economics rather than player rules: the elite spawn chance formula means a hero needs power of at least 223 before the chance exceeds 100%, so in practice only very powerful merchants ever get one, and the 30-power creation cost is what makes caravan spam self-limiting above the 50-power line. A mod overriding the costs should leave `GetPowerChangeAfterCaravanCreation` alone, because the AI's willingness to form caravans depends on that cost being non-zero even though the player never sees it charged.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public override int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## Key Methods

### GetEliteCaravanSpawnChance
`public override float GetEliteCaravanSpawnChance(Hero hero)`

**Purpose:** Reads and returns the elite caravan spawn chance value held by this instance.

```csharp
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetEliteCaravanSpawnChance(hero);
```

### GetPowerChangeAfterCaravanCreation
`public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`

**Purpose:** Reads and returns the power change after caravan creation value held by this instance.

```csharp
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetPowerChangeAfterCaravanCreation(hero, caravanParty);
```

### CanHeroCreateCaravan
`public override bool CanHeroCreateCaravan(Hero hero)`

**Purpose:** Checks whether this instance meets the preconditions for hero create caravan.

```csharp
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.CanHeroCreateCaravan(hero);
```

### GetCaravanFormingCost
`public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)`

**Purpose:** Reads and returns the caravan forming cost value held by this instance.

```csharp
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetCaravanFormingCost(false, false);
```

### GetInitialTradeGold
`public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)`

**Purpose:** Reads and returns the initial trade gold value held by this instance.

```csharp
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetInitialTradeGold(owner, false, false);
```

### GetMaxGoldToSpendOnOneItemCategory
`public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`

**Purpose:** Reads and returns the max gold to spend on one item category value held by this instance.

```csharp
DefaultCaravanModel defaultCaravanModel = ...;
var result = defaultCaravanModel.GetMaxGoldToSpendOnOneItemCategory(caravan, itemCategory);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<CaravanModel>(new DefaultCaravanModel());
}
```

`CaravanModel` is declared as `MBGameModel<CaravanModel>` (`CaravanModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:236`.

## See Also

- [Area Index](../)