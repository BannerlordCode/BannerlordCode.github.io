<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrightnessDemoTableau`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrightnessDemoTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessDemoTableau`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BrightnessDemoTableau.cs`

## Overview

`BrightnessDemoTableau` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### SetDemoType
`public void SetDemoType(int demoType)`

**Purpose:** Sets the value or state of `demo type`.

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetScene
`public void SetScene()`

**Purpose:** Sets the value or state of `scene`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

## Usage Example

```csharp
var value = new BrightnessDemoTableau();
value.SetDemoType(0);
```

## See Also

- [Complete Class Catalog](../catalog)