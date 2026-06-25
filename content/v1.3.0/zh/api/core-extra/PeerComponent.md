---
title: "PeerComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PeerComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PeerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class PeerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/PeerComponent.cs`

## 概述

`PeerComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `PeerComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Peer` | `public VirtualPlayer Peer { get; set; }` |
| `Name` | `public string Name { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `TypeId` | `public uint TypeId { get; set; }` |

## 主要方法

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnInitialize
`public virtual void OnInitialize()`

**用途 / Purpose:** 当 `initialize` 事件触发时调用此方法。

### OnFinalize
`public virtual void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomPeerComponent();
```

## 参见

- [完整类目录](../catalog)