<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBuildingEffectModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingEffectModel : BuildingEffectModel`
**Base:** `BuildingEffectModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingEffectModel.cs`

## 概述

`DefaultBuildingEffectModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBuildingEffectModel>(new MyDefaultBuildingEffectModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBuildingEffect
```csharp
public override ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)
```

## 使用示例

```csharp
// DefaultBuildingEffectModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBuildingEffectModel>(new MyDefaultBuildingEffectModel());
```

## 参见

- [完整类目录](../catalog)