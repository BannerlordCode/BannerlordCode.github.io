---
title: "MaterialProperty"
description: "Auto-generated class reference for MaterialProperty."
---
# MaterialProperty

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct MaterialProperty`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/HorseComponent.cs`

## Overview

`MaterialProperty` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Key Methods

### MaterialProperty
`public struct MaterialProperty(string name)`

**Purpose:** Executes the MaterialProperty logic.

```csharp
// Obtain an instance of MaterialProperty from the subsystem API first
MaterialProperty materialProperty = ...;
var result = materialProperty.MaterialProperty("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MaterialProperty materialProperty = ...;
materialProperty.MaterialProperty("example");
```

## See Also

- [Area Index](../)