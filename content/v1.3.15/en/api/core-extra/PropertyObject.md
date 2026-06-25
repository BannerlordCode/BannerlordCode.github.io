---
title: "PropertyObject"
description: "Auto-generated class reference for PropertyObject."
---
# PropertyObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class PropertyObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/PropertyObject.cs`

## Overview

`PropertyObject` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of PropertyObject from the subsystem API first
PropertyObject propertyObject = ...;
var result = propertyObject.GetName();
```

### Initialize
`public void Initialize(TextObject name, TextObject description)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of PropertyObject from the subsystem API first
PropertyObject propertyObject = ...;
propertyObject.Initialize(name, description);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PropertyObject propertyObject = ...;
propertyObject.GetName();
```

## See Also

- [Area Index](../)