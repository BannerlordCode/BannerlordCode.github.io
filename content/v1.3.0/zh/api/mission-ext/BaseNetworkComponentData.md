---
title: "BaseNetworkComponentData"
description: "BaseNetworkComponentData 的自动生成类参考。"
---
# BaseNetworkComponentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponentData : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs`

## 概述

`BaseNetworkComponentData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BaseNetworkComponentData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentBattleIndex` | `public int CurrentBattleIndex { get; }` |

## 主要方法

### UpdateCurrentBattleIndex
`public void UpdateCurrentBattleIndex(int currentBattleIndex)`

**用途 / Purpose:** 重新计算并更新 「current battle index」 的最新表示。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponentData 实例
BaseNetworkComponentData baseNetworkComponentData = ...;
baseNetworkComponentData.UpdateCurrentBattleIndex(0);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
BaseNetworkComponentData entry = ...;
```

## 参见

- [本区域目录](../)