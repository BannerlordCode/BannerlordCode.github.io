<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EmissaryModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EmissaryModel : MBGameModel<EmissaryModel>`
**Base:** `MBGameModel<EmissaryModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EmissaryModel.cs`

## 概述

`EmissaryModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EmissaryModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public abstract int EmissaryRelationBonusForMainClan { get; }` |

## 主要方法

### IsEmissary
`public abstract bool IsEmissary(Hero hero)`

**用途 / Purpose:** 处理 `is emissary` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomEmissaryModel();
```

## 参见

- [完整类目录](../catalog)