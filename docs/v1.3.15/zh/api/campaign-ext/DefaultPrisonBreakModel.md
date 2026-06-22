<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPrisonBreakModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonBreakModel : PrisonBreakModel`
**Base:** `PrisonBreakModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs`

## 概述

`DefaultPrisonBreakModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPrisonBreakModel>(new MyDefaultPrisonBreakModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetNumberOfGuardsToSpawn
```csharp
public override int GetNumberOfGuardsToSpawn(Settlement settlement)
```

### CanPlayerStagePrisonBreak
```csharp
public override bool CanPlayerStagePrisonBreak(Settlement settlement)
```

### GetPrisonBreakStartCost
```csharp
public override int GetPrisonBreakStartCost(Hero prisonerHero)
```

### GetRelationRewardOnPrisonBreak
```csharp
public override int GetRelationRewardOnPrisonBreak(Hero prisonerHero)
```

### GetRogueryRewardOnPrisonBreak
```csharp
public override float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)
```

## 使用示例

```csharp
// DefaultPrisonBreakModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPrisonBreakModel>(new MyDefaultPrisonBreakModel());
```

## 参见

- [完整类目录](../catalog)