---
title: "TroopData"
description: "Auto-generated class reference for TroopData."
---
# TroopData

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class TroopData`
**Base:** none
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs`

## Overview

`TroopData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TroopData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TroopData entry = ...;
```

## See Also

- [Area Index](../)