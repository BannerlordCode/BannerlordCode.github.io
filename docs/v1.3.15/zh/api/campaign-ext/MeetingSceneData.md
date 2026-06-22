<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MeetingSceneData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MeetingSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct MeetingSceneData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/MeetingSceneData.cs`

## 概述

`MeetingSceneData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `CultureString` | `public string CultureString { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |

## 使用示例

```csharp
// MeetingSceneData (Data) 的典型用法
new MeetingSceneData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)