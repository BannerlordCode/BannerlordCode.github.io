---
title: "SandboxView"
description: "Auto-generated class reference for SandboxView."
---
# SandboxView

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public abstract class SandboxView`
**Base:** none
**File:** `SandBox.View/SandboxView.cs`

## Overview

`SandboxView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `SandboxView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFinalized` | `public bool IsFinalized { get; set; }` |
| `Layer` | `public ScreenLayer Layer { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SandboxView instance = ...;
```

## See Also

- [Area Index](../)