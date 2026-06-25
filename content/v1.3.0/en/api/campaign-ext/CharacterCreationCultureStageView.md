---
title: "CharacterCreationCultureStageView"
description: "Auto-generated class reference for CharacterCreationCultureStageView."
---
# CharacterCreationCultureStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationCultureStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs`

## Overview

`CharacterCreationCultureStageView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CharacterCreationCultureStageView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterCreationCultureStageView from the subsystem API first
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.Tick(0);
```

### NextStage
`public override void NextStage()`

**Purpose:** **Purpose:** Executes the NextStage logic.

```csharp
// Obtain an instance of CharacterCreationCultureStageView from the subsystem API first
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.NextStage();
```

### PreviousStage
`public override void PreviousStage()`

**Purpose:** **Purpose:** Executes the PreviousStage logic.

```csharp
// Obtain an instance of CharacterCreationCultureStageView from the subsystem API first
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.PreviousStage();
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** **Purpose:** Reads and returns the virtual stage count value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationCultureStageView from the subsystem API first
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
var result = characterCreationCultureStageView.GetVirtualStageCount();
```

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** **Purpose:** Reads and returns the layers value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationCultureStageView from the subsystem API first
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
var result = characterCreationCultureStageView.GetLayers();
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** **Purpose:** Reads escape menu movie from persistent storage or a stream.

```csharp
// Obtain an instance of CharacterCreationCultureStageView from the subsystem API first
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** **Purpose:** Executes the ReleaseEscapeMenuMovie logic.

```csharp
// Obtain an instance of CharacterCreationCultureStageView from the subsystem API first
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.ReleaseEscapeMenuMovie();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
CharacterCreationCultureStageView view = ...;
```

## See Also

- [Area Index](../)