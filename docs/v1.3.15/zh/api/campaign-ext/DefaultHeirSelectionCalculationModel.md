<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultHeirSelectionCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeirSelectionCalculationModel : HeirSelectionCalculationModel`
**Base:** `HeirSelectionCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeirSelectionCalculationModel.cs`

## 概述

`DefaultHeirSelectionCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultHeirSelectionCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public override int HighestSkillPoint { get; }` |

## 主要方法

### CalculateHeirSelectionPoint
`public override int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)`

**用途 / Purpose:** 处理 `calculate heir selection point` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultHeirSelectionCalculationModel>(new MyDefaultHeirSelectionCalculationModel());
```

## 参见

- [完整类目录](../catalog)