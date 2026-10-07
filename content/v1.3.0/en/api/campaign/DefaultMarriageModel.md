---
title: "DefaultMarriageModel"
description: "Auto-generated class reference for DefaultMarriageModel."
---
# DefaultMarriageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMarriageModel : MarriageModel`
**Base:** `MarriageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs`

## Overview

`DefaultMarriageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMarriageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultMarriageModel` is the shipped answer, not the extension point. The abstract `MarriageModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MarriageModel` is declared `MBGameModel<MarriageModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MarriageModel>(new DefaultMarriageModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:313`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMarriageModel : MarriageModel
{
    // Eight of the ten members on the base are abstract, so delegating is the whole job.
    private readonly DefaultMarriageModel _stock = new DefaultMarriageModel();

    public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)
    {
        return _stock.IsCoupleSuitableForMarriage(firstHero, secondHero);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MarriageModel>(new MyMarriageModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMarriageModel>(new DefaultMarriageModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMarriageModel` is an `MBGameModel<MarriageModel>`, not an `MBGameModel<DefaultMarriageModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:704`, `GetGameModel<MarriageModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public override int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public override int MinimumMarriageAgeFemale { get; }` |

## Key Methods

### IsCoupleSuitableForMarriage
`public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Determines whether the this instance is in the couple suitable for marriage state or condition.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsCoupleSuitableForMarriage(firstHero, secondHero);
```

### IsClanSuitableForMarriage
`public override bool IsClanSuitableForMarriage(Clan clan)`

**Purpose:** Determines whether the this instance is in the clan suitable for marriage state or condition.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsClanSuitableForMarriage(clan);
```

### NpcCoupleMarriageChance
`public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**Purpose:** Executes the NpcCoupleMarriageChance logic.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.NpcCoupleMarriageChance(firstHero, secondHero);
```

### ShouldNpcMarriageBetweenClansBeAllowed
`public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**Purpose:** Executes the ShouldNpcMarriageBetweenClansBeAllowed logic.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.ShouldNpcMarriageBetweenClansBeAllowed(consideringClan, targetClan);
```

### GetAdultChildrenSuitableForMarriage
`public override List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**Purpose:** Reads and returns the adult children suitable for marriage value held by the this instance.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetAdultChildrenSuitableForMarriage(hero);
```

### GetEffectiveRelationIncrease
`public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**Purpose:** Reads and returns the effective relation increase value held by the this instance.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetEffectiveRelationIncrease(firstHero, secondHero);
```

### IsSuitableForMarriage
`public override bool IsSuitableForMarriage(Hero maidenOrSuitor)`

**Purpose:** Determines whether the this instance is in the suitable for marriage state or condition.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsSuitableForMarriage(maidenOrSuitor);
```

### GetClanAfterMarriage
`public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Reads and returns the clan after marriage value held by the this instance.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetClanAfterMarriage(firstHero, secondHero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMarriageModel` for it at `SandBoxManager.cs:313`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMarriageModel : MarriageModel, so it is already an MBGameModel<MarriageModel>
        gameStarter.AddModel<MarriageModel>(new MyMarriageModel());
    }
}
```

## See Also

- [Area Index](../)