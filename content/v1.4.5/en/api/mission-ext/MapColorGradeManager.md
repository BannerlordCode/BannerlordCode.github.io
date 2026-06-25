---
title: "MapColorGradeManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapColorGradeManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapColorGradeManager

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapColorGradeManager : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/MapColorGradeManager.cs`

## Overview

`MapColorGradeManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapColorGradeManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### ApplyAtmosphere
`public void ApplyAtmosphere(bool forceLoadTextures)`

**Purpose:** Applies `atmosphere` to the current object.

### ApplyColorGrade
`public void ApplyColorGrade(float dt)`

**Purpose:** Applies `color grade` to the current object.

## Usage Example

```csharp
var manager = MapColorGradeManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)