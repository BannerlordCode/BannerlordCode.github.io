---
title: "WidgetFactory"
description: "Auto-generated class reference for WidgetFactory."
---
# WidgetFactory

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetFactory`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs`

## Overview

`WidgetFactory` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext { get; }` |
| `WidgetAttributeContext` | `public WidgetAttributeContext WidgetAttributeContext { get; }` |
| `GeneratedPrefabContext` | `public GeneratedPrefabContext GeneratedPrefabContext { get; }` |

## Key Methods

### Initialize
`public void Initialize(List<string> assemblyOrder = null)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
widgetFactory.Initialize(null);
```

### AddCustomType
`public void AddCustomType(string name, string path)`

**Purpose:** Adds `custom type` to the current collection or state.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
widgetFactory.AddCustomType("example", "example");
```

### GetPrefabNames
`public IEnumerable<string> GetPrefabNames()`

**Purpose:** Reads and returns the `prefab names` value held by the current object.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetPrefabNames();
```

### GetWidgetTypes
`public IEnumerable<string> GetWidgetTypes()`

**Purpose:** Reads and returns the `widget types` value held by the current object.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetWidgetTypes();
```

### IsBuiltinType
`public bool IsBuiltinType(string name)`

**Purpose:** Determines whether the current object is in the `builtin type` state or condition.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
var result = widgetFactory.IsBuiltinType("example");
```

### GetBuiltinType
`public Type GetBuiltinType(string name)`

**Purpose:** Reads and returns the `builtin type` value held by the current object.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetBuiltinType("example");
```

### IsCustomType
`public bool IsCustomType(string typeName)`

**Purpose:** Determines whether the current object is in the `custom type` state or condition.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
var result = widgetFactory.IsCustomType("example");
```

### GetCustomTypePath
`public string GetCustomTypePath(string name)`

**Purpose:** Reads and returns the `custom type path` value held by the current object.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetCustomTypePath("example");
```

### CreateBuiltinWidget
`public Widget CreateBuiltinWidget(UIContext context, string typeName)`

**Purpose:** Constructs a new `builtin widget` entity and returns it to the caller.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
var result = widgetFactory.CreateBuiltinWidget(context, "example");
```

### GetCustomType
`public WidgetPrefab GetCustomType(string typeName)`

**Purpose:** Reads and returns the `custom type` value held by the current object.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetCustomType("example");
```

### OnUnload
`public void OnUnload(string typeName)`

**Purpose:** Invoked when the `unload` event is raised.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
widgetFactory.OnUnload("example");
```

### CheckForUpdates
`public void CheckForUpdates()`

**Purpose:** Verifies whether `for updates` holds true for the current object.

```csharp
// Obtain an instance of WidgetFactory from the subsystem API first
WidgetFactory widgetFactory = ...;
widgetFactory.CheckForUpdates();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetFactory widgetFactory = ...;
widgetFactory.Initialize(null);
```

## See Also

- [Area Index](../)