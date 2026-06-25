---
title: "DetachmentData"
description: "DetachmentData 的自动生成类参考。"
---
# DetachmentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/DetachmentData.cs`

## 概述

`DetachmentData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `DetachmentData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentCount` | `public int AgentCount { get; }` |

## 主要方法

### IsPrecalculated
`public bool IsPrecalculated()`

**用途 / Purpose:** 判断当前对象是否处于 「precalculated」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DetachmentData 实例
DetachmentData detachmentData = ...;
var result = detachmentData.IsPrecalculated();
```

### RemoveScoreOfAgent
`public void RemoveScoreOfAgent(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 「score of agent」。

```csharp
// 先通过子系统 API 拿到 DetachmentData 实例
DetachmentData detachmentData = ...;
detachmentData.RemoveScoreOfAgent(agent);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
DetachmentData entry = ...;
```

## 参见

- [本区域目录](../)