---
title: "DefaultIncidentModel"
description: "Auto-generated class reference for DefaultIncidentModel."
---
# DefaultIncidentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIncidentModel : IncidentModel`
**Base:** `IncidentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs`

## Overview

`DefaultIncidentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultIncidentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultIncidentModel` is the shipped answer, not the extension point. The abstract `IncidentModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `IncidentModel` is declared `MBGameModel<IncidentModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/IncidentModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<IncidentModel>(new DefaultIncidentModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:350`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyIncidentModel : IncidentModel
{
    // All five members on the base are abstract, so delegating is the whole job.
    private readonly DefaultIncidentModel _stock = new DefaultIncidentModel();

    public override CampaignTime GetMinGlobalCooldownTime()
    {
        return _stock.GetMinGlobalCooldownTime();
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<IncidentModel>(new MyIncidentModel());
        }
    }
}
```

**Most common mistake:** assuming you have the last word on this model. The campaign module replaces it too — `StoryMode/StoryModeSubModule.cs:107` registers `new StoryModeIncidentModel()` against the same `IncidentModel` from the same hook. Since `GetModel<T>` scans backwards (`CampaignGameStarter.cs:77`) and submodules are visited in load order, whichever module loads last wins, and a mod that registers here unconditionally can be silently overridden by the campaign module. Also note the type argument is the abstract class, not the concrete one: `AddModel<DefaultIncidentModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultIncidentModel` is an `MBGameModel<IncidentModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:751`, `GetGameModel<IncidentModel>()`).

## Key Methods

### GetMinGlobalCooldownTime
`public override CampaignTime GetMinGlobalCooldownTime()`

**Purpose:** Reads and returns the min global cooldown time value held by the this instance.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetMinGlobalCooldownTime();
```

### GetMaxGlobalCooldownTime
`public override CampaignTime GetMaxGlobalCooldownTime()`

**Purpose:** Reads and returns the max global cooldown time value held by the this instance.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetMaxGlobalCooldownTime();
```

### GetIncidentTriggerGlobalProbability
`public override float GetIncidentTriggerGlobalProbability()`

**Purpose:** Reads and returns the incident trigger global probability value held by the this instance.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerGlobalProbability();
```

### GetIncidentTriggerProbabilityDuringSiege
`public override float GetIncidentTriggerProbabilityDuringSiege()`

**Purpose:** Reads and returns the incident trigger probability during siege value held by the this instance.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerProbabilityDuringSiege();
```

### GetIncidentTriggerProbabilityDuringWait
`public override float GetIncidentTriggerProbabilityDuringWait()`

**Purpose:** Reads and returns the incident trigger probability during wait value held by the this instance.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerProbabilityDuringWait();
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultIncidentModel` for it at `SandBoxManager.cs:350`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyIncidentModel : IncidentModel, so it is already an MBGameModel<IncidentModel>
        gameStarter.AddModel<IncidentModel>(new MyIncidentModel());
    }
}
```

## See Also

- [Area Index](../)