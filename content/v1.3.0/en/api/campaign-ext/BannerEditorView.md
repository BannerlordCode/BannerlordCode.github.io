---
title: "BannerEditorView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerEditorView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerEditorView

**Namespace:** SandBox.GauntletUI.BannerEditor
**Module:** SandBox.GauntletUI
**Type:** `public class BannerEditorView`
**Base:** none
**File:** `SandBox.GauntletUI/BannerEditor/BannerEditorView.cs`

## Overview

`BannerEditorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `BannerEditorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; }` |
| `DataSource` | `public BannerEditorVM DataSource { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |

## Key Methods

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Exit
`public void Exit(bool isCancel)`

**Purpose:** Handles logic related to `exit`.

### OnDeactivate
`public void OnDeactivate()`

**Purpose:** Called when the `deactivate` event is raised.

### GoToIndex
`public void GoToIndex(int index)`

**Purpose:** Handles logic related to `go to index`.

## Usage Example

```csharp
var view = new BannerEditorView();
```

## See Also

- [Complete Class Catalog](../catalog)