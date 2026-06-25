---
title: "StealthTutorialView"
description: "Auto-generated class reference for StealthTutorialView."
---
# StealthTutorialView

**Namespace:** StoryMode.View.Missions
**Module:** StoryMode.View
**Type:** `public class StealthTutorialView : MissionView`
**Base:** `MissionView`
**File:** `Modules.StoryMode/StoryMode.View/StoryMode.View.Missions/StealthTutorialView.cs`

## Overview

`StealthTutorialView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `StealthTutorialView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of StealthTutorialView from the subsystem API first
StealthTutorialView stealthTutorialView = ...;
stealthTutorialView.AfterStart();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
StealthTutorialView view = ...;
```

## See Also

- [Area Index](../)