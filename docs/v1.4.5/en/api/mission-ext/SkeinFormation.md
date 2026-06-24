<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkeinFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkeinFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkeinFormation : LineFormation`
**Base:** `LineFormation`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SkeinFormation.cs`

## Overview

`SkeinFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new SkeinFormation();
value.Clone(formation);
```

## See Also

- [Complete Class Catalog](../catalog)