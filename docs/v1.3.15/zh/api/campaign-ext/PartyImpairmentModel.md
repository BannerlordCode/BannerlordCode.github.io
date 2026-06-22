<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyImpairmentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`
**Base:** `MBGameModel<PartyImpairmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`

## 概述

`PartyImpairmentModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyImpairmentModel>(new MyPartyImpairmentModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetDisorganizedStateDuration
```csharp
public abstract ExplainedNumber GetDisorganizedStateDuration(MobileParty party)
```

### GetVulnerabilityStateDuration
```csharp
public abstract float GetVulnerabilityStateDuration(PartyBase party)
```

### GetSiegeExpectedVulnerabilityTime
```csharp
public abstract float GetSiegeExpectedVulnerabilityTime()
```

### CanGetDisorganized
```csharp
public abstract bool CanGetDisorganized(PartyBase partyBase)
```

## 使用示例

```csharp
// PartyImpairmentModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyImpairmentModel>(new MyPartyImpairmentModel());
```

## 参见

- [完整类目录](../catalog)