<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MonsterMissionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MonsterMissionData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MonsterMissionData : IMonsterMissionData`
**Base:** `IMonsterMissionData`
**File:** `TaleWorlds.MountAndBlade/MonsterMissionData.cs`

## 概述

`MonsterMissionData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

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
// MonsterMissionData (Data) 的典型用法
new MonsterMissionData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)