---
title: "DefaultCombatSimulationModel"
description: "Auto-generated class reference for DefaultCombatSimulationModel."
---
# DefaultCombatSimulationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel`
**Base:** `CombatSimulationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs`

## Overview

`DefaultCombatSimulationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCombatSimulationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultCombatSimulationModel` is the shipped answer, not the extension point. The abstract `CombatSimulationModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `CombatSimulationModel` is declared `MBGameModel<CombatSimulationModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs:12`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<CombatSimulationModel>(new DefaultCombatSimulationModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:241`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyCombatSimulationModel : CombatSimulationModel
{
    // DefaultCombatSimulationModel is public and concrete, so hold one and call through
    // to it instead of reimplementing the other eight members.
    private readonly DefaultCombatSimulationModel _stock = new DefaultCombatSimulationModel();

    public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle)
    {
        return _stock.SimulateHit(strikerTroop, struckTroop, strikerParty, struckParty, strikerAdvantage, battle);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<CombatSimulationModel>(new MyCombatSimulationModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultCombatSimulationModel>(new DefaultCombatSimulationModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultCombatSimulationModel` is an `MBGameModel<CombatSimulationModel>`, not an `MBGameModel<DefaultCombatSimulationModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:646`, `GetGameModel<CombatSimulationModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### SimulateHit
`public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle)`

**Purpose:** Executes the SimulateHit logic.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.SimulateHit(strikerTroop, struckTroop, strikerParty, struckParty, 0, battle);
```

### SimulateHit
`public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)`

**Purpose:** Executes the SimulateHit logic.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.SimulateHit(strikerShip, struckShip, strikerParty, struckParty, siegeEngine, 0, battle, troopCasualties);
```

### GetMaximumSiegeEquipmentProgress
`public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)`

**Purpose:** Reads and returns the maximum siege equipment progress value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetMaximumSiegeEquipmentProgress(settlement);
```

### GetNumberOfEquipmentsBuilt
`public override int GetNumberOfEquipmentsBuilt(Settlement settlement)`

**Purpose:** Reads and returns the number of equipments built value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetNumberOfEquipmentsBuilt(settlement);
```

### GetSettlementAdvantage
`public override float GetSettlementAdvantage(Settlement settlement)`

**Purpose:** Reads and returns the settlement advantage value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetSettlementAdvantage(settlement);
```

### GetSimulationTicksForBattleRound
`public override ValueTuple<int, int> GetSimulationTicksForBattleRound(MapEvent mapEvent)`

**Purpose:** Reads and returns the simulation ticks for battle round value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetSimulationTicksForBattleRound(mapEvent);
```

### GetBattleAdvantage
`public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)`

**Purpose:** Reads and returns the battle advantage value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
defaultCombatSimulationModel.GetBattleAdvantage(mapEvent, defenderAdvantage, attackerAdvantage);
```

### GetShipSiegeEngineHitChance
`public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)`

**Purpose:** Reads and returns the ship siege engine hit chance value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetShipSiegeEngineHitChance(ship, siegeEngineType, battleSide);
```

### GetPursuitRoundCount
`public override int GetPursuitRoundCount(MapEvent mapEvent)`

**Purpose:** Reads and returns the pursuit round count value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatSimulationModel from the subsystem API first
DefaultCombatSimulationModel defaultCombatSimulationModel = ...;
var result = defaultCombatSimulationModel.GetPursuitRoundCount(mapEvent);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultCombatSimulationModel` for it at `SandBoxManager.cs:241`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyCombatSimulationModel : CombatSimulationModel, so it is already an MBGameModel<CombatSimulationModel>
        gameStarter.AddModel<CombatSimulationModel>(new MyCombatSimulationModel());
    }
}
```

## See Also

- [Area Index](../)