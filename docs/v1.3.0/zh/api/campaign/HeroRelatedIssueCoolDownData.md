<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroRelatedIssueCoolDownData`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroRelatedIssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroRelatedIssueCoolDownData : IssueCoolDownData`
**Base:** `IssueCoolDownData`
**File:** `TaleWorlds.CampaignSystem/Issues/HeroRelatedIssueCoolDownData.cs`

## 概述

`HeroRelatedIssueCoolDownData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `HeroRelatedIssueCoolDownData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsRelatedTo
`public override bool IsRelatedTo(object obj)`

**用途 / Purpose:** 处理 `is related to` 相关逻辑。

### IsValid
`public override bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

## 使用示例

```csharp
var value = new HeroRelatedIssueCoolDownData();
```

## 参见

- [完整类目录](../catalog)