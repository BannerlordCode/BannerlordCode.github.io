---
title: "DefaultCombatXpModel"
description: "Auto-generated class reference for DefaultCombatXpModel."
---
# DefaultCombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs`

## Overview

`DefaultCombatXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCombatXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultCombatXpModel` is the shipped answer, not the extension point. The abstract `CombatXpModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `CombatXpModel` is declared `MBGameModel<CombatXpModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs:8`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<CombatXpModel>(new DefaultCombatXpModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:243`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyCombatXpModel : CombatXpModel
{
    // DefaultCombatXpModel is public and concrete, so hold one and call through to it
    // instead of reimplementing the other members.
    private readonly DefaultCombatXpModel _stock = new DefaultCombatXpModel();

    public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)
    {
        return _stock.GetSkillForWeapon(weapon, isSiegeEngineHit);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<CombatXpModel>(new MyCombatXpModel());
        }
    }
}
```

**Most common mistake:** assuming you have the last word on this model. The campaign module replaces it too — `StoryMode/StoryModeSubModule.cs:96` registers `new StoryModeCombatXpModel()` against the same `CombatXpModel` from the same hook. Since `GetModel<T>` scans backwards (`CampaignGameStarter.cs:77`) and submodules are visited in load order, whichever module loads last wins, and a mod that registers here unconditionally can be silently overridden by the campaign module. Also note the type argument is the abstract class, not the concrete one: `AddModel<DefaultCombatXpModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultCombatXpModel` is an `MBGameModel<CombatXpModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:647`, `GetGameModel<CombatXpModel>()`).

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public override float CaptainRadius { get; }` |

## Key Methods

### GetSkillForWeapon
`public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**Purpose:** Reads and returns the skill for weapon value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatXpModel from the subsystem API first
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetSkillForWeapon(weapon, false);
```

### GetXpFromHit
`public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase party, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)`

**Purpose:** Reads and returns the xp from hit value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatXpModel from the subsystem API first
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetXpFromHit(attackerTroop, captain, attackedTroop, party, 0, false, missionType);
```

### GetXpMultiplierFromShotDifficulty
`public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**Purpose:** Reads and returns the xp multiplier from shot difficulty value held by the this instance.

```csharp
// Obtain an instance of DefaultCombatXpModel from the subsystem API first
DefaultCombatXpModel defaultCombatXpModel = ...;
var result = defaultCombatXpModel.GetXpMultiplierFromShotDifficulty(0);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultCombatXpModel` for it at `SandBoxManager.cs:243`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyCombatXpModel : CombatXpModel, so it is already an MBGameModel<CombatXpModel>
        gameStarter.AddModel<CombatXpModel>(new MyCombatXpModel());
    }
}
```

## See Also

- [Area Index](../)