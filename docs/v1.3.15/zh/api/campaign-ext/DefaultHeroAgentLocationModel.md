<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultHeroAgentLocationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroAgentLocationModel : HeroAgentLocationModel`
**Base:** `HeroAgentLocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs`

## 概述

`DefaultHeroAgentLocationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultHeroAgentLocationModel>(new MyDefaultHeroAgentLocationModel())` 注册，以改变其计算逻辑。

## 主要方法

### WillBeListedInOverlay
```csharp
public override bool WillBeListedInOverlay(LocationCharacter locationCharacter)
```

### GetLocationForHero
```csharp
public override Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroLocationDetail)
```

## 使用示例

```csharp
// DefaultHeroAgentLocationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultHeroAgentLocationModel>(new MyDefaultHeroAgentLocationModel());
```

## 参见

- [完整类目录](../catalog)