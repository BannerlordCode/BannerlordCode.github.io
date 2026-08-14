---
title: "FormationSpawnData"
description: "FormationSpawnData 的自动生成类参考。"
---
# FormationSpawnData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal struct FormationSpawnData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs`

## 概述

`FormationSpawnData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `FormationSpawnData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumTroops` | `public int NumTroops { get; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
FormationSpawnData entry = ...;
```

## 参见

- [本区域目录](../)