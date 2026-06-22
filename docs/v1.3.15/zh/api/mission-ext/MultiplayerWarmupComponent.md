<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerWarmupComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerWarmupComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerWarmupComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs`

## 概述

`MultiplayerWarmupComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MultiplayerWarmupComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalWarmupDuration` | `public static float TotalWarmupDuration { get { return (float)MultiplayerOptions.OptionType.WarmupTimeLimitInSeconds.GetIntValue(MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions); }` |
| `IsInWarmup` | `public bool IsInWarmup { get { return this.WarmupState != MultiplayerWarmupComponent.WarmupStates.Ended; }` |

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### CheckForWarmupProgressEnd
```csharp
public bool CheckForWarmupProgressEnd()
```

### OnPreDisplayMissionTick
```csharp
public override void OnPreDisplayMissionTick(float dt)
```

### EndWarmupProgress
```csharp
public void EndWarmupProgress()
```

### CanMatchStartAfterWarmup
```csharp
public bool CanMatchStartAfterWarmup()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### CommandEndWarmup
```csharp
public static string CommandEndWarmup(List<string> strings)
```

## 使用示例

```csharp
// MultiplayerWarmupComponent (Component) 的典型用法
agent.GetComponent<MultiplayerWarmupComponent>();
```

## 参见

- [完整类目录](../catalog)