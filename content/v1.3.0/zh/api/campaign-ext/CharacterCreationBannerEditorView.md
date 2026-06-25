---
title: "CharacterCreationBannerEditorView"
description: "CharacterCreationBannerEditorView 的自动生成类参考。"
---
# CharacterCreationBannerEditorView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationBannerEditorView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs`

## 概述

`CharacterCreationBannerEditorView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `CharacterCreationBannerEditorView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**用途 / Purpose:** 读取并返回当前对象中 「layers」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationBannerEditorView 实例
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
var result = characterCreationBannerEditorView.GetLayers();
```

### PreviousStage
`public override void PreviousStage()`

**用途 / Purpose:** 处理与 「previous stage」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationBannerEditorView 实例
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.PreviousStage();
```

### NextStage
`public override void NextStage()`

**用途 / Purpose:** 处理与 「next stage」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationBannerEditorView 实例
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.NextStage();
```

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationBannerEditorView 实例
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.Tick(0);
```

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**用途 / Purpose:** 读取并返回当前对象中 「virtual stage count」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationBannerEditorView 实例
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
var result = characterCreationBannerEditorView.GetVirtualStageCount();
```

### GoToIndex
`public override void GoToIndex(int index)`

**用途 / Purpose:** 处理与 「go to index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationBannerEditorView 实例
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.GoToIndex(0);
```

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**用途 / Purpose:** 从持久化存储或流中读取 「escape menu movie」。

```csharp
// 先通过子系统 API 拿到 CharacterCreationBannerEditorView 实例
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**用途 / Purpose:** 处理与 「release escape menu movie」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationBannerEditorView 实例
CharacterCreationBannerEditorView characterCreationBannerEditorView = ...;
characterCreationBannerEditorView.ReleaseEscapeMenuMovie();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
CharacterCreationBannerEditorView view = ...;
```

## 参见

- [本区域目录](../)