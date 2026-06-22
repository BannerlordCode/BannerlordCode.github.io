<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationArrangementModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class FormationArrangementModel : MBGameModel<FormationArrangementModel>`
**Base:** `MBGameModel<FormationArrangementModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs`

## 概述

`FormationArrangementModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<FormationArrangementModel>(new MyFormationArrangementModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Invalid` | `public static FormationArrangementModel.ArrangementPosition Invalid { get; }` |

## 主要方法

### GetBannerBearerPositions
```csharp
public abstract List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)
```

## 使用示例

```csharp
// FormationArrangementModel (Model) 的典型用法
Game.Current.ReplaceModel<FormationArrangementModel>(new MyFormationArrangementModel());
```

## 参见

- [完整类目录](../catalog)