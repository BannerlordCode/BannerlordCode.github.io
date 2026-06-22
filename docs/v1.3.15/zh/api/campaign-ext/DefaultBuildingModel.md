<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBuildingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingModel : BuildingModel`
**Base:** `BuildingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingModel.cs`

## 概述

`DefaultBuildingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBuildingModel>(new MyDefaultBuildingModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanAddBuildingTypeToTown
```csharp
public override bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)
```

## 使用示例

```csharp
// DefaultBuildingModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBuildingModel>(new MyDefaultBuildingModel());
```

## 参见

- [完整类目录](../catalog)