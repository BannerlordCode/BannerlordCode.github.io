---
title: "SandBoxViewSubModule"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxViewSubModule`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `campaign start` 事件触发时调用此方法。

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object starterObject)`

**用途 / Purpose:** 当 `after game initialization finished` 事件触发时调用此方法。

### BeginGameStart
`public override void BeginGameStart(Game game)`

**用途 / Purpose:** 处理 `begin game start` 相关逻辑。

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 当 `game end` 事件触发时调用此方法。

### OnInitialState
`public override void OnInitialState()`

**用途 / Purpose:** 当 `initial state` 事件触发时调用此方法。

### SetMapConversationDataProvider
`public static void SetMapConversationDataProvider(IMapConversationDataProvider mapConversationDataProvider)`

**用途 / Purpose:** 设置 `map conversation data provider` 的值或状态。

## 使用示例

```csharp
var value = new SandBoxViewSubModule();
value.OnCampaignStart(game, starterObject);
```

## 参见

- [完整类目录](../catalog)