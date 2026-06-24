<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerTableau`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableau`
**Base:** none
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BannerTableau.cs`

## Overview

`BannerTableau` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### SetBannerCode
`public void SetBannerCode(string value)`

**Purpose:** Sets the value or state of `banner code`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCustomRenderScale
`public void SetCustomRenderScale(float value)`

**Purpose:** Sets the value or state of `custom render scale`.

### SetIsNineGrid
`public void SetIsNineGrid(bool value)`

**Purpose:** Sets the value or state of `is nine grid`.

### SetMeshIndexToUpdate
`public void SetMeshIndexToUpdate(int value)`

**Purpose:** Sets the value or state of `mesh index to update`.

### SetUpdatePositionValueManual
`public void SetUpdatePositionValueManual(Vec2 value)`

**Purpose:** Sets the value or state of `update position value manual`.

### SetUpdateSizeValueManual
`public void SetUpdateSizeValueManual(Vec2 value)`

**Purpose:** Sets the value or state of `update size value manual`.

### SetUpdateRotationValueManual
`public void SetUpdateRotationValueManual((float, bool) value)`

**Purpose:** Sets the value or state of `update rotation value manual`.

## Usage Example

```csharp
var value = new BannerTableau();
value.OnTick(0);
```

## See Also

- [Complete Class Catalog](../catalog)