<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetInstantiationResult`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetInstantiationResult

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetInstantiationResult`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs`

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

### AddExtensionData
`public void AddExtensionData(object data, bool passToChildWidgetCreation = false)`

**Purpose:** Adds `extension data` to the current collection or state.

### GetLogicalOrDefaultChildrenLocation
`public WidgetInstantiationResult GetLogicalOrDefaultChildrenLocation()`

**Purpose:** Gets the current value of `logical or default children location`.

## Usage Example

```csharp
var value = new WidgetInstantiationResult();
value.AddExtensionData("example", data, false);
```

## See Also

- [Complete Class Catalog](../catalog)