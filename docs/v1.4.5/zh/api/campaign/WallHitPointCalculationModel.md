<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WallHitPointCalculationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WallHitPointCalculationModel : MBGameModel<WallHitPointCalculationModel>`
**Base:** `MBGameModel<WallHitPointCalculationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/WallHitPointCalculationModel.cs`

## 概述

`WallHitPointCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `WallHitPointCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMaximumWallHitPoint
`public abstract float CalculateMaximumWallHitPoint(Town town)`

**用途 / Purpose:** 处理 `calculate maximum wall hit point` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomWallHitPointCalculationModel();
```

## 参见

- [完整类目录](../catalog)