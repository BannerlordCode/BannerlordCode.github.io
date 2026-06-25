---
title: "CharacterCreationClanNamingStageView"
description: "Auto-generated class reference for CharacterCreationClanNamingStageView."
---
# CharacterCreationClanNamingStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationClanNamingStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationClanNamingStageView.cs`

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

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageView from the subsystem API first
CharacterCreationClanNamingStageView characterCreationClanNamingStageView = ...;
characterCreationClanNamingStageView.Tick(0);
```

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** Reads and returns the `layers` value held by the current object.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageView from the subsystem API first
CharacterCreationClanNamingStageView characterCreationClanNamingStageView = ...;
var result = characterCreationClanNamingStageView.GetLayers();
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**Purpose:** Reads and returns the `virtual stage count` value held by the current object.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageView from the subsystem API first
CharacterCreationClanNamingStageView characterCreationClanNamingStageView = ...;
var result = characterCreationClanNamingStageView.GetVirtualStageCount();
```

### NextStage
`public override void NextStage()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageView from the subsystem API first
CharacterCreationClanNamingStageView characterCreationClanNamingStageView = ...;
characterCreationClanNamingStageView.NextStage();
```

### PreviousStage
`public override void PreviousStage()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageView from the subsystem API first
CharacterCreationClanNamingStageView characterCreationClanNamingStageView = ...;
characterCreationClanNamingStageView.PreviousStage();
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**Purpose:** Reads `escape menu movie` from persistent storage or a stream.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageView from the subsystem API first
CharacterCreationClanNamingStageView characterCreationClanNamingStageView = ...;
characterCreationClanNamingStageView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageView from the subsystem API first
CharacterCreationClanNamingStageView characterCreationClanNamingStageView = ...;
characterCreationClanNamingStageView.ReleaseEscapeMenuMovie();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
CharacterCreationClanNamingStageView view = ...;
```

## See Also

- [Area Index](../)