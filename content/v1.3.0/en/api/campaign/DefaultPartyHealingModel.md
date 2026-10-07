---
title: "DefaultPartyHealingModel"
description: "Auto-generated class reference for DefaultPartyHealingModel."
---
# DefaultPartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`
**Base:** `PartyHealingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`

## Overview

`DefaultPartyHealingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyHealingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultPartyHealingModel` is the shipped answer, not the extension point. The abstract `PartyHealingModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `PartyHealingModel` is declared `MBGameModel<PartyHealingModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<PartyHealingModel>(new DefaultPartyHealingModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:235`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyPartyHealingModel : PartyHealingModel
{
    // All eight members on the base are abstract, so delegating is the whole job.
    // The parameter is PartyBase, not MobileParty — PartyBase is the non-visual base
    // both the map object and the mission-side proxy share.
    private readonly DefaultPartyHealingModel _stock = new DefaultPartyHealingModel();

    public override float GetSurgeryChance(PartyBase party)
    {
        return _stock.GetSurgeryChance(party);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<PartyHealingModel>(new MyPartyHealingModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultPartyHealingModel>(new DefaultPartyHealingModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultPartyHealingModel` is an `MBGameModel<PartyHealingModel>`, not an `MBGameModel<DefaultPartyHealingModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:640`, `GetGameModel<PartyHealingModel>()`), so nothing would ever look up a type you invented.

## Key Methods

### GetSurgeryChance
`public override float GetSurgeryChance(PartyBase party)`

**Purpose:** Reads and returns the surgery chance value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSurgeryChance(party);
```

### GetSiegeBombardmentHitSurgeryChance
`public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

**Purpose:** Reads and returns the siege bombardment hit surgery chance value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSiegeBombardmentHitSurgeryChance(party);
```

### GetSurvivalChance
`public override float GetSurvivalChance(PartyBase party, CharacterObject character, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)`

**Purpose:** Reads and returns the survival chance value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSurvivalChance(party, character, damageType, false, null);
```

### GetSkillXpFromHealingTroop
`public override int GetSkillXpFromHealingTroop(PartyBase party)`

**Purpose:** Reads and returns the skill xp from healing troop value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetSkillXpFromHealingTroop(party);
```

### GetDailyHealingForRegulars
`public override ExplainedNumber GetDailyHealingForRegulars(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**Purpose:** Reads and returns the daily healing for regulars value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetDailyHealingForRegulars(party, false, false);
```

### GetDailyHealingHpForHeroes
`public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase party, bool isPrisoners, bool includeDescriptions = false)`

**Purpose:** Reads and returns the daily healing hp for heroes value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetDailyHealingHpForHeroes(party, false, false);
```

### GetHeroesEffectedHealingAmount
`public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)`

**Purpose:** Reads and returns the heroes effected healing amount value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetHeroesEffectedHealingAmount(hero, 0);
```

### GetBattleEndHealingAmount
`public override ExplainedNumber GetBattleEndHealingAmount(PartyBase party, Hero hero)`

**Purpose:** Reads and returns the battle end healing amount value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyHealingModel from the subsystem API first
DefaultPartyHealingModel defaultPartyHealingModel = ...;
var result = defaultPartyHealingModel.GetBattleEndHealingAmount(party, hero);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultPartyHealingModel` for it at `SandBoxManager.cs:235`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyPartyHealingModel : PartyHealingModel, so it is already an MBGameModel<PartyHealingModel>
        gameStarter.AddModel<PartyHealingModel>(new MyPartyHealingModel());
    }
}
```

## See Also

- [Area Index](../)