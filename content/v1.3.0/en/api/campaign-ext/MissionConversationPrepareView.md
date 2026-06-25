---
title: "MissionConversationPrepareView"
description: "Auto-generated class reference for MissionConversationPrepareView."
---
# MissionConversationPrepareView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionConversationPrepareView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionConversationPrepareView.cs`

## Overview

`MissionConversationPrepareView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionConversationPrepareView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionConversationPrepareView from the subsystem API first
MissionConversationPrepareView missionConversationPrepareView = ...;
missionConversationPrepareView.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionConversationPrepareView from the subsystem API first
MissionConversationPrepareView missionConversationPrepareView = ...;
missionConversationPrepareView.AfterStart();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionConversationPrepareView view = ...;
```

## See Also

- [Area Index](../)