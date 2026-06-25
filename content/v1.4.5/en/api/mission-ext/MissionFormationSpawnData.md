---
title: "MissionFormationSpawnData"
description: "Auto-generated class reference for MissionFormationSpawnData."
---
# MissionFormationSpawnData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionFormationSpawnData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionFormationSpawnData.cs`

## Overview

`MissionFormationSpawnData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MissionFormationSpawnData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MissionFormationSpawnData entry = ...;
```

## See Also

- [Area Index](../)