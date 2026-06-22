<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroAgentLocationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroAgentLocationModel : MBGameModel<HeroAgentLocationModel>`
**Base:** `MBGameModel<HeroAgentLocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs`

## 概述

`HeroAgentLocationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<HeroAgentLocationModel>(new MyHeroAgentLocationModel())` 注册，以改变其计算逻辑。

## 主要方法

### WillBeListedInOverlay
```csharp
public abstract bool WillBeListedInOverlay(LocationCharacter locationCharacter)
```

### GetLocationForHero
```csharp
public abstract Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroSpawnDetail)
```

## 使用示例

```csharp
// HeroAgentLocationModel (Model) 的典型用法
Game.Current.ReplaceModel<HeroAgentLocationModel>(new MyHeroAgentLocationModel());
```

## 参见

- [完整类目录](../catalog)