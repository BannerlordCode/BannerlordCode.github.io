---
title: "MissionGauntletPhotoMode"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletPhotoMode`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletPhotoMode

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletPhotoMode : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletPhotoMode.cs`

## 概述

`MissionGauntletPhotoMode` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** 当 `escape` 事件触发时调用此方法。

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 处理 `is opening escape menu on focus change allowed` 相关逻辑。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionGauntletPhotoMode();
value.OnMissionScreenInitialize();
```

## 参见

- [完整类目录](../catalog)