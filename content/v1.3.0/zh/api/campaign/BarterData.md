---
title: "BarterData"
description: "BarterData 的自动生成类参考。"
---
# BarterData

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`

## 概述

`BarterData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BarterData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OffererMapFaction` | `public IFaction OffererMapFaction { get; }` |
| `OtherMapFaction` | `public IFaction OtherMapFaction { get; }` |
| `IsAiBarter` | `public bool IsAiBarter { get; }` |

## 主要方法

### AddBarterGroup
`public void AddBarterGroup(BarterGroup barterGroup)`

**用途 / Purpose:** **用途 / Purpose:** 将 barter group 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BarterData 实例
BarterData barterData = ...;
barterData.AddBarterGroup(barterGroup);
```

### GetBarterGroups
`public List<BarterGroup> GetBarterGroups()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 barter groups 的结果。

```csharp
// 先通过子系统 API 拿到 BarterData 实例
BarterData barterData = ...;
var result = barterData.GetBarterGroups();
```

### GetBarterables
`public List<Barterable> GetBarterables()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 barterables 的结果。

```csharp
// 先通过子系统 API 拿到 BarterData 实例
BarterData barterData = ...;
var result = barterData.GetBarterables();
```

### GetOfferedBarterables
`public List<Barterable> GetOfferedBarterables()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 offered barterables 的结果。

```csharp
// 先通过子系统 API 拿到 BarterData 实例
BarterData barterData = ...;
var result = barterData.GetOfferedBarterables();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
BarterData entry = ...;
```

## 参见

- [本区域目录](../)