<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerksAgentComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerksAgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerksAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs`

## 概述

`MPPerksAgentComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MPPerksAgentComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnMount
```csharp
public override void OnMount(Agent mount)
```

### OnDismount
```csharp
public override void OnDismount(Agent mount)
```

### OnItemPickup
```csharp
public override void OnItemPickup(SpawnedItemEntity item)
```

### OnWeaponDrop
```csharp
public override void OnWeaponDrop(MissionWeapon droppedWeapon)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved()
```

## 使用示例

```csharp
// MPPerksAgentComponent (Component) 的典型用法
agent.GetComponent<MPPerksAgentComponent>();
```

## 参见

- [完整类目录](../catalog)