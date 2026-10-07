---
title: "DefaultPartyImpairmentModel"
description: "Auto-generated class reference for DefaultPartyImpairmentModel."
---
# DefaultPartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**Base:** `PartyImpairmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`

## Overview

`DefaultPartyImpairmentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyImpairmentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultPartyImpairmentModel` is the shipped answer, not the extension point. The abstract `PartyImpairmentModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `PartyImpairmentModel` is declared `MBGameModel<PartyImpairmentModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<PartyImpairmentModel>(new DefaultPartyImpairmentModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:248`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyPartyImpairmentModel : PartyImpairmentModel
{
    // All four members on the base are abstract, so delegating is the whole job.
    private readonly DefaultPartyImpairmentModel _stock = new DefaultPartyImpairmentModel();

    public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)
    {
        return _stock.GetDisorganizedStateDuration(party);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<PartyImpairmentModel>(new MyPartyImpairmentModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultPartyImpairmentModel>(new DefaultPartyImpairmentModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultPartyImpairmentModel` is an `MBGameModel<PartyImpairmentModel>`, not an `MBGameModel<DefaultPartyImpairmentModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:652`, `GetGameModel<PartyImpairmentModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetSiegeExpectedVulnerabilityTime
`public override float GetSiegeExpectedVulnerabilityTime()`

**Purpose:** Reads and returns the siege expected vulnerability time value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyImpairmentModel from the subsystem API first
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetSiegeExpectedVulnerabilityTime();
```

### GetDisorganizedStateDuration
`public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**Purpose:** Reads and returns the disorganized state duration value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyImpairmentModel from the subsystem API first
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetDisorganizedStateDuration(party);
```

### CanGetDisorganized
`public override bool CanGetDisorganized(PartyBase party)`

**Purpose:** Checks whether the this instance meets the preconditions for get disorganized.

```csharp
// Obtain an instance of DefaultPartyImpairmentModel from the subsystem API first
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.CanGetDisorganized(party);
```

### GetVulnerabilityStateDuration
`public override float GetVulnerabilityStateDuration(PartyBase party)`

**Purpose:** Reads and returns the vulnerability state duration value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyImpairmentModel from the subsystem API first
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetVulnerabilityStateDuration(party);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultPartyImpairmentModel` for it at `SandBoxManager.cs:248`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyPartyImpairmentModel : PartyImpairmentModel, so it is already an MBGameModel<PartyImpairmentModel>
        gameStarter.AddModel<PartyImpairmentModel>(new MyPartyImpairmentModel());
    }
}
```

## See Also

- [Area Index](../)