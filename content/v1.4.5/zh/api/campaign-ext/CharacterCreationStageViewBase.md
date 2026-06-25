---
title: "CharacterCreationStageViewBase"
description: "CharacterCreationStageViewBase 的自动生成类参考。"
---
# CharacterCreationStageViewBase

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`
**Base:** `ICharacterCreationStageListener`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs`

## 概述

`CharacterCreationStageViewBase` 位于 `SandBox.View.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetGenericScene
`public virtual void SetGenericScene(Scene scene)`

**用途 / Purpose:** 为 「generic scene」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.SetGenericScene(scene);
```

### GetLayers
`public abstract IEnumerable<ScreenLayer> GetLayers()`

**用途 / Purpose:** 读取并返回当前对象中 「layers」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
var result = characterCreationStageViewBase.GetLayers();
```

### NextStage
`public abstract void NextStage()`

**用途 / Purpose:** 处理与 「next stage」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.NextStage();
```

### PreviousStage
`public abstract void PreviousStage()`

**用途 / Purpose:** 处理与 「previous stage」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.PreviousStage();
```

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.Tick(0);
```

### GetVirtualStageCount
`public abstract int GetVirtualStageCount()`

**用途 / Purpose:** 读取并返回当前对象中 「virtual stage count」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
var result = characterCreationStageViewBase.GetVirtualStageCount();
```

### GoToIndex
`public virtual void GoToIndex(int index)`

**用途 / Purpose:** 处理与 「go to index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.GoToIndex(0);
```

### LoadEscapeMenuMovie
`public abstract void LoadEscapeMenuMovie()`

**用途 / Purpose:** 从持久化存储或流中读取 「escape menu movie」。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.LoadEscapeMenuMovie();
```

### ReleaseEscapeMenuMovie
`public abstract void ReleaseEscapeMenuMovie()`

**用途 / Purpose:** 处理与 「release escape menu movie」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.ReleaseEscapeMenuMovie();
```

### HandleEscapeMenu
`public void HandleEscapeMenu(CharacterCreationStageViewBase view, ScreenLayer screenLayer)`

**用途 / Purpose:** 执行与 「escape menu」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
characterCreationStageViewBase.HandleEscapeMenu(view, screenLayer);
```

### GetEscapeMenuItems
`public List<EscapeMenuItemVM> GetEscapeMenuItems(CharacterCreationStageViewBase view)`

**用途 / Purpose:** 读取并返回当前对象中 「escape menu items」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationStageViewBase 实例
CharacterCreationStageViewBase characterCreationStageViewBase = ...;
var result = characterCreationStageViewBase.GetEscapeMenuItems(view);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CharacterCreationStageViewBase instance = ...;
```

## 参见

- [本区域目录](../)