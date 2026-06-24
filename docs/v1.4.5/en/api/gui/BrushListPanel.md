<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushListPanel`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrushListPanel

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushListPanel.cs`

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

**Purpose:** Updates the state or data of `brushes`.

### SetState
`public override void SetState(string stateName)`

**Purpose:** Sets the value or state of `state`.

### UpdateAnimationPropertiesSubTask
`public override void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**Purpose:** Updates the state or data of `animation properties sub task`.

### OnBrushChanged
`public virtual void OnBrushChanged()`

**Purpose:** Called when the `brush changed` event is raised.

## Usage Example

```csharp
var value = new BrushListPanel();
value.UpdateBrushes(0);
```

## See Also

- [Complete Class Catalog](../catalog)