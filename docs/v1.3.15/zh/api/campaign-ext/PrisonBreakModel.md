<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrisonBreakModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonBreakModel : MBGameModel<PrisonBreakModel>`
**Base:** `MBGameModel<PrisonBreakModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs`

## 概述

`PrisonBreakModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PrisonBreakModel>(new MyPrisonBreakModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetNumberOfGuardsToSpawn
```csharp
public abstract int GetNumberOfGuardsToSpawn(Settlement settlement)
```

### CanPlayerStagePrisonBreak
```csharp
public abstract bool CanPlayerStagePrisonBreak(Settlement settlement)
```

### GetPrisonBreakStartCost
```csharp
public abstract int GetPrisonBreakStartCost(Hero prisonerHero)
```

### GetRelationRewardOnPrisonBreak
```csharp
public abstract int GetRelationRewardOnPrisonBreak(Hero prisonerHero)
```

### GetRogueryRewardOnPrisonBreak
```csharp
public abstract float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)
```

## 使用示例

```csharp
// PrisonBreakModel (Model) 的典型用法
Game.Current.ReplaceModel<PrisonBreakModel>(new MyPrisonBreakModel());
```

## 参见

- [完整类目录](../catalog)