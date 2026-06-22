<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartySpeedCalculatingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartySpeedCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**Base:** `PartySpeedModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs`

## 概述

`DefaultPartySpeedCalculatingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartySpeedCalculatingModel>(new MyDefaultPartySpeedCalculatingModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `BaseSpeed` | `public override float BaseSpeed { get; }` |
| `MinimumSpeed` | `public override float MinimumSpeed { get; }` |

## 主要方法

### CalculateBaseSpeed
```csharp
public override ExplainedNumber CalculateBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)
```

### CalculateFinalSpeed
```csharp
public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)
```

## 使用示例

```csharp
// DefaultPartySpeedCalculatingModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartySpeedCalculatingModel>(new MyDefaultPartySpeedCalculatingModel());
```

## 参见

- [完整类目录](../catalog)