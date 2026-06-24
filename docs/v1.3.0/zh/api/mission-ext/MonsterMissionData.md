<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MonsterMissionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MonsterMissionData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MonsterMissionData : IMonsterMissionData`
**Base:** `IMonsterMissionData`
**File:** `TaleWorlds.MountAndBlade/MonsterMissionData.cs`

## 概述

`MonsterMissionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MonsterMissionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Monster` | `public Monster Monster { get; }` |
| `BodyCapsule` | `public CapsuleData BodyCapsule { get; }` |
| `CrouchedBodyCapsule` | `public CapsuleData CrouchedBodyCapsule { get; }` |
| `ActionSet` | `public MBActionSet ActionSet { get; }` |
| `FemaleActionSet` | `public MBActionSet FemaleActionSet { get; }` |

## 使用示例

```csharp
var value = new MonsterMissionData();
```

## 参见

- [完整类目录](../catalog)