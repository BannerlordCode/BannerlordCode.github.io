---
title: "IReadonlyInputContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IReadonlyInputContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IReadonlyInputContext

**Namespace:** TaleWorlds.GauntletUI.GauntletInput
**Module:** TaleWorlds.GauntletUI
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GauntletInput/IReadonlyInputContext.cs`

## Overview

`IReadonlyInputContext` lives in `TaleWorlds.GauntletUI.GauntletInput` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.GauntletInput` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IReadonlyInputContext implementation = GetReadonlyInputContextImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)