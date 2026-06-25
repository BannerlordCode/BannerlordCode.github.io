---
title: "SceneLeveler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneLeveler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneLeveler

**Namespace:** TaleWorlds.MountAndBlade.Source.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneLeveler : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Source/Objects/SceneLeveler.cs`

## Overview

`SceneLeveler` lives in `TaleWorlds.MountAndBlade.Source.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Source.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new SceneLeveler();
```

## See Also

- [Complete Class Catalog](../catalog)