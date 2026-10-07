---
title: "DefaultDefectionModel"
description: "Auto-generated class reference for DefaultDefectionModel."
---
# DefaultDefectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDefectionModel : DefectionModel`
**Base:** `DefectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDefectionModel.cs`

## Overview

`DefaultDefectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDefectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultDefectionModel` is the shipped answer, not the extension point. The abstract `DefectionModel` is what you subclass — but, unlike every other model in this namespace, it is **not** the type argument you register it under.

**Getting one.** `DefectionModel` is the one base here declared over a *different* type: `MBGameModel<DefaultDefectionModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/DefectionModel.cs:8`. The generic argument is on the right of the colon, and it names the concrete class. That is why the stock call reads `gameStarter.AddModel<DefaultDefectionModel>(new DefaultDefectionModel())` from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:304`) while the engine reads the model back by the abstract name, `GetGameModel<DefectionModel>()` (`TaleWorlds.CampaignSystem/GameModels.cs:694`). A module issues its own registration from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes it work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyDefectionModel : DefectionModel
{
    // The base declares exactly one abstract member, so delegating covers the whole surface.
    private readonly DefaultDefectionModel _stock = new DefaultDefectionModel();

    public override bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)
    {
        return _stock.CanHeroDefectToFaction(hero, kingdom);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            // DefaultDefectionModel, not DefectionModel. See the note above.
            gameStarterObject.AddModel<DefaultDefectionModel>(new MyDefectionModel());
        }
    }
}
```

**Most common mistake:** reaching for the abstract class here, because every sibling model trains you to — `gameStarterObject.AddModel<DefectionModel>(new MyDefectionModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`), and `MyDefectionModel` is a `DefectionModel`, i.e. an `MBGameModel<DefaultDefectionModel>` — not the `MBGameModel<DefectionModel>` the call demands. The discriminator is always the generic argument in the base declaration, never the class name; on the other 49 models in this namespace the two happen to be spelled the same, and only here they are not.

## Key Methods

### CanHeroDefectToFaction
`public override bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)`

**Purpose:** Checks whether the this instance meets the preconditions for hero defect to faction.

```csharp
// Obtain an instance of DefaultDefectionModel from the subsystem API first
DefaultDefectionModel defaultDefectionModel = ...;
var result = defaultDefectionModel.CanHeroDefectToFaction(hero, kingdom);
```

## Usage Example

This component is the odd one out: `DefectionModel` derives from `MBGameModel<DefaultDefectionModel>` (`DefectionModel.cs:8`), so the type argument is the concrete class rather than the abstract one. A module hands its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`), exactly as the engine does at `SandBoxManager.cs:304`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyDefaultDefectionModel : DefectionModel, i.e. already an MBGameModel<DefaultDefectionModel>
        gameStarter.AddModel<DefaultDefectionModel>(new MyDefaultDefectionModel());
    }
}
```

## See Also

- [Area Index](../)