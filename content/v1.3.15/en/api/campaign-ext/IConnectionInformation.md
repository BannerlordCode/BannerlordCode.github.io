---
title: "IConnectionInformation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IConnectionInformation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IConnectionInformation

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.Diamond/IConnectionInformation.cs`

## Overview

`IConnectionInformation` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IConnectionInformation implementation = GetConnectionInformationImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)