---
title: "DefaultClanTierModel"
description: "Auto-generated class reference for DefaultClanTierModel."
---
# DefaultClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanTierModel : ClanTierModel`
**Base:** `ClanTierModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanTierModel.cs`

## Overview

`DefaultClanTierModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanTierModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultClanTierModel` is the shipped answer, not the extension point. The abstract `ClanTierModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `ClanTierModel` is declared `MBGameModel<ClanTierModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<ClanTierModel>(new DefaultClanTierModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:302`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyClanTierModel : ClanTierModel
{
    // DefaultClanTierModel is public and concrete, so hold one and call through to it
    // instead of reimplementing the other six abstract members.
    private readonly DefaultClanTierModel _stock = new DefaultClanTierModel();

    public override int CalculateInitialRenown(Clan clan)
    {
        return _stock.CalculateInitialRenown(clan);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<ClanTierModel>(new MyClanTierModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultClanTierModel>(new DefaultClanTierModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultClanTierModel` is an `MBGameModel<ClanTierModel>`, not an `MBGameModel<DefaultClanTierModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:695`, `GetGameModel<ClanTierModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinClanTier` | `public override int MinClanTier { get; }` |
| `MaxClanTier` | `public override int MaxClanTier { get; }` |
| `MercenaryEligibleTier` | `public override int MercenaryEligibleTier { get; }` |
| `VassalEligibleTier` | `public override int VassalEligibleTier { get; }` |
| `BannerEligibleTier` | `public override int BannerEligibleTier { get; }` |
| `RebelClanStartingTier` | `public override int RebelClanStartingTier { get; }` |
| `CompanionToLordClanStartingTier` | `public override int CompanionToLordClanStartingTier { get; }` |

## Key Methods

### CalculateInitialRenown
`public override int CalculateInitialRenown(Clan clan)`

**Purpose:** Calculates the current value or result of initial renown.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateInitialRenown(clan);
```

### CalculateInitialInfluence
`public override int CalculateInitialInfluence(Clan clan)`

**Purpose:** Calculates the current value or result of initial influence.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateInitialInfluence(clan);
```

### CalculateTier
`public override int CalculateTier(Clan clan)`

**Purpose:** Calculates the current value or result of tier.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateTier(clan);
```

### HasUpcomingTier
`public override ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

**Purpose:** Determines whether the this instance already holds upcoming tier.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.HasUpcomingTier(clan, extraExplanation, false);
```

### GetRequiredRenownForTier
`public override int GetRequiredRenownForTier(int tier)`

**Purpose:** Reads and returns the required renown for tier value held by the this instance.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetRequiredRenownForTier(0);
```

### GetPartyLimitForTier
`public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**Purpose:** Reads and returns the party limit for tier value held by the this instance.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetPartyLimitForTier(clan, 0);
```

### GetCompanionLimit
`public override int GetCompanionLimit(Clan clan)`

**Purpose:** Reads and returns the companion limit value held by the this instance.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetCompanionLimit(clan);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultClanTierModel` for it at `SandBoxManager.cs:302`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyClanTierModel : ClanTierModel, so it is already an MBGameModel<ClanTierModel>
        gameStarter.AddModel<ClanTierModel>(new MyClanTierModel());
    }
}
```

## See Also

- [Area Index](../)