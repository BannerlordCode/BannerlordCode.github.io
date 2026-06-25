---
title: "MountCreationKey"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MountCreationKey`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MountCreationKey

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MountCreationKey`
**Base:** none
**File:** `TaleWorlds.Core/MountCreationKey.cs`

## Overview

`MountCreationKey` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `_leftFrontLegColorIndex` | `public byte _leftFrontLegColorIndex { get; }` |
| `_rightFrontLegColorIndex` | `public byte _rightFrontLegColorIndex { get; }` |
| `_leftBackLegColorIndex` | `public byte _leftBackLegColorIndex { get; }` |
| `_rightBackLegColorIndex` | `public byte _rightBackLegColorIndex { get; }` |
| `MaterialIndex` | `public byte MaterialIndex { get; }` |
| `MeshMultiplierIndex` | `public byte MeshMultiplierIndex { get; }` |

## Key Methods

### FromString
`public static MountCreationKey FromString(string str)`

**Purpose:** Handles logic related to `from string`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetRandomMountKeyString
`public static string GetRandomMountKeyString(ItemObject mountItem, int randomSeed)`

**Purpose:** Gets the current value of `random mount key string`.

### GetRandomMountKey
`public static MountCreationKey GetRandomMountKey(ItemObject mountItem, int randomSeed)`

**Purpose:** Gets the current value of `random mount key`.

## Usage Example

```csharp
MountCreationKey.FromString("example");
```

## See Also

- [Complete Class Catalog](../catalog)