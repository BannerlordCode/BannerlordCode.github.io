---
title: "BannerEditorView"
description: "Auto-generated class reference for BannerEditorView."
---
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

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of BannerEditorView from the subsystem API first
BannerEditorView bannerEditorView = ...;
bannerEditorView.OnTick(0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BannerEditorView from the subsystem API first
BannerEditorView bannerEditorView = ...;
bannerEditorView.OnFinalize();
```

### Exit
`public void Exit(bool isCancel)`

**Purpose:** **Purpose:** Executes the Exit logic.

```csharp
// Obtain an instance of BannerEditorView from the subsystem API first
BannerEditorView bannerEditorView = ...;
bannerEditorView.Exit(false);
```

### OnDeactivate
`public void OnDeactivate()`

**Purpose:** **Purpose:** Invoked when the deactivate event is raised.

```csharp
// Obtain an instance of BannerEditorView from the subsystem API first
BannerEditorView bannerEditorView = ...;
bannerEditorView.OnDeactivate();
```

### GoToIndex
`public void GoToIndex(int index)`

**Purpose:** **Purpose:** Executes the GoToIndex logic.

```csharp
// Obtain an instance of BannerEditorView from the subsystem API first
BannerEditorView bannerEditorView = ...;
bannerEditorView.GoToIndex(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BannerEditorView view = ...;
```

## See Also

- [Area Index](../)