---
title: "MapSceneHelper"
description: "Auto-generated class reference for MapSceneHelper."
---
# MapSceneHelper

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class MapSceneHelper`
**Base:** none
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## Overview

`MapSceneHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MapSceneHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRegionMapping
`public static bool GetRegionMapping(PartyNavigationModel model)`

**Purpose:** Reads and returns the `region mapping` value held by the current object.

```csharp
// Static call; no instance required
MapSceneHelper.GetRegionMapping(model);
```

## Usage Example

```csharp
MapSceneHelper.Initialize();
```

## See Also

- [Area Index](../)