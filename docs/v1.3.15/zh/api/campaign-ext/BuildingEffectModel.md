<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BuildingEffectModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingEffectModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingEffectModel : MBGameModel<BuildingEffectModel>`
**Base:** `MBGameModel<BuildingEffectModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingEffectModel.cs`

## 概述

`BuildingEffectModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BuildingEffectModel>(new MyBuildingEffectModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBuildingEffect
```csharp
public abstract ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)
```

## 使用示例

```csharp
// BuildingEffectModel (Model) 的典型用法
Game.Current.ReplaceModel<BuildingEffectModel>(new MyBuildingEffectModel());
```

## 参见

- [完整类目录](../catalog)