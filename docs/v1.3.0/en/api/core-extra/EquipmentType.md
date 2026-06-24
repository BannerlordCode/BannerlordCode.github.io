<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentType`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum EquipmentType`
**Base:** none
**File:** `TaleWorlds.Core/Equipment.cs`

## Overview

`EquipmentType` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
EquipmentType example = EquipmentType.Value;
```

## See Also

- [Complete Class Catalog](../catalog)