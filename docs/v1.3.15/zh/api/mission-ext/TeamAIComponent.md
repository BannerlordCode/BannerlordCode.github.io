<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamAIComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAIComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## 概述

`TeamAIComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<TeamAIComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `StrategicAreas` | `public MBReadOnlyList<StrategicArea> StrategicAreas { get { return this._strategicAreas; }` |
| `HasStrategicAreas` | `public bool HasStrategicAreas { get { return !this._strategicAreas.IsEmpty<StrategicArea>(); }` |
| `Weight` | `public float Weight { get; set; }` |

## 主要方法

### AddStrategicArea
```csharp
public void AddStrategicArea(StrategicArea strategicArea)
```

### RemoveStrategicArea
```csharp
public void RemoveStrategicArea(StrategicArea strategicArea)
```

### RemoveAllStrategicAreas
```csharp
public void RemoveAllStrategicAreas()
```

### AddTacticOption
```csharp
public void AddTacticOption(TacticComponent tacticOption)
```

### RemoveTacticOption
```csharp
public void RemoveTacticOption(Type tacticType)
```

### ClearTacticOptions
```csharp
public void ClearTacticOptions()
```

### AssertTeam
```csharp
public void AssertTeam(Team team)
```

### NotifyTacticalDecision
```csharp
public void NotifyTacticalDecision(in TacticalDecision decision)
```

### OnDeploymentFinished
```csharp
public virtual void OnDeploymentFinished()
```

### OnFormationFrameChanged
```csharp
public virtual void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)
```

### OnMissionEnded
```csharp
public virtual void OnMissionEnded()
```

### ResetTacticalPositions
```csharp
public void ResetTacticalPositions()
```

### ResetTactic
```csharp
public void ResetTactic(bool keepCurrentTactic = true)
```

### CheckIsDefenseApplicable
```csharp
public void CheckIsDefenseApplicable()
```

### OnTacticAppliedForFirstTime
```csharp
public void OnTacticAppliedForFirstTime()
```

### TickOccasionally
```csharp
public void TickOccasionally()
```

### IsCurrentTactic
```csharp
public bool IsCurrentTactic(TacticComponent tactic)
```

### OnUnitAddedToFormationForTheFirstTime
```csharp
public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation)
```

### TacticalDecisionDelegate
```csharp
public delegate void TacticalDecisionDelegate(in TacticalDecision decision)
```

## 使用示例

```csharp
// TeamAIComponent (Component) 的典型用法
agent.GetComponent<TeamAIComponent>();
```

## 参见

- [完整类目录](../catalog)