<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationClanNamingStageView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationClanNamingStageView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `public class CharacterCreationClanNamingStageView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs`

## 概述

`CharacterCreationClanNamingStageView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `CharacterCreationClanNamingStageView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |

## 主要方法

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetLayers
`public override IEnumerable<ScreenLayer> GetLayers()`

**用途 / Purpose:** 获取 `layers` 的当前值。

### GetVirtualStageCount
`public override int GetVirtualStageCount()`

**用途 / Purpose:** 获取 `virtual stage count` 的当前值。

### NextStage
`public override void NextStage()`

**用途 / Purpose:** 处理 `next stage` 相关逻辑。

### PreviousStage
`public override void PreviousStage()`

**用途 / Purpose:** 处理 `previous stage` 相关逻辑。

### LoadEscapeMenuMovie
`public override void LoadEscapeMenuMovie()`

**用途 / Purpose:** 加载 `escape menu movie` 数据。

### ReleaseEscapeMenuMovie
`public override void ReleaseEscapeMenuMovie()`

**用途 / Purpose:** 处理 `release escape menu movie` 相关逻辑。

## 使用示例

```csharp
var view = new CharacterCreationClanNamingStageView();
```

## 参见

- [完整类目录](../catalog)