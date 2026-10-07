---
title: "DefaultKingdomDecisionPermissionModel"
description: "Auto-generated class reference for DefaultKingdomDecisionPermissionModel."
---
# DefaultKingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## Overview

`DefaultKingdomDecisionPermissionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultKingdomDecisionPermissionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultKingdomDecisionPermissionModel` is the shipped answer, not the extension point. The abstract `KingdomDecisionPermissionModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `KingdomDecisionPermissionModel` is declared `MBGameModel<KingdomDecisionPermissionModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<KingdomDecisionPermissionModel>(new DefaultKingdomDecisionPermissionModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:276`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyKingdomDecisionPermissionModel : KingdomDecisionPermissionModel
{
    // All seven members on the base are abstract, so delegating is the whole job.
    private readonly DefaultKingdomDecisionPermissionModel _stock = new DefaultKingdomDecisionPermissionModel();

    public override bool IsPolicyDecisionAllowed(PolicyObject policy)
    {
        return _stock.IsPolicyDecisionAllowed(policy);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<KingdomDecisionPermissionModel>(new MyKingdomDecisionPermissionModel());
        }
    }
}
```

**Most common mistake:** assuming you have the last word on this model. The campaign module replaces it too — `StoryMode/StoryModeSubModule.cs:95` registers `new StoryModeKingdomDecisionPermissionModel()` against the same `KingdomDecisionPermissionModel` from the same hook. Since `GetModel<T>` scans backwards (`CampaignGameStarter.cs:77`) and submodules are visited in load order, whichever module loads last wins, and a mod that registers here unconditionally can be silently overridden by the campaign module. Also note the type argument is the abstract class, not the concrete one: `AddModel<DefaultKingdomDecisionPermissionModel>(...)` does not compile, because the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultKingdomDecisionPermissionModel` is an `MBGameModel<KingdomDecisionPermissionModel>`. The engine reads it back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:663`, `GetGameModel<KingdomDecisionPermissionModel>()`).

## Key Methods

### IsPolicyDecisionAllowed
`public override bool IsPolicyDecisionAllowed(PolicyObject policy)`

**Purpose:** Determines whether the this instance is in the policy decision allowed state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsPolicyDecisionAllowed(policy);
```

### IsWarDecisionAllowedBetweenKingdoms
`public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the war decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsWarDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsPeaceDecisionAllowedBetweenKingdoms
`public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the peace decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsPeaceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsAnnexationDecisionAllowed
`public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**Purpose:** Determines whether the this instance is in the annexation decision allowed state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsAnnexationDecisionAllowed(annexedSettlement);
```

### IsExpulsionDecisionAllowed
`public override bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**Purpose:** Determines whether the this instance is in the expulsion decision allowed state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsExpulsionDecisionAllowed(expelledClan);
```

### IsKingSelectionDecisionAllowed
`public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**Purpose:** Determines whether the this instance is in the king selection decision allowed state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsKingSelectionDecisionAllowed(kingdom);
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Determines whether the this instance is in the start alliance decision allowed between kingdoms state or condition.

```csharp
// Obtain an instance of DefaultKingdomDecisionPermissionModel from the subsystem API first
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsStartAllianceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultKingdomDecisionPermissionModel` for it at `SandBoxManager.cs:276`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyKingdomDecisionPermissionModel : KingdomDecisionPermissionModel, so it is already an MBGameModel<KingdomDecisionPermissionModel>
        gameStarter.AddModel<KingdomDecisionPermissionModel>(new MyKingdomDecisionPermissionModel());
    }
}
```

## See Also

- [Area Index](../)