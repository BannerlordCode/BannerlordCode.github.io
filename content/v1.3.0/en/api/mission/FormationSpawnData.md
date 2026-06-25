---
title: "FormationSpawnData"
description: "Auto-generated class reference for FormationSpawnData."
---
# FormationSpawnData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal struct FormationSpawnData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs`

## Overview

`FormationSpawnData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FormationSpawnData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumTroops` | `public int NumTroops { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FormationSpawnData entry = ...;
```

## See Also

- [Area Index](../)