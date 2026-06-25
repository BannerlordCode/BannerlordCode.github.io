---
title: "NativeConfig"
description: "Auto-generated class reference for NativeConfig."
---
# NativeConfig

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class NativeConfig`
**Base:** none
**File:** `TaleWorlds.Engine/NativeConfig.cs`

## Overview

`NativeConfig` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CheatMode` | `public static bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public static bool IsDevelopmentMode { get; }` |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode { get; }` |
| `GetUIDebugMode` | `public static bool GetUIDebugMode { get; }` |
| `DisableSound` | `public static bool DisableSound { get; }` |
| `EnableEditMode` | `public static bool EnableEditMode { get; }` |
| `TableauCacheEnabled` | `public static bool TableauCacheEnabled { get; }` |
| `DoLocalizationCheckAtStartup` | `public static bool DoLocalizationCheckAtStartup { get; }` |
| `EnableClothSimulation` | `public static bool EnableClothSimulation { get; }` |
| `CharacterDetail` | `public static int CharacterDetail { get; }` |
| `InvertMouse` | `public static bool InvertMouse { get; }` |
| `LastOpenedScene` | `public static string LastOpenedScene { get; }` |
| `AutoSaveInMinutes` | `public static int AutoSaveInMinutes { get; }` |
| `GetUIDoNotUseGeneratedPrefabs` | `public static bool GetUIDoNotUseGeneratedPrefabs { get; }` |
| `DebugLoginUsername` | `public static string DebugLoginUsername { get; }` |
| `DebugLogicPassword` | `public static string DebugLogicPassword { get; }` |
| `DisableGuiMessages` | `public static bool DisableGuiMessages { get; }` |
| `AutoGFXQuality` | `public static NativeOptions.ConfigQuality AutoGFXQuality { get; }` |

## Key Methods

### OnConfigChanged
`public static void OnConfigChanged()`

**Purpose:** **Purpose:** Invoked when the config changed event is raised.

```csharp
// Static call; no instance required
NativeConfig.OnConfigChanged();
```

### SetAutoConfigWrtHardware
`public static void SetAutoConfigWrtHardware()`

**Purpose:** **Purpose:** Assigns a new value to auto config wrt hardware and updates the object's internal state.

```csharp
// Static call; no instance required
NativeConfig.SetAutoConfigWrtHardware();
```

## Usage Example

```csharp
NativeConfig.OnConfigChanged();
```

## See Also

- [Area Index](../)