<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ViewSubModule`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ViewSubModule

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs`

## 概述

`ViewSubModule` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerTexturedMaterialCache` | `public static Dictionary<Tuple<Material, Banner>, Material> BannerTexturedMaterialCache { get; set; }` |
| `GameStateScreenManager` | `public static GameStateScreenManager GameStateScreenManager { get; }` |

## 主要方法

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `campaign start` 事件触发时调用此方法。

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `multiplayer game start` 事件触发时调用此方法。

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 当 `game initialization finished` 事件触发时调用此方法。

### BeginGameStart
`public override void BeginGameStart(Game game)`

**用途 / Purpose:** 处理 `begin game start` 相关逻辑。

### DoLoading
`public override bool DoLoading(Game game)`

**用途 / Purpose:** 处理 `do loading` 相关逻辑。

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 当 `game end` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ViewSubModule();
value.OnCampaignStart(game, starterObject);
```

## 参见

- [完整类目录](../catalog)