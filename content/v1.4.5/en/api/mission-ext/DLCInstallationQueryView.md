---
title: "DLCInstallationQueryView"
description: "Auto-generated class reference for DLCInstallationQueryView."
---
# DLCInstallationQueryView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLCInstallationQueryView`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/DLCInstallationQueryView.cs`

## Overview

`DLCInstallationQueryView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `DLCInstallationQueryView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of DLCInstallationQueryView from the subsystem API first
DLCInstallationQueryView dLCInstallationQueryView = ...;
dLCInstallationQueryView.Initialize();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of DLCInstallationQueryView from the subsystem API first
DLCInstallationQueryView dLCInstallationQueryView = ...;
dLCInstallationQueryView.OnFinalize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
DLCInstallationQueryView view = ...;
```

## See Also

- [Area Index](../)