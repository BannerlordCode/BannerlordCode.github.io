---
title: "GauntletBannerBuilderScreen"
description: "Auto-generated class reference for GauntletBannerBuilderScreen."
---
# GauntletBannerBuilderScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletBannerBuilderScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs`

## Overview

`GauntletBannerBuilderScreen` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |

## Key Methods

### Exit
`public void Exit(bool isCancel)`

**Purpose:** Executes the Exit logic.

```csharp
// Obtain an instance of GauntletBannerBuilderScreen from the subsystem API first
GauntletBannerBuilderScreen gauntletBannerBuilderScreen = ...;
gauntletBannerBuilderScreen.Exit(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletBannerBuilderScreen gauntletBannerBuilderScreen = ...;
gauntletBannerBuilderScreen.Exit(false);
```

## See Also

- [Area Index](../)