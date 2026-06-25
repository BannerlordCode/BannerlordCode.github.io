---
title: "DefaultGameMenuOverlayProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultGameMenuOverlayProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultGameMenuOverlayProvider

**Namespace:** SandBox.View.Overlay
**Module:** SandBox.View
**Type:** `public class DefaultGameMenuOverlayProvider : IGameMenuOverlayProvider`
**Base:** `IGameMenuOverlayProvider`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Overlay/DefaultGameMenuOverlayProvider.cs`

## Overview

`DefaultGameMenuOverlayProvider` lives in `SandBox.View.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetOverlay
`public unsafe GameMenuOverlay GetOverlay(MenuOverlayType menuOverlayType)`

**Purpose:** Gets the current value of `overlay`.

## Usage Example

```csharp
var value = new DefaultGameMenuOverlayProvider();
value.GetOverlay(menuOverlayType);
```

## See Also

- [Complete Class Catalog](../catalog)