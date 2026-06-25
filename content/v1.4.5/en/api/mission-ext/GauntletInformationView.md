---
title: "GauntletInformationView"
description: "Auto-generated class reference for GauntletInformationView."
---
# GauntletInformationView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletInformationView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletInformationView.cs`

## Overview

`GauntletInformationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletInformationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
GauntletInformationView.Initialize();
```

### OnFinalize
`public static void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Static call; no instance required
GauntletInformationView.OnFinalize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletInformationView view = ...;
```

## See Also

- [Area Index](../)