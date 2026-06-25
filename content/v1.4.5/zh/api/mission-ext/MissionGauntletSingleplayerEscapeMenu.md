---
title: "MissionGauntletSingleplayerEscapeMenu"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletSingleplayerEscapeMenu`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletSingleplayerEscapeMenu

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSingleplayerEscapeMenu : MissionGauntletEscapeMenuBase`
**Base:** `MissionGauntletEscapeMenuBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs`

## 概述

`MissionGauntletSingleplayerEscapeMenu` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 当 `focus change on game window` 事件触发时调用此方法。

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**用途 / Purpose:** 当 `scene rendering started` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionGauntletSingleplayerEscapeMenu();
value.OnMissionScreenInitialize();
```

## 参见

- [完整类目录](../catalog)