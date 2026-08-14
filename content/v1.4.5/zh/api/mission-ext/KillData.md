---
title: "KillData"
description: "KillData 的自动生成类参考。"
---
# KillData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct KillData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillData.cs`

## 概述

`KillData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `KillData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `KillerId` | `public PlayerId KillerId { get; set; }` |
| `VictimId` | `public PlayerId VictimId { get; set; }` |
| `KillerFaction` | `public string KillerFaction { get; set; }` |
| `VictimFaction` | `public string VictimFaction { get; set; }` |
| `KillerTroop` | `public string KillerTroop { get; set; }` |
| `VictimTroop` | `public string VictimTroop { get; set; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
KillData entry = ...;
```

## 参见

- [本区域目录](../)