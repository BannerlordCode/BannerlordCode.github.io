---
title: "BrushFactory"
description: "Auto-generated class reference for BrushFactory."
---
# BrushFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushFactory`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushFactory.cs`

## Overview

`BrushFactory` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultBrush` | `public Brush DefaultBrush { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of BrushFactory from the subsystem API first
BrushFactory brushFactory = ...;
brushFactory.Initialize();
```

### LoadBrushFile
`public void LoadBrushFile(string name)`

**Purpose:** Reads `brush file` from persistent storage or a stream.

```csharp
// Obtain an instance of BrushFactory from the subsystem API first
BrushFactory brushFactory = ...;
brushFactory.LoadBrushFile("example");
```

### GetBrush
`public Brush GetBrush(string name)`

**Purpose:** Reads and returns the `brush` value held by the current object.

```csharp
// Obtain an instance of BrushFactory from the subsystem API first
BrushFactory brushFactory = ...;
var result = brushFactory.GetBrush("example");
```

### SaveBrushAs
`public bool SaveBrushAs(string name, Brush brush)`

**Purpose:** Writes `brush as` to persistent storage or a stream.

```csharp
// Obtain an instance of BrushFactory from the subsystem API first
BrushFactory brushFactory = ...;
var result = brushFactory.SaveBrushAs("example", brush);
```

### CheckForUpdates
`public void CheckForUpdates()`

**Purpose:** Verifies whether `for updates` holds true for the current object.

```csharp
// Obtain an instance of BrushFactory from the subsystem API first
BrushFactory brushFactory = ...;
brushFactory.CheckForUpdates();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushFactory brushFactory = ...;
brushFactory.Initialize();
```

## See Also

- [Area Index](../)