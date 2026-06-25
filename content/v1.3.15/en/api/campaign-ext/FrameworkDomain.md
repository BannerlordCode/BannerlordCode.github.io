---
title: "FrameworkDomain"
description: "Auto-generated class reference for FrameworkDomain."
---
# FrameworkDomain

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public abstract class FrameworkDomain`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/FrameworkDomain.cs`

## Overview

`FrameworkDomain` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Update
`public abstract void Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of FrameworkDomain from the subsystem API first
FrameworkDomain frameworkDomain = ...;
frameworkDomain.Update();
```

### Destroy
`public abstract void Destroy()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FrameworkDomain from the subsystem API first
FrameworkDomain frameworkDomain = ...;
frameworkDomain.Destroy();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
FrameworkDomain instance = ...;
```

## See Also

- [Area Index](../)