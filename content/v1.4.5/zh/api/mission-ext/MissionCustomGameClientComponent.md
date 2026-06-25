---
title: "MissionCustomGameClientComponent"
description: "MissionCustomGameClientComponent 的自动生成类参考。"
---
# MissionCustomGameClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCustomGameClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionCustomGameClientComponent.cs`

## 概述

`MissionCustomGameClientComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionCustomGameClientComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionCustomGameClientComponent 实例
MissionCustomGameClientComponent missionCustomGameClientComponent = ...;
missionCustomGameClientComponent.OnBehaviorInitialize();
```

### SetServerEndingBeforeClientLoaded
`public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)`

**用途 / Purpose:** 为 server ending before client loaded 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionCustomGameClientComponent 实例
MissionCustomGameClientComponent missionCustomGameClientComponent = ...;
missionCustomGameClientComponent.SetServerEndingBeforeClientLoaded(false);
```

### QuitMission
`public override void QuitMission()`

**用途 / Purpose:** 调用 QuitMission 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionCustomGameClientComponent 实例
MissionCustomGameClientComponent missionCustomGameClientComponent = ...;
missionCustomGameClientComponent.QuitMission();
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionCustomGameClientComponent>();
```

## 参见

- [本区域目录](../)