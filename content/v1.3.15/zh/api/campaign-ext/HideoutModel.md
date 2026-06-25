---
title: "HideoutModel"
description: "HideoutModel 的自动生成类参考。"
---
# HideoutModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HideoutModel : MBGameModel<HideoutModel>`
**Base:** `MBGameModel<HideoutModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs`

## 概述

`HideoutModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `HideoutModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HideoutHiddenDuration` | `public abstract CampaignTime HideoutHiddenDuration { get; }` |
| `CanAttackHideoutStartTime` | `public abstract int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public abstract int CanAttackHideoutEndTime { get; }` |

## 主要方法

### GetRogueryXpGainOnHideoutMissionEnd
`public abstract float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)`

**用途 / Purpose:** 读取并返回当前对象中 roguery xp gain on hideout mission end 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutModel 实例
HideoutModel hideoutModel = ...;
var result = hideoutModel.GetRogueryXpGainOnHideoutMissionEnd(false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
HideoutModel instance = ...;
```

## 参见

- [本区域目录](../)