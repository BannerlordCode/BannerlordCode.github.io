---
title: "MapConversationView"
description: "Auto-generated class reference for MapConversationView."
---
# MapConversationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationView.cs`

## Overview

`MapConversationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapConversationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationTableau` | `public MapConversationTableau ConversationTableau { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; set; }` |

## Key Methods

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**Purpose:** **Purpose:** Executes the ConversationPlayArgs logic.

```csharp
// Obtain an instance of MapConversationView from the subsystem API first
MapConversationView mapConversationView = ...;
var result = mapConversationView.ConversationPlayArgs("example", "example", "example", "example", "example");
```

### SetConversationTableau
`public void SetConversationTableau(MapConversationTableau tableau)`

**Purpose:** **Purpose:** Assigns a new value to conversation tableau and updates the object's internal state.

```csharp
// Obtain an instance of MapConversationView from the subsystem API first
MapConversationView mapConversationView = ...;
mapConversationView.SetConversationTableau(tableau);
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MapConversationView from the subsystem API first
MapConversationView mapConversationView = ...;
mapConversationView.Tick(0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MapConversationView from the subsystem API first
MapConversationView mapConversationView = ...;
mapConversationView.OnFinalize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapConversationView view = ...;
```

## See Also

- [Area Index](../)