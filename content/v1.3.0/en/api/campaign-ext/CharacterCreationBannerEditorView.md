---
title: "CharacterCreationBannerEditorView"
description: "Auto-generated class reference for CharacterCreationBannerEditorView."
---
# CharacterCreationBannerEditorView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationBannerEditorView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs`

## Overview

`CharacterCreationBannerEditorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `CharacterCreationBannerEditorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** **Purpose:** Reads and returns the layers value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationBannerEditorView from the subsystem API first
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
var result = characterCreationBannerEditorView.GetLayers();
```

### PreviousStage
`public override void PreviousStage()`

**Purpose:** **Purpose:** Executes the PreviousStage logic.

```csharp
// Obtain an instance of CharacterCreationBannerEditorView from the subsystem API first
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.PreviousStage();
```

### NextStage
`public override void NextStage()`

**Purpose:** **Purpose:** Executes the NextStage logic.

```csharp
// Obtain an instance of CharacterCreationBannerEditorView from the subsystem API first
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.NextStage();
```

### Tick
`public override void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterCreationBannerEditorView from the subsystem API first
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.Tick(0);
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** **Purpose:** Reads and returns the virtual stage count value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationBannerEditorView from the subsystem API first
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
var result = characterCreationBannerEditorView.GetVirtualStageCount();
```

### GoToIndex
`public override void GoToIndex(int index)`

**Purpose:** **Purpose:** Executes the GoToIndex logic.

```csharp
// Obtain an instance of CharacterCreationBannerEditorView from the subsystem API first
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.GoToIndex(0);
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** **Purpose:** Reads escape menu movie from persistent storage or a stream.

```csharp
// Obtain an instance of CharacterCreationBannerEditorView from the subsystem API first
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** **Purpose:** Executes the ReleaseEscapeMenuMovie logic.

```csharp
// Obtain an instance of CharacterCreationBannerEditorView from the subsystem API first
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.ReleaseEscapeMenuMovie();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
CharacterCreationBannerEditorView view = ...;
```

## See Also

- [Area Index](../)