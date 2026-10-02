---
title: "SceneNotificationData"
description: "SceneNotificationData — class in TaleWorlds.Core. 26 public members (0 static)."
---

<!-- v147-skeleton -->
# SceneNotificationData

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class SceneNotificationData`  
**Source:** `TaleWorlds.Core/SceneNotificationData.cs`

## Overview

`SceneNotificationData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (26): `SceneID`, `SoundEventPath`, `TitleText`, `AffirmativeDescriptionText`, `NegativeDescriptionText`, `AffirmativeHintText`, ….
- **Extension points** (22): `SceneID`, `SoundEventPath`, `TitleText`, `AffirmativeDescriptionText`, `NegativeDescriptionText`, `AffirmativeHintText`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AffirmativeDescriptionText` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `AffirmativeHintText` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `AffirmativeHintTextExtended` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `AffirmativeText` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `AffirmativeTitleText` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GetBanners` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `Banner[]`. Read path: prefer it over reaching for the backing store. |
| `GetSceneNotificationCharacters` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `SceneNotificationData.SceneNotificationCharacter[]`. Read path: prefer it over reaching for the backing store. |
| `GetShips` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `SceneNotificationData.SceneNotificationShip[]`. Read path: prefer it over reaching for the backing store. |
| `IsAffirmativeOptionShown` | property (virtual) | Virtual — override it to change behaviour for every caller `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNegativeOptionShown` | property (virtual) | Virtual — override it to change behaviour for every caller `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NegativeDescriptionText` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `NegativeText` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `NegativeTitleText` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `OnAffirmativeAction` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCloseAction` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnNegativeAction` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PauseActiveState` | property (virtual) | Virtual — override it to change behaviour for every caller `bool` property. Read it for current state; a declared setter writes that state in place. |
| `RelevantContext` | property (virtual) | Virtual — override it to change behaviour for every caller `SceneNotificationData.RelevantContextType` property. Read it for current state; a declared setter writes that state in place. |
| `SceneID` | property (virtual) | Virtual — override it to change behaviour for every caller `string` property. Read it for current state; a declared setter writes that state in place. |
| `SceneProperties` | property (virtual) | Virtual — override it to change behaviour for every caller `SceneNotificationData.NotificationSceneProperties` property. Read it for current state; a declared setter writes that state in place. |
| `SoundEventPath` | property (virtual) | Virtual — override it to change behaviour for every caller `string` property. Read it for current state; a declared setter writes that state in place. |
| `TitleText` | property (virtual) | Virtual — override it to change behaviour for every caller `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `NotificationSceneProperties` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `RelevantContextType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |

2 further public members follow the same patterns.
## Usage Example

```csharp
var data = new SceneNotificationData
{
    SceneID = "",
    SoundEventPath = "",
    TitleText = default,
    AffirmativeDescriptionText = default,
    NegativeDescriptionText = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 22 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Core/SceneNotificationData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
