---
title: "Decal"
description: "Auto-generated class reference for Decal."
---
# Decal

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Decal : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/Decal.cs`

## Overview

`Decal` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |

## Key Methods

### CreateDecal
`public static Decal CreateDecal(string name = null)`

**Purpose:** Constructs a new decal entity and returns it to the caller.

```csharp
// Static call; no instance required
Decal.CreateDecal("example");
```

### CreateCopy
`public Decal CreateCopy()`

**Purpose:** Constructs a new copy entity and returns it to the caller.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
var result = decal.CreateCopy();
```

### GetFactor1
`public uint GetFactor1()`

**Purpose:** Reads and returns the factor1 value held by the this instance.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
var result = decal.GetFactor1();
```

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**Purpose:** Assigns a new value to factor1 linear and updates the object's internal state.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
decal.SetFactor1Linear(0);
```

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**Purpose:** Assigns a new value to factor1 and updates the object's internal state.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
decal.SetFactor1(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to vector argument and updates the object's internal state.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
decal.SetVectorArgument(0, 0, 0, 0);
```

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to vector argument2 and updates the object's internal state.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
decal.SetVectorArgument2(0, 0, 0, 0);
```

### GetMaterial
`public Material GetMaterial()`

**Purpose:** Reads and returns the material value held by the this instance.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
var result = decal.GetMaterial();
```

### SetMaterial
`public void SetMaterial(Material material)`

**Purpose:** Assigns a new value to material and updates the object's internal state.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
decal.SetMaterial(material);
```

### SetFrame
`public void SetFrame(MatrixFrame Frame)`

**Purpose:** Assigns a new value to frame and updates the object's internal state.

```csharp
// Obtain an instance of Decal from the subsystem API first
Decal decal = ...;
decal.SetFrame(frame);
```

## Usage Example

```csharp
Decal.CreateDecal("example");
```

## See Also

- [Area Index](../)