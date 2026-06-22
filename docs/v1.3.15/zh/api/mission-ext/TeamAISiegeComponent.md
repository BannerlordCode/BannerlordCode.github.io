<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamAISiegeComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamAISiegeComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAISiegeComponent : TeamAIComponent`
**Base:** `TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs`

## 概述

`TeamAISiegeComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<TeamAISiegeComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `QuerySystem` | `public static SiegeQuerySystem QuerySystem { get; protected set; }` |
| `OuterGate` | `public CastleGate OuterGate { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `InnerGate` | `public CastleGate InnerGate { get; }` |
| `Ladders` | `public MBReadOnlyList<SiegeLadder> Ladders { get { return this._ladders; }` |

## 主要方法

### OnMissionFinalize
```csharp
public static void OnMissionFinalize()
```

### CalculateIsChargePastWallsApplicable
```csharp
public bool CalculateIsChargePastWallsApplicable(FormationAI.BehaviorSide side)
```

### SetAreLaddersReady
```csharp
public void SetAreLaddersReady(bool areLaddersReady)
```

### CalculateIsAnyLaneOpenToGetInside
```csharp
public bool CalculateIsAnyLaneOpenToGetInside()
```

### CalculateIsAnyLaneOpenToGoOutside
```csharp
public bool CalculateIsAnyLaneOpenToGoOutside()
```

### IsPrimarySiegeWeaponNavmeshFaceId
```csharp
public bool IsPrimarySiegeWeaponNavmeshFaceId(int id)
```

### IsFormationGroupInsideCastle
```csharp
public static bool IsFormationGroupInsideCastle(MBList<Formation> formationGroup, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)
```

### IsFormationInsideCastle
```csharp
public static bool IsFormationInsideCastle(Formation formation, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)
```

### IsCastleBreached
```csharp
public bool IsCastleBreached()
```

### OnDeploymentFinished
```csharp
public override void OnDeploymentFinished()
```

## 使用示例

```csharp
// TeamAISiegeComponent (Component) 的典型用法
agent.GetComponent<TeamAISiegeComponent>();
```

## 参见

- [完整类目录](../catalog)