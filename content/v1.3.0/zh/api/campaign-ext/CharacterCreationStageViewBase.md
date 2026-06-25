---
title: "CharacterCreationStageViewBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationStageViewBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationStageViewBase

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`
**Base:** `ICharacterCreationStageListener`
**File:** `SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs`

## 概述

`CharacterCreationStageViewBase` 位于 `SandBox.View.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetGenericScene
`public virtual void SetGenericScene(Scene scene)`

**用途 / Purpose:** 设置 `generic scene` 的值或状态。

### GetLayers
`public abstract IEnumerable<ScreenLayer> GetLayers()`

**用途 / Purpose:** 获取 `layers` 的当前值。

### NextStage
`public abstract void NextStage()`

**用途 / Purpose:** 处理 `next stage` 相关逻辑。

### PreviousStage
`public abstract void PreviousStage()`

**用途 / Purpose:** 处理 `previous stage` 相关逻辑。

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetVirtualStageCount
`public abstract int GetVirtualStageCount()`

**用途 / Purpose:** 获取 `virtual stage count` 的当前值。

### GoToIndex
`public virtual void GoToIndex(int index)`

**用途 / Purpose:** 处理 `go to index` 相关逻辑。

### LoadEscapeMenuMovie
`public abstract void LoadEscapeMenuMovie()`

**用途 / Purpose:** 加载 `escape menu movie` 数据。

### ReleaseEscapeMenuMovie
`public abstract void ReleaseEscapeMenuMovie()`

**用途 / Purpose:** 处理 `release escape menu movie` 相关逻辑。

### HandleEscapeMenu
`public void HandleEscapeMenu(CharacterCreationStageViewBase view, ScreenLayer screenLayer)`

**用途 / Purpose:** 处理 `escape menu` 事件或回调。

### GetEscapeMenuItems
`public List<EscapeMenuItemVM> GetEscapeMenuItems(CharacterCreationStageViewBase view)`

**用途 / Purpose:** 获取 `escape menu items` 的当前值。

## 使用示例

```csharp
var implementation = new CustomCharacterCreationStageViewBase();
```

## 参见

- [完整类目录](../catalog)