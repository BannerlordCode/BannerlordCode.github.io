<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDecisionPermissionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecisionPermissionModel : MBGameModel<KingdomDecisionPermissionModel>`
**Base:** `MBGameModel<KingdomDecisionPermissionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs`

## 概述

`KingdomDecisionPermissionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<KingdomDecisionPermissionModel>(new MyKingdomDecisionPermissionModel())` 注册，以改变其计算逻辑。

## 主要方法

### IsPolicyDecisionAllowed
```csharp
public abstract bool IsPolicyDecisionAllowed(PolicyObject policy)
```

### IsWarDecisionAllowedBetweenKingdoms
```csharp
public abstract bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsPeaceDecisionAllowedBetweenKingdoms
```csharp
public abstract bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
```csharp
public abstract bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsAnnexationDecisionAllowed
```csharp
public abstract bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)
```

### IsExpulsionDecisionAllowed
```csharp
public abstract bool IsExpulsionDecisionAllowed(Clan expelledClan)
```

### IsKingSelectionDecisionAllowed
```csharp
public abstract bool IsKingSelectionDecisionAllowed(Kingdom kingdom)
```

## 使用示例

```csharp
// KingdomDecisionPermissionModel (Model) 的典型用法
Game.Current.ReplaceModel<KingdomDecisionPermissionModel>(new MyKingdomDecisionPermissionModel());
```

## 参见

- [完整类目录](../catalog)