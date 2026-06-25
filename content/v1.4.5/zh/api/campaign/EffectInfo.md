---
title: "EffectInfo"
description: "EffectInfo 的自动生成类参考。"
---
# EffectInfo

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EffectInfo`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Buildings/BuildingType.cs`

## 概述

`EffectInfo` 位于 `TaleWorlds.CampaignSystem.Settlements.Buildings`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Buildings` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BuildingEffect` | `public BuildingEffectEnum BuildingEffect { get; }` |
| `BuildingEffectIncrementType` | `public BuildingEffectIncrementType BuildingEffectIncrementType { get; }` |
| `Level1Effect` | `public float Level1Effect { get; }` |
| `Level2Effect` | `public float Level2Effect { get; }` |
| `Level3Effect` | `public float Level3Effect { get; }` |

## 主要方法

### GetEffectValue
`public float GetEffectValue(int i)`

**用途 / Purpose:** 读取并返回当前对象中 effect value 的结果。

```csharp
// 先通过子系统 API 拿到 EffectInfo 实例
EffectInfo effectInfo = ...;
var result = effectInfo.GetEffectValue(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EffectInfo effectInfo = ...;
effectInfo.GetEffectValue(0);
```

## 参见

- [本区域目录](../)