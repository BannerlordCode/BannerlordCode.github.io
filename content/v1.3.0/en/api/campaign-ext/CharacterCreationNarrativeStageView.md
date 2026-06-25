---
title: "CharacterCreationNarrativeStageView"
description: "Auto-generated class reference for CharacterCreationNarrativeStageView."
---
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

**Purpose:** Assigns a new value to `generic scene` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageView from the subsystem API first
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.SetGenericScene(scene);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageView from the subsystem API first
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.Tick(0);
```

### NextStage
`public override void NextStage()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageView from the subsystem API first
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.NextStage();
```

### PreviousStage
`public override void PreviousStage()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageView from the subsystem API first
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.PreviousStage();
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** Reads and returns the `virtual stage count` value held by the current object.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageView from the subsystem API first
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
var result = characterCreationNarrativeStageView.GetVirtualStageCount();
```

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** Reads and returns the `layers` value held by the current object.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageView from the subsystem API first
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
var result = characterCreationNarrativeStageView.GetLayers();
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** Reads `escape menu movie` from persistent storage or a stream.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageView from the subsystem API first
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageView from the subsystem API first
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.ReleaseEscapeMenuMovie();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
CharacterCreationNarrativeStageView view = ...;
```

## See Also

- [Area Index](../)