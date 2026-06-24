<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignData.cs`

## 概述

`CampaignData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CampaignData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NeutralFactionName` | `public static TextObject NeutralFactionName { get; }` |

## 使用示例

```csharp
var value = new CampaignData();
```

## 参见

- [完整类目录](../catalog)