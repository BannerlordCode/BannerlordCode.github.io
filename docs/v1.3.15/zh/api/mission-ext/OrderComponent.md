<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/OrderComponent.cs`

## 概述

`OrderComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<OrderComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `OrderType` | `public abstract OrderType OrderType { get; }` |

## 主要方法

### GetDirection
```csharp
public Vec2 GetDirection(Formation f)
```

## 使用示例

```csharp
// OrderComponent (Component) 的典型用法
agent.GetComponent<OrderComponent>();
```

## 参见

- [完整类目录](../catalog)