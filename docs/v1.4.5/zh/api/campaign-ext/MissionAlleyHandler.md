<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAlleyHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAlleyHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAlleyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAlleyHandler.cs`

## 概述

`MissionAlleyHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAlleyHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CanThugConversationBeTriggered` | `public bool CanThugConversationBeTriggered { get; }` |

## 主要方法

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 当 `agent hit` 事件触发时调用此方法。

### StartCommonAreaBattle
`public void StartCommonAreaBattle(Alley alley)`

**用途 / Purpose:** 处理 `start common area battle` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionAlleyHandler());
```

## 参见

- [完整类目录](../catalog)