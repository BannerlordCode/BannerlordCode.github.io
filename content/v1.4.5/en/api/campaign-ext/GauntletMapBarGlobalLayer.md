---
title: "GauntletMapBarGlobalLayer"
description: "Auto-generated class reference for GauntletMapBarGlobalLayer."
---
# GauntletMapBarGlobalLayer

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapBarGlobalLayer : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapBarGlobalLayer.cs`

## Overview

`GauntletMapBarGlobalLayer` lives in `SandBox.GauntletUI.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; }` |

## Key Methods

### Initialize
`public void Initialize(MapBarVM dataSource)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of GauntletMapBarGlobalLayer from the subsystem API first
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.Initialize(dataSource);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of GauntletMapBarGlobalLayer from the subsystem API first
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.OnFinalize();
```

### OnMapConversationStarted
`public void OnMapConversationStarted()`

**Purpose:** Invoked when the `map conversation started` event is raised.

```csharp
// Obtain an instance of GauntletMapBarGlobalLayer from the subsystem API first
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.OnMapConversationStarted();
```

### OnMapConversationOver
`public void OnMapConversationOver()`

**Purpose:** Invoked when the `map conversation over` event is raised.

```csharp
// Obtain an instance of GauntletMapBarGlobalLayer from the subsystem API first
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.OnMapConversationOver();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of GauntletMapBarGlobalLayer from the subsystem API first
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.Refresh();
```

### IsEscaped
`public bool IsEscaped()`

**Purpose:** Determines whether the current object is in the `escaped` state or condition.

```csharp
// Obtain an instance of GauntletMapBarGlobalLayer from the subsystem API first
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
var result = gauntletMapBarGlobalLayer.IsEscaped();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.Initialize(dataSource);
```

## See Also

- [Area Index](../)