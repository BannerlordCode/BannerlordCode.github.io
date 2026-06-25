---
title: "BrushListPanel"
description: "Auto-generated class reference for BrushListPanel."
---
# BrushListPanel

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs`

## Overview

`BrushListPanel` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Brush` | `public Brush Brush { get; }` |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get; }` |
| `Sprite` | `public new Sprite Sprite { get; set; }` |
| `BrushRenderer` | `public BrushRenderer BrushRenderer { get; }` |

## Key Methods

### UpdateBrushes
`public override void UpdateBrushes(float dt)`

**Purpose:** Recalculates and stores the latest representation of `brushes`.

```csharp
// Obtain an instance of BrushListPanel from the subsystem API first
BrushListPanel brushListPanel = ...;
brushListPanel.UpdateBrushes(0);
```

### SetState
`public override void SetState(string stateName)`

**Purpose:** Assigns a new value to `state` and updates the object's internal state.

```csharp
// Obtain an instance of BrushListPanel from the subsystem API first
BrushListPanel brushListPanel = ...;
brushListPanel.SetState("example");
```

### UpdateAnimationPropertiesSubTask
`public override void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**Purpose:** Recalculates and stores the latest representation of `animation properties sub task`.

```csharp
// Obtain an instance of BrushListPanel from the subsystem API first
BrushListPanel brushListPanel = ...;
brushListPanel.UpdateAnimationPropertiesSubTask(0);
```

### OnBrushChanged
`public virtual void OnBrushChanged()`

**Purpose:** Invoked when the `brush changed` event is raised.

```csharp
// Obtain an instance of BrushListPanel from the subsystem API first
BrushListPanel brushListPanel = ...;
brushListPanel.OnBrushChanged();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushListPanel brushListPanel = ...;
brushListPanel.UpdateBrushes(0);
```

## See Also

- [Area Index](../)