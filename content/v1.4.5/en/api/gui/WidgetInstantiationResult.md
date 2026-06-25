---
title: "WidgetInstantiationResult"
description: "Auto-generated class reference for WidgetInstantiationResult."
---
# WidgetInstantiationResult

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetInstantiationResult`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs`

## Overview

`WidgetInstantiationResult` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Widget` | `public Widget Widget { get; }` |
| `Template` | `public WidgetTemplate Template { get; }` |
| `CustomWidgetInstantiationData` | `public WidgetInstantiationResult CustomWidgetInstantiationData { get; }` |
| `Children` | `public List<WidgetInstantiationResult> Children { get; }` |

## Key Methods

### AddExtensionData
`public void AddExtensionData(string name, object data, bool passToChildWidgetCreation = false)`

**Purpose:** Adds `extension data` to the current collection or state.

```csharp
// Obtain an instance of WidgetInstantiationResult from the subsystem API first
WidgetInstantiationResult widgetInstantiationResult = ...;
widgetInstantiationResult.AddExtensionData("example", data, false);
```

### AddExtensionData
`public void AddExtensionData(object data, bool passToChildWidgetCreation = false)`

**Purpose:** Adds `extension data` to the current collection or state.

```csharp
// Obtain an instance of WidgetInstantiationResult from the subsystem API first
WidgetInstantiationResult widgetInstantiationResult = ...;
widgetInstantiationResult.AddExtensionData(data, false);
```

### GetLogicalOrDefaultChildrenLocation
`public WidgetInstantiationResult GetLogicalOrDefaultChildrenLocation()`

**Purpose:** Reads and returns the `logical or default children location` value held by the current object.

```csharp
// Obtain an instance of WidgetInstantiationResult from the subsystem API first
WidgetInstantiationResult widgetInstantiationResult = ...;
var result = widgetInstantiationResult.GetLogicalOrDefaultChildrenLocation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetInstantiationResult widgetInstantiationResult = ...;
widgetInstantiationResult.AddExtensionData("example", data, false);
```

## See Also

- [Area Index](../)