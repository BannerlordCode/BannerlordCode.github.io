<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RemovePeerComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RemovePeerComponent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class RemovePeerComponent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/RemovePeerComponent.cs`

## 概述

`RemovePeerComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `RemovePeerComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `ComponentId` | `public uint ComponentId { get; }` |

## 使用示例

```csharp
var component = agent.GetComponent<RemovePeerComponent>();
```

## 参见

- [完整类目录](../catalog)