---
title: "ReinforcementFormationData"
description: "ReinforcementFormationData 的自动生成类参考。"
---
# ReinforcementFormationData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReinforcementFormationData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## 概述

`ReinforcementFormationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ReinforcementFormationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ReinforcementFormationData 实例
ReinforcementFormationData reinforcementFormationData = ...;
reinforcementFormationData.Initialize(formation, 0);
```

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**用途 / Purpose:** **用途 / Purpose:** 将 prospective troop 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ReinforcementFormationData 实例
ReinforcementFormationData reinforcementFormationData = ...;
reinforcementFormationData.AddProspectiveTroop(troopClass);
```

### IsInitialized
`public bool IsInitialized(uint initTime)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 initialized 状态或条件。

```csharp
// 先通过子系统 API 拿到 ReinforcementFormationData 实例
ReinforcementFormationData reinforcementFormationData = ...;
var result = reinforcementFormationData.IsInitialized(0);
```

### GetPriority
`public ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 priority 的结果。

```csharp
// 先通过子系统 API 拿到 ReinforcementFormationData 实例
ReinforcementFormationData reinforcementFormationData = ...;
var result = reinforcementFormationData.GetPriority(troopClass);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ReinforcementFormationData entry = ...;
```

## 参见

- [本区域目录](../)