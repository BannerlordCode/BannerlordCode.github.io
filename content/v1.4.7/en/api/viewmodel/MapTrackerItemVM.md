---
title: "MapTrackerItemVM"
description: "MapTrackerItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker. 31 public members (1 static)."
---

<!-- v147-skeleton -->
# MapTrackerItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public abstract class MapTrackerItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs`

## Overview

`MapTrackerItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapTrackerItemVM`.
- **Instance members** (17): `OnShowTooltip`, `OnUpdateProperties`, `OnUpdatePosition`, `OnToggleTrack`, `OnGoToPosition`, `OnRefreshBinding`, ….
- **Extension points** (10): `OnShowTooltip`, `OnUpdateProperties`, `OnUpdatePosition`, `OnToggleTrack`, `OnGoToPosition`, `OnRefreshBinding`, ….
- **Data and constants** (13): `TrackedObject`, `_latestX`, `_latestY`, `_latestW`, `_previousQuestsBind`, `_questsBind`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteGoToPosition` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteHideTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteShowTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteToggleTrack` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetCanToggleTrack` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetRelatedQuests` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `CampaignUIHelper.IssueQuestFlags`. Read path: prefer it over reaching for the backing store. |
| `GetTrackerType` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `IsVisibleOnMap` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnFastMoveCameraToPosition` | field (static) | Static entry point `Action<CampaignVec2>` field — direct storage with no validation or notification. |
| `OnGoToPosition` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRefreshBinding` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnShowTooltip` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnToggleTrack` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUpdatePosition` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `float screenX`, `float screenY`, `float screenW`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUpdateProperties` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshBinding` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdatePosition` | method | Instance entry point. Takes 3 arguments: `float screenX`, `float screenY`, `float screenW`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateProperties` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `MapTrackerItemVM` | ctor | Instance entry point. Takes 1 argument: `ITrackableCampaignObject trackedObject`. Returns ``. |
| `TrackedObject` | field | Instance entry point `ITrackableCampaignObject` field — direct storage with no validation or notification. |
| `_canToggleTrackBind` | field | Protected — for subclasses only `bool` field — direct storage with no validation or notification. |
| `_factionVisualBind` | field | Protected — for subclasses only `BannerImageIdentifierVM` field — direct storage with no validation or notification. |
| `_isBehindBind` | field | Protected — for subclasses only `bool` field — direct storage with no validation or notification. |
| `_isVisibleOnMapBind` | field | Protected — for subclasses only `bool` field — direct storage with no validation or notification. |

- Constructed as `public MapTrackerItemVM(ITrackableCampaignObject trackedObject)`.

7 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MapTrackerItemVM(trackedObject);

// Command the widget invokes on confirm:
viewModel.OnShowTooltip();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [QuestMarkerVM](../QuestMarkerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [BannerImageIdentifierVM](../BannerImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.

Section: [api/viewmodel/](../) — the other types in this bucket.
