---
title: "BannerlordTableauManager"
description: "Auto-generated class reference for BannerlordTableauManager."
---
# BannerlordTableauManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordTableauManager`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordTableauManager.cs`

## Overview

`BannerlordTableauManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `BannerlordTableauManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### RequestCharacterTableauSetupDelegate
`public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity)`

**Purpose:** **Purpose:** Executes the RequestCharacterTableauSetupDelegate logic.

```csharp
// Obtain an instance of BannerlordTableauManager from the subsystem API first
BannerlordTableauManager bannerlordTableauManager = ...;
bannerlordTableauManager.RequestCharacterTableauSetupDelegate(0, scene, poseEntity);
```

### RequestCharacterTableauRender
`public static void RequestCharacterTableauRender(int characterCodeId, string path, GameEntity poseEntity, Camera cameraObject, int tableauType)`

**Purpose:** **Purpose:** Executes the RequestCharacterTableauRender logic.

```csharp
// Static call; no instance required
BannerlordTableauManager.RequestCharacterTableauRender(0, "example", poseEntity, cameraObject, 0);
```

### ClearManager
`public static void ClearManager()`

**Purpose:** **Purpose:** Removes all manager from the this instance.

```csharp
// Static call; no instance required
BannerlordTableauManager.ClearManager();
```

### InitializeCharacterTableauRenderSystem
`public static void InitializeCharacterTableauRenderSystem()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by character tableau render system.

```csharp
// Static call; no instance required
BannerlordTableauManager.InitializeCharacterTableauRenderSystem();
```

### GetNumberOfPendingTableauRequests
`public static int GetNumberOfPendingTableauRequests()`

**Purpose:** **Purpose:** Reads and returns the number of pending tableau requests value held by the this instance.

```csharp
// Static call; no instance required
BannerlordTableauManager.GetNumberOfPendingTableauRequests();
```

## Usage Example

```csharp
var manager = BannerlordTableauManager.Current;
```

## See Also

- [Area Index](../)