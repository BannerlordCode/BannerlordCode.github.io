<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentOrderComparer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeploymentOrderComparer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentOrderComparer : IComparer<FormationDeploymentOrder>`
**Base:** `IComparer<FormationDeploymentOrder>`
**Area:** mission-ext

## Overview

`DeploymentOrderComparer` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Key` | `public int Key { get; }` |
| `Offset` | `public int Offset { get; }` |

## Key Methods

### GetDeploymentOrder
`public static FormationDeploymentOrder GetDeploymentOrder(FormationClass fClass, int offset = 0)`

**Purpose:** Gets the current value of `deployment order`.

### GetComparer
`public static FormationDeploymentOrder.DeploymentOrderComparer GetComparer()`

**Purpose:** Gets the current value of `comparer`.

### Compare
`public int Compare(FormationDeploymentOrder a, FormationDeploymentOrder b)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
DeploymentOrderComparer.GetDeploymentOrder(fClass, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
