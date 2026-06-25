---
title: "CharacterCreationCultureStageView"
description: "CharacterCreationCultureStageView 的自动生成类参考。"
---
# CharacterCreationCultureStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationCultureStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationCultureStageView.cs`

## 概述

`CharacterCreationCultureStageView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `CharacterCreationCultureStageView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageView 实例
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.Tick(0);
```

### NextStage
`public override void NextStage()`

**用途 / Purpose:** 调用 NextStage 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageView 实例
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.NextStage();
```

### PreviousStage
`public override void PreviousStage()`

**用途 / Purpose:** 调用 PreviousStage 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageView 实例
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.PreviousStage();
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**用途 / Purpose:** 读取并返回当前对象中 virtual stage count 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageView 实例
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
var result = characterCreationCultureStageView.GetVirtualStageCount();
```

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**用途 / Purpose:** 读取并返回当前对象中 layers 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageView 实例
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
var result = characterCreationCultureStageView.GetLayers();
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**用途 / Purpose:** 从持久化存储或流中读取 escape menu movie。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageView 实例
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**用途 / Purpose:** 调用 ReleaseEscapeMenuMovie 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCultureStageView 实例
CharacterCreationCultureStageView characterCreationCultureStageView = ...;
characterCreationCultureStageView.ReleaseEscapeMenuMovie();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
CharacterCreationCultureStageView view = ...;
```

## 参见

- [本区域目录](../)