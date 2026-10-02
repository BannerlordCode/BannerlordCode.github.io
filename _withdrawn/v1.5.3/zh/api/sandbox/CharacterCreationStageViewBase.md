---
title: "CharacterCreationStageViewBase"
description: "CharacterCreationStageViewBase 的自动生成类参考。"
---
# CharacterCreationStageViewBase

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener `
**Base:** ICharacterCreationStageListener
**Source:** SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs

## 概述

`CharacterCreationStageViewBase` 的自动生成类参考页面。声明来自 `SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetGenericScene
`public virtual void SetGenericScene(Scene scene) `

### OnRefresh
`protected virtual void OnRefresh() `

### GetLayers
`public abstract IEnumerable<ScreenLayer> GetLayers()`

### NextStage
`public abstract void NextStage()`

### PreviousStage
`public abstract void PreviousStage()`

### OnFinalize
`protected virtual void OnFinalize() `

### Tick
`public virtual void Tick(float dt) `

### GetVirtualStageCount
`public abstract int GetVirtualStageCount()`

### GoToIndex
`public virtual void GoToIndex(int index) `

### LoadEscapeMenuMovie
`public abstract void LoadEscapeMenuMovie()`

### ReleaseEscapeMenuMovie
`public abstract void ReleaseEscapeMenuMovie()`

### HandleEscapeMenu
`public void HandleEscapeMenu(CharacterCreationStageViewBase view,ScreenLayer screenLayer) `

### GetEscapeMenuItems
`public List<EscapeMenuItemVM> GetEscapeMenuItems(CharacterCreationStageViewBase view) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
