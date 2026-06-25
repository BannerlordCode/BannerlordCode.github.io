---
title: "SandBoxViewSubModule"
description: "SandBoxViewSubModule 的自动生成类参考。"
---
# SandBoxViewSubModule

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class SandBoxViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `SandBox.View/SandBoxViewSubModule.cs`

## 概述

`SandBoxViewSubModule` 位于 `SandBox.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SandBoxViewVisualManager` | `public static SandBoxViewVisualManager SandBoxViewVisualManager { get; }` |
| `ConversationViewManager` | `public static ConversationViewManager ConversationViewManager { get; }` |
| `MapConversationDataProvider` | `public static IMapConversationDataProvider MapConversationDataProvider { get; }` |

## 主要方法

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 在 「campaign start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxViewSubModule 实例
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnCampaignStart(game, starterObject);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 在 「game loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxViewSubModule 实例
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnGameLoaded(game, initializerObject);
```

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object starterObject)`

**用途 / Purpose:** 在 「after game initialization finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxViewSubModule 实例
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnAfterGameInitializationFinished(game, starterObject);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**用途 / Purpose:** 处理与 「begin game start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SandBoxViewSubModule 实例
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.BeginGameStart(game);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 在 「game end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxViewSubModule 实例
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnGameEnd(game);
```

### OnInitialState
`public override void OnInitialState()`

**用途 / Purpose:** 在 「initial state」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxViewSubModule 实例
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnInitialState();
```

### SetMapConversationDataProvider
`public static void SetMapConversationDataProvider(IMapConversationDataProvider mapConversationDataProvider)`

**用途 / Purpose:** 为 「map conversation data provider」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SandBoxViewSubModule.SetMapConversationDataProvider(mapConversationDataProvider);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SandBoxViewSubModule sandBoxViewSubModule = ...;
sandBoxViewSubModule.OnCampaignStart(game, starterObject);
```

## 参见

- [本区域目录](../)