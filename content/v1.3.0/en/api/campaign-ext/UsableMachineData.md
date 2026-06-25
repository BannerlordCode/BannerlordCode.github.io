---
title: "UsableMachineData"
description: "Auto-generated class reference for UsableMachineData."
---
# UsableMachineData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class UsableMachineData`
**Base:** none
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`UsableMachineData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `UsableMachineData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
UsableMachineData entry = ...;
```

## See Also

- [Area Index](../)