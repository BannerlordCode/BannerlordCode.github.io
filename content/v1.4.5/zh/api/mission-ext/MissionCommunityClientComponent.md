---
title: "MissionCommunityClientComponent"
description: "MissionCommunityClientComponent 的自动生成类参考。"
---
# MissionCommunityClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCommunityClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs`

## 概述

`MissionCommunityClientComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionCommunityClientComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionCommunityClientComponent 实例
MissionCommunityClientComponent missionCommunityClientComponent = ...;
missionCommunityClientComponent.OnBehaviorInitialize();
```

### SetServerEndingBeforeClientLoaded
`public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)`

**用途 / Purpose:** 为 server ending before client loaded 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionCommunityClientComponent 实例
MissionCommunityClientComponent missionCommunityClientComponent = ...;
missionCommunityClientComponent.SetServerEndingBeforeClientLoaded(false);
```

### QuitMission
`public override void QuitMission()`

**用途 / Purpose:** 调用 QuitMission 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionCommunityClientComponent 实例
MissionCommunityClientComponent missionCommunityClientComponent = ...;
missionCommunityClientComponent.QuitMission();
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionCommunityClientComponent>();
```

## 参见

- [本区域目录](../)