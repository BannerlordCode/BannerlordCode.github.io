---
title: "DefaultGameMenuOverlayProvider"
description: "Auto-generated class reference for DefaultGameMenuOverlayProvider."
---
# DefaultGameMenuOverlayProvider

**Namespace:** SandBox.View.Overlay
**Module:** SandBox.View
**Type:** `public class DefaultGameMenuOverlayProvider : IGameMenuOverlayProvider`
**Base:** `IGameMenuOverlayProvider`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Overlay/DefaultGameMenuOverlayProvider.cs`

## Overview

`DefaultGameMenuOverlayProvider` lives in `SandBox.View.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetOverlay
`public unsafe GameMenuOverlay GetOverlay(MenuOverlayType menuOverlayType)`

**Purpose:** Reads and returns the overlay value held by the this instance.

```csharp
// Obtain an instance of DefaultGameMenuOverlayProvider from the subsystem API first
DefaultGameMenuOverlayProvider defaultGameMenuOverlayProvider = ...;
var result = defaultGameMenuOverlayProvider.GetOverlay(menuOverlayType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultGameMenuOverlayProvider defaultGameMenuOverlayProvider = ...;
defaultGameMenuOverlayProvider.GetOverlay(menuOverlayType);
```

## See Also

- [Area Index](../)