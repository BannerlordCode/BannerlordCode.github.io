<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CasualtyHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CasualtyHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CasualtyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CasualtyHandler.cs`

## 概述

`CasualtyHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `CasualtyHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent fleeing` 事件触发时调用此方法。

### GetCasualtyCountOfFormation
`public int GetCasualtyCountOfFormation(Formation formation)`

**用途 / Purpose:** 获取 `casualty count of formation` 的当前值。

### GetCasualtyPowerLossOfFormation
`public float GetCasualtyPowerLossOfFormation(Formation formation)`

**用途 / Purpose:** 获取 `casualty power loss of formation` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new CasualtyHandler());
```

## 参见

- [完整类目录](../catalog)