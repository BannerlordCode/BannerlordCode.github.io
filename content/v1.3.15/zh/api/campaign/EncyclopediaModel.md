---
title: "EncyclopediaModel"
description: "EncyclopediaModel 的自动生成类参考。"
---
# EncyclopediaModel

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class EncyclopediaModel : EncyclopediaModelBase`
**Base:** `EncyclopediaModelBase`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaModel.cs`

## 概述

`EncyclopediaModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EncyclopediaModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
Game.Current.ReplaceModel<EncyclopediaModel>(new MyEncyclopediaModel());
```

## 参见

- [本区域目录](../)