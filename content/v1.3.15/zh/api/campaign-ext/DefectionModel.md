---
title: "DefectionModel"
description: "DefectionModel 的自动生成类参考。"
---
# DefectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DefectionModel : MBGameModel<DefaultDefectionModel>`
**Base:** `MBGameModel<DefaultDefectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DefectionModel.cs`

## 概述

`DefectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanHeroDefectToFaction
`public abstract bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)`

**用途 / Purpose:** 检查当前对象是否满足 hero defect to faction 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefectionModel 实例
DefectionModel defectionModel = ...;
var result = defectionModel.CanHeroDefectToFaction(hero, kingdom);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DefectionModel instance = ...;
```

## 参见

- [本区域目录](../)