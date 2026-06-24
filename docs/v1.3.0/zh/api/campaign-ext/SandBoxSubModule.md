<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxSubModule`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSubModule

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `SandBox/SandBoxSubModule.cs`

## 概述

`SandBoxSubModule` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `campaign start` 事件触发时调用此方法。

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 当 `game initialization finished` 事件触发时调用此方法。

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 处理 `register sub module objects` 相关逻辑。

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**用途 / Purpose:** 处理 `after register sub module objects` 相关逻辑。

### OnGameLoaded
`public override void OnGameLoaded(Game game, object starterObject)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### OnConfigChanged
`public override void OnConfigChanged()`

**用途 / Purpose:** 当 `config changed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new SandBoxSubModule();
value.OnCampaignStart(game, starterObject);
```

## 参见

- [完整类目录](../catalog)