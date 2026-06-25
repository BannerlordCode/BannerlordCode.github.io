---
title: "DefaultKingdomDecisionPermissionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultKingdomDecisionPermissionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultKingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## 概述

`DefaultKingdomDecisionPermissionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultKingdomDecisionPermissionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsPolicyDecisionAllowed
`public override bool IsPolicyDecisionAllowed(PolicyObject policy)`

**用途 / Purpose:** 处理 `is policy decision allowed` 相关逻辑。

### IsWarDecisionAllowedBetweenKingdoms
`public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 处理 `is war decision allowed between kingdoms` 相关逻辑。

### IsPeaceDecisionAllowedBetweenKingdoms
`public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 处理 `is peace decision allowed between kingdoms` 相关逻辑。

### IsAnnexationDecisionAllowed
`public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**用途 / Purpose:** 处理 `is annexation decision allowed` 相关逻辑。

### IsExpulsionDecisionAllowed
`public override bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**用途 / Purpose:** 处理 `is expulsion decision allowed` 相关逻辑。

### IsKingSelectionDecisionAllowed
`public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**用途 / Purpose:** 处理 `is king selection decision allowed` 相关逻辑。

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 处理 `is start alliance decision allowed between kingdoms` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultKingdomDecisionPermissionModel>(new MyDefaultKingdomDecisionPermissionModel());
```

## 参见

- [完整类目录](../catalog)