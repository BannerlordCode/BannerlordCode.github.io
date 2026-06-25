---
title: "SnowAndRainTextureDefiner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SnowAndRainTextureDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SnowAndRainTextureDefiner

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class SnowAndRainTextureDefiner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map/SnowAndRainTextureDefiner.cs`

## Overview

`SnowAndRainTextureDefiner` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new SnowAndRainTextureDefiner();
```

## See Also

- [Complete Class Catalog](../catalog)