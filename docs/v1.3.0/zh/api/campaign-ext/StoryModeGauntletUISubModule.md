<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeGauntletUISubModule`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeGauntletUISubModule

**Namespace:** StoryMode.GauntletUI
**Module:** StoryMode.GauntletUI
**Type:** `public class StoryModeGauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `StoryMode.GauntletUI/StoryModeGauntletUISubModule.cs`

## 概述

`StoryModeGauntletUISubModule` 位于 `StoryMode.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 当 `game initialization finished` 事件触发时调用此方法。

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 当 `game end` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new StoryModeGauntletUISubModule();
value.OnGameInitializationFinished(game);
```

## 参见

- [完整类目录](../catalog)