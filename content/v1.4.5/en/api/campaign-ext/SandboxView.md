---
title: "SandboxView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxView

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public abstract class SandboxView`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View/SandboxView.cs`

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
var implementation = new CustomSandboxView();
```

## See Also

- [Complete Class Catalog](../catalog)