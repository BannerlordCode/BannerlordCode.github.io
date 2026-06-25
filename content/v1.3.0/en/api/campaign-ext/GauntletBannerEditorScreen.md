---
title: "GauntletBannerEditorScreen"
description: "Auto-generated class reference for GauntletBannerEditorScreen."
---
# GauntletBannerEditorScreen

**Namespace:** SandBox.GauntletUI.BannerEditor
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletBannerEditorScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs`

## Overview

`GauntletBannerEditorScreen` lives in `SandBox.GauntletUI.BannerEditor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.BannerEditor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnDone
`public void OnDone()`

**Purpose:** Invoked when the done event is raised.

```csharp
// Obtain an instance of GauntletBannerEditorScreen from the subsystem API first
GauntletBannerEditorScreen gauntletBannerEditorScreen = ...;
gauntletBannerEditorScreen.OnDone();
```

### OnCancel
`public void OnCancel()`

**Purpose:** Invoked when the cancel event is raised.

```csharp
// Obtain an instance of GauntletBannerEditorScreen from the subsystem API first
GauntletBannerEditorScreen gauntletBannerEditorScreen = ...;
gauntletBannerEditorScreen.OnCancel();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletBannerEditorScreen gauntletBannerEditorScreen = ...;
gauntletBannerEditorScreen.OnDone();
```

## See Also

- [Area Index](../)