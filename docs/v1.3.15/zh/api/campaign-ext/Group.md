<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Group`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Group

**命名空间:** psai.Editor
**模块:** psai.Editor
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Group` 是 `psai.Editor` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override string GetClassString()
```

### AddSegment

```csharp
public void AddSegment(Segment snippet)
```

### AddSegment

```csharp
public void AddSegment(Segment snippet, int index)
```

### RemoveSegment

```csharp
public void RemoveSegment(Segment snippet)
```

### HasAtLeastOneBridgeSegmentToTargetGroup

```csharp
public bool HasAtLeastOneBridgeSegmentToTargetGroup(Group targetGroup)
```

### ContainsAtLeastOneManualBridgeSegmentForSourceGroup

```csharp
public bool ContainsAtLeastOneManualBridgeSegmentForSourceGroup(Group sourceGroup)
```

### ContainsAtLeastOneAutomaticBridgeSegment

```csharp
public bool ContainsAtLeastOneAutomaticBridgeSegment()
```

### ToString

```csharp
public override string ToString()
```

### GetCompatibilitySetting

```csharp
public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)
```

### GetCompatibilityType

```csharp
public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)
```

### SetAsParentGroupForAllSegments

```csharp
public void SetAsParentGroupForAllSegments()
```

### GetParent

```csharp
public override PsaiMusicEntity GetParent()
```

### GetChildren

```csharp
public override List<PsaiMusicEntity> GetChildren()
```

### GetIndexPositionWithinParentEntity

```csharp
public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)
```

### Clone

```csharp
public override object Clone()
```

### ShallowCopy

```csharp
public override PsaiMusicEntity ShallowCopy()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)