---
title: "DefaultKingdomCreationModel"
description: "Auto-generated class reference for DefaultKingdomCreationModel."
---
# DefaultKingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**Base:** `KingdomCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs`

## Overview

`DefaultKingdomCreationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultKingdomCreationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultKingdomCreationModel` is the shipped answer, not the extension point. The abstract `KingdomCreationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `KingdomCreationModel` is declared `MBGameModel<KingdomCreationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<KingdomCreationModel>(new DefaultKingdomCreationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:258`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public class MyKingdomCreationModel : KingdomCreationModel
{
    // The out parameter is the player-facing explanation list. Returning false without
    // filling it leaves the UI with nothing to show, so it must be forwarded.
    private readonly DefaultKingdomCreationModel _stock = new DefaultKingdomCreationModel();

    public override bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)
    {
        return _stock.IsPlayerKingdomCreationPossible(out explanations);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<KingdomCreationModel>(new MyKingdomCreationModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultKingdomCreationModel>(new DefaultKingdomCreationModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultKingdomCreationModel` is an `MBGameModel<KingdomCreationModel>`, not an `MBGameModel<DefaultKingdomCreationModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:661`, `GetGameModel<KingdomCreationModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public override int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public override int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public override int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public override int MaximumNumberOfInitialPolicies { get; }` |

## Key Methods

### IsPlayerKingdomCreationPossible
`public override bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)`

**Purpose:** Determines whether the this instance is in the player kingdom creation possible state or condition.

```csharp
// Obtain an instance of DefaultKingdomCreationModel from the subsystem API first
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.IsPlayerKingdomCreationPossible(explanations);
```

### IsPlayerKingdomAbdicationPossible
`public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)`

**Purpose:** Determines whether the this instance is in the player kingdom abdication possible state or condition.

```csharp
// Obtain an instance of DefaultKingdomCreationModel from the subsystem API first
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.IsPlayerKingdomAbdicationPossible(explanations);
```

### GetAvailablePlayerKingdomCultures
`public override IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()`

**Purpose:** Reads and returns the available player kingdom cultures value held by the this instance.

```csharp
// Obtain an instance of DefaultKingdomCreationModel from the subsystem API first
DefaultKingdomCreationModel defaultKingdomCreationModel = ...;
var result = defaultKingdomCreationModel.GetAvailablePlayerKingdomCultures();
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultKingdomCreationModel` for it at `SandBoxManager.cs:258`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyKingdomCreationModel : KingdomCreationModel, so it is already an MBGameModel<KingdomCreationModel>
        gameStarter.AddModel<KingdomCreationModel>(new MyKingdomCreationModel());
    }
}
```

## See Also

- [Area Index](../)