---
title: "PrefabDatabindingExtension"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrefabDatabindingExtension`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrefabDatabindingExtension

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabDatabindingExtension : PrefabExtension`
**Base:** `PrefabExtension`
**File:** `TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs`

## Overview

`PrefabDatabindingExtension` lives in `TaleWorlds.GauntletUI.Data` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new PrefabDatabindingExtension();
```

## See Also

- [Complete Class Catalog](../catalog)