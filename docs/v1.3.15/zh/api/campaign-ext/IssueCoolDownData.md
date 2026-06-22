<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IssueCoolDownData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueCoolDownData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/IssueCoolDownData.cs`

## 概述

`IssueCoolDownData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### IsValid
```csharp
public virtual bool IsValid()
```

### IsRelatedTo
```csharp
public abstract bool IsRelatedTo(object obj)
```

## 使用示例

```csharp
// IssueCoolDownData (Data) 的典型用法
new IssueCoolDownData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)