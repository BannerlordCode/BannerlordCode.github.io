---
title: "CharacterCreationReviewStageView"
description: "Auto-generated class reference for CharacterCreationReviewStageView."
---
# CharacterCreationReviewStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationReviewStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationReviewStageView.cs`

## Overview

`CharacterCreationReviewStageView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CharacterCreationReviewStageView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterLayer` | `public SceneLayer CharacterLayer { get; }` |

## Key Methods

### SetGenericScene
`public override void SetGenericScene(Scene scene)`

**Purpose:** **Purpose:** Assigns a new value to generic scene and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationReviewStageView from the subsystem API first
CharacterCreationReviewStageView characterCreationReviewStageView = ...;
characterCreationReviewStageView.SetGenericScene(scene);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterCreationReviewStageView from the subsystem API first
CharacterCreationReviewStageView characterCreationReviewStageView = ...;
characterCreationReviewStageView.Tick(0);
```

### NextStage
`public override void NextStage()`

**Purpose:** **Purpose:** Executes the NextStage logic.

```csharp
// Obtain an instance of CharacterCreationReviewStageView from the subsystem API first
CharacterCreationReviewStageView characterCreationReviewStageView = ...;
characterCreationReviewStageView.NextStage();
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** **Purpose:** Reads and returns the virtual stage count value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationReviewStageView from the subsystem API first
CharacterCreationReviewStageView characterCreationReviewStageView = ...;
var result = characterCreationReviewStageView.GetVirtualStageCount();
```

### PreviousStage
`public override void PreviousStage()`

**Purpose:** **Purpose:** Executes the PreviousStage logic.

```csharp
// Obtain an instance of CharacterCreationReviewStageView from the subsystem API first
CharacterCreationReviewStageView characterCreationReviewStageView = ...;
characterCreationReviewStageView.PreviousStage();
```

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** **Purpose:** Reads and returns the layers value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationReviewStageView from the subsystem API first
CharacterCreationReviewStageView characterCreationReviewStageView = ...;
var result = characterCreationReviewStageView.GetLayers();
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** **Purpose:** Reads escape menu movie from persistent storage or a stream.

```csharp
// Obtain an instance of CharacterCreationReviewStageView from the subsystem API first
CharacterCreationReviewStageView characterCreationReviewStageView = ...;
characterCreationReviewStageView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** **Purpose:** Executes the ReleaseEscapeMenuMovie logic.

```csharp
// Obtain an instance of CharacterCreationReviewStageView from the subsystem API first
CharacterCreationReviewStageView characterCreationReviewStageView = ...;
characterCreationReviewStageView.ReleaseEscapeMenuMovie();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
CharacterCreationReviewStageView view = ...;
```

## See Also

- [Area Index](../)