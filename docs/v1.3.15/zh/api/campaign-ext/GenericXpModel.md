<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GenericXpModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class GenericXpModel : MBGameModel<GenericXpModel>`
**Base:** `MBGameModel<GenericXpModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/GenericXpModel.cs`

## 概述

`GenericXpModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<GenericXpModel>(new MyGenericXpModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetXpMultiplier
```csharp
public abstract float GetXpMultiplier(Hero hero)
```

## 使用示例

```csharp
// GenericXpModel (Model) 的典型用法
Game.Current.ReplaceModel<GenericXpModel>(new MyGenericXpModel());
```

## 参见

- [完整类目录](../catalog)