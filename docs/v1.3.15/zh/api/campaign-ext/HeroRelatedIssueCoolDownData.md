<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroRelatedIssueCoolDownData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroRelatedIssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroRelatedIssueCoolDownData : IssueCoolDownData`
**Base:** `IssueCoolDownData`
**File:** `TaleWorlds.CampaignSystem/Issues/HeroRelatedIssueCoolDownData.cs`

## 概述

`HeroRelatedIssueCoolDownData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### IsRelatedTo
```csharp
public override bool IsRelatedTo(object obj)
```

### IsValid
```csharp
public override bool IsValid()
```

## 使用示例

```csharp
// HeroRelatedIssueCoolDownData (Data) 的典型用法
new HeroRelatedIssueCoolDownData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)