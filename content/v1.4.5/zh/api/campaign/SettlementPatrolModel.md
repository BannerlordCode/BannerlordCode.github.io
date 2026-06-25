---
title: "SettlementPatrolModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementPatrolModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`
**Base:** `MBGameModel<SettlementPatrolModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementPatrolModel.cs`

## 概述

`SettlementPatrolModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementPatrolModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPatrolPartySpawnDuration
`public abstract CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)`

**用途 / Purpose:** 获取 `patrol party spawn duration` 的当前值。

### CanSettlementHavePatrolParties
`public abstract bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)`

**用途 / Purpose:** 判断当前对象是否可以执行 `settlement have patrol parties`。

### GetPartyTemplateForPatrolParty
`public abstract PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)`

**用途 / Purpose:** 获取 `party template for patrol party` 的当前值。

## 使用示例

```csharp
var implementation = new CustomSettlementPatrolModel();
```

## 参见

- [完整类目录](../catalog)