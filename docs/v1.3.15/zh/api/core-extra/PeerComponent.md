<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PeerComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PeerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class PeerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/PeerComponent.cs`

## 概述

`PeerComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<PeerComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `Peer` | `public VirtualPlayer Peer { get { return this._peer; }` |
| `Name` | `public string Name { get { return this.Peer.UserName; }` |
| `IsMine` | `public bool IsMine { get { return this.Peer.IsMine; }` |
| `TypeId` | `public uint TypeId { get; set; }` |

## 主要方法

### Initialize
```csharp
public virtual void Initialize()
```

### OnInitialize
```csharp
public virtual void OnInitialize()
```

### OnFinalize
```csharp
public virtual void OnFinalize()
```

## 使用示例

```csharp
// PeerComponent (Component) 的典型用法
agent.GetComponent<PeerComponent>();
```

## 参见

- [完整类目录](../catalog)