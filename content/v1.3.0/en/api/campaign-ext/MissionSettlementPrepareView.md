---
title: "MissionSettlementPrepareView"
description: "Auto-generated class reference for MissionSettlementPrepareView."
---
# MissionSettlementPrepareView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSettlementPrepareView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionSettlementPrepareView.cs`

## Overview

`MissionSettlementPrepareView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionSettlementPrepareView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionSettlementPrepareView from the subsystem API first
MissionSettlementPrepareView missionSettlementPrepareView = ...;
missionSettlementPrepareView.AfterStart();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionSettlementPrepareView view = ...;
```

## See Also

- [Area Index](../)