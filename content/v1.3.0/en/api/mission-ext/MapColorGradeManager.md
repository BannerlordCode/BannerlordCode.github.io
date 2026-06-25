---
title: "MapColorGradeManager"
description: "Auto-generated class reference for MapColorGradeManager."
---
# MapColorGradeManager

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapColorGradeManager : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/MapColorGradeManager.cs`

## Overview

`MapColorGradeManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapColorGradeManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of MapColorGradeManager from the subsystem API first
MapColorGradeManager mapColorGradeManager = ...;
var result = mapColorGradeManager.GetTickRequirement();
```

### ApplyAtmosphere
`public void ApplyAtmosphere(bool forceLoadTextures)`

**Purpose:** **Purpose:** Applies the effect of atmosphere to the this instance.

```csharp
// Obtain an instance of MapColorGradeManager from the subsystem API first
MapColorGradeManager mapColorGradeManager = ...;
mapColorGradeManager.ApplyAtmosphere(false);
```

### ApplyColorGrade
`public void ApplyColorGrade(float dt)`

**Purpose:** **Purpose:** Applies the effect of color grade to the this instance.

```csharp
// Obtain an instance of MapColorGradeManager from the subsystem API first
MapColorGradeManager mapColorGradeManager = ...;
mapColorGradeManager.ApplyColorGrade(0);
```

## Usage Example

```csharp
var manager = MapColorGradeManager.Current;
```

## See Also

- [Area Index](../)