<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefectionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DefectionModel : MBGameModel<DefaultDefectionModel>`
**Base:** `MBGameModel<DefaultDefectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DefectionModel.cs`

## 概述

`DefectionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefectionModel>(new MyDefectionModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanHeroDefectToFaction
```csharp
public abstract bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)
```

## 使用示例

```csharp
// DefectionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefectionModel>(new MyDefectionModel());
```

## 参见

- [完整类目录](../catalog)