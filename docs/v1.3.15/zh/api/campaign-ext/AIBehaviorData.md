<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AIBehaviorData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AIBehaviorData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**Base:** `IEquatable<AIBehaviorData>`
**File:** `TaleWorlds.CampaignSystem/AIBehaviorData.cs`

## 概述

`AIBehaviorData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### Equals
```csharp
public override bool Equals(object obj)
```

### Equals
```csharp
public bool Equals(AIBehaviorData other)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

## 使用示例

```csharp
// AIBehaviorData (Data) 的典型用法
new AIBehaviorData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)