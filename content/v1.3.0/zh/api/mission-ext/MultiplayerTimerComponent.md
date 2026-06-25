---
title: "MultiplayerTimerComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerTimerComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerTimerComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`

## 概述

`MultiplayerTimerComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerTimerComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTimerRunning` | `public bool IsTimerRunning { get; }` |

## 主要方法

### StartTimerAsServer
`public void StartTimerAsServer(float duration)`

**用途 / Purpose:** 处理 `start timer as server` 相关逻辑。

### StartTimerAsClient
`public void StartTimerAsClient(float startTime, float duration)`

**用途 / Purpose:** 处理 `start timer as client` 相关逻辑。

### GetRemainingTime
`public float GetRemainingTime(bool isSynched)`

**用途 / Purpose:** 获取 `remaining time` 的当前值。

### CheckIfTimerPassed
`public bool CheckIfTimerPassed()`

**用途 / Purpose:** 处理 `check if timer passed` 相关逻辑。

### GetCurrentTimerStartTime
`public MissionTime GetCurrentTimerStartTime()`

**用途 / Purpose:** 获取 `current timer start time` 的当前值。

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerTimerComponent>();
```

## 参见

- [完整类目录](../catalog)