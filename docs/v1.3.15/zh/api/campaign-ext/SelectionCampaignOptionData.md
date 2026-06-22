<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SelectionCampaignOptionData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectionCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SelectionCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/SelectionCampaignOptionData.cs`

## 概述

`SelectionCampaignOptionData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `Selections` | `public List<TextObject> Selections { get; }` |

## 主要方法

### GetDataType
```csharp
public override CampaignOptionDataType GetDataType()
```

## 使用示例

```csharp
// SelectionCampaignOptionData (Data) 的典型用法
new SelectionCampaignOptionData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)