<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TacticComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TacticComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/TacticComponent.cs`

## 概述

`TacticComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<TacticComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `Team` | `public Team Team { get; protected set; }` |

## 主要方法

### TickOccasionally
```csharp
public virtual void TickOccasionally()
```

### ResetTactic
```csharp
public void ResetTactic()
```

### SetDefaultBehaviorWeights
```csharp
public static void SetDefaultBehaviorWeights(Formation f)
```

## 使用示例

```csharp
// TacticComponent (Component) 的典型用法
agent.GetComponent<TacticComponent>();
```

## 参见

- [完整类目录](../catalog)