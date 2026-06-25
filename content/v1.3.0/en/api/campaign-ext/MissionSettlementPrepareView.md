---
title: "MissionSettlementPrepareView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSettlementPrepareView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
var view = new MissionSettlementPrepareView();
```

## See Also

- [Complete Class Catalog](../catalog)