---
title: "DefaultPartyDesertionModel"
description: "Auto-generated class reference for DefaultPartyDesertionModel."
---
# DefaultPartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**Base:** `PartyDesertionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs`

## Overview

`DefaultPartyDesertionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyDesertionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultPartyDesertionModel` is the shipped answer, not the extension point. The abstract `PartyDesertionModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `PartyDesertionModel` is declared `MBGameModel<PartyDesertionModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyDesertionModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<PartyDesertionModel>(new DefaultPartyDesertionModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:285`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyPartyDesertionModel : PartyDesertionModel
{
    // All three members on the base are abstract, so delegating is the whole job.
    // The returned TroopRoster is what the engine actually deserts with, so it must be
    // the stock one unless you have deliberately changed the composition.
    private readonly DefaultPartyDesertionModel _stock = new DefaultPartyDesertionModel();

    public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)
    {
        return _stock.GetTroopsToDesert(mobileParty);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<PartyDesertionModel>(new MyPartyDesertionModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultPartyDesertionModel>(new DefaultPartyDesertionModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultPartyDesertionModel` is an `MBGameModel<PartyDesertionModel>`, not an `MBGameModel<DefaultPartyDesertionModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:655`, `GetGameModel<PartyDesertionModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetMoraleThresholdForTroopDesertion
`public override int GetMoraleThresholdForTroopDesertion()`

**Purpose:** Reads and returns the morale threshold for troop desertion value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyDesertionModel from the subsystem API first
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetMoraleThresholdForTroopDesertion();
```

### GetDesertionChanceForTroop
`public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)`

**Purpose:** Reads and returns the desertion chance for troop value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyDesertionModel from the subsystem API first
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetDesertionChanceForTroop(mobileParty, troopRosterElement);
```

### GetTroopsToDesert
`public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)`

**Purpose:** Reads and returns the troops to desert value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyDesertionModel from the subsystem API first
DefaultPartyDesertionModel defaultPartyDesertionModel = ...;
var result = defaultPartyDesertionModel.GetTroopsToDesert(mobileParty);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultPartyDesertionModel` for it at `SandBoxManager.cs:285`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyPartyDesertionModel : PartyDesertionModel, so it is already an MBGameModel<PartyDesertionModel>
        gameStarter.AddModel<PartyDesertionModel>(new MyPartyDesertionModel());
    }
}
```

## See Also

- [Area Index](../)