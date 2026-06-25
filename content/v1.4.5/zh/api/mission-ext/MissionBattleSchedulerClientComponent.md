---
title: "MissionBattleSchedulerClientComponent"
description: "MissionBattleSchedulerClientComponent 的自动生成类参考。"
---
# MissionBattleSchedulerClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSchedulerClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBattleSchedulerClientComponent.cs`

## 概述

`MissionBattleSchedulerClientComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionBattleSchedulerClientComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### QuitMission
`public override void QuitMission()`

**用途 / Purpose:** 处理与 「quit mission」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionBattleSchedulerClientComponent 实例
MissionBattleSchedulerClientComponent missionBattleSchedulerClientComponent = ...;
missionBattleSchedulerClientComponent.QuitMission();
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionBattleSchedulerClientComponent>();
```

## 参见

- [本区域目录](../)