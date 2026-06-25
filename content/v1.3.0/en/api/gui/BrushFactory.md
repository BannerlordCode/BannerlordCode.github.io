---
title: "BrushFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushFactory`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrushFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushFactory`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs`

## Overview

`BrushFactory` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Brushes` | `public IEnumerable<Brush> Brushes { get; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### LoadBrushFile
`public void LoadBrushFile(string name)`

**Purpose:** Loads `brush file` data.

### GetBrush
`public Brush GetBrush(string name)`

**Purpose:** Gets the current value of `brush`.

### SaveBrushAs
`public bool SaveBrushAs(string name, Brush brush)`

**Purpose:** Saves `brush as` data.

### CheckForUpdates
`public void CheckForUpdates()`

**Purpose:** Handles logic related to `check for updates`.

## Usage Example

```csharp
var value = new BrushFactory();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)