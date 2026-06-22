<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BotData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BotData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BotData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BotData.cs`

## 概述

`BotData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `IsAnyValid` | `public bool IsAnyValid { get; }` |

## 主要方法

### ResetKillDeathAssist
```csharp
public void ResetKillDeathAssist()
```

## 使用示例

```csharp
// BotData (Data) 的典型用法
new BotData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)