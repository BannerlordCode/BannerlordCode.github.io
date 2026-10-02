---
title: "EncyclopediaData"
description: "EncyclopediaData — class in SandBox.GauntletUI.Encyclopedia. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaData

**Namespace:** `SandBox.GauntletUI.Encyclopedia`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class EncyclopediaData`  
**Source:** `SandBox.GauntletUI/Encyclopedia/EncyclopediaData.cs`

## Overview

`EncyclopediaData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaData`.
- **Instance members** (2): `OnFinalize`, `CloseEncyclopedia`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CloseEncyclopedia` | method | Instance entry point. Takes no arguments. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `EncyclopediaData` | ctor | Instance entry point. Takes 4 arguments: `GauntletMapEncyclopediaView manager`, `ScreenBase screen`, `EncyclopediaHomeVM homeDatasource`, `EncyclopediaNavigatorVM navigatorDatasource`. Returns ``. |

- Constructed as `public EncyclopediaData(GauntletMapEncyclopediaView manager, ScreenBase screen, EncyclopediaHomeVM homeDatasource, EncyclopediaNavigatorVM navigatorDatasource)`.

## Usage Example

```csharp
EncyclopediaData.OnFinalize();
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `SandBox.GauntletUI/Encyclopedia/EncyclopediaData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GauntletMapEncyclopediaView](../GauntletMapEncyclopediaView/) — `SandBox.GauntletUI.Encyclopedia`.
- [EncyclopediaHomeVM](../../viewmodel/EncyclopediaHomeVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [EncyclopediaNavigatorVM](../../viewmodel/EncyclopediaNavigatorVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaPageArgs](../../viewmodel/EncyclopediaPageArgs/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [UISoundsHelper](../../mission-ext/UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [EncyclopediaListItemVM](../../viewmodel/EncyclopediaListItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`.

Section: [api/sandbox/](../) — the other types in this bucket.
