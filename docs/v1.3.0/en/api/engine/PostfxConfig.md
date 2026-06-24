<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PostfxConfig`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PostfxConfig

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum PostfxConfig : uint`
**Base:** `uint`
**File:** `TaleWorlds.Engine/View.cs`

## Overview

`PostfxConfig` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
PostfxConfig example = PostfxConfig.Value;
```

## See Also

- [Complete Class Catalog](../catalog)