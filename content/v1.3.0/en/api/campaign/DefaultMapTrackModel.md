---
title: "DefaultMapTrackModel"
description: "Auto-generated class reference for DefaultMapTrackModel."
---
# DefaultMapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**Base:** `MapTrackModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs`

## Overview

`DefaultMapTrackModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapTrackModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## How to use

`DefaultMapTrackModel` is the shipped answer, not the extension point. The abstract `MapTrackModel` is what the engine resolves and what you subclass.

**Getting one.** You do not reach for it directly. `MapTrackModel` is declared `MBGameModel<MapTrackModel>` at `TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs:10`, so the generic starter overload takes the abstract type as its type argument and the concrete implementation as its value: `gameStarter.AddModel<MapTrackModel>(new DefaultMapTrackModel())`. That is verbatim what the stock campaign does from `SandBoxManager.Initialize` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:267`). A module issues the same call from `InitializeGameStarter`, the hook the sandbox itself overrides (`SandBox/SandBoxSubModule.cs:28`). Ordering is what makes this work: `Campaign.cs:1897` runs `SandBoxManager.Initialize` first and `Campaign.cs:1898` fans out to every submodule afterwards (`MBGameManager.cs:118`), and `GetModel<T>` scans the list backwards (`CampaignGameStarter.cs:77`), so the last registration is the one the engine keeps.

**Typical use:**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMapTrackModel : MapTrackModel
{
    // Ten of the eleven members on the base are abstract, so delegating is the whole job.
    private readonly DefaultMapTrackModel _stock = new DefaultMapTrackModel();

    public override float GetSkipTrackChance(MobileParty mobileParty)
    {
        return _stock.GetSkipTrackChance(mobileParty);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<MapTrackModel>(new MyMapTrackModel());
        }
    }
}
```

**Most common mistake:** putting the concrete class in the type argument — `gameStarterObject.AddModel<DefaultMapTrackModel>(new DefaultMapTrackModel())`. It does not compile: the overload is `AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) and `DefaultMapTrackModel` is an `MBGameModel<MapTrackModel>`, not an `MBGameModel<DefaultMapTrackModel>`. The type argument is not free-form in the other direction either — the engine reads the model back by the abstract type (`TaleWorlds.CampaignSystem/GameModels.cs:671`, `GetGameModel<MapTrackModel>()`), so nothing would ever look up a type you invented.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxTrackLife` | `public override float MaxTrackLife { get; }` |

## Key Methods

### GetMaxTrackSpottingDistanceForMainParty
`public override float GetMaxTrackSpottingDistanceForMainParty()`

**Purpose:** Reads and returns the max track spotting distance for main party value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetMaxTrackSpottingDistanceForMainParty();
```

### CanPartyLeaveTrack
`public override bool CanPartyLeaveTrack(MobileParty mobileParty)`

**Purpose:** Checks whether the this instance meets the preconditions for party leave track.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.CanPartyLeaveTrack(mobileParty);
```

### GetTrackLife
`public override int GetTrackLife(MobileParty mobileParty)`

**Purpose:** Reads and returns the track life value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackLife(mobileParty);
```

### GetTrackDetectionDifficultyForMainParty
`public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**Purpose:** Reads and returns the track detection difficulty for main party value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackDetectionDifficultyForMainParty(track, 0);
```

### GetSkillFromTrackDetected
`public override float GetSkillFromTrackDetected(Track track)`

**Purpose:** Reads and returns the skill from track detected value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetSkillFromTrackDetected(track);
```

### GetSkipTrackChance
`public override float GetSkipTrackChance(MobileParty mobileParty)`

**Purpose:** Reads and returns the skip track chance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetSkipTrackChance(mobileParty);
```

### TrackTitle
`public override TextObject TrackTitle(Track track)`

**Purpose:** Executes the TrackTitle logic.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.TrackTitle(track);
```

### GetTrackDescription
`public override IEnumerable<ValueTuple<TextObject, string>> GetTrackDescription(Track track)`

**Purpose:** Reads and returns the track description value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackDescription(track);
```

### GetTrackColor
`public override uint GetTrackColor(Track track)`

**Purpose:** Reads and returns the track color value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackColor(track);
```

### GetTrackScale
`public override float GetTrackScale(Track track)`

**Purpose:** Reads and returns the track scale value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackScale(track);
```

## Usage Example

A module replaces this component by handing its own implementation to `CampaignGameStarter.AddModel<T>` (`CampaignGameStarter.cs:95`) from the `InitializeGameStarter` hook (`MBSubModuleBase.cs:61`); the engine registers its own `DefaultMapTrackModel` for it at `SandBoxManager.cs:267`.

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter gameStarter)
    {
        // MyMapTrackModel : MapTrackModel, so it is already an MBGameModel<MapTrackModel>
        gameStarter.AddModel<MapTrackModel>(new MyMapTrackModel());
    }
}
```

## See Also

- [Area Index](../)