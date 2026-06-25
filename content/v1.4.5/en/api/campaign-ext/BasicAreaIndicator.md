---
title: "BasicAreaIndicator"
description: "Auto-generated class reference for BasicAreaIndicator."
---
# BasicAreaIndicator

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class BasicAreaIndicator : AreaMarker`
**Base:** `AreaMarker`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.AreaMarkers/BasicAreaIndicator.cs`

## Overview

`BasicAreaIndicator` lives in `SandBox.Objects.AreaMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AreaMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### SetIsActive
`public void SetIsActive(bool isActive)`

**Purpose:** Assigns a new value to is active and updates the object's internal state.

```csharp
// Obtain an instance of BasicAreaIndicator from the subsystem API first
BasicAreaIndicator basicAreaIndicator = ...;
basicAreaIndicator.SetIsActive(false);
```

### SetOverriddenName
`public void SetOverriddenName(TextObject name)`

**Purpose:** Assigns a new value to overridden name and updates the object's internal state.

```csharp
// Obtain an instance of BasicAreaIndicator from the subsystem API first
BasicAreaIndicator basicAreaIndicator = ...;
basicAreaIndicator.SetOverriddenName(name);
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of BasicAreaIndicator from the subsystem API first
BasicAreaIndicator basicAreaIndicator = ...;
var result = basicAreaIndicator.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BasicAreaIndicator basicAreaIndicator = ...;
basicAreaIndicator.SetIsActive(false);
```

## See Also

- [Area Index](../)