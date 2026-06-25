---
title: "ViewSubModule"
description: "ViewSubModule 的自动生成类参考。"
---
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

**用途 / Purpose:** 在 「campaign start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewSubModule 实例
ViewSubModule viewSubModule = ...;
viewSubModule.OnCampaignStart(game, starterObject);
```

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object starterObject)`

**用途 / Purpose:** 在 「multiplayer game start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewSubModule 实例
ViewSubModule viewSubModule = ...;
viewSubModule.OnMultiplayerGameStart(game, starterObject);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**用途 / Purpose:** 在 「game loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewSubModule 实例
ViewSubModule viewSubModule = ...;
viewSubModule.OnGameLoaded(game, initializerObject);
```

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**用途 / Purpose:** 在 「game initialization finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewSubModule 实例
ViewSubModule viewSubModule = ...;
viewSubModule.OnGameInitializationFinished(game);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ViewSubModule 实例
ViewSubModule viewSubModule = ...;
viewSubModule.BeginGameStart(game);
```

### DoLoading
`public override bool DoLoading(Game game)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ViewSubModule 实例
ViewSubModule viewSubModule = ...;
var result = viewSubModule.DoLoading(game);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 在 「game end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ViewSubModule 实例
ViewSubModule viewSubModule = ...;
viewSubModule.OnGameEnd(game);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ViewSubModule viewSubModule = ...;
viewSubModule.OnCampaignStart(game, starterObject);
```

## 参见

- [本区域目录](../)