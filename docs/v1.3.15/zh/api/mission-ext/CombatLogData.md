<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatLogData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatLogData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CombatLogData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CombatLogData.cs`

## 概述

`CombatLogData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CombatLogData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalDamage` | `public int TotalDamage { get; set; }` |
| `AttackProgress` | `public float AttackProgress { get; set; }` |

## 主要方法

### GetLogString
`public List<ValueTuple<string, uint>> GetLogString()`

**用途 / Purpose:** 获取 `log string` 的当前值。

### SetVictimAgent
`public void SetVictimAgent(Agent victimAgent)`

**用途 / Purpose:** 设置 `victim agent` 的值或状态。

## 使用示例

```csharp
var value = new CombatLogData();
```

## 参见

- [完整类目录](../catalog)