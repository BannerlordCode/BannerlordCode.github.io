---
title: "StoryModeViewSubModule"
description: "StoryModeViewSubModule 的自动生成类参考。"
---
# StoryModeViewSubModule

**Namespace:** StoryMode.View
**Module:** StoryMode.View
**Type:** `public class StoryModeViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.StoryMode/StoryMode.View/StoryMode.View/StoryModeViewSubModule.cs`

## 概述

`StoryModeViewSubModule` 位于 `StoryMode.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 在 game initialization finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeViewSubModule 实例
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnGameInitializationFinished(game);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 在 game end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeViewSubModule 实例
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnGameEnd(game);
```

### OnSubModuleDeactivated
`public override void OnSubModuleDeactivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 sub module deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeViewSubModule 实例
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnSubModuleDeactivated();
```

### OnSubModuleActivated
`public override void OnSubModuleActivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 sub module activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeViewSubModule 实例
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnSubModuleActivated();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnGameInitializationFinished(game);
```

## 参见

- [本区域目录](../)