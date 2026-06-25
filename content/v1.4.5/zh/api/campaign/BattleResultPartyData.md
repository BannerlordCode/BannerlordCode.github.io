---
title: "BattleResultPartyData"
description: "BattleResultPartyData 的自动生成类参考。"
---
# BattleResultPartyData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct BattleResultPartyData`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/BattleResultPartyData.cs`

## 概述

`BattleResultPartyData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BattleResultPartyData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### BattleResultPartyData
`public struct BattleResultPartyData(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BattleResultPartyData 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleResultPartyData 实例
BattleResultPartyData battleResultPartyData = ...;
var result = battleResultPartyData.BattleResultPartyData(party);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
BattleResultPartyData entry = ...;
```

## 参见

- [本区域目录](../)