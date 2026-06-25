---
title: "OverrideView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OverrideView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OverrideView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OverrideView : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/OverrideView.cs`

## Overview

`OverrideView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `OverrideView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseType` | `public Type BaseType { get; }` |

## Usage Example

```csharp
var view = new OverrideView();
```

## See Also

- [Complete Class Catalog](../catalog)