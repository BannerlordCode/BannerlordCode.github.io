<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaddleComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaddleComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SaddleComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/SaddleComponent.cs`

## 概述

`SaddleComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<SaddleComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### GetCopy
```csharp
public override ItemComponent GetCopy()
```

## 使用示例

```csharp
// SaddleComponent (Component) 的典型用法
agent.GetComponent<SaddleComponent>();
```

## 参见

- [完整类目录](../catalog)