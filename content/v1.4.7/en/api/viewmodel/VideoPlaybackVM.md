---
title: "VideoPlaybackVM"
description: "VideoPlaybackVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# VideoPlaybackVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class VideoPlaybackVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs`

## Overview

`VideoPlaybackVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Instance members** (3): `Tick`, `GetItemInTimeframe`, `SetSubtitles`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetItemInTimeframe` | method | Instance entry point. Takes 1 argument: `float timeInSecondsInVideo`. Returns `SRTHelper.SubtitleItem`. Read path: prefer it over reaching for the backing store. |
| `SetSubtitles` | method | Instance entry point. Takes 1 argument: `List<SRTHelper.SubtitleItem> lines`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float totalElapsedTimeInVideoInSeconds`. Called from the owner’s update loop — do not assume a frame boundary. |

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
// The engine or the owning screen constructs the view model; bind it from the layer.

// Command the widget invokes on confirm:
viewModel.Tick(totalElapsedTimeInVideoInSeconds);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SRTHelper](../../core-extra/SRTHelper/) — `TaleWorlds.Library`.

Section: [api/viewmodel/](../) — the other types in this bucket.
