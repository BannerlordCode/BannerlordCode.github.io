---
title: "TauntSlotData"
description: "TauntSlotData 的自动生成类参考。"
---
# TauntSlotData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs`

## 概述

`TauntSlotData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TauntSlotData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public string PlayerId { get; set; }` |
| `TauntIndices` | `public List<TauntIndexData> TauntIndices { get; set; }` |

## 主要方法

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 same content with。

```csharp
// 先通过子系统 API 拿到 TauntSlotData 实例
TauntSlotData tauntSlotData = ...;
var result = tauntSlotData.HasSameContentWith(other);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
TauntSlotData entry = ...;
```

## 参见

- [本区域目录](../)