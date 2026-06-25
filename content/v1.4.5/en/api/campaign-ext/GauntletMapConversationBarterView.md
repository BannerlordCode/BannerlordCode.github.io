---
title: "GauntletMapConversationBarterView"
description: "Auto-generated class reference for GauntletMapConversationBarterView."
---
# GauntletMapConversationBarterView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapConversationBarterView`
**Base:** none
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapConversationBarterView.cs`

## Overview

`GauntletMapConversationBarterView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapConversationBarterView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCreated` | `public bool IsCreated { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### OnBarterActiveStateChanged
`public delegate void OnBarterActiveStateChanged(bool isBarterActive)`

**Purpose:** **Purpose:** Invoked when the barter active state changed event is raised.

```csharp
// Obtain an instance of GauntletMapConversationBarterView from the subsystem API first
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.OnBarterActiveStateChanged(false);
```

### CreateBarterView
`public void CreateBarterView(BarterData args)`

**Purpose:** **Purpose:** Constructs a new barter view entity and returns it to the caller.

```csharp
// Obtain an instance of GauntletMapConversationBarterView from the subsystem API first
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.CreateBarterView(args);
```

### DestroyBarterView
`public void DestroyBarterView()`

**Purpose:** **Purpose:** Executes the DestroyBarterView logic.

```csharp
// Obtain an instance of GauntletMapConversationBarterView from the subsystem API first
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.DestroyBarterView();
```

### Activate
`public void Activate()`

**Purpose:** **Purpose:** Activates the resource, state, or feature represented by the this instance.

```csharp
// Obtain an instance of GauntletMapConversationBarterView from the subsystem API first
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.Activate();
```

### Deactivate
`public void Deactivate()`

**Purpose:** **Purpose:** Deactivates the resource, state, or feature represented by the this instance.

```csharp
// Obtain an instance of GauntletMapConversationBarterView from the subsystem API first
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.Deactivate();
```

### TickInput
`public void TickInput()`

**Purpose:** **Purpose:** Advances the input state each frame or update cycle.

```csharp
// Obtain an instance of GauntletMapConversationBarterView from the subsystem API first
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.TickInput();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapConversationBarterView view = ...;
```

## See Also

- [Area Index](../)