---
title: "DefaultFleetManagementModel"
description: "Auto-generated class reference for DefaultFleetManagementModel."
---
# DefaultFleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFleetManagementModel : FleetManagementModel`
**Base:** `FleetManagementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs`

## Overview

`DefaultFleetManagementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultFleetManagementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultFleetManagementModel` is the shipped answer, not the extension point. The abstract `FleetManagementModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `FleetManagementModel` is declared `MBGameModel<FleetManagementModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<FleetManagementModel>(new DefaultFleetManagementModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:242`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyFleetManagementModel : FleetManagementModel
{
    // DefaultFleetManagementModel is public and concrete, so hold one and call through
    // to it instead of reimplementing the other abstract member.
    private readonly DefaultFleetManagementModel _stock = new DefaultFleetManagementModel();

    public override bool CanTroopsReturn()
    {
        return _stock.CanTroopsReturn();
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<FleetManagementModel>(new MyFleetManagementModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultFleetManagementModel>(new DefaultFleetManagementModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultFleetManagementModel` is an `MBGameModel<FleetManagementModel>`, not an `MBGameModel<DefaultFleetManagementModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:753`, `GetGameModel<FleetManagementModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public override int MinimumTroopCountRequiredToSendShips { get; }` |

## Key Methods

### CanTroopsReturn
`public override bool CanTroopsReturn()`

**Purpose:** Checks whether the this instance meets the preconditions for troops return.

```csharp
// Obtain an instance of DefaultFleetManagementModel from the subsystem API first
DefaultFleetManagementModel defaultFleetManagementModel = ...;
var result = defaultFleetManagementModel.CanTroopsReturn();
```

### GetReturnTimeForTroops
`public override CampaignTime GetReturnTimeForTroops(Ship ship)`

**Purpose:** Reads and returns the return time for troops value held by the this instance.

```csharp
// Obtain an instance of DefaultFleetManagementModel from the subsystem API first
DefaultFleetManagementModel defaultFleetManagementModel = ...;
var result = defaultFleetManagementModel.GetReturnTimeForTroops(ship);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultFleetManagementModel` for it at `SandBoxManager.cs:242`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyFleetManagementModel : FleetManagementModel, so it is already an MBGameModel<FleetManagementModel>
        gameStarter.AddModel<FleetManagementModel>(new MyFleetManagementModel());
    }
}
```

## See Also

- [Area Index](../)