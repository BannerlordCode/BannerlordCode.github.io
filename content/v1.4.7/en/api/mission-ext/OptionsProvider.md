---
title: "OptionsProvider"
description: "OptionsProvider — class in TaleWorlds.MountAndBlade.Options. 13 public members (13 static)."
---

<!-- v147-skeleton -->
# OptionsProvider

**Namespace:** `TaleWorlds.MountAndBlade.Options`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class OptionsProvider`  
**Source:** `TaleWorlds.MountAndBlade/Options/OptionsProvider.cs`

## Overview

`OptionsProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (13): `GetVideoOptionCategory`, `GetPerformanceOptionCategory`, `GetPerformanceGraphicsOptions`, `GetPerformanceResolutionScalingOptions`, `GetPerformanceGameplayOptions`, `GetPerformanceAudioOptions`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetAudioOptionCategory` | method (static) | Static entry point. Takes 1 argument: `bool isMultiplayer`. Returns `OptionCategory`. Read path: prefer it over reaching for the backing store. |
| `GetControllerOptionCategory` | method (static) | Static entry point. Takes no arguments. Returns `OptionCategory`. Read path: prefer it over reaching for the backing store. |
| `GetDefaultManagedOptions` | method (static) | Static entry point. Takes no arguments. Returns `Dictionary<ManagedOptions.ManagedOptionsType, float[]>`. Read path: prefer it over reaching for the backing store. |
| `GetDefaultNativeOptions` | method (static) | Static entry point. Takes no arguments. Returns `Dictionary<NativeOptions.NativeOptionsType, float[]>`. Read path: prefer it over reaching for the backing store. |
| `GetGameKeyCategoriesList` | method (static) | Static entry point. Takes 1 argument: `bool isMultiplayer`. Returns `IEnumerable<string>`. Read path: prefer it over reaching for the backing store. |
| `GetGameplayOptionCategory` | method (static) | Static entry point. Takes 2 arguments: `bool isMainMenu`, `bool isMultiplayer`. Returns `OptionCategory`. Read path: prefer it over reaching for the backing store. |
| `GetHiddenGameKeys` | method (static) | Static entry point. Takes 1 argument: `bool isNavalModuleActive`. Returns `IEnumerable<int>`. Read path: prefer it over reaching for the backing store. |
| `GetPerformanceAudioOptions` | method (static) | Static entry point. Takes no arguments. Returns `IEnumerable<IOptionData>`. Read path: prefer it over reaching for the backing store. |
| `GetPerformanceGameplayOptions` | method (static) | Static entry point. Takes 1 argument: `bool isMultiplayer`. Returns `IEnumerable<IOptionData>`. Read path: prefer it over reaching for the backing store. |
| `GetPerformanceGraphicsOptions` | method (static) | Static entry point. Takes 1 argument: `bool isMultiplayer`. Returns `IEnumerable<IOptionData>`. Read path: prefer it over reaching for the backing store. |
| `GetPerformanceOptionCategory` | method (static) | Static entry point. Takes 1 argument: `bool isMultiplayer`. Returns `OptionCategory`. Read path: prefer it over reaching for the backing store. |
| `GetPerformanceResolutionScalingOptions` | method (static) | Static entry point. Takes 1 argument: `bool isMultiplayer`. Returns `IEnumerable<IOptionData>`. Read path: prefer it over reaching for the backing store. |
| `GetVideoOptionCategory` | method (static) | Static entry point. Takes 4 arguments: `bool isMainMenu`, `Action onBrightnessClick`, `Action onExposureClick`, `Action onBenchmarkClick`. Returns `OptionCategory`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var optionsProvider = OptionsProvider.GetPerformanceAudioOptions();
OptionsProvider.GetVideoOptionCategory(isMainMenu, onBrightnessClick, onExposureClick, onBenchmarkClick);
OptionsProvider.GetPerformanceOptionCategory(isMultiplayer);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade/Options/OptionsProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [OptionCategory](../OptionCategory/) — `TaleWorlds.MountAndBlade.Options`.
- [IOptionData](../../engine/IOptionData/) — `TaleWorlds.Engine.Options`.
- [ActionOptionData](../ActionOptionData/) — `TaleWorlds.MountAndBlade.Options`.
- [ManagedBooleanOptionData](../ManagedBooleanOptionData/) — `TaleWorlds.MountAndBlade.Options.ManagedOptions`.
- [NativeNumericOptionData](../../engine/NativeNumericOptionData/) — `TaleWorlds.Engine.Options`.
- [OptionGroup](../OptionGroup/) — `TaleWorlds.MountAndBlade.Options`.
- [ManagedSelectionOptionData](../ManagedSelectionOptionData/) — `TaleWorlds.MountAndBlade.Options.ManagedOptions`.
- [NativeBooleanOptionData](../../engine/NativeBooleanOptionData/) — `TaleWorlds.Engine.Options`.
- [ManagedNumericOptionData](../ManagedNumericOptionData/) — `TaleWorlds.MountAndBlade.Options.ManagedOptions`.

Section: [api/mission-ext/](../) — the other types in this bucket.
