---
title: "Group"
description: "Auto-generated class reference for Group."
---
# Group

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Group : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `bin/TaleWorlds.PSAI/psai.Editor/Group.cs`

## Overview

`Group` lives in `psai.Editor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.Editor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override string GetClassString()`

**Purpose:** Reads and returns the class string value held by the this instance.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.GetClassString();
```

### AddSegment
`public void AddSegment(Segment snippet)`

**Purpose:** Adds segment to the current collection or state.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
group.AddSegment(snippet);
```

### AddSegment
`public void AddSegment(Segment snippet, int index)`

**Purpose:** Adds segment to the current collection or state.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
group.AddSegment(snippet, 0);
```

### RemoveSegment
`public void RemoveSegment(Segment snippet)`

**Purpose:** Removes segment from the current collection or state.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
group.RemoveSegment(snippet);
```

### HasAtLeastOneBridgeSegmentToTargetGroup
`public bool HasAtLeastOneBridgeSegmentToTargetGroup(Group targetGroup)`

**Purpose:** Determines whether the this instance already holds at least one bridge segment to target group.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.HasAtLeastOneBridgeSegmentToTargetGroup(targetGroup);
```

### ContainsAtLeastOneManualBridgeSegmentForSourceGroup
`public bool ContainsAtLeastOneManualBridgeSegmentForSourceGroup(Group sourceGroup)`

**Purpose:** Indicates whether the this instance contains at least one manual bridge segment for source group.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.ContainsAtLeastOneManualBridgeSegmentForSourceGroup(sourceGroup);
```

### ContainsAtLeastOneAutomaticBridgeSegment
`public bool ContainsAtLeastOneAutomaticBridgeSegment()`

**Purpose:** Indicates whether the this instance contains at least one automatic bridge segment.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.ContainsAtLeastOneAutomaticBridgeSegment();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.ToString();
```

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**Purpose:** Reads and returns the compatibility setting value held by the this instance.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.GetCompatibilitySetting(targetEntity);
```

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**Purpose:** Reads and returns the compatibility type value held by the this instance.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.GetCompatibilityType(targetEntity, reason);
```

### SetAsParentGroupForAllSegments
`public void SetAsParentGroupForAllSegments()`

**Purpose:** Assigns a new value to as parent group for all segments and updates the object's internal state.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
group.SetAsParentGroupForAllSegments();
```

### GetParent
`public override PsaiMusicEntity GetParent()`

**Purpose:** Reads and returns the parent value held by the this instance.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.GetParent();
```

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**Purpose:** Reads and returns the children value held by the this instance.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.GetChildren();
```

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**Purpose:** Reads and returns the index position within parent entity value held by the this instance.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.GetIndexPositionWithinParentEntity(parentProject);
```

### Clone
`public override object Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.Clone();
```

### ShallowCopy
`public override PsaiMusicEntity ShallowCopy()`

**Purpose:** Executes the ShallowCopy logic.

```csharp
// Obtain an instance of Group from the subsystem API first
Group group = ...;
var result = group.ShallowCopy();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Group group = ...;
group.GetClassString();
```

## See Also

- [Area Index](../)