---
title: "DefaultMapVisibilityModel"
description: "Auto-generated class reference for DefaultMapVisibilityModel."
---
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**Base:** `MapVisibilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs`

## Overview

`DefaultMapVisibilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapVisibilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultMapVisibilityModel` is the shipped answer, not the extension point. The abstract `MapVisibilityModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MapVisibilityModel` is declared `MBGameModel<MapVisibilityModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MapVisibilityModel>(new DefaultMapVisibilityModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:232`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMapVisibilityModel : MapVisibilityModel
{
    // All five members on the base are abstract, so delegating is the whole job.
    private readonly DefaultMapVisibilityModel _stock = new DefaultMapVisibilityModel();

    public override float GetPartySpottingRangeBase(MobileParty party)
    {
        return _stock.GetPartySpottingRangeBase(party);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MapVisibilityModel>(new MyMapVisibilityModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMapVisibilityModel>(new DefaultMapVisibilityModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMapVisibilityModel` is an `MBGameModel<MapVisibilityModel>`, not an `MBGameModel<DefaultMapVisibilityModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:637`, `GetGameModel<MapVisibilityModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetPartySpottingRangeBase
`public override float GetPartySpottingRangeBase(MobileParty party)`

**Purpose:** Reads and returns the party spotting range base value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingRangeBase(party);
```

### GetPartySpottingRange
`public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the party spotting range value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingRange(party, false);
```

### GetPartyRelativeInspectionRange
`public override float GetPartyRelativeInspectionRange(IMapPoint party)`

**Purpose:** Reads and returns the party relative inspection range value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartyRelativeInspectionRange(party);
```

### GetPartySpottingDifficulty
`public override float GetPartySpottingDifficulty(MobileParty spottingParty, MobileParty party)`

**Purpose:** Reads and returns the party spotting difficulty value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingDifficulty(spottingParty, party);
```

### GetHideoutSpottingDistance
`public override float GetHideoutSpottingDistance()`

**Purpose:** Reads and returns the hideout spotting distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetHideoutSpottingDistance();
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMapVisibilityModel` for it at `SandBoxManager.cs:232`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMapVisibilityModel : MapVisibilityModel, so it is already an MBGameModel<MapVisibilityModel>
        gameStarter.AddModel<MapVisibilityModel>(new MyMapVisibilityModel());
    }
}
```

## See Also

- [Area Index](../)