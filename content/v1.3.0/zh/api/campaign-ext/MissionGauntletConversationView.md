---
title: "MissionGauntletConversationView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletConversationView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletConversationView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletConversationView : MissionView, IConversationStateHandler`
**Base:** `MissionView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs`

## 概述

`MissionGauntletConversationView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletConversationView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConversationHandler` | `public MissionConversationLogic ConversationHandler { get; }` |

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**用途 / Purpose:** 当 `mission screen activate` 事件触发时调用此方法。

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**用途 / Purpose:** 当 `mission mode change` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new MissionGauntletConversationView();
```

## 参见

- [完整类目录](../catalog)