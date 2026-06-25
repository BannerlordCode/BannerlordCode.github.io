---
title: "IGeneratedUIPrefabCreator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IGeneratedUIPrefabCreator`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IGeneratedUIPrefabCreator

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/IGeneratedUIPrefabCreator.cs`

## Overview

`IGeneratedUIPrefabCreator` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IGeneratedUIPrefabCreator implementation = GetGeneratedUIPrefabCreatorImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)