---
title: "DefaultCrimeModel"
description: "Auto-generated class reference for DefaultCrimeModel."
---
# DefaultCrimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCrimeModel : CrimeModel`
**Base:** `CrimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs`

## Overview

`DefaultCrimeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCrimeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultCrimeModel` is the shipped answer, not the extension point. The abstract `CrimeModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `CrimeModel` is declared `MBGameModel<CrimeModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<CrimeModel>(new DefaultCrimeModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:271`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyCrimeModel : CrimeModel
{
    // DefaultCrimeModel is public and concrete, so hold one and call through to it
    // instead of reimplementing the other eight abstract members.
    private readonly DefaultCrimeModel _stock = new DefaultCrimeModel();

    public override float GetMaxCrimeRating()
    {
        return _stock.GetMaxCrimeRating();
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<CrimeModel>(new MyCrimeModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultCrimeModel>(new DefaultCrimeModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultCrimeModel` is an `MBGameModel<CrimeModel>`, not an `MBGameModel<DefaultCrimeModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:715`, `GetGameModel<CrimeModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeclareWarCrimeRatingThreshold` | `public override float DeclareWarCrimeRatingThreshold { get; }` |

## Key Methods

### DoesPlayerHaveAnyCrimeRating
`public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

**Purpose:** Returns a boolean answer to whether player have any crime rating is true for the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.DoesPlayerHaveAnyCrimeRating(faction);
```

### IsPlayerCrimeRatingSevere
`public override bool IsPlayerCrimeRatingSevere(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating severe state or condition.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingSevere(faction);
```

### IsPlayerCrimeRatingModerate
`public override bool IsPlayerCrimeRatingModerate(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating moderate state or condition.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingModerate(faction);
```

### IsPlayerCrimeRatingMild
`public override bool IsPlayerCrimeRatingMild(IFaction faction)`

**Purpose:** Determines whether the this instance is in the player crime rating mild state or condition.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.IsPlayerCrimeRatingMild(faction);
```

### GetCost
`public override float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)`

**Purpose:** Reads and returns the cost value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetCost(faction, paymentMethod, 0);
```

### GetDailyCrimeRatingChange
`public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`

**Purpose:** Reads and returns the daily crime rating change value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetDailyCrimeRatingChange(faction, false);
```

### GetMaxCrimeRating
`public override float GetMaxCrimeRating()`

**Purpose:** Reads and returns the max crime rating value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetMaxCrimeRating();
```

### GetMinAcceptableCrimeRating
`public override float GetMinAcceptableCrimeRating(IFaction faction)`

**Purpose:** Reads and returns the min acceptable crime rating value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetMinAcceptableCrimeRating(faction);
```

### GetCrimeRatingAfterPunishment
`public override float GetCrimeRatingAfterPunishment()`

**Purpose:** Reads and returns the crime rating after punishment value held by the this instance.

```csharp
// Obtain an instance of DefaultCrimeModel from the subsystem API first
DefaultCrimeModel defaultCrimeModel = ...;
var result = defaultCrimeModel.GetCrimeRatingAfterPunishment();
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultCrimeModel` for it at `SandBoxManager.cs:271`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyCrimeModel : CrimeModel, so it is already an MBGameModel<CrimeModel>
        gameStarter.AddModel<CrimeModel>(new MyCrimeModel());
    }
}
```

## See Also

- [Area Index](../)