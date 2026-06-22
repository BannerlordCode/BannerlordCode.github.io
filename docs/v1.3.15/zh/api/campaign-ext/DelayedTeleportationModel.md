<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DelayedTeleportationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DelayedTeleportationModel : MBGameModel<DelayedTeleportationModel>`
**Base:** `MBGameModel<DelayedTeleportationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs`

## 概述

`DelayedTeleportationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DelayedTeleportationModel>(new MyDelayedTeleportationModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public abstract float DefaultTeleportationSpeed { get; }` |

## 主要方法

### GetTeleportationDelayAsHours
```csharp
public abstract ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)
```

### CanPerformImmediateTeleport
```csharp
public abstract bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)
```

## 使用示例

```csharp
// DelayedTeleportationModel (Model) 的典型用法
Game.Current.ReplaceModel<DelayedTeleportationModel>(new MyDelayedTeleportationModel());
```

## 参见

- [完整类目录](../catalog)