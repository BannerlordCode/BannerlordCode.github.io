---
title: "PotentialIssueData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PotentialIssueData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PotentialIssueData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct PotentialIssueData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs`

## 概述

`PotentialIssueData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PotentialIssueData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnStartIssue` | `public PotentialIssueData.StartIssueDelegate OnStartIssue { get; }` |
| `IssueId` | `public string IssueId { get; }` |
| `IssueType` | `public Type IssueType { get; }` |
| `Frequency` | `public IssueBase.IssueFrequency Frequency { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### StartIssueDelegate
`public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner)`

**用途 / Purpose:** 处理 `start issue delegate` 相关逻辑。

## 使用示例

```csharp
var value = new PotentialIssueData();
```

## 参见

- [完整类目录](../catalog)