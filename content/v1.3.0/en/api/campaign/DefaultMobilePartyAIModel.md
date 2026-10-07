---
title: "DefaultMobilePartyAIModel"
description: "Auto-generated class reference for DefaultMobilePartyAIModel."
---
# DefaultMobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
**Base:** `MobilePartyAIModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`

## Overview

`DefaultMobilePartyAIModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMobilePartyAIModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultMobilePartyAIModel` is the shipped answer, not the extension point. The abstract `MobilePartyAIModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MobilePartyAIModel` is declared `MBGameModel<MobilePartyAIModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs:9`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MobilePartyAIModel>(new DefaultMobilePartyAIModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:347`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMobilePartyAIModel : MobilePartyAIModel
{
    // Five of the fourteen members on the base are abstract, so delegating is the whole job.
    // The remaining virtuals stay inherited from MBGameModel's side of the contract.
    private readonly DefaultMobilePartyAIModel _stock = new DefaultMobilePartyAIModel();

    public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)
    {
        return _stock.ShouldConsiderAvoiding(party, targetParty);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MobilePartyAIModel>(new MyMobilePartyAIModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMobilePartyAIModel>(new DefaultMobilePartyAIModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMobilePartyAIModel` is an `MBGameModel<MobilePartyAIModel>`, not an `MBGameModel<DefaultMobilePartyAIModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:744`, `GetGameModel<MobilePartyAIModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `AiCheckInterval` | `public override float AiCheckInterval { get; }` |
| `FleeToNearbyPartyRadius` | `public override float FleeToNearbyPartyRadius { get; }` |
| `FleeToNearbySettlementRadius` | `public override float FleeToNearbySettlementRadius { get; }` |
| `HideoutPatrolDistanceAsDays` | `public override float HideoutPatrolDistanceAsDays { get; }` |
| `FortificationPatrolDistanceAsDays` | `public override float FortificationPatrolDistanceAsDays { get; }` |
| `VillagePatrolDistanceAsDays` | `public override float VillagePatrolDistanceAsDays { get; }` |
| `SettlementDefendingNearbyPartyCheckRadius` | `public override float SettlementDefendingNearbyPartyCheckRadius { get; }` |
| `SettlementDefendingWaitingPositionRadius` | `public override float SettlementDefendingWaitingPositionRadius { get; }` |
| `NeededFoodsInDaysThresholdForMilitaryAction` | `public override float NeededFoodsInDaysThresholdForMilitaryAction { get; }` |

## Key Methods

### ShouldConsiderAttacking
`public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**Purpose:** Executes the ShouldConsiderAttacking logic.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldConsiderAttacking(party, targetParty);
```

### ShouldConsiderAvoiding
`public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**Purpose:** Executes the ShouldConsiderAvoiding logic.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldConsiderAvoiding(party, targetParty);
```

### GetPatrolRadius
`public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**Purpose:** Reads and returns the patrol radius value held by the this instance.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.GetPatrolRadius(mobileParty, patrolPoint);
```

### ShouldPartyCheckInitiativeBehavior
`public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**Purpose:** Executes the ShouldPartyCheckInitiativeBehavior logic.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(mobileParty);
```

### GetBestInitiativeBehavior
`public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**Purpose:** Reads and returns the best initiative behavior value held by the this instance.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
defaultMobilePartyAIModel.GetBestInitiativeBehavior(mobileParty, bestInitiativeBehavior, bestInitiativeTargetParty, bestInitiativeBehaviorScore, averageEnemyVec);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMobilePartyAIModel` for it at `SandBoxManager.cs:347`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMobilePartyAIModel : MobilePartyAIModel, so it is already an MBGameModel<MobilePartyAIModel>
        gameStarter.AddModel<MobilePartyAIModel>(new MyMobilePartyAIModel());
    }
}
```

## See Also

- [Area Index](../)