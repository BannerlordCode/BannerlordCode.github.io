---
title: "CharacterCreationFaceGeneratorView"
description: "Auto-generated class reference for CharacterCreationFaceGeneratorView."
---
# CharacterCreationFaceGeneratorView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationFaceGeneratorView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationFaceGeneratorView.cs`

## Overview

`CharacterCreationFaceGeneratorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CharacterCreationFaceGeneratorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** Reads and returns the layers value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationFaceGeneratorView from the subsystem API first
CharacterCreationFaceGeneratorView characterCreationFaceGeneratorView = ...;
var result = characterCreationFaceGeneratorView.GetLayers();
```

### PreviousStage
`public override void PreviousStage()`

**Purpose:** Executes the PreviousStage logic.

```csharp
// Obtain an instance of CharacterCreationFaceGeneratorView from the subsystem API first
CharacterCreationFaceGeneratorView characterCreationFaceGeneratorView = ...;
characterCreationFaceGeneratorView.PreviousStage();
```

### NextStage
`public override void NextStage()`

**Purpose:** Executes the NextStage logic.

```csharp
// Obtain an instance of CharacterCreationFaceGeneratorView from the subsystem API first
CharacterCreationFaceGeneratorView characterCreationFaceGeneratorView = ...;
characterCreationFaceGeneratorView.NextStage();
```

### Tick
`public override void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterCreationFaceGeneratorView from the subsystem API first
CharacterCreationFaceGeneratorView characterCreationFaceGeneratorView = ...;
characterCreationFaceGeneratorView.Tick(0);
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** Reads and returns the virtual stage count value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationFaceGeneratorView from the subsystem API first
CharacterCreationFaceGeneratorView characterCreationFaceGeneratorView = ...;
var result = characterCreationFaceGeneratorView.GetVirtualStageCount();
```

### GoToIndex
`public override void GoToIndex(int index)`

**Purpose:** Executes the GoToIndex logic.

```csharp
// Obtain an instance of CharacterCreationFaceGeneratorView from the subsystem API first
CharacterCreationFaceGeneratorView characterCreationFaceGeneratorView = ...;
characterCreationFaceGeneratorView.GoToIndex(0);
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** Reads escape menu movie from persistent storage or a stream.

```csharp
// Obtain an instance of CharacterCreationFaceGeneratorView from the subsystem API first
CharacterCreationFaceGeneratorView characterCreationFaceGeneratorView = ...;
characterCreationFaceGeneratorView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** Executes the ReleaseEscapeMenuMovie logic.

```csharp
// Obtain an instance of CharacterCreationFaceGeneratorView from the subsystem API first
CharacterCreationFaceGeneratorView characterCreationFaceGeneratorView = ...;
characterCreationFaceGeneratorView.ReleaseEscapeMenuMovie();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
CharacterCreationFaceGeneratorView view = ...;
```

## See Also

- [Area Index](../)