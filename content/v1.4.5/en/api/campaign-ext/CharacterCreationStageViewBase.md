---
title: "CharacterCreationStageViewBase"
description: "Auto-generated class reference for CharacterCreationStageViewBase."
---
# CharacterCreationStageViewBase

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`
**Base:** `ICharacterCreationStageListener`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs`

## Overview

`CharacterCreationStageViewBase` lives in `SandBox.View.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetGenericScene
`public virtual void SetGenericScene(Scene scene)`

**Purpose:** **Purpose:** Assigns a new value to generic scene and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.SetGenericScene(scene);
```

### GetLayers
`public abstract IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** **Purpose:** Reads and returns the layers value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
var result = characterCreationStageViewBase.GetLayers();
```

### NextStage
`public abstract void NextStage()`

**Purpose:** **Purpose:** Executes the NextStage logic.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.NextStage();
```

### PreviousStage
`public abstract void PreviousStage()`

**Purpose:** **Purpose:** Executes the PreviousStage logic.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.PreviousStage();
```

### Tick
`public virtual void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.Tick(0);
```

### GetVirtualStageCount
`public abstract int GetVirtualStageCount()`

**Purpose:** **Purpose:** Reads and returns the virtual stage count value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
var result = characterCreationStageViewBase.GetVirtualStageCount();
```

### GoToIndex
`public virtual void GoToIndex(int index)`

**Purpose:** **Purpose:** Executes the GoToIndex logic.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.GoToIndex(0);
```

### LoadEscapeMenuMovie
`public abstract void LoadEscapeMenuMovie()`

**Purpose:** **Purpose:** Reads escape menu movie from persistent storage or a stream.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public abstract void ReleaseEscapeMenuMovie()`

**Purpose:** **Purpose:** Executes the ReleaseEscapeMenuMovie logic.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.ReleaseEscapeMenuMovie();
```

### HandleEscapeMenu
`public void HandleEscapeMenu(CharacterCreationStageViewBase view, ScreenLayer screenLayer)`

**Purpose:** **Purpose:** Executes the response logic associated with escape menu.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.HandleEscapeMenu(view, screenLayer);
```

### GetEscapeMenuItems
`public List<EscapeMenuItemVM> GetEscapeMenuItems(CharacterCreationStageViewBase view)`

**Purpose:** **Purpose:** Reads and returns the escape menu items value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationStageViewBase from the subsystem API first
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
var result = characterCreationStageViewBase.GetEscapeMenuItems(view);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CharacterCreationStageViewBase instance = ...;
```

## See Also

- [Area Index](../)