---
title: "CircularSchiltronFormation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CircularSchiltronFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircularSchiltronFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularSchiltronFormation : CircularFormation`
**Base:** `CircularFormation`
**File:** `TaleWorlds.MountAndBlade/CircularSchiltronFormation.cs`

## Overview

`CircularSchiltronFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaximumWidth` | `public override float MaximumWidth { get; }` |

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**Purpose:** Handles logic related to `clone`.

### Form
`public void Form()`

**Purpose:** Handles logic related to `form`.

## Usage Example

```csharp
var value = new CircularSchiltronFormation();
value.Clone(formation);
```

## See Also

- [Complete Class Catalog](../catalog)