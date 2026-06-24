<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPlayerProgressionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPlayerProgressionModel : PlayerProgressionModel`
**Base:** `PlayerProgressionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPlayerProgressionModel.cs`

## 概述

`DefaultPlayerProgressionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPlayerProgressionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerProgress
`public override float GetPlayerProgress()`

**用途 / Purpose:** 获取 `player progress` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPlayerProgressionModel>(new MyDefaultPlayerProgressionModel());
```

## 参见

- [完整类目录](../catalog)