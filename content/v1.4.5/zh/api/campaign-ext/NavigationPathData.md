---
title: "NavigationPathData"
description: "NavigationPathData 的自动生成类参考。"
---
# NavigationPathData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class NavigationPathData`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## 概述

`NavigationPathData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `NavigationPathData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ReverseClone
`public NavigationPathData ReverseClone()`

**用途 / Purpose:** 处理与 「reverse clone」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NavigationPathData 实例
NavigationPathData navigationPathData = ...;
var result = navigationPathData.ReverseClone();
```

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**用途 / Purpose:** 为 「usable points」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 NavigationPathData 实例
NavigationPathData navigationPathData = ...;
navigationPathData.InitializeUsablePoints(allUsableMachines);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
NavigationPathData entry = ...;
```

## 参见

- [本区域目录](../)