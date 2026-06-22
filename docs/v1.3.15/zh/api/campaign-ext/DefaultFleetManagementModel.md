<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultFleetManagementModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFleetManagementModel : FleetManagementModel`
**Base:** `FleetManagementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs`

## 概述

`DefaultFleetManagementModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultFleetManagementModel>(new MyDefaultFleetManagementModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public override int MinimumTroopCountRequiredToSendShips { get; }` |

## 主要方法

### CanSendShipToPlayerClan
```csharp
public override bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)
```

### CanTroopsReturn
```csharp
public override bool CanTroopsReturn()
```

### GetReturnTimeForTroops
```csharp
public override CampaignTime GetReturnTimeForTroops(Ship ship)
```

## 使用示例

```csharp
// DefaultFleetManagementModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultFleetManagementModel>(new MyDefaultFleetManagementModel());
```

## 参见

- [完整类目录](../catalog)