<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementPatrolModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementPatrolModel : SettlementPatrolModel`
**Base:** `SettlementPatrolModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementPatrolModel.cs`

## 概述

`DefaultSettlementPatrolModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementPatrolModel>(new MyDefaultSettlementPatrolModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetPatrolPartySpawnDuration
```csharp
public override CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)
```

### CanSettlementHavePatrolParties
```csharp
public override bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)
```

### GetPartyTemplateForPatrolParty
```csharp
public override PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)
```

## 使用示例

```csharp
// DefaultSettlementPatrolModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementPatrolModel>(new MyDefaultSettlementPatrolModel());
```

## 参见

- [完整类目录](../catalog)