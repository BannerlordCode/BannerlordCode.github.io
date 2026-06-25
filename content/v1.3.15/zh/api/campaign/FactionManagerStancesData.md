---
title: "FactionManagerStancesData"
description: "FactionManagerStancesData 的自动生成类参考。"
---
# FactionManagerStancesData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class FactionManagerStancesData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/FactionManagerStancesData.cs`

## 概述

`FactionManagerStancesData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `FactionManagerStancesData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetStanceLinks
`public Dictionary<ValueTuple<IFaction, IFaction>, StanceLink>.ValueCollection GetStanceLinks()`

**用途 / Purpose:** 读取并返回当前对象中 「stance links」 的结果。

```csharp
// 先通过子系统 API 拿到 FactionManagerStancesData 实例
FactionManagerStancesData factionManagerStancesData = ...;
var result = factionManagerStancesData.GetStanceLinks();
```

### AddStance
`public void AddStance(StanceLink stance)`

**用途 / Purpose:** 将 「stance」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FactionManagerStancesData 实例
FactionManagerStancesData factionManagerStancesData = ...;
factionManagerStancesData.AddStance(stance);
```

### RemoveStance
`public void RemoveStance(StanceLink stance)`

**用途 / Purpose:** 从当前容器或状态中移除 「stance」。

```csharp
// 先通过子系统 API 拿到 FactionManagerStancesData 实例
FactionManagerStancesData factionManagerStancesData = ...;
factionManagerStancesData.RemoveStance(stance);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
FactionManagerStancesData entry = ...;
```

## 参见

- [本区域目录](../)