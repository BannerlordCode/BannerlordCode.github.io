---
title: "SiegeAftermathModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeAftermathModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeAftermathModel : MBGameModel<SiegeAftermathModel>`
**Base:** `MBGameModel<SiegeAftermathModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeAftermathModel.cs`

## 概述

`SiegeAftermathModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SiegeAftermathModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSiegeAftermathTraitXpChangeForPlayer
`public abstract int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)`

**用途 / Purpose:** 获取 `siege aftermath trait xp change for player` 的当前值。

## 使用示例

```csharp
var implementation = new CustomSiegeAftermathModel();
```

## 参见

- [完整类目录](../catalog)