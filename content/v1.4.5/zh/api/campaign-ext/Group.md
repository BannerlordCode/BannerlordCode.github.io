---
title: "Group"
description: "Group 的自动生成类参考。"
---
# Group

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Group : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `bin/TaleWorlds.PSAI/psai.Editor/Group.cs`

## 概述

`Group` 位于 `psai.Editor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.Editor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Segments` | `public List<Segment> Segments { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Serialization_Id` | `public int Serialization_Id { get; set; }` |
| `Serialization_ManuallyBlockedGroupIds` | `public List<int> Serialization_ManuallyBlockedGroupIds { get; set; }` |
| `Serialization_ManuallyLinkedGroupIds` | `public List<int> Serialization_ManuallyLinkedGroupIds { get; set; }` |
| `Serialization_ManualBridgeSegmentIds` | `public List<int> Serialization_ManualBridgeSegmentIds { get; set; }` |
| `ManualBridgeSnippetsOfTargetGroups` | `public HashSet<Segment> ManualBridgeSnippetsOfTargetGroups { get; set; }` |
| `ManuallyBlockedGroups` | `public HashSet<Group> ManuallyBlockedGroups { get; set; }` |
| `ManuallyLinkedGroups` | `public HashSet<Group> ManuallyLinkedGroups { get; set; }` |
| `Theme` | `public Theme Theme { get; set; }` |

## 主要方法

### GetClassString
`public override string GetClassString()`

**用途 / Purpose:** 读取并返回当前对象中 「class string」 的结果。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.GetClassString();
```

### AddSegment
`public void AddSegment(Segment snippet)`

**用途 / Purpose:** 将 「segment」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
group.AddSegment(snippet);
```

### AddSegment
`public void AddSegment(Segment snippet, int index)`

**用途 / Purpose:** 将 「segment」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
group.AddSegment(snippet, 0);
```

### RemoveSegment
`public void RemoveSegment(Segment snippet)`

**用途 / Purpose:** 从当前容器或状态中移除 「segment」。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
group.RemoveSegment(snippet);
```

### HasAtLeastOneBridgeSegmentToTargetGroup
`public bool HasAtLeastOneBridgeSegmentToTargetGroup(Group targetGroup)`

**用途 / Purpose:** 判断当前对象是否已经持有 「at least one bridge segment to target group」。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.HasAtLeastOneBridgeSegmentToTargetGroup(targetGroup);
```

### ContainsAtLeastOneManualBridgeSegmentForSourceGroup
`public bool ContainsAtLeastOneManualBridgeSegmentForSourceGroup(Group sourceGroup)`

**用途 / Purpose:** 判断当前对象是否包含「at least one manual bridge segment for source group」。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.ContainsAtLeastOneManualBridgeSegmentForSourceGroup(sourceGroup);
```

### ContainsAtLeastOneAutomaticBridgeSegment
`public bool ContainsAtLeastOneAutomaticBridgeSegment()`

**用途 / Purpose:** 判断当前对象是否包含「at least one automatic bridge segment」。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.ContainsAtLeastOneAutomaticBridgeSegment();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.ToString();
```

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「compatibility setting」 的结果。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.GetCompatibilitySetting(targetEntity);
```

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**用途 / Purpose:** 读取并返回当前对象中 「compatibility type」 的结果。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.GetCompatibilityType(targetEntity, reason);
```

### SetAsParentGroupForAllSegments
`public void SetAsParentGroupForAllSegments()`

**用途 / Purpose:** 为 「as parent group for all segments」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
group.SetAsParentGroupForAllSegments();
```

### GetParent
`public override PsaiMusicEntity GetParent()`

**用途 / Purpose:** 读取并返回当前对象中 「parent」 的结果。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.GetParent();
```

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**用途 / Purpose:** 读取并返回当前对象中 「children」 的结果。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.GetChildren();
```

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**用途 / Purpose:** 读取并返回当前对象中 「index position within parent entity」 的结果。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.GetIndexPositionWithinParentEntity(parentProject);
```

### Clone
`public override object Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.Clone();
```

### ShallowCopy
`public override PsaiMusicEntity ShallowCopy()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Group 实例
Group group = ...;
var result = group.ShallowCopy();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Group group = ...;
group.GetClassString();
```

## 参见

- [本区域目录](../)