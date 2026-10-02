---
title: "UserData"
description: "UserData — class in TaleWorlds.MountAndBlade.Launcher.Library.UserDatas. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# UserData

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class UserData`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs`

## Overview

`UserData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `UserData`.
- **Instance members** (11): `GameType`, `SingleplayerData`, `MultiplayerData`, `DLLCheckData`, `GetUserModData`, `GetDLLLatestSizeInBytes`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DLLCheckData` | property | Instance entry point `DLLCheckDataCollection` property. Read it for current state; a declared setter writes that state in place. |
| `GameType` | property | Instance entry point `GameType` property. Read it for current state; a declared setter writes that state in place. |
| `GetDLLLatestIsDangerous` | method | Instance entry point. Takes 1 argument: `string dllName`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetDLLLatestSizeInBytes` | method | Instance entry point. Takes 1 argument: `string dllName`. Returns `uint?`. Read path: prefer it over reaching for the backing store. |
| `GetDLLLatestVerifyInformation` | method | Instance entry point. Takes 1 argument: `string dllName`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetUserModData` | method | Instance entry point. Takes 2 arguments: `bool isMultiplayer`, `string id`. Returns `UserModData`. Read path: prefer it over reaching for the backing store. |
| `MultiplayerData` | property | Instance entry point `UserGameTypeData` property. Read it for current state; a declared setter writes that state in place. |
| `SetDLLLatestIsDangerous` | method | Instance entry point. Takes 2 arguments: `string dllName`, `bool isDangerous`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDLLLatestSizeInBytes` | method | Instance entry point. Takes 2 arguments: `string dllName`, `uint sizeInBytes`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDLLLatestVerifyInformation` | method | Instance entry point. Takes 2 arguments: `string dllName`, `string verifyInformation`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SingleplayerData` | property | Instance entry point `UserGameTypeData` property. Read it for current state; a declared setter writes that state in place. |
| `UserData` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public UserData()`.

## Usage Example

```csharp
var data = new UserData
{
    GameType = default,
    SingleplayerData = default,
    MultiplayerData = default,
    DLLCheckData = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameType](../GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [UserGameTypeData](../UserGameTypeData/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [DLLCheckDataCollection](../DLLCheckDataCollection/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [DLLCheckData](../DLLCheckData/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/mission-ext/](../) — the other types in this bucket.
