<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsableMachineAIBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMachineAIBase

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`UsableMachineAIBase` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `HasActionCompleted` | `public virtual bool HasActionCompleted { get; }` |


## 主要方法

### Tick

```csharp
public void Tick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)
```

### GetSuitableAgentForStandingPoint

```csharp
public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, IEnumerable<Agent> agents, List<Agent> usedAgents)
```

### GetSuitableAgentForStandingPoint

```csharp
public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, List<ValueTuple<Agent, float>> agents, List<Agent> usedAgents, float weight)
```

### TeleportUserAgentsToMachine

```csharp
public virtual void TeleportUserAgentsToMachine(List<Agent> agentList)
```

### StopUsingStandingPoint

```csharp
public void StopUsingStandingPoint(StandingPoint standingPoint)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)