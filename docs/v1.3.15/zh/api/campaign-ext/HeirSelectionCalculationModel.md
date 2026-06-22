<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeirSelectionCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeirSelectionCalculationModel : MBGameModel<HeirSelectionCalculationModel>`
**Base:** `MBGameModel<HeirSelectionCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs`

## 概述

`HeirSelectionCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<HeirSelectionCalculationModel>(new MyHeirSelectionCalculationModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public abstract int HighestSkillPoint { get; }` |

## 主要方法

### CalculateHeirSelectionPoint
```csharp
public abstract int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)
```

## 使用示例

```csharp
// HeirSelectionCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<HeirSelectionCalculationModel>(new MyHeirSelectionCalculationModel());
```

## 参见

- [完整类目录](../catalog)