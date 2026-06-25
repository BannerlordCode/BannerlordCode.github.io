---
title: "Group"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Group`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Group

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Group : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.Editor/Group.cs`

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

**用途 / Purpose:** 获取 `class string` 的当前值。

### AddSegment
`public void AddSegment(Segment snippet)`

**用途 / Purpose:** 向当前集合/状态中添加 `segment`。

### AddSegment
`public void AddSegment(Segment snippet, int index)`

**用途 / Purpose:** 向当前集合/状态中添加 `segment`。

### RemoveSegment
`public void RemoveSegment(Segment snippet)`

**用途 / Purpose:** 从当前集合/状态中移除 `segment`。

### HasAtLeastOneBridgeSegmentToTargetGroup
`public bool HasAtLeastOneBridgeSegmentToTargetGroup(Group targetGroup)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `at least one bridge segment to target group`。

### ContainsAtLeastOneManualBridgeSegmentForSourceGroup
`public bool ContainsAtLeastOneManualBridgeSegmentForSourceGroup(Group sourceGroup)`

**用途 / Purpose:** 处理 `contains at least one manual bridge segment for source group` 相关逻辑。

### ContainsAtLeastOneAutomaticBridgeSegment
`public bool ContainsAtLeastOneAutomaticBridgeSegment()`

**用途 / Purpose:** 处理 `contains at least one automatic bridge segment` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**用途 / Purpose:** 获取 `compatibility setting` 的当前值。

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**用途 / Purpose:** 获取 `compatibility type` 的当前值。

### SetAsParentGroupForAllSegments
`public void SetAsParentGroupForAllSegments()`

**用途 / Purpose:** 设置 `as parent group for all segments` 的值或状态。

### GetParent
`public override PsaiMusicEntity GetParent()`

**用途 / Purpose:** 获取 `parent` 的当前值。

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**用途 / Purpose:** 获取 `children` 的当前值。

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**用途 / Purpose:** 获取 `index position within parent entity` 的当前值。

### Clone
`public override object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### ShallowCopy
`public override PsaiMusicEntity ShallowCopy()`

**用途 / Purpose:** 处理 `shallow copy` 相关逻辑。

## 使用示例

```csharp
var value = new Group();
value.GetClassString();
```

## 参见

- [完整类目录](../catalog)