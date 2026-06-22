<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultHeirSelectionCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeirSelectionCalculationModel : HeirSelectionCalculationModel`
**Base:** `HeirSelectionCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeirSelectionCalculationModel.cs`

## 概述

`DefaultHeirSelectionCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultHeirSelectionCalculationModel>(new MyDefaultHeirSelectionCalculationModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public override int HighestSkillPoint { get; }` |

## 主要方法

### CalculateHeirSelectionPoint
```csharp
public override int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)
```

## 使用示例

```csharp
// DefaultHeirSelectionCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultHeirSelectionCalculationModel>(new MyDefaultHeirSelectionCalculationModel());
```

## 参见

- [完整类目录](../catalog)