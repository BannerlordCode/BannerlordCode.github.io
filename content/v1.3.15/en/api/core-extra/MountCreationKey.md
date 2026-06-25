---
title: "MountCreationKey"
description: "Auto-generated class reference for MountCreationKey."
---
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

**Purpose:** Executes the FromString logic.

```csharp
// Static call; no instance required
MountCreationKey.FromString("example");
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MountCreationKey from the subsystem API first
MountCreationKey mountCreationKey = ...;
var result = mountCreationKey.ToString();
```

### GetRandomMountKeyString
`public static string GetRandomMountKeyString(ItemObject mountItem, int randomSeed)`

**Purpose:** Reads and returns the random mount key string value held by the this instance.

```csharp
// Static call; no instance required
MountCreationKey.GetRandomMountKeyString(mountItem, 0);
```

### GetRandomMountKey
`public static MountCreationKey GetRandomMountKey(ItemObject mountItem, int randomSeed)`

**Purpose:** Reads and returns the random mount key value held by the this instance.

```csharp
// Static call; no instance required
MountCreationKey.GetRandomMountKey(mountItem, 0);
```

## Usage Example

```csharp
MountCreationKey.FromString("example");
```

## See Also

- [Area Index](../)