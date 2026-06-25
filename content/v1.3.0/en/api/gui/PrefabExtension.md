---
title: "PrefabExtension"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrefabExtension`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrefabExtension

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class PrefabExtension`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs`

## Overview

`PrefabExtension` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var implementation = new CustomPrefabExtension();
```

## See Also

- [Complete Class Catalog](../catalog)