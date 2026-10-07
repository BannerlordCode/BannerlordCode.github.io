---
title: "DefaultBarterModel"
description: "Auto-generated class reference for DefaultBarterModel."
---
# DefaultBarterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBarterModel : BarterModel`
**Base:** `BarterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs`

## Overview

`DefaultBarterModel` prices the barter screen: how often a hero may be bargained with, how much of their gold is reachable, and what extra goodwill the player buys by overpaying. A hero has a three-day barter cooldown (`TaleWorlds.CampaignSystem/GameComponents/DefaultBarterModel.cs:20`) and at most a quarter of their gold can be spent (`:40`). Overpaying for relation is priced on a quadratic curve — the nth point of relation costs `1000 + 100 × n²` (`:53`) — and the method spends the overpay amount against those costs one point at a time, rolling a partial `MBRandom.RandomFloat` against the next unaffordable point so the final relation point is probabilistic rather than deterministic (`:62`, `:64`). A flat penalty of `0.4f` applies whenever the bargained-with faction is the hero's own clan or map faction or the other party's map faction (`:81`, `:83`).

## Mental Model

The overpay calculation is the part to read carefully, because it is a loop with an early exit rather than a closed-form price. It computes the hero's current relation, clamps the target at `MaximumOverpayRelationBonus` above it and at −100 below (`:48`), then walks upward one relation point at a time, subtracting each point's quadratic price from the remaining overpay and breaking as soon as the amount can no longer cover the next point (`:51`, `:57`, `:67`). The consequence is that overpaying has a hard ceiling at whatever the remaining gold reaches — the player can approach the next relation point but the model will not go into debt to complete it — and the Charm Tribute perk multiplies the number of points bought only after the walk (`:70`, `:72`), so it cannot rescue a purchase that the loop stopped short of. The penalty is a multiplier, not an additive cost: `ItemBarterable.cs:77` reads `GetBarterPenalty(...).ResultNumber` and multiplies by it, so raising the returned value makes every barter with that faction more expensive across the board rather than on one item.

## Key Properties

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public override int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public override float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## Key Methods

### CalculateOverpayRelationIncreaseCosts
`public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`

**Purpose:** Calculates the current value or result of overpay relation increase costs.

```csharp
DefaultBarterModel defaultBarterModel = ...;
var result = defaultBarterModel.CalculateOverpayRelationIncreaseCosts(hero, 0);
```

### GetBarterPenalty
`public override ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

**Purpose:** Reads and returns the barter penalty value held by this instance.

```csharp
DefaultBarterModel defaultBarterModel = ...;
var result = defaultBarterModel.GetBarterPenalty(faction, itemBarterable, otherHero, otherParty);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BarterModel>(new DefaultBarterModel());
}
```

`BarterModel` is declared as `MBGameModel<BarterModel>` (`BarterModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:300`.

## See Also

- [Area Index](../)