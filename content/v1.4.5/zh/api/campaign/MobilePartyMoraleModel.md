---
title: "MobilePartyMoraleModel"
description: "MobilePartyMoraleModel 的自动生成类参考。"
---
# MobilePartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyMoraleModel : MBGameModel<MobilePartyMoraleModel>`
**Base:** `MBGameModel<MobilePartyMoraleModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MobilePartyMoraleModel.cs`

## 概述

`MobilePartyMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MobilePartyMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMoraleChange
`public abstract float CalculateMoraleChange(MobileParty party)`

**用途 / Purpose:** 计算「morale change」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyMoraleModel 实例
MobilePartyMoraleModel mobilePartyMoraleModel = ...;
var result = mobilePartyMoraleModel.CalculateMoraleChange(party);
```

### GetMoraleTooltipText
`public abstract TextObject GetMoraleTooltipText(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「morale tooltip text」 的结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyMoraleModel 实例
MobilePartyMoraleModel mobilePartyMoraleModel = ...;
var result = mobilePartyMoraleModel.GetMoraleTooltipText(party);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MobilePartyMoraleModel instance = ...;
```

## 参见

- [本区域目录](../)