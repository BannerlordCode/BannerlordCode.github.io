---
title: "DefaultMilitaryPowerModel"
description: "Auto-generated class reference for DefaultMilitaryPowerModel."
---
# DefaultMilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**Base:** `MilitaryPowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs`

## Overview

`DefaultMilitaryPowerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMilitaryPowerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultMilitaryPowerModel` is the shipped answer, not the extension point. The abstract `MilitaryPowerModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MilitaryPowerModel` is declared `MBGameModel<MilitaryPowerModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs:10`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MilitaryPowerModel>(new DefaultMilitaryPowerModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:278`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMilitaryPowerModel : MilitaryPowerModel
{
    // All seven members on the base are abstract, so delegating is the whole job.
    // MapEvent.PowerCalculationContext is a nested type, so the enclosing MapEvent
    // has to be reachable for the signature to resolve.
    private readonly DefaultMilitaryPowerModel _stock = new DefaultMilitaryPowerModel();

    public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)
    {
        return _stock.GetTroopPower(troop, side, context, leaderModifier);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MilitaryPowerModel>(new MyMilitaryPowerModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMilitaryPowerModel>(new DefaultMilitaryPowerModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMilitaryPowerModel` is an `MBGameModel<MilitaryPowerModel>`, not an `MBGameModel<DefaultMilitaryPowerModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:729`, `GetGameModel<MilitaryPowerModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetTroopPower
`public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)`

**Purpose:** Reads and returns the troop power value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetTroopPower(troop, side, context, 0);
```

### GetPowerOfParty
`public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the power of party value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetPowerOfParty(party, side, context);
```

### GetPowerModifierOfHero
`public override float GetPowerModifierOfHero(Hero leaderHero)`

**Purpose:** Reads and returns the power modifier of hero value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetPowerModifierOfHero(leaderHero);
```

### GetContextModifier
`public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the context modifier value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextModifier(troop, battleSide, context);
```

### GetContextForPosition
`public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

**Purpose:** Reads and returns the context for position value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextForPosition(position);
```

### GetDefaultTroopPower
`public override float GetDefaultTroopPower(CharacterObject troop)`

**Purpose:** Reads and returns the default troop power value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetDefaultTroopPower(troop);
```

### GetContextModifier
`public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the context modifier value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextModifier(ship, battleSideEnum, context);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMilitaryPowerModel` for it at `SandBoxManager.cs:278`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMilitaryPowerModel : MilitaryPowerModel, so it is already an MBGameModel<MilitaryPowerModel>
        gameStarter.AddModel<MilitaryPowerModel>(new MyMilitaryPowerModel());
    }
}
```

## See Also

- [Area Index](../)