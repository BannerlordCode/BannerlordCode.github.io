<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShaderType`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShaderType

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.OpenGL
**Module:** TaleWorlds.TwoDimension
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.OpenGL/ShaderType.cs`

## Overview

`ShaderType` lives in `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new ShaderType();
```

## See Also

- [Complete Class Catalog](../catalog)