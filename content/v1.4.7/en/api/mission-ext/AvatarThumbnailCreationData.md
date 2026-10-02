---
title: "AvatarThumbnailCreationData"
description: "AvatarThumbnailCreationData — class in TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# AvatarThumbnailCreationData

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class AvatarThumbnailCreationData : ThumbnailCreationData`  
**Base:** `ThumbnailCreationData`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs`

## Overview

`AvatarThumbnailCreationData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends ThumbnailCreationData, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AvatarThumbnailCreationData`.
- **Instance members** (5): `AvatarID`, `AvatarBytes`, `Width`, `Height`, `ImageType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AvatarBytes` | property | Instance entry point `byte[]` property. Read it for current state; a declared setter writes that state in place. |
| `AvatarID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Height` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `ImageType` | property | Instance entry point `AvatarData.ImageType` property. Read it for current state; a declared setter writes that state in place. |
| `Width` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `AvatarThumbnailCreationData` | ctor | Instance entry point. Takes 5 arguments: `string avatarID`, `byte[] avatarBytes`, `uint width`, `uint height`, …. Returns ``. |

- Constructed as `public AvatarThumbnailCreationData(string avatarID, byte[] avatarBytes, uint width, uint height, AvatarData.ImageType imageType)`.

## Usage Example

```csharp
var data = new AvatarThumbnailCreationData
{
    AvatarID = "",
    AvatarBytes = 0,
    Width = default,
    Height = default,
    ImageType = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCreationData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
