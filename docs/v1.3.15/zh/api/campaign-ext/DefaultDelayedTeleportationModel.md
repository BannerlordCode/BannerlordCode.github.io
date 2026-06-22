<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDelayedTeleportationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**Base:** `DelayedTeleportationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs`

## 概述

`DefaultDelayedTeleportationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultDelayedTeleportationModel>(new MyDefaultDelayedTeleportationModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public override float DefaultTeleportationSpeed { get; }` |

## 主要方法

### GetTeleportationDelayAsHours
```csharp
public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)
```

### CanPerformImmediateTeleport
```csharp
public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)
```

## 使用示例

```csharp
// DefaultDelayedTeleportationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultDelayedTeleportationModel>(new MyDefaultDelayedTeleportationModel());
```

## 参见

- [完整类目录](../catalog)