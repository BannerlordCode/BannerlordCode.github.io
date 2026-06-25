---
title: "CharacterCreationBannerEditorView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationBannerEditorView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationBannerEditorView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationBannerEditorView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationBannerEditorView.cs`

## Overview

`CharacterCreationBannerEditorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CharacterCreationBannerEditorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** Gets the current value of `layers`.

### PreviousStage
`public override void PreviousStage()`

**Purpose:** Handles logic related to `previous stage`.

### NextStage
`public override void NextStage()`

**Purpose:** Handles logic related to `next stage`.

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** Gets the current value of `virtual stage count`.

### GoToIndex
`public override void GoToIndex(int index)`

**Purpose:** Handles logic related to `go to index`.

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** Loads `escape menu movie` data.

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** Handles logic related to `release escape menu movie`.

## Usage Example

```csharp
var view = new CharacterCreationBannerEditorView();
```

## See Also

- [Complete Class Catalog](../catalog)