---
title: "BannerTableau"
description: "Auto-generated class reference for BannerTableau."
---
# BannerTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableau`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BannerTableau.cs`

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

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.OnTick(0);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** **Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.SetTargetSize(0, 0);
```

### SetBannerCode
`public void SetBannerCode(string value)`

**Purpose:** **Purpose:** Assigns a new value to banner code and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.SetBannerCode("example");
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.OnFinalize();
```

### SetCustomRenderScale
`public void SetCustomRenderScale(float value)`

**Purpose:** **Purpose:** Assigns a new value to custom render scale and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.SetCustomRenderScale(0);
```

### SetIsNineGrid
`public void SetIsNineGrid(bool value)`

**Purpose:** **Purpose:** Assigns a new value to is nine grid and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.SetIsNineGrid(false);
```

### SetMeshIndexToUpdate
`public void SetMeshIndexToUpdate(int value)`

**Purpose:** **Purpose:** Assigns a new value to mesh index to update and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.SetMeshIndexToUpdate(0);
```

### SetUpdatePositionValueManual
`public void SetUpdatePositionValueManual(Vec2 value)`

**Purpose:** **Purpose:** Assigns a new value to update position value manual and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.SetUpdatePositionValueManual(value);
```

### SetUpdateSizeValueManual
`public void SetUpdateSizeValueManual(Vec2 value)`

**Purpose:** **Purpose:** Assigns a new value to update size value manual and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.SetUpdateSizeValueManual(value);
```

### SetUpdateRotationValueManual
`public void SetUpdateRotationValueManual((float, bool) value)`

**Purpose:** **Purpose:** Assigns a new value to update rotation value manual and updates the object's internal state.

```csharp
// Obtain an instance of BannerTableau from the subsystem API first
BannerTableau bannerTableau = ...;
bannerTableau.SetUpdateRotationValueManual((float, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerTableau bannerTableau = ...;
bannerTableau.OnTick(0);
```

## See Also

- [Area Index](../)