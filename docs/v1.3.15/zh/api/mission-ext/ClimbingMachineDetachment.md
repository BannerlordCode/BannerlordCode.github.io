<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClimbingMachineDetachment`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClimbingMachineDetachment

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`ClimbingMachineDetachment` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `IsActive` | `public bool IsActive { get; }` |


## 主要方法

### Deactivate

```csharp
public void Deactivate()
```

### AddAgent

```csharp
public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)
```

### AddAgentAtSlotIndex

```csharp
public void AddAgentAtSlotIndex(Agent agent, int slotIndex)
```

### IsUsedByFormation

```csharp
public bool IsUsedByFormation(Formation formation)
```

### IsStandingPointAvailableForAgent

```csharp
public bool IsStandingPointAvailableForAgent(Agent agent)
```

### GetTemplateCostsOfAgent

```csharp
public List<float> GetTemplateCostsOfAgent(Agent candidate, List<float> oldValue)
```

### GetTemplateWeightOfAgent

```csharp
public float GetTemplateWeightOfAgent(Agent candidate)
```

### GetWeightOfAgentAtNextSlot

```csharp
public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents, out Agent match)
```

### GetWeightOfAgentAtNextSlot

```csharp
public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>> agentTemplateScores, out Agent match)
```

### GetWeightOfAgentAtOccupiedSlot

```csharp
public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent> newAgents, out Agent match)
```

### RemoveAgent

```csharp
public void RemoveAgent(Agent agent)
```

### GetNumberOfUsableSlots

```csharp
public int GetNumberOfUsableSlots()
```

### GetAgentFrame

```csharp
public WorldFrame? GetAgentFrame(Agent agent)
```

### GetWeightOfNextSlot

```csharp
public float? GetWeightOfNextSlot(BattleSideEnum side)
```

### GetWeightOfOccupiedSlot

```csharp
public float GetWeightOfOccupiedSlot(Agent agent)
```

### TickClimbingMachines

```csharp
public void TickClimbingMachines()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)