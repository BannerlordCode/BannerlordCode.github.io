<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Group`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Group

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Group` is a class in the `psai.Editor` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)