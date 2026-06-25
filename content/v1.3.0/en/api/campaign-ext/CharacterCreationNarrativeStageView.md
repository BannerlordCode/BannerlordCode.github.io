---
title: "CharacterCreationNarrativeStageView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationNarrativeStageView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationNarrativeStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationNarrativeStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationNarrativeStageView.cs`

## Overview

`CharacterCreationNarrativeStageView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CharacterCreationNarrativeStageView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterLayer` | `public SceneLayer CharacterLayer { get; }` |

## Key Methods

### SetGenericScene
`public override void SetGenericScene(Scene scene)`

**Purpose:** Sets the value or state of `generic scene`.

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### NextStage
`public override void NextStage()`

**Purpose:** Handles logic related to `next stage`.

### PreviousStage
`public override void PreviousStage()`

**Purpose:** Handles logic related to `previous stage`.

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** Gets the current value of `virtual stage count`.

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** Gets the current value of `layers`.

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** Loads `escape menu movie` data.

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** Handles logic related to `release escape menu movie`.

## Usage Example

```csharp
var view = new CharacterCreationNarrativeStageView();
```

## See Also

- [Complete Class Catalog](../catalog)