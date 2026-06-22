<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FleetManagementModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class FleetManagementModel : MBGameModel<FleetManagementModel>`
**Base:** `MBGameModel<FleetManagementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs`

## 概述

`FleetManagementModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<FleetManagementModel>(new MyFleetManagementModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public abstract int MinimumTroopCountRequiredToSendShips { get; }` |

## 主要方法

### CanTroopsReturn
```csharp
public abstract bool CanTroopsReturn()
```

### GetReturnTimeForTroops
```csharp
public abstract CampaignTime GetReturnTimeForTroops(Ship ship)
```

### CanSendShipToPlayerClan
```csharp
public abstract bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)
```

## 使用示例

```csharp
// FleetManagementModel (Model) 的典型用法
Game.Current.ReplaceModel<FleetManagementModel>(new MyFleetManagementModel());
```

## 参见

- [完整类目录](../catalog)