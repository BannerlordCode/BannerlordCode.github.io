---
title: "DefaultEncounterGameMenuModel"
description: "Auto-generated class reference for DefaultEncounterGameMenuModel."
---
# DefaultEncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs`

## Overview

`DefaultEncounterGameMenuModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEncounterGameMenuModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultEncounterGameMenuModel` is the shipped answer, not the extension point. The abstract `EncounterGameMenuModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `EncounterGameMenuModel` is declared `MBGameModel<EncounterGameMenuModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<EncounterGameMenuModel>(new DefaultEncounterGameMenuModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:264`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyEncounterGameMenuModel : EncounterGameMenuModel
{
    // DefaultEncounterGameMenuModel is public and concrete, so hold one and call through
    // to it. The two out parameters must be forwarded, not invented locally — the caller
    // reads them to decide whether the menu offers a battle.
    private readonly DefaultEncounterGameMenuModel _stock = new DefaultEncounterGameMenuModel();

    public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)
    {
        return _stock.GetEncounterMenu(attackerParty, defenderParty, out startBattle, out joinBattle);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<EncounterGameMenuModel>(new MyEncounterGameMenuModel());
        }
    }
}
```

**Most common mistake:** assuming you have the last word on this model. The campaign module replaces it too — `StoryMode/StoryModeSubModule.cs:91` registers `new StoryModeEncounterGameMenuModel()` against the same `EncounterGameMenuModel` from the same hook. Since `GetModel<T>` scans backwards (`CampaignGameStarter.cs:77`) and submodules are visited in load order, whichever module loads last wins, and a mod that registers here unconditionally can be silently overridden by the campaign module. Also note the type argument is the abstract class, not the concrete one: `AddModel<DefaultEncounterGameMenuModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultEncounterGameMenuModel` is an `MBGameModel<EncounterGameMenuModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:669`, `GetGameModel<EncounterGameMenuModel>()`).

## Key Methods

### GetEncounterMenu
`public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**Purpose:** Reads and returns the encounter menu value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetEncounterMenu(attackerParty, defenderParty, startBattle, joinBattle);
```

### GetRaidCompleteMenu
`public override string GetRaidCompleteMenu()`

**Purpose:** Reads and returns the raid complete menu value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetRaidCompleteMenu();
```

### GetNewPartyJoinMenu
`public override string GetNewPartyJoinMenu(MobileParty newParty)`

**Purpose:** Reads and returns the new party join menu value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetNewPartyJoinMenu(newParty);
```

### GetGenericStateMenu
`public override string GetGenericStateMenu()`

**Purpose:** Reads and returns the generic state menu value held by the this instance.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetGenericStateMenu();
```

### IsPlunderMenu
`public override bool IsPlunderMenu(string gameMenuId)`

**Purpose:** Determines whether the this instance is in the plunder menu state or condition.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.IsPlunderMenu("example");
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultEncounterGameMenuModel` for it at `SandBoxManager.cs:264`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyEncounterGameMenuModel : EncounterGameMenuModel, so it is already an MBGameModel<EncounterGameMenuModel>
        gameStarter.AddModel<EncounterGameMenuModel>(new MyEncounterGameMenuModel());
    }
}
```

## See Also

- [Area Index](../)