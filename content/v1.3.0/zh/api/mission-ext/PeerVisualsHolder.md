---
title: "PeerVisualsHolder"
description: "PeerVisualsHolder 的自动生成类参考。"
---
# PeerVisualsHolder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PeerVisualsHolder`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/PeerVisualsHolder.cs`

## 概述

`PeerVisualsHolder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Peer` | `public MissionPeer Peer { get; }` |
| `VisualsIndex` | `public int VisualsIndex { get; }` |
| `AgentVisuals` | `public IAgentVisual AgentVisuals { get; }` |
| `MountAgentVisuals` | `public IAgentVisual MountAgentVisuals { get; }` |

## 主要方法

### SetMountVisuals
`public void SetMountVisuals(IAgentVisual mountAgentVisuals)`

**用途 / Purpose:** 为 「mount visuals」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PeerVisualsHolder 实例
PeerVisualsHolder peerVisualsHolder = ...;
peerVisualsHolder.SetMountVisuals(mountAgentVisuals);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PeerVisualsHolder peerVisualsHolder = ...;
peerVisualsHolder.SetMountVisuals(mountAgentVisuals);
```

## 参见

- [本区域目录](../)