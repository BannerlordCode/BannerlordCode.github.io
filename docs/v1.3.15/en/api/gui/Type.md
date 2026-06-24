<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Type`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Type

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum Type`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimationInterpolation.cs`

## Overview

`Type` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
Type example = Type.Value;
```

## See Also

- [Complete Class Catalog](../catalog)