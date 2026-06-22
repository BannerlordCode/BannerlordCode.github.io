<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDefectionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDefectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDefectionModel : DefectionModel`
**Base:** `DefectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDefectionModel.cs`

## 概述

`DefaultDefectionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultDefectionModel>(new MyDefaultDefectionModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanHeroDefectToFaction
```csharp
public override bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)
```

## 使用示例

```csharp
// DefaultDefectionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultDefectionModel>(new MyDefaultDefectionModel());
```

## 参见

- [完整类目录](../catalog)