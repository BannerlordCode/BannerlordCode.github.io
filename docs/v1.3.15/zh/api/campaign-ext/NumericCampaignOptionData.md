<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NumericCampaignOptionData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NumericCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NumericCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/NumericCampaignOptionData.cs`

## 概述

`NumericCampaignOptionData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinValue` | `public float MinValue { get; }` |
| `MaxValue` | `public float MaxValue { get; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; }` |

## 主要方法

### GetDataType
```csharp
public override CampaignOptionDataType GetDataType()
```

## 使用示例

```csharp
// NumericCampaignOptionData (Data) 的典型用法
new NumericCampaignOptionData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)