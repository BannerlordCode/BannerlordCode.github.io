---
title: "TownMercenaryData"
description: "TownMercenaryData 的自动生成类参考。"
---
# TownMercenaryData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMercenaryData`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/RecruitmentCampaignBehavior.cs`

## 概述

`TownMercenaryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TownMercenaryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |

## 主要方法

### ChangeMercenaryType
`public void ChangeMercenaryType(CharacterObject troopType, int number)`

**用途 / Purpose:** 调用 ChangeMercenaryType 对应的操作。

```csharp
// 先通过子系统 API 拿到 TownMercenaryData 实例
TownMercenaryData townMercenaryData = ...;
townMercenaryData.ChangeMercenaryType(troopType, 0);
```

### ChangeMercenaryCount
`public void ChangeMercenaryCount(int difference)`

**用途 / Purpose:** 调用 ChangeMercenaryCount 对应的操作。

```csharp
// 先通过子系统 API 拿到 TownMercenaryData 实例
TownMercenaryData townMercenaryData = ...;
townMercenaryData.ChangeMercenaryCount(0);
```

### HasAvailableMercenary
`public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)`

**用途 / Purpose:** 判断当前对象是否已经持有 available mercenary。

```csharp
// 先通过子系统 API 拿到 TownMercenaryData 实例
TownMercenaryData townMercenaryData = ...;
var result = townMercenaryData.HasAvailableMercenary(occupation.NotAssigned);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
TownMercenaryData entry = ...;
```

## 参见

- [本区域目录](../)