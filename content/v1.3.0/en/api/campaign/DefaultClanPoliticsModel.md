---
title: "DefaultClanPoliticsModel"
description: "Auto-generated class reference for DefaultClanPoliticsModel."
---
# DefaultClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**Base:** `ClanPoliticsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs`

## Overview

`DefaultClanPoliticsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanPoliticsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultClanPoliticsModel` is the shipped answer, not the extension point. The abstract `ClanPoliticsModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `ClanPoliticsModel` is declared `MBGameModel<ClanPoliticsModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<ClanPoliticsModel>(new DefaultClanPoliticsModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:305`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyClanPoliticsModel : ClanPoliticsModel
{
    // DefaultClanPoliticsModel is public and concrete, so hold one and call through to it
    // rather than reimplementing the other four members.
    private readonly DefaultClanPoliticsModel _stock = new DefaultClanPoliticsModel();

    public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)
    {
        return _stock.CalculateInfluenceChange(clan, includeDescriptions);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<ClanPoliticsModel>(new MyClanPoliticsModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultClanPoliticsModel>(new DefaultClanPoliticsModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultClanPoliticsModel` is an `MBGameModel<ClanPoliticsModel>`, not an `MBGameModel<DefaultClanPoliticsModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:697`, `GetGameModel<ClanPoliticsModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### CalculateInfluenceChange
`public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of influence change.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateInfluenceChange(clan, false);
```

### CalculateSupportForPolicyInClan
`public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**Purpose:** Calculates the current value or result of support for policy in clan.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateSupportForPolicyInClan(clan, policy);
```

### CalculateRelationshipChangeWithSponsor
`public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**Purpose:** Calculates the current value or result of relationship change with sponsor.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateRelationshipChangeWithSponsor(clan, sponsorClan);
```

### GetInfluenceRequiredToOverrideKingdomDecision
`public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**Purpose:** Reads and returns the influence required to override kingdom decision value held by the this instance.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.GetInfluenceRequiredToOverrideKingdomDecision(popularOption, overridingOption, decision);
```

### CanHeroBeGovernor
`public override bool CanHeroBeGovernor(Hero hero)`

**Purpose:** Checks whether the this instance meets the preconditions for hero be governor.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CanHeroBeGovernor(hero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultClanPoliticsModel` for it at `SandBoxManager.cs:305`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyClanPoliticsModel : ClanPoliticsModel, so it is already an MBGameModel<ClanPoliticsModel>
        gameStarter.AddModel<ClanPoliticsModel>(new MyClanPoliticsModel());
    }
}
```

## See Also

- [Area Index](../)