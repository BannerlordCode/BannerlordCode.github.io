---
title: "SettlementProsperityModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementProsperityModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`
**Base:** `MBGameModel<SettlementProsperityModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementProsperityModel.cs`

## 概述

`SettlementProsperityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementProsperityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateProsperityChange
`public abstract ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate prosperity change` 相关逻辑。

### CalculateHearthChange
`public abstract ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate hearth change` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSettlementProsperityModel();
```

## 参见

- [完整类目录](../catalog)