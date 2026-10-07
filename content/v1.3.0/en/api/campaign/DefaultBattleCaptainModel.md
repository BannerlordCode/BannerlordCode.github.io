---
title: "DefaultBattleCaptainModel"
description: "Auto-generated class reference for DefaultBattleCaptainModel."
---
# DefaultBattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleCaptainModel : BattleCaptainModel`
**Base:** `BattleCaptainModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBattleCaptainModel.cs`

## Overview

`DefaultBattleCaptainModel` answers one question — how good a captain is for a given troop type — and it has exactly one method to do it. `GetCaptainRatingForTroopUsages` (`TaleWorlds.CampaignSystem/GameComponents/DefaultBattleCaptainModel.cs:14) asks `PerkHelper` which perks are compatible with the requested usage flags, sums the `RequiredSkillValue` of those the hero actually has (`:22`), and divides by a fixed `1650f` to produce a normalised rating (`:26`). The compatible perks are returned alongside through the `out` parameter, so the caller receives both the number and its justification.

## Mental Model

The `1650f` divisor is the whole design and the whole risk. The rating is not a percentage or a tier — it is a fraction of a constant that only makes sense as the sum of the required skill values of every captain perk for that usage type. Adding a new perk to the game's perk trees therefore moves the rating for every hero, because the denominator is hard-coded rather than derived, and an override that adds perks without rescaling `1650f` will silently push all ratings below 1. The consumer is the order-of-battle view model, which asks twice — `SPOrderOfBattleVM.cs:221` and `:223` for two different usage flags — so the rating is read per formation class rather than once per hero, and a captain can score well for infantry and badly for archers. Because the method returns `0f` for a hero with no compatible perks, a usage type nobody has perks for reads as zero rather than as an error, and the empty `compatiblePerks` list is the only signal distinguishing "no perks exist for this usage" from "this hero has none of them".

## Key Methods

### GetCaptainRatingForTroopUsages
`public override float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)`

**Purpose:** Reads and returns the captain rating for troop usages value held by this instance.

```csharp
DefaultBattleCaptainModel defaultBattleCaptainModel = ...;
var result = defaultBattleCaptainModel.GetCaptainRatingForTroopUsages(hero, flag, compatiblePerks);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BattleCaptainModel>(new DefaultBattleCaptainModel());
}
```

`BattleCaptainModel` is declared as `MBGameModel<BattleCaptainModel>` (`BattleCaptainModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:335`.

## See Also

- [Area Index](../)