---
title: "ListPanel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ListPanel`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ListPanel

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ListPanel : Container`
**Base:** `Container`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ListPanel.cs`

## Overview

`ListPanel` lives in `TaleWorlds.GauntletUI.BaseTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.BaseTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StackLayout` | `public StackLayout StackLayout { get; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `ResetSelectedOnLosingFocus` | `public bool ResetSelectedOnLosingFocus { get; set; }` |

## Key Methods

### GetIndexForDrop
`public override int GetIndexForDrop(Vector2 mousePosition)`

**Purpose:** Gets the current value of `index for drop`.

### GetDropGizmoPosition
`public override Vector2 GetDropGizmoPosition(Vector2 mousePosition)`

**Purpose:** Gets the current value of `drop gizmo position`.

### OnChildSelected
`public override void OnChildSelected(Widget widget)`

**Purpose:** Called when the `child selected` event is raised.

## Usage Example

```csharp
var value = new ListPanel();
value.GetIndexForDrop(mousePosition);
```

## See Also

- [Complete Class Catalog](../catalog)