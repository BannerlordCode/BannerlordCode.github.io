---
title: "PopupSceneEmissionHandler"
description: "Auto-generated class reference for PopupSceneEmissionHandler."
---
# PopupSceneEmissionHandler

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneEmissionHandler : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/PopupSceneEmissionHandler.cs`

## Overview

`PopupSceneEmissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `PopupSceneEmissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of PopupSceneEmissionHandler from the subsystem API first
PopupSceneEmissionHandler popupSceneEmissionHandler = ...;
var result = popupSceneEmissionHandler.GetTickRequirement();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<PopupSceneEmissionHandler>();
```

## See Also

- [Area Index](../)