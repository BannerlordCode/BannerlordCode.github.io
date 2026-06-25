---
title: "MapColorGradeManager"
description: "MapColorGradeManager 的自动生成类参考。"
---
# MapColorGradeManager

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapColorGradeManager : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/MapColorGradeManager.cs`

## 概述

`MapColorGradeManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapColorGradeManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 MapColorGradeManager 实例
MapColorGradeManager mapColorGradeManager = ...;
var result = mapColorGradeManager.GetTickRequirement();
```

### ApplyAtmosphere
`public void ApplyAtmosphere(bool forceLoadTextures)`

**用途 / Purpose:** 将 atmosphere 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MapColorGradeManager 实例
MapColorGradeManager mapColorGradeManager = ...;
mapColorGradeManager.ApplyAtmosphere(false);
```

### ApplyColorGrade
`public void ApplyColorGrade(float dt)`

**用途 / Purpose:** 将 color grade 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MapColorGradeManager 实例
MapColorGradeManager mapColorGradeManager = ...;
mapColorGradeManager.ApplyColorGrade(0);
```

## 使用示例

```csharp
var manager = MapColorGradeManager.Current;
```

## 参见

- [本区域目录](../)