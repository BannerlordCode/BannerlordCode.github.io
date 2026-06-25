---
title: "GauntletQueryManager"
description: "Auto-generated class reference for GauntletQueryManager."
---
# GauntletQueryManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletQueryManager : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletQueryManager.cs`

## Overview

`GauntletQueryManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GauntletQueryManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of GauntletQueryManager from the subsystem API first
GauntletQueryManager gauntletQueryManager = ...;
gauntletQueryManager.Initialize();
```

## Usage Example

```csharp
var manager = GauntletQueryManager.Current;
```

## See Also

- [Area Index](../)