<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartySpeedModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartySpeedModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`
**Base:** `MBGameModel<PartySpeedModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`

## 概述

`PartySpeedModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartySpeedModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BaseSpeed` | `public abstract float BaseSpeed { get; }` |
| `MinimumSpeed` | `public abstract float MinimumSpeed { get; }` |

## 主要方法

### CalculateBaseSpeed
`public abstract ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)`

**用途 / Purpose:** 处理 `calculate base speed` 相关逻辑。

### CalculateFinalSpeed
`public abstract ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)`

**用途 / Purpose:** 处理 `calculate final speed` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomPartySpeedModel();
```

## 参见

- [完整类目录](../catalog)