<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterData

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`

## 概述

`BarterData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `OffererMapFaction` | `public IFaction OffererMapFaction { get; }` |
| `OtherMapFaction` | `public IFaction OtherMapFaction { get; }` |
| `IsAiBarter` | `public bool IsAiBarter { get; }` |

## 主要方法

### AddBarterGroup
```csharp
public void AddBarterGroup(BarterGroup barterGroup)
```

### GetBarterGroups
```csharp
public List<BarterGroup> GetBarterGroups()
```

### GetBarterables
```csharp
public List<Barterable> GetBarterables()
```

### GetOfferedBarterables
```csharp
public List<Barterable> GetOfferedBarterables()
```

## 使用示例

```csharp
// BarterData (Data) 的典型用法
new BarterData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)