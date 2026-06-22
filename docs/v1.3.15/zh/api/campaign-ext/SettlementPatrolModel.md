<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementPatrolModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`
**Base:** `MBGameModel<SettlementPatrolModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementPatrolModel.cs`

## 概述

`SettlementPatrolModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementPatrolModel>(new MySettlementPatrolModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetPatrolPartySpawnDuration
```csharp
public abstract CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)
```

### CanSettlementHavePatrolParties
```csharp
public abstract bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)
```

### GetPartyTemplateForPatrolParty
```csharp
public abstract PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)
```

## 使用示例

```csharp
// SettlementPatrolModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementPatrolModel>(new MySettlementPatrolModel());
```

## 参见

- [完整类目录](../catalog)