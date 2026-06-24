<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationClanNamingStageView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationClanNamingStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationClanNamingStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationClanNamingStageView.cs`

## Overview

`CharacterCreationClanNamingStageView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CharacterCreationClanNamingStageView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** Gets the current value of `layers`.

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** Gets the current value of `virtual stage count`.

### NextStage
`public override void NextStage()`

**Purpose:** Handles logic related to `next stage`.

### PreviousStage
`public override void PreviousStage()`

**Purpose:** Handles logic related to `previous stage`.

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** Loads `escape menu movie` data.

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** Handles logic related to `release escape menu movie`.

## Usage Example

```csharp
var view = new CharacterCreationClanNamingStageView();
```

## See Also

- [Complete Class Catalog](../catalog)