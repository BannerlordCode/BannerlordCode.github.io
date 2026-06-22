<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultGenericXpModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultGenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultGenericXpModel.cs`

## 概述

`DefaultGenericXpModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultGenericXpModel>(new MyDefaultGenericXpModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetXpMultiplier
```csharp
public override float GetXpMultiplier(Hero hero)
```

## 使用示例

```csharp
// DefaultGenericXpModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultGenericXpModel>(new MyDefaultGenericXpModel());
```

## 参见

- [完整类目录](../catalog)