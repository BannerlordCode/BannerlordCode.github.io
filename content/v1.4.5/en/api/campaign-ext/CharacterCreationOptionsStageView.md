---
title: "CharacterCreationOptionsStageView"
description: "Auto-generated class reference for CharacterCreationOptionsStageView."
---
# CharacterCreationOptionsStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationOptionsStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationOptionsStageView.cs`

## Overview

`CharacterCreationOptionsStageView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CharacterCreationOptionsStageView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterLayer` | `public SceneLayer CharacterLayer { get; }` |

## Key Methods

### SetGenericScene
`public override void SetGenericScene(Scene scene)`

**Purpose:** Assigns a new value to generic scene and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationOptionsStageView from the subsystem API first
CharacterCreationOptionsStageView characterCreationOptionsStageView = ...;
characterCreationOptionsStageView.SetGenericScene(scene);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterCreationOptionsStageView from the subsystem API first
CharacterCreationOptionsStageView characterCreationOptionsStageView = ...;
characterCreationOptionsStageView.Tick(0);
```

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** Reads and returns the layers value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationOptionsStageView from the subsystem API first
CharacterCreationOptionsStageView characterCreationOptionsStageView = ...;
var result = characterCreationOptionsStageView.GetLayers();
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** Reads and returns the virtual stage count value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationOptionsStageView from the subsystem API first
CharacterCreationOptionsStageView characterCreationOptionsStageView = ...;
var result = characterCreationOptionsStageView.GetVirtualStageCount();
```

### NextStage
`public override void NextStage()`

**Purpose:** Executes the NextStage logic.

```csharp
// Obtain an instance of CharacterCreationOptionsStageView from the subsystem API first
CharacterCreationOptionsStageView characterCreationOptionsStageView = ...;
characterCreationOptionsStageView.NextStage();
```

### PreviousStage
`public override void PreviousStage()`

**Purpose:** Executes the PreviousStage logic.

```csharp
// Obtain an instance of CharacterCreationOptionsStageView from the subsystem API first
CharacterCreationOptionsStageView characterCreationOptionsStageView = ...;
characterCreationOptionsStageView.PreviousStage();
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** Reads escape menu movie from persistent storage or a stream.

```csharp
// Obtain an instance of CharacterCreationOptionsStageView from the subsystem API first
CharacterCreationOptionsStageView characterCreationOptionsStageView = ...;
characterCreationOptionsStageView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** Executes the ReleaseEscapeMenuMovie logic.

```csharp
// Obtain an instance of CharacterCreationOptionsStageView from the subsystem API first
CharacterCreationOptionsStageView characterCreationOptionsStageView = ...;
characterCreationOptionsStageView.ReleaseEscapeMenuMovie();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
CharacterCreationOptionsStageView view = ...;
```

## See Also

- [Area Index](../)