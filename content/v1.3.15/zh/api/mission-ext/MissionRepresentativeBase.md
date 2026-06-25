---
title: "MissionRepresentativeBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionRepresentativeBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionRepresentativeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionRepresentativeBase : PeerComponent`
**Base:** `PeerComponent`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs`

## 概述

`MissionRepresentativeBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ControlledAgent` | `public Agent ControlledAgent { get; }` |
| `Gold` | `public int Gold { get; }` |
| `MissionPeer` | `public MissionPeer MissionPeer { get; }` |

## 主要方法

### SetAgent
`public void SetAgent(Agent agent)`

**用途 / Purpose:** 设置 `agent` 的值或状态。

### OnAgentSpawned
`public virtual void OnAgentSpawned()`

**用途 / Purpose:** 当 `agent spawned` 事件触发时调用此方法。

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### UpdateGold
`public void UpdateGold(int gold)`

**用途 / Purpose:** 更新 `gold` 的状态或数据。

## 使用示例

```csharp
var implementation = new CustomMissionRepresentativeBase();
```

## 参见

- [完整类目录](../catalog)