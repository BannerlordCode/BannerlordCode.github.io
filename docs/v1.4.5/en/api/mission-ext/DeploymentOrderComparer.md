<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentOrderComparer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentOrderComparer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentOrderComparer : IComparer<FormationDeploymentOrder>`
**Base:** `IComparer<FormationDeploymentOrder>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationDeploymentOrder.cs`

## Overview

`DeploymentOrderComparer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(FormationDeploymentOrder a, FormationDeploymentOrder b)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new DeploymentOrderComparer();
value.Compare(a, b);
```

## See Also

- [Complete Class Catalog](../catalog)