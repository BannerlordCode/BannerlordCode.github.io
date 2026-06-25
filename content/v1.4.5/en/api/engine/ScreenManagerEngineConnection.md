---
title: "ScreenManagerEngineConnection"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenManagerEngineConnection`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScreenManagerEngineConnection

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class ScreenManagerEngineConnection : IScreenManagerEngineConnection`
**Base:** `IScreenManagerEngineConnection`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/ScreenManagerEngineConnection.cs`

## Overview

`ScreenManagerEngineConnection` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new ScreenManagerEngineConnection();
```

## See Also

- [Complete Class Catalog](../catalog)