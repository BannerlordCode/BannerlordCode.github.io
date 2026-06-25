---
title: "GauntletMapConversationBarterView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMapConversationBarterView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapConversationBarterView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapConversationBarterView`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapConversationBarterView.cs`

## Overview

`GauntletMapConversationBarterView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapConversationBarterView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCreated` | `public bool IsCreated { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### OnBarterActiveStateChanged
`public delegate void OnBarterActiveStateChanged(bool isBarterActive)`

**Purpose:** Called when the `barter active state changed` event is raised.

### CreateBarterView
`public void CreateBarterView(BarterData args)`

**Purpose:** Creates a new `barter view` instance or object.

### DestroyBarterView
`public void DestroyBarterView()`

**Purpose:** Handles logic related to `destroy barter view`.

### Activate
`public void Activate()`

**Purpose:** Handles logic related to `activate`.

### Deactivate
`public void Deactivate()`

**Purpose:** Handles logic related to `deactivate`.

### TickInput
`public void TickInput()`

**Purpose:** Handles logic related to `tick input`.

## Usage Example

```csharp
var view = new GauntletMapConversationBarterView();
```

## See Also

- [Complete Class Catalog](../catalog)