<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationDeploymentOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationDeploymentOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationDeploymentOrder`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationDeploymentOrder.cs`

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

**Purpose:** Handles logic related to `compare`.

### GetDeploymentOrder
`public static FormationDeploymentOrder GetDeploymentOrder(FormationClass fClass, int offset = 0)`

**Purpose:** Gets the current value of `deployment order`.

### GetComparer
`public static DeploymentOrderComparer GetComparer()`

**Purpose:** Gets the current value of `comparer`.

## Usage Example

```csharp
var value = new FormationDeploymentOrder();
value.Compare(a, b);
```

## See Also

- [Complete Class Catalog](../catalog)