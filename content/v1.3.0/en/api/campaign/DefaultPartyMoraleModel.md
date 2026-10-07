---
title: "DefaultPartyMoraleModel"
description: "Auto-generated class reference for DefaultPartyMoraleModel."
---
# DefaultPartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Base:** `PartyMoraleModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## Overview

`DefaultPartyMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultPartyMoraleModel` is the shipped answer, not the extension point. The abstract `PartyMoraleModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `PartyMoraleModel` is declared `MBGameModel<PartyMoraleModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<PartyMoraleModel>(new DefaultPartyMoraleModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:254`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyPartyMoraleModel : PartyMoraleModel
{
    // Six of the seven members on the base are abstract, so delegating is the whole job.
    // A negative value is a daily morale delta, so sign is the whole contract here.
    private readonly DefaultPartyMoraleModel _stock = new DefaultPartyMoraleModel();

    public override int GetDailyStarvationMoralePenalty(PartyBase party)
    {
        return _stock.GetDailyStarvationMoralePenalty(party);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<PartyMoraleModel>(new MyPartyMoraleModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultPartyMoraleModel>(new DefaultPartyMoraleModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultPartyMoraleModel` is an `MBGameModel<PartyMoraleModel>`, not an `MBGameModel<DefaultPartyMoraleModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:654`, `GetGameModel<PartyMoraleModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public override float HighMoraleValue { get; }` |

## Key Methods

### GetDailyStarvationMoralePenalty
`public override int GetDailyStarvationMoralePenalty(PartyBase party)`

**Purpose:** Reads and returns the daily starvation morale penalty value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDailyStarvationMoralePenalty(party);
```

### GetDailyNoWageMoralePenalty
`public override int GetDailyNoWageMoralePenalty(MobileParty party)`

**Purpose:** Reads and returns the daily no wage morale penalty value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDailyNoWageMoralePenalty(party);
```

### GetStandardBaseMorale
`public override float GetStandardBaseMorale(PartyBase party)`

**Purpose:** Reads and returns the standard base morale value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetStandardBaseMorale(party);
```

### GetVictoryMoraleChange
`public override float GetVictoryMoraleChange(PartyBase party)`

**Purpose:** Reads and returns the victory morale change value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetVictoryMoraleChange(party);
```

### GetDefeatMoraleChange
`public override float GetDefeatMoraleChange(PartyBase party)`

**Purpose:** Reads and returns the defeat morale change value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDefeatMoraleChange(party);
```

### GetEffectivePartyMorale
`public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)`

**Purpose:** Reads and returns the effective party morale value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetEffectivePartyMorale(mobileParty, false);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultPartyMoraleModel` for it at `SandBoxManager.cs:254`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyPartyMoraleModel : PartyMoraleModel, so it is already an MBGameModel<PartyMoraleModel>
        gameStarter.AddModel<PartyMoraleModel>(new MyPartyMoraleModel());
    }
}
```

## See Also

- [Area Index](../)