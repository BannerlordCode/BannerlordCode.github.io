<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NotableSpawnModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotableSpawnModel : MBGameModel<NotableSpawnModel>`
**Base:** `MBGameModel<NotableSpawnModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotableSpawnModel.cs`

## 概述

`NotableSpawnModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `NotableSpawnModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTargetNotableCountForSettlement
`public abstract int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**用途 / Purpose:** 获取 `target notable count for settlement` 的当前值。

## 使用示例

```csharp
var implementation = new CustomNotableSpawnModel();
```

## 参见

- [完整类目录](../catalog)