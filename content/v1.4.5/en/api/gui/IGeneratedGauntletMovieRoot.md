---
title: "IGeneratedGauntletMovieRoot"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IGeneratedGauntletMovieRoot`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IGeneratedGauntletMovieRoot

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/IGeneratedGauntletMovieRoot.cs`

## Overview

`IGeneratedGauntletMovieRoot` lives in `TaleWorlds.GauntletUI.Data` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IGeneratedGauntletMovieRoot implementation = GetGeneratedGauntletMovieRootImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)