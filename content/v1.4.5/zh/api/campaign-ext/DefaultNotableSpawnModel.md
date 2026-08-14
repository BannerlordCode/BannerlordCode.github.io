---
title: "DefaultNotableSpawnModel"
description: "DefaultNotableSpawnModel 的自动生成类参考。"
---
# DefaultNotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotableSpawnModel.cs`

## 概述

`DefaultNotableSpawnModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultNotableSpawnModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTargetNotableCountForSettlement
`public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**用途 / Purpose:** 读取并返回当前对象中 target notable count for settlement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultNotableSpawnModel 实例
DefaultNotableSpawnModel defaultNotableSpawnModel = ...;
var result = defaultNotableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultNotableSpawnModel>(new MyDefaultNotableSpawnModel());
```

## 参见

- [本区域目录](../)