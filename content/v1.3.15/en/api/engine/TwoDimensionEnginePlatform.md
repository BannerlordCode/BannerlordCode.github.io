---
title: "TwoDimensionEnginePlatform"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionEnginePlatform`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionEnginePlatform

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class TwoDimensionEnginePlatform : ITwoDimensionPlatform`
**Base:** `ITwoDimensionPlatform`
**File:** `TaleWorlds.Engine.GauntletUI/TwoDimensionEnginePlatform.cs`

## Overview

`TwoDimensionEnginePlatform` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new TwoDimensionEnginePlatform();
```

## See Also

- [Complete Class Catalog](../catalog)