<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSiegeAftermathModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeAftermathModel : SiegeAftermathModel`
**Base:** `SiegeAftermathModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeAftermathModel.cs`

## 概述

`DefaultSiegeAftermathModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSiegeAftermathModel>(new MyDefaultSiegeAftermathModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSiegeAftermathTraitXpChangeForPlayer
```csharp
public override int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)
```

## 使用示例

```csharp
// DefaultSiegeAftermathModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSiegeAftermathModel>(new MyDefaultSiegeAftermathModel());
```

## 参见

- [完整类目录](../catalog)