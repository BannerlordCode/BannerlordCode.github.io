---
title: "DefaultDifficultyModel"
description: "Auto-generated class reference for DefaultDifficultyModel."
---
# DefaultDifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDifficultyModel : DifficultyModel`
**Base:** `DifficultyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs`

## Overview

`DefaultDifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultDifficultyModel` is the shipped answer, not the extension point. The abstract `DifficultyModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `DifficultyModel` is declared `MBGameModel<DifficultyModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs:7`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<DifficultyModel>(new DefaultDifficultyModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:331`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyDifficultyModel : DifficultyModel
{
    // All nine members on the base are abstract, so delegating is the whole job.
    private readonly DefaultDifficultyModel _stock = new DefaultDifficultyModel();

    public override float GetPlayerTroopsReceivedDamageMultiplier()
    {
        return _stock.GetPlayerTroopsReceivedDamageMultiplier();
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<DifficultyModel>(new MyDifficultyModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultDifficultyModel>(new DefaultDifficultyModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultDifficultyModel` is an `MBGameModel<DifficultyModel>`, not an `MBGameModel<DefaultDifficultyModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:727`, `GetGameModel<DifficultyModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetPlayerTroopsReceivedDamageMultiplier
`public override float GetPlayerTroopsReceivedDamageMultiplier()`

**Purpose:** Reads and returns the player troops received damage multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerTroopsReceivedDamageMultiplier();
```

### GetDamageToPlayerMultiplier
`public override float GetDamageToPlayerMultiplier()`

**Purpose:** Reads and returns the damage to player multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetDamageToPlayerMultiplier();
```

### GetPlayerRecruitSlotBonus
`public override int GetPlayerRecruitSlotBonus()`

**Purpose:** Reads and returns the player recruit slot bonus value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerRecruitSlotBonus();
```

### GetPlayerMapMovementSpeedBonusMultiplier
`public override float GetPlayerMapMovementSpeedBonusMultiplier()`

**Purpose:** Reads and returns the player map movement speed bonus multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPlayerMapMovementSpeedBonusMultiplier();
```

### GetStealthDifficultyMultiplier
`public override float GetStealthDifficultyMultiplier()`

**Purpose:** Reads and returns the stealth difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetStealthDifficultyMultiplier();
```

### GetDisguiseDifficultyMultiplier
`public override float GetDisguiseDifficultyMultiplier()`

**Purpose:** Reads and returns the disguise difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetDisguiseDifficultyMultiplier();
```

### GetCombatAIDifficultyMultiplier
`public override float GetCombatAIDifficultyMultiplier()`

**Purpose:** Reads and returns the combat a i difficulty multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetCombatAIDifficultyMultiplier();
```

### GetPersuasionBonusChance
`public override float GetPersuasionBonusChance()`

**Purpose:** Reads and returns the persuasion bonus chance value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetPersuasionBonusChance();
```

### GetClanMemberDeathChanceMultiplier
`public override float GetClanMemberDeathChanceMultiplier()`

**Purpose:** Reads and returns the clan member death chance multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultDifficultyModel from the subsystem API first
DefaultDifficultyModel defaultDifficultyModel = ...;
var result = defaultDifficultyModel.GetClanMemberDeathChanceMultiplier();
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultDifficultyModel` for it at `SandBoxManager.cs:331`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyDifficultyModel : DifficultyModel, so it is already an MBGameModel<DifficultyModel>
        gameStarter.AddModel<DifficultyModel>(new MyDifficultyModel());
    }
}
```

## See Also

- [Area Index](../)