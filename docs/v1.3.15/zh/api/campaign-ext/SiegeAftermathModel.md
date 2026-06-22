<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeAftermathModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeAftermathModel : MBGameModel<SiegeAftermathModel>`
**Base:** `MBGameModel<SiegeAftermathModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeAftermathModel.cs`

## 概述

`SiegeAftermathModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SiegeAftermathModel>(new MySiegeAftermathModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSiegeAftermathTraitXpChangeForPlayer
```csharp
public abstract int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)
```

## 使用示例

```csharp
// SiegeAftermathModel (Model) 的典型用法
Game.Current.ReplaceModel<SiegeAftermathModel>(new MySiegeAftermathModel());
```

## 参见

- [完整类目录](../catalog)