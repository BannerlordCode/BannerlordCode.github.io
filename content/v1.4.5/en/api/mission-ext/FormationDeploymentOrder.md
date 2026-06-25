---
title: "FormationDeploymentOrder"
description: "Auto-generated class reference for FormationDeploymentOrder."
---
# FormationDeploymentOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationDeploymentOrder`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationDeploymentOrder.cs`

## Overview

`FormationDeploymentOrder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Key` | `public int Key { get; }` |
| `Offset` | `public int Offset { get; }` |

## Key Methods

### Compare
`public int Compare(FormationDeploymentOrder a, FormationDeploymentOrder b)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of FormationDeploymentOrder from the subsystem API first
FormationDeploymentOrder formationDeploymentOrder = ...;
var result = formationDeploymentOrder.Compare(a, b);
```

### GetDeploymentOrder
`public static FormationDeploymentOrder GetDeploymentOrder(FormationClass fClass, int offset = 0)`

**Purpose:** **Purpose:** Reads and returns the deployment order value held by the this instance.

```csharp
// Static call; no instance required
FormationDeploymentOrder.GetDeploymentOrder(fClass, 0);
```

### GetComparer
`public static DeploymentOrderComparer GetComparer()`

**Purpose:** **Purpose:** Reads and returns the comparer value held by the this instance.

```csharp
// Static call; no instance required
FormationDeploymentOrder.GetComparer();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationDeploymentOrder formationDeploymentOrder = ...;
formationDeploymentOrder.Compare(a, b);
```

## See Also

- [Area Index](../)