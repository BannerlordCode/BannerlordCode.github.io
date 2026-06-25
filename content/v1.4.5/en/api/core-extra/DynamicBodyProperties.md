---
title: "DynamicBodyProperties"
description: "Auto-generated class reference for DynamicBodyProperties."
---
# DynamicBodyProperties

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct DynamicBodyProperties`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/DynamicBodyProperties.cs`

## Overview

`DynamicBodyProperties` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DynamicBodyProperties
`public struct DynamicBodyProperties(float age, float weight, float build)`

**Purpose:** Executes the DynamicBodyProperties logic.

```csharp
// Obtain an instance of DynamicBodyProperties from the subsystem API first
DynamicBodyProperties dynamicBodyProperties = ...;
var result = dynamicBodyProperties.DynamicBodyProperties(0, 0, 0);
```

### Equals
`public bool Equals(DynamicBodyProperties other)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of DynamicBodyProperties from the subsystem API first
DynamicBodyProperties dynamicBodyProperties = ...;
var result = dynamicBodyProperties.Equals(other);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of DynamicBodyProperties from the subsystem API first
DynamicBodyProperties dynamicBodyProperties = ...;
var result = dynamicBodyProperties.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of DynamicBodyProperties from the subsystem API first
DynamicBodyProperties dynamicBodyProperties = ...;
var result = dynamicBodyProperties.GetHashCode();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of DynamicBodyProperties from the subsystem API first
DynamicBodyProperties dynamicBodyProperties = ...;
var result = dynamicBodyProperties.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DynamicBodyProperties dynamicBodyProperties = ...;
dynamicBodyProperties.DynamicBodyProperties(0, 0, 0);
```

## See Also

- [Area Index](../)