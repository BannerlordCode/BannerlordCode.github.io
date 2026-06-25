---
title: "PeerComponent"
description: "PeerComponent 的自动生成类参考。"
---
# PeerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class PeerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/PeerComponent.cs`

## 概述

`PeerComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `PeerComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Peer` | `public VirtualPlayer Peer { get; set; }` |
| `TypeId` | `public uint TypeId { get; set; }` |

## 主要方法

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PeerComponent 实例
PeerComponent peerComponent = ...;
peerComponent.Initialize();
```

### OnInitialize
`public virtual void OnInitialize()`

**用途 / Purpose:** 在 「initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PeerComponent 实例
PeerComponent peerComponent = ...;
peerComponent.OnInitialize();
```

### OnFinalize
`public virtual void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PeerComponent 实例
PeerComponent peerComponent = ...;
peerComponent.OnFinalize();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PeerComponent instance = ...;
```

## 参见

- [本区域目录](../)