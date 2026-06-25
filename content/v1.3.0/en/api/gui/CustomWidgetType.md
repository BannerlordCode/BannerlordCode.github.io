---
title: "CustomWidgetType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomWidgetType`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomWidgetType

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CustomWidgetType`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/CustomWidgetType.cs`

## Overview

`CustomWidgetType` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetTemplate` | `public WidgetTemplate WidgetTemplate { get; }` |
| `WidgetPrefab` | `public WidgetPrefab WidgetPrefab { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `Name` | `public string Name { get; }` |
| `FullPath` | `public string FullPath { get; }` |

## Key Methods

### CheckForUpdate
`public bool CheckForUpdate()`

**Purpose:** Handles logic related to `check for update`.

## Usage Example

```csharp
var value = new CustomWidgetType();
value.CheckForUpdate();
```

## See Also

- [Complete Class Catalog](../catalog)