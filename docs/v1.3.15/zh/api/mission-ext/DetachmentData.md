<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DetachmentData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DetachmentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/DetachmentData.cs`

## 概述

`DetachmentData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentCount` | `public int AgentCount { get; }` |

## 主要方法

### IsPrecalculated
```csharp
public bool IsPrecalculated()
```

### RemoveScoreOfAgent
```csharp
public void RemoveScoreOfAgent(Agent agent)
```

## 使用示例

```csharp
// DetachmentData (Data) 的典型用法
new DetachmentData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)