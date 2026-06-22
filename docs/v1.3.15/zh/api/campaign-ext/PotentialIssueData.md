<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PotentialIssueData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PotentialIssueData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct PotentialIssueData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs`

## 概述

`PotentialIssueData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

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
```csharp
public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner)
```

## 使用示例

```csharp
// PotentialIssueData (Data) 的典型用法
new PotentialIssueData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)