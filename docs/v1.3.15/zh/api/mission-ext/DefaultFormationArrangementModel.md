<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultFormationArrangementModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationArrangementModel : FormationArrangementModel`
**Base:** `FormationArrangementModel`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationArrangementModel.cs`

## 概述

`DefaultFormationArrangementModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBannerBearerPositions
```csharp
public override List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)
```

### GetArrangementPosition
```csharp
public FormationArrangementModel.ArrangementPosition GetArrangementPosition(int fileCount, int rankCount)
```

## 使用示例

```csharp
// DefaultFormationArrangementModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel());
```

## 参见

- [完整类目录](../catalog)