<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConfigQuality`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConfigQuality

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public enum ConfigQuality`
**Base:** none
**File:** `TaleWorlds.Engine/Options/NativeOptions.cs`

## Overview

`ConfigQuality` lives in `TaleWorlds.Engine.Options` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.Options` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ConfigQuality example = ConfigQuality.Value;
```

## See Also

- [Complete Class Catalog](../catalog)