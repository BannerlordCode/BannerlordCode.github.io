<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDecisionPermissionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecisionPermissionModel : MBGameModel<KingdomDecisionPermissionModel>`
**Base:** `MBGameModel<KingdomDecisionPermissionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs`

## 概述

`KingdomDecisionPermissionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `KingdomDecisionPermissionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsPolicyDecisionAllowed
`public abstract bool IsPolicyDecisionAllowed(PolicyObject policy)`

**用途 / Purpose:** 处理 `is policy decision allowed` 相关逻辑。

### IsWarDecisionAllowedBetweenKingdoms
`public abstract bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 处理 `is war decision allowed between kingdoms` 相关逻辑。

### IsPeaceDecisionAllowedBetweenKingdoms
`public abstract bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 处理 `is peace decision allowed between kingdoms` 相关逻辑。

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public abstract bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 处理 `is start alliance decision allowed between kingdoms` 相关逻辑。

### IsAnnexationDecisionAllowed
`public abstract bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**用途 / Purpose:** 处理 `is annexation decision allowed` 相关逻辑。

### IsExpulsionDecisionAllowed
`public abstract bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**用途 / Purpose:** 处理 `is expulsion decision allowed` 相关逻辑。

### IsKingSelectionDecisionAllowed
`public abstract bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**用途 / Purpose:** 处理 `is king selection decision allowed` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomKingdomDecisionPermissionModel();
```

## 参见

- [完整类目录](../catalog)