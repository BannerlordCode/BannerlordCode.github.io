---
title: "IMonsterMissionDataCreator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMonsterMissionDataCreator`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IMonsterMissionDataCreator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.Core/IMonsterMissionDataCreator.cs`

## Overview

`IMonsterMissionDataCreator` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IMonsterMissionDataCreator implementation = GetMonsterMissionDataCreatorImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)