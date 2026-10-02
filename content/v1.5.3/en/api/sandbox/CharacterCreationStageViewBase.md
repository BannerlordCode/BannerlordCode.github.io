---
title: "CharacterCreationStageViewBase"
description: "Auto-generated class reference for CharacterCreationStageViewBase."
---
# CharacterCreationStageViewBase

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener `
**Base:** ICharacterCreationStageListener
**Source:** SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs

## Overview

Auto-generated stub for `CharacterCreationStageViewBase`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetGenericScene
`public virtual void SetGenericScene(Scene scene)`

### OnRefresh
`protected virtual void OnRefresh()`

### GetLayers
`public abstract IEnumerable<ScreenLayer> GetLayers()`

### NextStage
`public abstract void NextStage()`

### PreviousStage
`public abstract void PreviousStage()`

### OnFinalize
`protected virtual void OnFinalize()`

### Tick
`public virtual void Tick(float dt)`

### GetVirtualStageCount
`public abstract int GetVirtualStageCount()`

### GoToIndex
`public virtual void GoToIndex(int index)`

### LoadEscapeMenuMovie
`public abstract void LoadEscapeMenuMovie()`

### ReleaseEscapeMenuMovie
`public abstract void ReleaseEscapeMenuMovie()`

### HandleEscapeMenu
`public void HandleEscapeMenu(CharacterCreationStageViewBase view,ScreenLayer screenLayer)`

### GetEscapeMenuItems
`public List<EscapeMenuItemVM> GetEscapeMenuItems(CharacterCreationStageViewBase view)`

## See Also

- [Section index](../)
