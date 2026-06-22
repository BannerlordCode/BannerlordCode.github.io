<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultKingdomDecisionPermissionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultKingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## 概述

`DefaultKingdomDecisionPermissionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultKingdomDecisionPermissionModel>(new MyDefaultKingdomDecisionPermissionModel())` 注册，以改变其计算逻辑。

## 主要方法

### IsPolicyDecisionAllowed
```csharp
public override bool IsPolicyDecisionAllowed(PolicyObject policy)
```

### IsWarDecisionAllowedBetweenKingdoms
```csharp
public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsPeaceDecisionAllowedBetweenKingdoms
```csharp
public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsAnnexationDecisionAllowed
```csharp
public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)
```

### IsExpulsionDecisionAllowed
```csharp
public override bool IsExpulsionDecisionAllowed(Clan expelledClan)
```

### IsKingSelectionDecisionAllowed
```csharp
public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
```csharp
public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

## 使用示例

```csharp
// DefaultKingdomDecisionPermissionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultKingdomDecisionPermissionModel>(new MyDefaultKingdomDecisionPermissionModel());
```

## 参见

- [完整类目录](../catalog)