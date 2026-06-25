---
title: "MissionFormationSpawnData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFormationSpawnData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFormationSpawnData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionFormationSpawnData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionFormationSpawnData.cs`

## Overview

`MissionFormationSpawnData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MissionFormationSpawnData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new MissionFormationSpawnData();
```

## See Also

- [Complete Class Catalog](../catalog)