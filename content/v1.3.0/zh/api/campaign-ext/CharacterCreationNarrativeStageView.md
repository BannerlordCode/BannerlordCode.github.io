---
title: "CharacterCreationNarrativeStageView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationNarrativeStageView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationNarrativeStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationNarrativeStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationNarrativeStageView.cs`

## 概述

`CharacterCreationNarrativeStageView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `CharacterCreationNarrativeStageView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CharacterLayer` | `public SceneLayer CharacterLayer { get; }` |

## 主要方法

### SetGenericScene
`public override void SetGenericScene(Scene scene)`

**用途 / Purpose:** 设置 `generic scene` 的值或状态。

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### NextStage
`public override void NextStage()`

**用途 / Purpose:** 处理 `next stage` 相关逻辑。

### PreviousStage
`public override void PreviousStage()`

**用途 / Purpose:** 处理 `previous stage` 相关逻辑。

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**用途 / Purpose:** 获取 `virtual stage count` 的当前值。

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**用途 / Purpose:** 获取 `layers` 的当前值。

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**用途 / Purpose:** 加载 `escape menu movie` 数据。

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**用途 / Purpose:** 处理 `release escape menu movie` 相关逻辑。

## 使用示例

```csharp
var view = new CharacterCreationNarrativeStageView();
```

## 参见

- [完整类目录](../catalog)