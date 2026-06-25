---
title: "BotData"
description: "BotData 的自动生成类参考。"
---
# BotData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BotData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BotData.cs`

## 概述

`BotData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BotData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAnyValid` | `public bool IsAnyValid { get; }` |

## 主要方法

### ResetKillDeathAssist
`public void ResetKillDeathAssist()`

**用途 / Purpose:** **用途 / Purpose:** 将 kill death assist 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BotData 实例
BotData botData = ...;
botData.ResetKillDeathAssist();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
BotData entry = ...;
```

## 参见

- [本区域目录](../)