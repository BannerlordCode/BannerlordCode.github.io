---
title: "CharacterCreationNarrativeStageView"
description: "CharacterCreationNarrativeStageView 的自动生成类参考。"
---
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

**用途 / Purpose:** 为 「generic scene」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationNarrativeStageView 实例
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.SetGenericScene(scene);
```

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationNarrativeStageView 实例
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.Tick(0);
```

### NextStage
`public override void NextStage()`

**用途 / Purpose:** 处理与 「next stage」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationNarrativeStageView 实例
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.NextStage();
```

### PreviousStage
`public override void PreviousStage()`

**用途 / Purpose:** 处理与 「previous stage」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationNarrativeStageView 实例
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.PreviousStage();
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**用途 / Purpose:** 读取并返回当前对象中 「virtual stage count」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationNarrativeStageView 实例
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
var result = characterCreationNarrativeStageView.GetVirtualStageCount();
```

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**用途 / Purpose:** 读取并返回当前对象中 「layers」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationNarrativeStageView 实例
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
var result = characterCreationNarrativeStageView.GetLayers();
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**用途 / Purpose:** 从持久化存储或流中读取 「escape menu movie」。

```csharp
// 先通过子系统 API 拿到 CharacterCreationNarrativeStageView 实例
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**用途 / Purpose:** 处理与 「release escape menu movie」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationNarrativeStageView 实例
CharacterCreationNarrativeStageView characterCreationNarrativeStageView = ...;
characterCreationNarrativeStageView.ReleaseEscapeMenuMovie();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
CharacterCreationNarrativeStageView view = ...;
```

## 参见

- [本区域目录](../)