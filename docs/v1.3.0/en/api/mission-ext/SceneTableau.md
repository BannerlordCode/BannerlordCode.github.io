<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneTableau`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneTableau`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/SceneTableau.cs`

## Overview

`SceneTableau` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `_texture` | `public Texture _texture { get; }` |
| `IsReady` | `public bool? IsReady { get; }` |

## Key Methods

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetScene
`public void SetScene(object scene)`

**Purpose:** Sets the value or state of `scene`.

### SetBannerCode
`public void SetBannerCode(string value)`

**Purpose:** Sets the value or state of `banner code`.

### RotateCharacter
`public void RotateCharacter(bool value)`

**Purpose:** Handles logic related to `rotate character`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

## Usage Example

```csharp
var value = new SceneTableau();
value.SetTargetSize(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)