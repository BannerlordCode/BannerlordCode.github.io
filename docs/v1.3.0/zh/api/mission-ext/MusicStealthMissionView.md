<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MusicStealthMissionView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MusicStealthMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Sound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MusicStealthMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Sound/MusicStealthMissionView.cs`

## 概述

`MusicStealthMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MusicStealthMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**用途 / Purpose:** 当 `agent alarmed state changed` 事件触发时调用此方法。

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 当 `agent hit` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new MusicStealthMissionView();
```

## 参见

- [完整类目录](../catalog)