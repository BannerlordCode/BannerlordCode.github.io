---
title: "PotentialIssueData"
description: "PotentialIssueData 的自动生成类参考。"
---
# PotentialIssueData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct PotentialIssueData`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/PotentialIssueData.cs`

## 概述

`PotentialIssueData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PotentialIssueData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnStartIssue` | `public StartIssueDelegate OnStartIssue { get; }` |
| `IssueId` | `public string IssueId { get; }` |
| `IssueType` | `public Type IssueType { get; }` |
| `Frequency` | `public IssueBase.IssueFrequency Frequency { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |

## 主要方法

### StartIssueDelegate
`public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner)`

**用途 / Purpose:** 启动issue delegate流程或状态机。

```csharp
// 先通过子系统 API 拿到 PotentialIssueData 实例
PotentialIssueData potentialIssueData = ...;
var result = potentialIssueData.StartIssueDelegate(pid, issueOwner);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
PotentialIssueData entry = ...;
```

## 参见

- [本区域目录](../)