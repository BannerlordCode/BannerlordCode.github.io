<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnFrameBehaviorBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnFrameBehaviorBase

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SpawnFrameBehaviorBase` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### Initialize

```csharp
public virtual void Initialize()
```

### GetSpawnFrame

```csharp
public abstract MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)
```

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### CreateDecreasingCache

```csharp
public static SpawnFrameBehaviorBase.WeightCache CreateDecreasingCache()
```

### CheckAndInsertNewValueIfLower

```csharp
public bool CheckAndInsertNewValueIfLower(float value, out float valueDifference)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)