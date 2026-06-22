<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatLogData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatLogData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CombatLogData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CombatLogData.cs`

## 概述

`CombatLogData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalDamage` | `public int TotalDamage { get; set; }` |
| `AttackProgress` | `public float AttackProgress { get; set; }` |

## 主要方法

### GetLogString
```csharp
public List<ValueTuple<string, uint>> GetLogString()
```

### SetVictimAgent
```csharp
public void SetVictimAgent(Agent victimAgent)
```

## 使用示例

```csharp
// CombatLogData (Data) 的典型用法
new CombatLogData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)