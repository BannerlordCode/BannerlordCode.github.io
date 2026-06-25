---
title: "CharacterCreationStageViewBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationStageViewBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationStageViewBase

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`
**Base:** `ICharacterCreationStageListener`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs`

## Overview

`CharacterCreationStageViewBase` lives in `SandBox.View.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetGenericScene
`public virtual void SetGenericScene(Scene scene)`

**Purpose:** Sets the value or state of `generic scene`.

### GetLayers
`public abstract IEnumerable<ScreenLayer> GetLayers()`

**Purpose:** Gets the current value of `layers`.

### NextStage
`public abstract void NextStage()`

**Purpose:** Handles logic related to `next stage`.

### PreviousStage
`public abstract void PreviousStage()`

**Purpose:** Handles logic related to `previous stage`.

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### GetVirtualStageCount
`public abstract int GetVirtualStageCount()`

**Purpose:** Gets the current value of `virtual stage count`.

### GoToIndex
`public virtual void GoToIndex(int index)`

**Purpose:** Handles logic related to `go to index`.

### LoadEscapeMenuMovie
`public abstract void LoadEscapeMenuMovie()`

**Purpose:** Loads `escape menu movie` data.

### ReleaseEscapeMenuMovie
`public abstract void ReleaseEscapeMenuMovie()`

**Purpose:** Handles logic related to `release escape menu movie`.

### HandleEscapeMenu
`public void HandleEscapeMenu(CharacterCreationStageViewBase view, ScreenLayer screenLayer)`

**Purpose:** Handles the `escape menu` event or callback.

### GetEscapeMenuItems
`public List<EscapeMenuItemVM> GetEscapeMenuItems(CharacterCreationStageViewBase view)`

**Purpose:** Gets the current value of `escape menu items`.

## Usage Example

```csharp
var implementation = new CustomCharacterCreationStageViewBase();
```

## See Also

- [Complete Class Catalog](../catalog)