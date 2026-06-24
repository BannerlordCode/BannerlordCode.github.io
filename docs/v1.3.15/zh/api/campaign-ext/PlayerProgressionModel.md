<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerProgressionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PlayerProgressionModel : MBGameModel<PlayerProgressionModel>`
**Base:** `MBGameModel<PlayerProgressionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PlayerProgressionModel.cs`

## 概述

`PlayerProgressionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PlayerProgressionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerProgress
`public abstract float GetPlayerProgress()`

**用途 / Purpose:** 获取 `player progress` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPlayerProgressionModel();
```

## 参见

- [完整类目录](../catalog)