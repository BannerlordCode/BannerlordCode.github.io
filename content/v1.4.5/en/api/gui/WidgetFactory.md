---
title: "WidgetFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetFactory`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetFactory

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetFactory`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddCustomType
`public void AddCustomType(string name, string path)`

**Purpose:** Adds `custom type` to the current collection or state.

### GetPrefabNames
`public IEnumerable<string> GetPrefabNames()`

**Purpose:** Gets the current value of `prefab names`.

### GetWidgetTypes
`public IEnumerable<string> GetWidgetTypes()`

**Purpose:** Gets the current value of `widget types`.

### IsBuiltinType
`public bool IsBuiltinType(string name)`

**Purpose:** Handles logic related to `is builtin type`.

### GetBuiltinType
`public Type GetBuiltinType(string name)`

**Purpose:** Gets the current value of `builtin type`.

### IsCustomType
`public bool IsCustomType(string typeName)`

**Purpose:** Handles logic related to `is custom type`.

### GetCustomTypePath
`public string GetCustomTypePath(string name)`

**Purpose:** Gets the current value of `custom type path`.

### CreateBuiltinWidget
`public Widget CreateBuiltinWidget(UIContext context, string typeName)`

**Purpose:** Creates a new `builtin widget` instance or object.

### GetCustomType
`public WidgetPrefab GetCustomType(string typeName)`

**Purpose:** Gets the current value of `custom type`.

### OnUnload
`public void OnUnload(string typeName)`

**Purpose:** Called when the `unload` event is raised.

### CheckForUpdates
`public void CheckForUpdates()`

**Purpose:** Handles logic related to `check for updates`.

## Usage Example

```csharp
var value = new WidgetFactory();
value.Initialize(null);
```

## See Also

- [Complete Class Catalog](../catalog)