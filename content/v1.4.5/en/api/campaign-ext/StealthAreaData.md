---
title: "StealthAreaData"
description: "Auto-generated class reference for StealthAreaData."
---
# StealthAreaData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StealthAreaData`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/StealthAreaMissionLogic.cs`

## Overview

`StealthAreaData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `StealthAreaData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
StealthAreaData entry = ...;
```

## See Also

- [Area Index](../)