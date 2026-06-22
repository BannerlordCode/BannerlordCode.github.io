<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyImpairmentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**Base:** `PartyImpairmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`

## 概述

`DefaultPartyImpairmentModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyImpairmentModel>(new MyDefaultPartyImpairmentModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSiegeExpectedVulnerabilityTime
```csharp
public override float GetSiegeExpectedVulnerabilityTime()
```

### GetDisorganizedStateDuration
```csharp
public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)
```

### CanGetDisorganized
```csharp
public override bool CanGetDisorganized(PartyBase party)
```

### GetVulnerabilityStateDuration
```csharp
public override float GetVulnerabilityStateDuration(PartyBase party)
```

## 使用示例

```csharp
// DefaultPartyImpairmentModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyImpairmentModel>(new MyDefaultPartyImpairmentModel());
```

## 参见

- [完整类目录](../catalog)