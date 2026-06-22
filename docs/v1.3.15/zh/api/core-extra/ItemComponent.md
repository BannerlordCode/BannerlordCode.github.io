<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemComponent.cs`

## 概述

`ItemComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<ItemComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `Item` | `public ItemObject Item { get; set; }` |
| `ItemModifierGroup` | `public ItemModifierGroup ItemModifierGroup { get; protected set; }` |

## 主要方法

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### GetCopy
```csharp
public abstract ItemComponent GetCopy()
```

## 使用示例

```csharp
// ItemComponent (Component) 的典型用法
agent.GetComponent<ItemComponent>();
```

## 参见

- [完整类目录](../catalog)