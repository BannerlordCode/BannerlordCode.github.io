---
title: "MissionQuestBarView"
description: "Auto-generated class reference for MissionQuestBarView."
---
# MissionQuestBarView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionQuestBarView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionQuestBarView.cs`

## Overview

`MissionQuestBarView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionQuestBarView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionQuestBarView view = ...;
```

## See Also

- [Area Index](../)