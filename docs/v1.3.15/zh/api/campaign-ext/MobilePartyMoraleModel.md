<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyMoraleModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyMoraleModel : MBGameModel<MobilePartyMoraleModel>`
**Base:** `MBGameModel<MobilePartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs`

## 概述

`MobilePartyMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MobilePartyMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMoraleChange
`public abstract float CalculateMoraleChange(MobileParty party)`

**用途 / Purpose:** 处理 `calculate morale change` 相关逻辑。

### GetMoraleTooltipText
`public abstract TextObject GetMoraleTooltipText(MobileParty party)`

**用途 / Purpose:** 获取 `morale tooltip text` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMobilePartyMoraleModel();
```

## 参见

- [完整类目录](../catalog)