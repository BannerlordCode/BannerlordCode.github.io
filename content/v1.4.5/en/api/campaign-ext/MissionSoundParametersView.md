---
title: "MissionSoundParametersView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSoundParametersView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSoundParametersView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSoundParametersView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionSoundParametersView.cs`

## Overview

`MissionSoundParametersView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionSoundParametersView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Called when the `mission mode change` event is raised.

## Usage Example

```csharp
var view = new MissionSoundParametersView();
```

## See Also

- [Complete Class Catalog](../catalog)