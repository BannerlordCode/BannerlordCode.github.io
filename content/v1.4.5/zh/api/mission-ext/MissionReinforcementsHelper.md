---
title: "MissionReinforcementsHelper"
description: "MissionReinforcementsHelper 的自动生成类参考。"
---
# MissionReinforcementsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionReinforcementsHelper`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## 概述

`MissionReinforcementsHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MissionReinforcementsHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Compare
`public int Compare(ReinforcementFormationPriority left, ReinforcementFormationPriority right)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MissionReinforcementsHelper 实例
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.Compare(left, right);
```

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionReinforcementsHelper 实例
MissionReinforcementsHelper missionReinforcementsHelper = ...;
missionReinforcementsHelper.Initialize(formation, 0);
```

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**用途 / Purpose:** **用途 / Purpose:** 将 prospective troop 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionReinforcementsHelper 实例
MissionReinforcementsHelper missionReinforcementsHelper = ...;
missionReinforcementsHelper.AddProspectiveTroop(troopClass);
```

### IsInitialized
`public bool IsInitialized(uint initTime)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 initialized 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionReinforcementsHelper 实例
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.IsInitialized(0);
```

### GetPriority
`public ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 priority 的结果。

```csharp
// 先通过子系统 API 拿到 MissionReinforcementsHelper 实例
MissionReinforcementsHelper missionReinforcementsHelper = ...;
var result = missionReinforcementsHelper.GetPriority(troopClass);
```

### OnMissionStart
`public static void OnMissionStart()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission start 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MissionReinforcementsHelper.OnMissionStart();
```

### OnMissionEnd
`public static void OnMissionEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission end 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MissionReinforcementsHelper.OnMissionEnd();
```

## 使用示例

```csharp
MissionReinforcementsHelper.Initialize();
```

## 参见

- [本区域目录](../)