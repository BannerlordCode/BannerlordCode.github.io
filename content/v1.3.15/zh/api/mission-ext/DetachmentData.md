---
title: "DetachmentData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DetachmentData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `is precalculated` 相关逻辑。

### RemoveScoreOfAgent
`public void RemoveScoreOfAgent(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `score of agent`。

## 使用示例

```csharp
var value = new DetachmentData();
```

## 参见

- [完整类目录](../catalog)