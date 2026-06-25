---
title: "DefaultEmissaryModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultEmissaryModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEmissaryModel : EmissaryModel`
**Base:** `EmissaryModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs`

## 概述

`DefaultEmissaryModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultEmissaryModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public override int EmissaryRelationBonusForMainClan { get; }` |

## 主要方法

### IsEmissary
`public override bool IsEmissary(Hero hero)`

**用途 / Purpose:** 处理 `is emissary` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultEmissaryModel>(new MyDefaultEmissaryModel());
```

## 参见

- [完整类目录](../catalog)