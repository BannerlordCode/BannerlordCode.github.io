<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapBarGlobalLayer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapBarGlobalLayer

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapBarGlobalLayer : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### IsEscaped
`public bool IsEscaped()`

**Purpose:** Handles logic related to `is escaped`.

## Usage Example

```csharp
var value = new GauntletMapBarGlobalLayer();
value.Initialize(dataSource);
```

## See Also

- [Complete Class Catalog](../catalog)