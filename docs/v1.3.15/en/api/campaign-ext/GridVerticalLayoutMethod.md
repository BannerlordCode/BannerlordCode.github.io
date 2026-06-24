<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GridVerticalLayoutMethod`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GridVerticalLayoutMethod

**Namespace:** TaleWorlds.GauntletUI.Layout
**Module:** TaleWorlds.GauntletUI
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridVerticalLayoutMethod.cs`

## Overview

`GridVerticalLayoutMethod` lives in `TaleWorlds.GauntletUI.Layout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Layout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new GridVerticalLayoutMethod();
```

## See Also

- [Complete Class Catalog](../catalog)